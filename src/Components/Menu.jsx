import React from 'react'
import data from '../restApi.json';

const Menu = () => {
  const dishes = data.data[0].dishes;
  return (
    <>
    <section className='menu' id='menu'>
      <div className='container'>
        <div className='heading_section'>
          <h1 className='heading'>
            Popular Dishes
          </h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, iusto dolorem! Voluptatibus ipsum nam mollitia architecto. Soluta pariatur eius et recusandae veritatis. Quasi, et molestias!</p>
        </div>
        <div className='dishes_container'>
          {
            dishes.map(element=>(
              <div className='card' key={element.id}>
                  <img src={element.image} alt={element.title} />
                  <h3>{element.title}</h3>
                  <button>{element.category}</button>
                </div>
            ))
          }

        </div>
      </div>
    </section>
    </>
  )
}

export default Menu