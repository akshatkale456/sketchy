// components/MultiplayerCursor.tsx
import { useRef, useEffect, useState } from 'react';
import { Group, Path, Rect, Text } from 'react-konva';
import { Cursor } from '../lib/common/types';

export default function MultiplayerCursor({ cursor }: { cursor: Cursor }) {
  const groupRef = useRef<any>(null);
  
  // 1. Lock the initial position! 
  // If we pass cursor.x directly to the Group, React will snap it instantly. 
  // We only want to set it once, and let the animation handle the rest.
  const [initialPos] = useState({ x: cursor.x, y: cursor.y });

  // 2. The Magic Glide
  useEffect(() => {
    if (groupRef.current) {
      // Whenever the server sends a new cursor.x or cursor.y, smoothly animate to it
      groupRef.current.to({
        x: cursor.x,
        y: cursor.y,
        duration: 0.1, // Glides over 100ms. Adjust this to make it faster/slower!
      });
    }
  }, [cursor.x, cursor.y]);

  const initial = cursor.name ? cursor.name.charAt(0).toUpperCase() : '?';

  return (
    <Group 
      ref={groupRef} 
      x={initialPos.x} 
      y={initialPos.y}
    >
      
      {/* 1. The Arrow Shape */}
      <Path
        data="M5.65376 21.6111L2.48283 2.94632C2.08365 0.596043 4.90803 -1.02058 6.94043 0.395159L23.7547 12.1158C25.7533 13.5088 25.1278 16.634 22.7538 17.1122L16.2941 18.4132C15.8943 18.4938 15.5413 18.7369 15.3116 19.0886L11.7584 24.5348C10.4578 26.528 7.37534 25.7955 6.8407 23.5186L5.65376 21.6111Z"
        fill={cursor.color}
        stroke="white"
        strokeWidth={1.5}
      />

      {/* 2. The Name Tag Background */}
      <Rect
        x={16}
        y={20}
        width={24}
        height={24}
        fill={cursor.color}
        cornerRadius={4}
      />

      {/* 3. The Initial Text */}
      <Text
        x={16}
        y={20}
        width={24}
        height={24}
        text={initial}
        fill="white"
        fontSize={14}
        fontStyle="bold"
        align="center"
        verticalAlign="middle"
      />
    </Group>
  );
}
