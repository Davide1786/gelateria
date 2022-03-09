import React, {useState} from 'react'

const Wrapper = (api) => {
  let [lista] = useState(['all', 'cono', 'coppetta', 'stick']);
  let [categoria, setCategoria] = useState(api.default);

   const ciccio = (e) => {
    let { value } = e.target; 
    if (value === 'all') {
      setCategoria(api.default)
    } else {
      setCategoria(api.default.filter((el) => el.categoria === value))
    } 
  }
  console.log(categoria);

  
  return (
    <>
      <div className="titolo">
        <h1>Bella Crema</h1>
      </div>
      <div className="navbar">
          {
          lista.map((el, index) => {
              return <button key={index} value={el} onClick={ciccio}>{el}</button>
            })
          }
      </div>
      {
        categoria.map((el) => {
          let { id,img, nome, categoria, prezzo, decrizione: descrizione, } = el;
          return (
            <div className="wrapper" key={id}>
              <div className="foto">
                <img src={img} alt={nome} />
              </div>
              <div className="info">
                <div className="intestazione">
                  <div className="cate">
                      <h5>{nome}</h5>
                      <h6>{categoria}</h6>            
                  </div>
                  <h5>{prezzo}</h5>
                </div>
                <div className="descrizione">
                  <p> {descrizione} </p>
                </div>
              </div>
            </div>
          )
        })
      }
      
    </>
  )
}

export default Wrapper