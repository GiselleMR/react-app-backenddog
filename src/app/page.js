'use client';

import styles from './page.module.css'

import { useState, useEffect } from 'react'

export default function Home() {
const [dogs, setDogs] = useState({});


  return (
    <main className={styles.main}>
      <h1>Hello React!</h1>
    </main>
  )
}
