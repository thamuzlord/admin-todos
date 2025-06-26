import prisma from "@/lib/prisma";
import { NewTodo } from "@/todos/components/NewTodo";
import { TodosGrid } from "@/todos/components/TodosGrid";

export const metadata = {
    title: "Server Actions",
}

export default async function ServerTodosPage() {

    const todos = await prisma.todo.findMany()

    return (
        <>
            <span className="text-3xl mb-10">Server Actions</span>
            <div className="w-full px-3 mx-3">
            <NewTodo />
            </div>
            <TodosGrid todos={todos} />
        </>
    );
}