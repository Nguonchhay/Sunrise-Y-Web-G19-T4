'use client';

import Link from 'next/link';
// import useToDoContext from '@/contexts/ToDoContext';
import { useRouter } from 'next/navigation';

export default async function ToDoList({ items }) {
    const router = useRouter();
    const todos  = items;

    const onDelete = async (id) => {
        const res = await fetch(
            `https://coding-fairy.com/api/mock-api-resources/1715945679/todos/${id}`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                method: 'DELETE'
            }
        );
        if (!res.ok) {
            throw new Error('Failed to delete data')
        }
        router.refresh();
    }

    return (
        <div>
            <table className="table-auto bg-white border border-gray-300">
                <thead>
                    <tr>
                        <th className="border border-gray-300 px-4 py-2">ID</th>
                        <th className="border border-gray-300 px-4 py-2">Title</th>
                        <th className="border border-gray-300 px-4 py-2">Due Date</th>
                        <th className="border border-gray-300 px-4 py-2">
                            <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" href="/todos/create">+ New</Link>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos.map(item => (
                            <tr key={item.id}>
                                <td className="border border-gray-300 px-4 py-2">{item.id}</td>
                                <td className="border border-gray-300 px-4 py-2">{item.title}</td>
                                <td className="border border-gray-300 px-4 py-2">{item.dueDate}</td>
                                <td className="border border-gray-300 px-4 py-2">
                                    <div>
                                        <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" href={ `/todos/${item.id}` }>Edit</Link>
                                        <button onClick={() => onDelete(item.id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded" type="button">Delete</button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
