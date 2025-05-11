import prisma from '@/lib/prisma'
import { NextResponse, NextRequest } from 'next/server'
import * as yup from 'yup'

interface Segments {
    params: {
        id: string
    }
}

export async function GET(request: Request, { params }: Segments) {

    const todo = await prisma.todo.findFirst({
        where: {
            id: params.id
        }
    })

    if (!todo) {
        return NextResponse.json({ message: 'Todo not found' }, { status: 404 })
    }

    return NextResponse.json(todo)
}

const putSchema = yup.object({
    description: yup.string().optional(),
    completed: yup.boolean().optional()
})

export async function PUT(request: Request, { params }: Segments) {

    const todo = await prisma.todo.findFirst({
        where: {
            id: params.id
        }
    })

    if (!todo) {
        return NextResponse.json({ message: 'Todo not found' }, { status: 404 })
    }

    const {completed, description, ...rest} = await putSchema.validate(await request.json())

    const updatedTodo = await prisma.todo.update({
        where: {
            id: params.id
        },
        data: {completed, description}
    })

    return NextResponse.json(updatedTodo)
}

