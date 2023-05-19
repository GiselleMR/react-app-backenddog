'use client';
import Link from 'next/link';


import styles from '../page.module.css'

import { useState, useEffect } from 'react'

export default function Home() {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    const getDogs = async () => {
      const response = await fetch();
      const retrievedDogs = await response.json();
      setDogs(retrievedDogs);
    }

    getDogs()

  }, []);
  return (
    <main className={styles.main}>
      <h1>Hello React!</h1>
      <Link href="/"><h3>Back to home</h3></Link>
      { dogs.map(dog => (
        <h1>{ dog.name }</h1>
      ))}
    </main>
  )
}

//export default function ______() {

// return 
// h1
// }