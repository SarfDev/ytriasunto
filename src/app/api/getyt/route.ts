import { NextResponse } from "next/server";
import ytdl from 'ytdl-core';

export async function POST(req: Request, res:Response){

    const {input} = await req.json()
    console.log(input)

    try {
        
       if(ytdl.validateURL(input)){
        return NextResponse.json({input, status: 200})
       }else{
            return NextResponse.json({error: "Link non è di youtube",status:500})
       }

    } catch (error) {
        console.log(error)
    }

    
}

