export default function EditToDo({ params }) {
    const todoId = parseInt(params.id);
    console.log("Selected ID : ", todoId);
    return (
        <div>
            <h2>Edit To Do</h2>
        </div>
    );
}