import 'bootstrap/dist/css/bootstrap.min.css' ;
import React, { useState, useEffect } from 'react';
import Wrapper from './pages/Wrapper';
import axios from 'axios';

const url = 'https://react-corso-api.netlify.app/.netlify/functions/gelateria';


function App() {
  const [api, setApi] = useState(url);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const getData = async () => {
    setIsLoading(true);
    setIsError(false)
    try {
      const response = await axios.get(url);
      setApi(response.data.data)
    } catch (error) {
      setIsError(true)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    getData()
  }, [])

  if (isLoading) {
    return <h1>Loading...</h1>
  } else if (isError) {
    return <h1>Error</h1>
  }

  return (
    <div className="App container">
      <section className='container-fluid box'>
        <Wrapper {...api}/>
      </section>
    </div>
  );
}

export default App;



