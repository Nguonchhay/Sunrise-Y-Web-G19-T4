"use client";

import { useState, createContext, useContext} from "react";

const ToDoContext = createContext({});


export const ToDoProvider = ({ children }) => {
    const [todos, setToDos] = useState([]);

    return (
        <ToDoContext.Provider value={{ todos, setToDos }}>
            {children}
        </ToDoContext.Provider>
    );
};

const useToDoContext = () => useContext(ToDoContext);
export default useToDoContext;
