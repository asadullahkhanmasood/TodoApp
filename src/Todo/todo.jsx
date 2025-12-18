import React, { useState } from "react";

function Todo() {
  const [Todo, setTodo] = useState([]);
  const [Text, setText] = useState([]);
  const [input, setInput] = useState(true);

  return (
    <>
      <section className="w-full ">
        <div className="todo_heading text-center w-full bg-red-100 ">
          <h1 className="text-6xl h-full border">TODO LIST</h1>

          <button className="mt-10 w-40 bg-amber-400" onClick={()=>{
            setInput(!input)
          }}>ADD TODo</button>

          <div className={`    todo-input
          flex flex-col
          space-y-10 
          absolute
          top-10
          right-10 
          bg-white
          border
          items-center
        
          ${input ? "flex" : "hidden"}
          
          
          `}>
            <h1 className="flex text-4xl"><button>Add Data</button></h1>
            <input
              type="text"
              name=""
              id=""
              className="w-100 bg-amber-300 h-10"
            />
            <input
              type="text"
              name=""
              id=""
              className="w-100 bg-amber-300 h-60"
            />
            <div className="input-box-btn flex w-full flex-row">
              <button className="bg-red-500 w-full  text-white h-10">
                Add
              </button>
              <button className="bg-red-200 w-full text-white h-10">
                close box
              </button>
            </div>
          </div>
        </div>

        <main className="todo-item-box flex flex-col  border  items-center   mt-20 ">
          <div className="item-centring w-screen flex flex-wrap space-x-10  space-y-10  ">
            <div className="todo-item-box border py-3 px-4 flex-wrap w-[30rem] ">
              <h1 className="text-2xl py-2"> </h1>
              <p>{}</p>

              <div className="todo-action mt-2 ">
                <button className="w-40 h-[2rem] bg-amber-300"></button>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}

export default Todo;
