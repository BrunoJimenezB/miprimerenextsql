import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();
export async function GET(request, {params}) {
try {
    

    

const result= await prisma.user.findFirst({
  where : {
    Cedula: params.Cedula
  }

});
    console.log(result)
    if (result.length==0) {
        return NextResponse.json({
            message: 'Producto no encontrado'
        })
    } else {
          return NextResponse.json(result)
    }
} catch (error) {
    return NextResponse.json({
        message: error.message 
    });

}
}
