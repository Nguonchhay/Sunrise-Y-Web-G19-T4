import { ToDoProvider } from "@/contexts/ToDoContext";
import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "NextJs ToDo",
  description: "First NextJs ToDo app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="m-10">
          <div>
            <h1 className="text-5xl text-gray-500">Menu</h1>
            <ul>
              <li>
                <Link className="hover:text-blue-500" href="/">Home</Link>
              </li>
              <li>
                <Link className="hover:text-blue-500" href="/todos">ToDo</Link>
              </li>
            </ul>
          </div>
          <ToDoProvider>
            {children}
          </ToDoProvider>
        </main>
      </body>
    </html>
  );
}
