import React, { useState } from "react";

function Todo() {
  return (
    <>
      <section className="w-full ">
        <div className="todo_heading text-center w-full bg-red-100 ">
          <h1 className="text-6xl h-full border">TODO LIST</h1>
        </div>

        <main className="todo-item-box flex flex-col  border  items-center   mt-20 ">
          <div className="item-centring w-screen flex flex-wrap space-x-10  space-y-10  ">
            <div className="todo-item-box border py-3 px-4 flex-wrap w-[30rem] ">
              <h1 className="text-2xl py-2">TODO HEADING</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci id omnis eaque sed officia, debitis perspiciatis eum
                consequatur nisi ea, a perferendis aliquid soluta. Magni,
                impedit quo fugiat ipsum eos nemo adipisci numquam nostrum
                laudantium cum laborum voluptatibus ratione aliquam.
              </p>

              <div className="todo-action mt-2 ">
                <button className="w-40 h-[2rem] bg-amber-300">Change</button>
              </div>
            </div>

            <div className="todo-item-box border py-3 px-4 flex-wrap w-[30rem] ">
              <h1 className="text-2xl py-2">TODO HEADING</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci id omnis eaque sed officia, debitis perspiciatis eum
                consequatur nisi ea, a perferendis aliquid soluta. Magni,
                impedit quo fugiat ipsum eos nemo adipisci numquam nostrum
                laudantium cum laborum voluptatibus ratione aliquam.
              </p>

              <div className="todo-action mt-2 ">
                <button className="w-40 h-[2rem] bg-amber-300">Change</button>
              </div>
            </div>
            <div className="todo-item-box border py-3 px-4 flex-wrap w-[30rem] ">
              <h1 className="text-2xl py-2">TODO HEADING</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci id omnis eaque sed officia, debitis perspiciatis eum
                consequatur nisi ea, a perferendis aliquid soluta. Magni,
                impedit quo fugiat ipsum eos nemo adipisci numquam nostrum
                laudantium cum laborum voluptatibus ratione aliquam.
              </p>

              <div className="todo-action mt-2 ">
                <button className="w-40 h-[2rem] bg-amber-300">Change</button>
              </div>
            </div>
            <div className="todo-item-box border py-3 px-4 flex-wrap w-[30rem] ">
              <h1 className="text-2xl py-2">TODO HEADING</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci id omnis eaque sed officia, debitis perspiciatis eum
                consequatur nisi ea, a perferendis aliquid soluta. Magni,
                impedit quo fugiat ipsum eos nemo adipisci numquam nostrum
                laudantium cum laborum voluptatibus ratione aliquam.
              </p>

              <div className="todo-action mt-2 ">
                <button className="w-40 h-[2rem] bg-amber-300">Change</button>
              </div>
            </div>
           

              <div className="todo-item-box border py-3 px-4 flex-wrap w-[30rem] ">
              <h1 className="text-2xl py-2">TODO HEADING</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci id omnis eaque sed officia, debitis perspiciatis eum
                consequatur nisi ea, a perferendis aliquid soluta. Magni,
                impedit quo fugiat ipsum eos nemo adipisci numquam nostrum
                laudantium cum laborum voluptatibus ratione aliquam.
              </p>

              <div className="todo-action mt-2 ">
                <button className="w-40 h-[2rem] bg-amber-300">Change</button>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}

export default Todo;
