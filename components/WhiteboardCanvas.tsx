
"use client";

import { useRef, useEffect, useState } from 'react';
import { Stage, Layer, Line, Rect, Text as KonvaText } from 'react-konva';
import { v4 as uuidv4 } from 'uuid';
import { useBoardStore } from '../store/useBoardStore';
import MultiplayerCursor from './MultiplayerCursor';

export default function WhiteboardCanvas({ sendMsg }: { sendMsg: (msg: any) => void }) {
  const { activeTool, elements, cursors, startDrawing, updateDrawing, deleteElement } = useBoardStore();
  const isDrawing = useRef(false);
  
  const lastUpdateSend = useRef(0);
  const lastCursorSend = useRef(0);

  const getRelativePointerPosition = (stage: any) => {
    const pointerPosition = stage.getPointerPosition();
    return {
      x: (pointerPosition.x - stage.x()) / stage.scaleX(),
      y: (pointerPosition.y - stage.y()) / stage.scaleY(),
    };
  };

  const handleMouseDown = (e: any) => {
    if (activeTool === 'HAND') return;

    if (activeTool === 'ERASER') {
      const clickedId = e.target.id();
      if (clickedId) {
        deleteElement(clickedId);
        sendMsg({ type: 'ELEMENT_DELETE', id: clickedId });
      }
      return;
    }

    isDrawing.current = true;
    const stage = e.target.getStage();
    const { x, y } = getRelativePointerPosition(stage);
    const id = uuidv4();
    
    if (activeTool === 'PENCIL') {
      startDrawing({ type: 'PENCIL', id, points: [x, y], color: '#000000' });
    } else if (activeTool === 'RECTANGLE') {
      startDrawing({ type: 'RECTANGLE', id, x, y, width: 0, height: 0, fill: 'transparent', stroke: '#000000' });
    }
  };

  const handleMouseMove = (e: any) => {
    const stage = e.target.getStage();
    const { x, y } = getRelativePointerPosition(stage);

    
    const now = Date.now();
    if (now - lastCursorSend.current > 50) {
      lastCursorSend.current = now;
      sendMsg({ type: 'CURSOR_MOVE', x, y });
    }

    
    if (isDrawing.current && activeTool !== 'HAND' && activeTool !== 'ERASER') {
      updateDrawing(x, y);

      if (now - lastUpdateSend.current > 100) {
        lastUpdateSend.current = now;
        const currentShape = useBoardStore.getState().elements.at(-1);
        if (currentShape) sendMsg({ type: 'ELEMENT_UPDATE', element: currentShape });
      }
    }
  };

  const handleMouseUp = () => {
    if (!isDrawing.current) return;
    isDrawing.current = false;
    
    const finalShape = useBoardStore.getState().elements.at(-1);
    if (finalShape) sendMsg({ type: 'ELEMENT_UPDATE', element: finalShape });
  };

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <Stage
      width={window.innerWidth}
      height={window.innerHeight}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      draggable={activeTool === 'HAND'}
    >
      <Layer>
        {elements.map((el) => {
          if (el.type === 'PENCIL') return <Line key={el.id} id={el.id} points={el.points} stroke={el.color} strokeWidth={4} tension={0.5} lineCap="round" lineJoin="round" />;
          if (el.type === 'RECTANGLE') return <Rect key={el.id} id={el.id} x={el.x} y={el.y} width={el.width} height={el.height} fill={el.fill} stroke={el.stroke} strokeWidth={2} />;
          if (el.type === 'TEXT') return <KonvaText key={el.id} id={el.id} x={el.x} y={el.y} text={el.text} fontSize={el.fontSize} fill={el.fill} />;
          return null;
        })}
      </Layer>
      <Layer>
        {Object.entries(cursors).map(([userId, cursorData]) => (
          <MultiplayerCursor key={userId} cursor={cursorData} />
        ))}
      </Layer>
    </Stage>
  );
}