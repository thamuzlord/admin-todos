import prisma from '@/lib/prisma'
import { NextResponse, NextRequest } from 'next/server'

export async function GET(request: Request) { 

await prisma.todo.deleteMany()

await prisma.todo.createMany({
    data: [
        { description: 'Todo 1', completed: true },
        { description: 'Todo 2' },
        { description: 'Todo 3' },
    ]
})

  return NextResponse.json({ message: 'Seed execute' })
}