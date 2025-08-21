import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(){
    const user = await prisma.user.findMany();
    return NextResponse.json(user)
}

export async function POST(request: Request){
    try {
    const body = await request.json();
    const {Cedula, Nombre} = body;
    
        
        const newUser = await prisma.user.create({data:{Cedula, Nombre}});
        return NextResponse.json(newUser);
    } catch (error) {
        return NextResponse.json({message: error});
    }
}