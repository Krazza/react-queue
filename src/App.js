import React, { useState } from "react";
import "./App.css"

function App()
{
    const [userInput, setUserInput] = useState();
    const [queue, setQueue] = useState([]);

    return(
        <div className="container">
            <h1>Queue</h1>
            <h2>Result: {queue.join(", ")}</h2>
            <input type="text" onChange={HandleInput}></input>
            <div className="buttonContainer">
                <button className="mybuttonclass" onClick={AddToQueue}>Add</button>
                <button className="mybuttonclass" onClick={RemoveFromQueue}>Remove</button>
            </div>
        </div>
    )

    function HandleInput(event)
    {
        setUserInput(event.target.value);
    }

    function AddToQueue()
    {
        let tempArr = queue;
        tempArr.push(userInput)
        setQueue([...tempArr]);
    }

    function RemoveFromQueue()
    {
        let tempArr = queue;
        tempArr.shift();
        setQueue([...tempArr]);
    }
}

export default App;