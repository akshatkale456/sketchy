import { NextRequest, NextResponse } from 'next/server';



export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        
        
        
        
        
        
        
        
        
        
        return NextResponse.json({ success: true, message: "Shape created successfully" }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ success: false, message: "Internal Server Error" }, { status: 500 });
    }
}

export async function PUT(req: NextRequest) {
    try {
        const body = await req.json();
        
        
        
        
        
        
        
        return NextResponse.json({ success: true, message: "Shape updated successfully" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ success: false, message: "Internal Server Error" }, { status: 500 });
    }
}

export async function DELETE(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);
        const id = searchParams.get('id');
        
        if (!id) {
            return NextResponse.json({ success: false, message: "ID is required" }, { status: 400 });
        }
        
        
        
        
        
        
        return NextResponse.json({ success: true, message: "Shape deleted successfully" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ success: false, message: "Internal Server Error" }, { status: 500 });
    }
}
