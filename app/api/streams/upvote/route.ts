import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import prisma from '@/app/lib/db';
import { getServerSession } from 'next-auth';

const UpvoteSchema = z.object({
    streamId: z.string(),
})

export async function POST(request: NextRequest) {
        const session = await getServerSession();

        const userId = session?.user?.id;
        if(!userId) {
            return NextResponse.json({
                message: "Unauthenticated",
            }, {
                status: 403
            });
        }


    try {
        const data = UpvoteSchema.parse(await request.json());

        await prisma.upvote.create({
            data: {
                userId,
                streamId: data.streamId,
            }
        });

        return NextResponse.json({
            message: "Upvoted successfully",
        }, {
            status: 200
        });

    } catch (error) {
        return NextResponse.json({
            message: "Error while upvoting",
        }, {
            status: 500
        });
    }
}