import ToDoList from "@/components/ToDoList";

const fetchToDos = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/todos`);
  if (!res.ok) {
    throw new Error('Cannot fetch data on Server side');
  }
  const data = await res.json();
  return data;
}

export default async function OwnAPIPage() {
  const todos = await fetchToDos();

  return (
    <div>
      <h2 className="pt-10">Fetch from own RESTful API</h2>
      <ToDoList todos={todos.slice(0, 5)} />
    </div>
  );
}
