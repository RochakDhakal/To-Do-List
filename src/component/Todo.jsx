import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
function Todo() {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);
  const [err, setErr] = useState("");

  const addItems = () => {
    if (input) {
      try {
        setTodo([...todo, input]);
      } catch (e) {
        console.log(e);
      } finally {
        setInput("");
        setErr("");
      }
    } else setErr("Task Cannot Be Empty");
  };
  const enterKey = (e) => {
    if (e.key === "Enter") {
      addItems();
    }
  };
  const deleteItem = (ind) => {
    const filtered = todo.filter((_, id) => {
      return ind !== id;
    });
    setTodo(filtered);
  };
  return (
    <div className="bg-yellow-300 h-full flex justify-center items-center flex-col">
      <h1 className="text-5xl p-5">To-Do List</h1>
      <div className="p-2 text-3xl ">
        <input
          type="text"
          name="Items"
          id="items"
          className="outline-none p-1 font-proxima"
          value={input}
          onKeyDown={enterKey}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button
          type="button"
          className="p-2 font-handlee active:scale-75 rounded-xl bg-green-500 mx-5"
          onClick={() => addItems()}
        >
          Add
        </button>
      </div>
      <span>{err}</span>
      <div className="p-2 text-3xl font-oldstandardtt w-min">
        <ul>
          {todo.map((items, index) => {
            return (
              <>
                <ul key={index} className="font-wixmadefor flex">
                  <span className="text-lg flex items-center">
                    {index + 1}.
                  </span>
                  <li className="first-letter:uppercase mx-2">{items}</li>
                  <FontAwesomeIcon
                    icon={faTrash}
                    className="text-red-500 flex justify-center items-center text-2xl p-2 cursor-pointer"
                    onClick={() => {
                      deleteItem(index);
                    }}
                  />
                </ul>
              </>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Todo;
