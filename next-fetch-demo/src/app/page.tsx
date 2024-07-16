import ToDoList from "@/components/ToDoList";

const fetchToDos = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  if (!res.ok) {
    throw new Error('Cannot fetch data on Server side');
  }
  const data = await res.json();
  return data;
}

export default async function HomePage() {
  const todos = await fetchToDos();

  return (
    <div>
      <h2 className="pt-10">Home page To Do List</h2>
      <ToDoList todos={todos.slice(0, 5)} />
    </div>
  );
}
