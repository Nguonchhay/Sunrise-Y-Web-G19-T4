import ToDoList from "@/components/ToDos";

async function getToDoData() {
    const res = await fetch('https://coding-fairy.com/api/mock-api-resources/1715945679/todos', {
        cache: 'no-store'
    })
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res.json();
}

export default async function ToDoListPage() {
    const todos = await getToDoData();

    return (
        <div>
            <h2 className="text-[50px]">ToDo List</h2>
            <ToDoList items={todos} />
        </div>
    );
}