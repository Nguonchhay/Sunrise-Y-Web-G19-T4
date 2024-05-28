// const EditToDo = (props) => {
//     const item = props.item;
// }

const EditToDo = ({ item }) => {
    return (
        <div>
            <h1>Edit Item : {item.title}</h1>
        </div>
    )
}

export default EditToDo;