import prisma from "@/lib/prisma";
import { NewTodo } from "@/todos/components/NewTodo";
import { TodosGrid } from "@/todos/components/TodosGrid";

export const metadata = {
    title: "Rest Todos",
}

export default async function RestTodosPage() {

    const todos = await prisma.todo.findMany()

    return (
        <div>
            <div className="w-full px-3 mx-3">
            <NewTodo />
            </div>
            <TodosGrid todos={todos} />
        </div>
    );
}