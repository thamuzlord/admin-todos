import prisma from "@/lib/prisma";
import { TodosGrid } from "@/todos/components/TodosGrid";

export const metadata = {
    title: "Rest Todos",
}

export default async function RestTodosPage() {

    const todos = await prisma.todo.findMany()

    return (
        <div>
            <TodosGrid todos={todos} />
        </div>
    );
}