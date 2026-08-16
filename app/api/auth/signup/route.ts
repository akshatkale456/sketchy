import { NextRequest, NextResponse } from 'next/server';
import { signupschema } from '@/lib/common/schematypes'; // was @repo/common/types

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { username, email, password } = body;
        
        const check = signupschema.safeParse({ username, email, password });
        if (!check.success) {
            return NextResponse.json({ message: "field not satisfied" }, { status: 400 });
        }
        
        // TODO: Implement user signup logic here (e.g. validate body, hash password, save to DB)
        
        return NextResponse.json({ message: "Signup endpoint" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}
