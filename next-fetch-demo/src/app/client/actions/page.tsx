'use client';

import ToDoList from '@/components/ToDoList';
import { useState, useEffect } from 'react';
import { fetchToDos } from '@/app/actions';

export default function ClientComponent() {
    const [todos, setToDos] = useState([]);

    useEffect(() => {
        const fetchToDoData = () => {
            fetchToDos().then(data => setToDos(data));
        }

        fetchToDoData();
    }, []);

    return (
        <div>
            <h2 className="pt-10">Client component action page To Do List</h2>
            <ToDoList todos={todos.slice(0, 5)} />
        </div>
    )
}
