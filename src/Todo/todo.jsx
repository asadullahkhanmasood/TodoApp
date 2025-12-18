import React, { useState } from "react";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [input, setInput] = useState(true);

  const handleAddTodo = () => {
    if (title.trim() || description.trim()) {
      setTodos([...todos, { id: Date.now(), title, description }]);
      setTitle("");
      setDescription("");
      setInput(true);
    }
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <>
      <section className="w-full ">
        <div className="todo_heading text-center w-full bg-red-100 ">
          <h1 className="text-6xl h-full border">TODO LIST</h1>

          <button className="mt-10 w-40 bg-amber-400" onClick={()=>{
            setInput(!input)
          }}>ADD TODO</button>

          <div className={`    todo-input
          flex flex-col
          space-y-10 
          absolute
          top-10
          right-10 
          bg-white
          border
          items-center
        
          ${input ? "hidden" : "flex"}
          
          
          `}>
            <h1 className="flex text-4xl"><button>Add Data</button></h1>
            <input
              type="text"
              placeholder="Enter title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-100 bg-amber-300 h-10"
            />
            <input
              type="text"
              placeholder="Enter description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-100 bg-amber-300 h-60"
            />
            <div className="input-box-btn flex w-full flex-row">
              <button onClick={handleAddTodo} className="bg-red-500 w-full text-white h-10">
                Add
              </button>
              <button onClick={() => setInput(true)} className="bg-red-200 w-full text-white h-10">
                Close Box
              </button>
            </div>
          </div>
        </div>

        <main className="todo-item-box flex flex-col border items-center mt-20 ">
          <div className="item-centring w-screen flex flex-wrap space-x-10 space-y-10 ">
            {todos.map((todo) => (
              <div key={todo.id} className="todo-item-box border py-3 px-4 flex-wrap w-[30rem] ">
                <h1 className="text-2xl py-2">{todo.title}</h1>
                <p>{todo.description}</p>

                <div className="todo-action mt-2 ">
                  <button onClick={() => handleDeleteTodo(todo.id)} className="w-40 h-[2rem] bg-amber-300">Delete</button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </section>
    </>
  );
}

export default Todo;
