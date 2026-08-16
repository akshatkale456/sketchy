import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { signinschema } from '@/lib/common/schematypes'; // was @repo/common/types

const JWT_SECRET = "2211"; // Should ideally be in .env

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { email, password } = body;
        
        const check = signinschema.safeParse({ email, password });
        if (!check.success) {
            return NextResponse.json({ message: "field not satisfied" }, { status: 400 });
        }
        
        // TODO: Implement actual user signin DB logic here, get userid
        const userid = 1; // Mock userid

        const token = jwt.sign({ userid }, JWT_SECRET);
        if (!token) {
            return NextResponse.json({ message: "userid missing" }, { status: 400 });
        } else {
            return NextResponse.json({
                token: token,
                success: true,
                message: "Signin endpoint"
            }, { status: 200 });
        }
    } catch (error) {
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}
