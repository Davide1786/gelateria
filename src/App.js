import React, { useEffect, useState } from 'react';
import Top from './pages/Top';
import Wrapper from './pages/Wrapper';


function App() {
  return (
    <div className="App">
      <section>
        <div className="top">
          <Top />
        </div>
      </section>
      <Wrapper />
      
    </div>
  );
}

export default App;
