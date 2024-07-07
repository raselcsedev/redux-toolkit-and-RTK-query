import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { addTodo, removeTodo, toggleTodo } from "../redux/slices/todoSlice";

export default function Todo() {
  const [description, setDescription] = useState<string>("");
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos.todos);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const id = Math.floor(Math.random() * 9999) + 1000;
    dispatch(addTodo({ id: id, description: description, completed: false }));
    setDescription("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="outline-none border-2 border-red-400 h-10 p-2 rounded-lg w-96"
          placeholder="Enter your todo.."
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </form>

      <div className="mt-10">
        {todos &&
          todos.length > 0 &&
          todos.map((item, index) => (
            <div key={index} className="mb-2 flex justify-between items-center">
              <p
                className={`${
                  item.completed ? "line-through text-red-400" : ""
                }`}
              >
                {item.description}
              </p>
              <div className="space-x-3">
                <input
                  type="checkbox"
                  checked={item.completed}
                  onChange={(event) => {
                    console.log(
                      "The input check is",
                      event.currentTarget.checked
                    );
                    dispatch(
                      toggleTodo({
                        id: item.id,
                        isCompletd: event.currentTarget.checked,
                      })
                    );
                  }}
                />
                <button
                  className="bg-red-500 p-1 rounded-lg"
                  onClick={() => dispatch(removeTodo(item.id))}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}