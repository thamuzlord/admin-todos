'use server';

import { Todo } from "@/generated/prisma/client";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const toggleTodo = async (id: string, completed: boolean): Promise<Todo> => {
     const todo = await prisma.todo.findFirst({ where: { id } });

     if (!todo) {
        throw new Error('Todo no encontrado');
     }

     const updateTodo = await prisma.todo.update({ where: { id }, data: { completed } });


    revalidatePath('/dashboard/server-todos');
    return updateTodo;
}

export const addTodo = async (description: string): Promise<Todo> => {
    try {
        const todo = await prisma.todo.create({ data: { description } });

        revalidatePath('/dashboard/server-todos');
        return todo;
    } catch (error) {
        console.log(error);
        throw new Error('Error al agregar el todo');
    }
}

export const deleteCompletedTodos = async (): Promise<void> => {
    try {
        await prisma.todo.deleteMany({ where: { completed: true } });
        revalidatePath('/dashboard/server-todos');
    } catch (error) {
        console.log(error);
        throw new Error('Error al eliminar los todos completados');
    }
}