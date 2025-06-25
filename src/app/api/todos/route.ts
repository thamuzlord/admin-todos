import prisma from '@/lib/prisma'
import { NextResponse, NextRequest } from 'next/server'
import * as yup from 'yup'

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const take = searchParams.get('take') ?? '10'
    const skip = searchParams.get('skip') ?? '0'

    if (isNaN(+take) || isNaN(+skip)) {
        return NextResponse.json({ message: 'Invalid take or skip' }, { status: 400 })
    }

    const todos = await prisma.todo.findMany({
        take: +take,
        skip: +skip
    })

    return NextResponse.json(todos)

}

const postSchema = yup.object({
    description: yup.string().required(),
    completed: yup.boolean().optional().default(false)
})

export async function POST(request: Request) {
    try {
        const body = await postSchema.validate(await request.json())

        const todo = await prisma.todo.create({
            data: body
        })

        return NextResponse.json(todo)
    } catch (error) {
        return NextResponse.json(
            { message: error instanceof Error ? error.message : 'Internal server error' },
            { status: 400 }
        )
    }

}