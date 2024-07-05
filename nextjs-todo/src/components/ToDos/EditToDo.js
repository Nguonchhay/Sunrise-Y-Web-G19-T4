"use client";

import { useForm } from "react-hook-form";
import { useRouter } from 'next/navigation';

export default function EditToDo({ item }) {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    
    const onSubmit = async (data) => {
        const res = await fetch(
            `https://coding-fairy.com/api/mock-api-resources/1715945679/todos/${item.id}`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                method: 'PUT',
                body: JSON.stringify(data)
            }
        );
        if (!res.ok) {
            throw new Error('Failed to store data')
        }
        router.push('/todos');
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div class="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        ID
                    </label>
                    <input readOnly={true} defaultValue={item?.id} className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Auto Generate"/>
                </div>

                <div class="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Title
                    </label>
                    <input defaultValue={item?.title} {...register("title", { required: true })}  className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text"/>
                    {errors.title && <span>This field is required</span>}
                </div>

                <div class="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Due Date
                    </label>
                    <input defaultValue={item?.dueDate} {...register("dueDate", { required: true })}  className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="datetime-local"/>
                    {errors.dueDate && <span>This field is required</span>}
                </div>

                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Update</button>
            </form>
        </div>
    )
}
