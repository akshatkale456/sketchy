import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import jwt from "jsonwebtoken";

const JWT_SECRET = "2211"; 

export async function GET(req: NextRequest) {
  try {
    const session = await auth();

    if (!session || !session.user || !session.user.id) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    
    const token = jwt.sign({ id: session.user.id }, JWT_SECRET, {
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
