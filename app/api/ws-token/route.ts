import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const JWT_SECRET = "2211"; 

export async function GET(req: NextRequest) {
  try {
    // TODO: Implement custom auth here
    const userId = "placeholder-user-id";
    
    const token = jwt.sign({ id: userId }, JWT_SECRET, {
      expiresIn: "5m", 
    });

    return NextResponse.json({ token, success: true }, { status: 200 });
  } catch (error) {
    console.error("Error generating WS token:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
