'use server';

export const fetchToDos = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos', {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
        }
    });
    if (!res.ok) {
        throw new Error('Cannot fetch from actions.ts');
    }
    const data = await res.json();
    return data;
}
