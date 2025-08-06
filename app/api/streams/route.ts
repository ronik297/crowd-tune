import prisma from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
export const YT_REGEX =
  /^(?:https?:\/\/)?(?:www\.)?(?:m\.)?(?:youtube\.com\/(?:watch\?(?!.*\blist=)(?:.*&)?v=|embed\/|v\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})(?:[?&]\S+)?$/;


const CreateStreamSchema = z.object({
    creatorId: z.string(),
    url: z.string().refine(val => {
        val = val.trim();
        return val.includes('youtube') || val.includes('spotify');
    }),
})

export async function POST(req: NextRequest, res: NextRequest) {
    
    try {
        const data = CreateStreamSchema.parse(await req.json());
        const isYT = YT_REGEX.test(data.url);

        if(!isYT) {
            return NextResponse.json({
            message: "Wrong URL format",
            }, {
                status: 411
            })
        }

        const extractedId = data.url.split("?v=")[1];

        await prisma.stream.create({
            data: {
                userId: data.creatorId,
                url: data.url,
                extractedId,
                type:  "Youtube" ,
            }
        })
        
    } catch (error) {
        return NextResponse.json({
            message: "Error while adding a stream",

        }, {
            status: 411
        })
    }




}