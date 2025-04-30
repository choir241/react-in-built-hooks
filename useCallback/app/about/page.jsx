"use client";
import { useState, useCallback } from "react";
import axios from "axios";

export default function Menu({ setMenu, menu }) {
  const [newItem, setNewItem] = useState("");

//   const handleClick = async()=>{
//     try {
//         if(newItem){
//             const response = await axios.get("http://localhost:8000/menu");
//             setMenu([{name: newItem}, ...response.data]);
//         }else{
//             const response = await axios.get("http://localhost:8000/menu");
//             setMenu(response.data);
//         }
    
//         } catch (err) {
//           console.error(err);
//         }
//   }

  const handleClick = useCallback(async () => {
    try {
    if(newItem){
        const response = await axios.get("http://localhost:8000/menu");
        setMenu([{name: newItem}, ...response.data]);
    }else{
        const response = await axios.get("http://localhost:8000/menu");
        setMenu(response.data);
    }

    } catch (err) {
      console.error(err);
    }
  }, [newItem]);

  function addItem() {
    setMenu([...menu, { name: newItem }]);
  }

  return (
    <main>
      <button onClick={() => handleClick()}>Click</button>

      <input type="text" onChange={(e) => setNewItem(e.target.value)} />
      <button
        onClick={(e) => {
          e.preventDefault();
          addItem();
        }}
      >
        Add Item
      </button>

      {menu && menu.length ? (
        menu.map((item) => {
          return (
            <div key={item._id}>
              <section>{item.name}</section>
            </div>
          );
        })
      ) : (
        <>Something went wrong, please try again later</>
      )}
    </main>
  );
}
