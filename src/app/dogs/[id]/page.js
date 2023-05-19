'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
export default function Dog({ params }) {

    const [dog, setDog] = useState({});


    useEffect(() => {
        const getDog = async () => {
          const response = await fetch();
          const retrievedDog = await response.json();
          setDog(retrievedDog);
        }
    
        getDog()
    
      }, [ params.id ]);

    return (
        <div>
            <h2>Here is your dog</h2>
            <h4>Name: {dog.name}</h4>
            <h4>Age: {dog.age}</h4>

            <Link href="/dogs">Back to all dogs</Link>
        </div>
    )
}