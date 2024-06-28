"use client";

import { useForm } from "react-hook-form";

export default function CreateToDo() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    
    const onSubmit = data => {
        console.log('data', data);
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div class="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        ID
                    </label>
                    <input readOnly={true} {...register("id")} className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Auto Generate"/>
                </div>

                <div class="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Title
                    </label>
                    <input {...register("title", { required: true })}  className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text"/>
                    {errors.title && <span>This field is required</span>}
                </div>

                <div class="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Due Date
                    </label>
                    <input {...register("dueDate", { required: true })}  className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="datetime"/>
                    {errors.dueDate && <span>This field is required</span>}
                </div>

                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Save</button>
            </form>
        </div>
    )
}
