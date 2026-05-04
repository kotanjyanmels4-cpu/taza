import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

const people = [
  { id: 1, name: "Arman", surname: "Petrosyan", age: 21, height: 180, weight: 75 },
  { id: 2, name: "Anna", surname: "Sargsyan", age: 19, height: 165, weight: 55 },
  { id: 3, name: "Mariam", surname: "Avetisyan", age: 23, height: 170, weight: 60 },
  { id: 4, name: "David", surname: "Karapetyan", age: 25, height: 182, weight: 80 },
  { id: 5, name: "Narek", surname: "Grigoryan", age: 20, height: 175, weight: 70 },
  { id: 6, name: "Lilit", surname: "Hakobyan", age: 22, height: 168, weight: 58 },
  { id: 7, name: "Vardan", surname: "Martirosyan", age: 28, height: 185, weight: 90 },
  { id: 8, name: "Sona", surname: "Hovhannisyan", age: 18, height: 162, weight: 52 },
  { id: 9, name: "Tigran", surname: "Mkrtchyan", age: 24, height: 178, weight: 76 },
  { id: 10, name: "Ani", surname: "Danielyan", age: 21, height: 167, weight: 56 },
  { id: 11, name: "Karen", surname: "Gevorgyan", age: 26, height: 183, weight: 85 },
  { id: 12, name: "Mane", surname: "Harutyunyan", age: 20, height: 164, weight: 54 },
  { id: 13, name: "Arsen", surname: "Avagyan", age: 27, height: 186, weight: 88 },
  { id: 14, name: "Gayane", surname: "Manukyan", age: 22, height: 169, weight: 59 },
  { id: 15, name: "Ruben", surname: "Sahakyan", age: 30, height: 190, weight: 95 },
  { id: 16, name: "Elina", surname: "Petrosyan", age: 19, height: 160, weight: 50 },
  { id: 17, name: "Hovik", surname: "Khachatryan", age: 29, height: 188, weight: 92 },
  { id: 18, name: "Marine", surname: "Stepanyan", age: 23, height: 166, weight: 57 },
  { id: 19, name: "Levon", surname: "Sahakyan", age: 24, height: 181, weight: 79 },
  { id: 20, name: "Ani", surname: "Vardanyan", age: 21, height: 163, weight: 53 },
  { id: 21, name: "Artur", surname: "Arakelyan", age: 26, height: 184, weight: 82 },
  { id: 22, name: "Seda", surname: "Karapetyan", age: 20, height: 161, weight: 51 },
  { id: 23, name: "Gor", surname: "Ghazaryan", age: 25, height: 179, weight: 77 },
  { id: 24, name: "Nina", surname: "Simonyan", age: 22, height: 165, weight: 56 },
  { id: 25, name: "Mher", surname: "Abrahamyan", age: 28, height: 187, weight: 89 },
  { id: 26, name: "Zara", surname: "Sargsyan", age: 19, height: 162, weight: 52 },
  { id: 27, name: "Hayk", surname: "Petrosyan", age: 24, height: 180, weight: 78 },
  { id: 28, name: "Lucine", surname: "Martirosyan", age: 23, height: 167, weight: 60 },
  { id: 29, name: "Arpi", surname: "Hovhannisyan", age: 21, height: 164, weight: 55 },
  { id: 30, name: "Edgar", surname: "Mkrtchyan", age: 27, height: 185, weight: 86 },
];

export default function App() {
  const [search, setSearch] = useState("");

  const filtered = people.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>People List</h1>

      <input
        className="search"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="cards">
        {filtered.map((person) => (
          <div key={person.id} className="card">
            <h2>{person.name} {person.surname}</h2>
            <p>Age: {person.age}</p>
            <p>Height: {person.height} cm</p>
            <p>Weight: {person.weight} kg</p>
          </div>
        ))}
      </div>
    </div>
  );
}


