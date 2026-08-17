import { NextRequest, NextResponse } from 'next/server';
import { AccessToken } from 'livekit-server-sdk';
import { v4 as uuidv4 } from 'uuid';

export async function GET(req: NextRequest) {
  const room = req.nextUrl.searchParams.get('room');
  const username = req.nextUrl.searchParams.get('username') || `User_${Math.floor(Math.random() * 1000)}`;

  if (!room) {
    return NextResponse.json({ error: 'Missing "room" query parameter' }, { status: 400 });
  }

  
  const apiKey = process.env.LIVEKIT_API_KEY || "devkey";
  const apiSecret = process.env.LIVEKIT_API_SECRET || "secret";
  const wsUrl = process.env.NEXT_PUBLIC_LIVEKIT_URL || "wss://your-project.livekit.cloud";

  if (apiKey === "devkey" || apiSecret === "secret") {
    console.warn("Using default LiveKit API keys. Please set LIVEKIT_API_KEY and LIVEKIT_API_SECRET in your .env file.");
  }

  try {
    const at = new AccessToken(apiKey, apiSecret, {
      identity: username,
      
    });

    at.addGrant({ roomJoin: true, room: room });
    const token = await at.toJwt();
    
    return NextResponse.json({ token, wsUrl });
  } catch (error) {
    console.error("Failed to generate LiveKit token:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
