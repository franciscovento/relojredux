import { useEffect, useState } from 'react';
import './App.css';
import Countries from './components/Countries';
import useFetchData from './hooks/useFetchData';

function App() {

  const [countries, setCountries] = useState([]);
  const [next, setNext] = useState(0);
  const {data} = useFetchData('https://restcountries.eu/rest/v2/all');
  
  useEffect(()=>{

    if (data) {
      let resp = data.slice((0 + next), next + 25);
      setCountries(resp)
    }
  
  },[data, next])

  const list = countries.map((x, i) => <Countries key={i} name={x.name} svg={x.flag} />)
  
  
  const handleNext = () => {
    setNext(prev => prev + 25);
  }


  const handlePrev = () => {
    setNext(prev => prev - 25);
  }
  return (
    <div className='app'>
      <h1>Paises del Mundo</h1>
      <div className="ContainerList">
     {list}
    </div>
   <div className='buttons-container'>
   {next > 0 && <button onClick={handlePrev}>Prev</button>}
   {next +25 !== 250 && <button onClick={handleNext}>Next</button>}
   </div>
    </div>
  );
}

export default App;
