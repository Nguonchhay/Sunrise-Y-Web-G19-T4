import { NextApiRequest } from "next";

export function GET(request: NextApiRequest) {
    return Response.json([
        {
            id: 1,
            title: 'Task 1'
        },
        {
            id: 2,
            title: 'Task 2'
        },
        {
            id: 3,
            title: 'Task 3'
        },
        {
            id: 4,
            title: 'Task 4'
        },
        {
            id: 5,
            title: 'Task 5'
        },
        {
            id: 6,
            title: 'Task 6'
        }
    ]);
}