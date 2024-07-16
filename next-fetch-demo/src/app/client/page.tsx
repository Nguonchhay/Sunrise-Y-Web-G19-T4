'use client';

import ToDoList from '@/components/ToDoList';
import { useState, useEffect } from 'react';

export default function ClientComponent() {
    const [todos, setToDos] = useState([]);

    useEffect(() => {
        const fetchToDos = () => {
            fetch('https://jsonplaceholder.typicode.com/todos', {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
            .then(res => res.json())
            .then(data => setToDos(data));
        }

        fetchToDos();
    }, []);

    return (
        <div>
            <h2 className="pt-10">Client component page To Do List</h2>
            <ToDoList todos={todos.slice(0, 5)} />
        </div>
    )
}
