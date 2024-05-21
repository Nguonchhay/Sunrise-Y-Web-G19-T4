import './App.css';

function App() {

  const todos = [
    {
      "id": 1,
      "title": "Eating",
      "status": "TO DO",
      "dueDate": "2024-05-21 10:00:00"
    },
    {
      "id": 1,
      "title": "Eating",
      "status": "TO DO",
      "dueDate": "2024-05-21 10:00:00"
    }
  ];

  return (
    <div className="container">
      <div className="col-6">
        <h1 className="mt-5">ToDo List</h1>
        <table className="table tabled-border">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Status</th>
              <th>Due Date</th>
              <th>
                <button className="btn btn-primary">+ New</button>
              </th>
            </tr>
          </thead>
          <tbody>
            { todos.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.status}</td>
                  <td>{item.dueDate}</td>
                  <td></td>
                </tr>
              )
            }) }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;