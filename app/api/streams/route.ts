import prisma from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import youtubesearchapi from "youtube-search-api";

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

        const res = await youtubesearchapi.GetVideoDetails(extractedId);
        const thumbnailObj = res.thumbnail || {};
        const thumbnails = thumbnailObj.thumbnails || [];

        const sortedThumbnails = [...thumbnails].sort(
        (a: { width: number }, b: { width: number }) => a.width - b.width
        );

        const stream = await prisma.stream.create({
            data: {
                userId: data.creatorId,
                url: data.url,
                extractedId,
                type:  "Youtube",
                title: res.title || "Can't find video",
                smallThumbnail: (sortedThumbnails.length > 2 ? sortedThumbnails[sortedThumbnails.length - 2]?.url : sortedThumbnails[sortedThumbnails.length - 1]?.url) ?? "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                largeThumbnail: sortedThumbnails[sortedThumbnails.length - 1]?.url ?? "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            }
        })
        
        return NextResponse.json({
            message: "Stream added successfully",
            id: stream.id,
        }, {
            status: 200
        });
    } catch (error) {
        return NextResponse.json({
            message: "Error while adding a stream", 
        }, {
            status: 411
        })
    }
}

export async function GET(req: NextRequest) {
    try {
        const creatorId = req.nextUrl.searchParams.get("creatorId");
        const streams = await prisma.stream.findMany({
            where: {
                userId: creatorId ?? ""
            }
        })
        
        return NextResponse.json({
            streams,
        })
    } catch (error) {
        return NextResponse.json({
            message: "Error while fetching streams",
        }, {
            status: 500
        })
    }
}