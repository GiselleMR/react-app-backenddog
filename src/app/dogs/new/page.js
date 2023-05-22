'use client';

import { useState } from "react";

export default function NewDogForm(){
    const[newDog, setNewDog] = useState({name: "", age: 0})

    const handleChange = (evt) => {
        setNewDog({...newDog, [evt.tartget.id]: evt.target.value})
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const res = fetch()
    }

    return(


        <div>
        <h1>New Dog Form</h1>
        <form onSubmit={handleSubmit}>
            <label for="name">Name:
            <input type="text" name="name" id="name" onChange={handleChange}></input>
            </label>
            <label for="age">Age:
            <input type="number" name="age" id="age" onChange={handleChange}></input>
            </label>
            <input type="submit" value="Create Dog" />
        </form>
        </div>
    )
}
