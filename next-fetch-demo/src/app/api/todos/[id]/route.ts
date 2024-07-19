export function PUT(request: Request, { params }: any) {
    return Response.json({
        id: params.id,
        message: 'Updated successfully'
    });
}

export function DELETE(request: Request, { params }: any) {
    return Response.json({
        id: params.id,
        message: 'Deleted successfully'
    });
}