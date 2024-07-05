import EditToDo from "@/components/ToDos/EditToDo";

export default function EditToDoPage({ params }) {
    const todoId = parseInt(params.id);
    
    return (
        <div>
            <h2>Edit To Do</h2>
            <EditToDo todoId={todoId} />
        </div>
    );
}