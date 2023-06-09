'use client';

import {useRouter} from "next/navigation";
import { useState } from "react";

export default function NewDogForm(){
    const[newDog, setNewDog] = useState({name: "", age: 0})
    
    const router = useRouter()

    const handleChange = (evt) => {
        setNewDog({...newDog, [evt.tartget.id]: evt.target.value})
    }

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        const res = fetch('http://localhost:3000', {
            headers: {'Content-Type' : 'application/json'},
            method:'POST',
            body: JSON.stringify({ name: newDog.name, age: Number(newDog.age)})
        })

        const dog = await res.json()

        if (dog) {
            router.push('/dogs')
        }
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
