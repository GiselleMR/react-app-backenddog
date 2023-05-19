import Link from 'next/link';


export default function Home() {
//   const [dogs, setDogs] = useState([]);

//   useEffect(() => {
//     const getDogs = async () => {
//       const response = await fetch();
//       const retrievedDogs = await response.json();
//       setDogs(retrievedDogs);
//     }

//     getDogs()

//   }, []);
  return (
    <main>
      <h1>Hello Index Page!</h1>
      <Link href="/dogs">Lets see the dogs</Link>
    </main>
  )
}