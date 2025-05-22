import { useEffect, useState } from 'react';
import './App.scss'

const data = [
  { name: 'Toffees', price: 1.25 },
  { name: 'Sherbert Lemons', price: 2.30 },
  { name: 'Pear Drops', price: 2.95 },
  { name: 'Butterscotch', price: 2.45 },
  { name: 'Cola Cubes', price: 9.00 },
  { name: 'Peanut Brittle', price: 8.75 },
  { name: 'Rhubarb and Custards', price: 2.35 },
  { name: 'Mint Imperials', price: 4.00 },
];


function App() {
  const [sweetData, setData] = useState(data);

  const sortData = () => {
    const sortedData = [...sweetData].sort((a, b) => a.price - b.price);
    setData(sortedData)
  }

  useEffect(() => {
    sortData()
  }, [])

  const searchData = (search: string) => {

    const filtered = sweetData.filter(s =>
      s.name.toLowerCase().includes(search.toLowerCase())
    );
    setData(filtered)
  }
  return (
    <div>
      <div>
        <input type="text" onChange={(e) => searchData(e.target.value)} />
      </div>

      {
        sweetData.map(x =>
          <div key={x.name}>
            <div>{x.name}</div>
            <div>{x.price}</div>
          </div>
        )
      }

    </div>
  )
}

export default App
