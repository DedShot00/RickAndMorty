import axios from 'axios'
import React from 'react'

const Location = ({Dimension, setLocation}) => {

const handleSubmitSearch = (e) => { 
  e.preventDefault()
  const newLocation = e.target.newLocation.value
  const url = `https://rickandmortyapi.com/api/location/${newLocation}`;

    axios
      .get(url)
      .then(({ data }) => setLocation(data))
      .catch((err) => console.log(err));
 }

  return (
    <section className='flex flex-col items-center  mx-auto bg-[url("https://i.imgur.com/E7uBsEi.png")] pb-20 px-4'>

      {/* SEARCH INPUT */}
      <div>
      <img className='max-w-[900px]' src="./media/frame.png"/>
      </div>
      <section className=''>
        <form className=' max-w-md flex flex-row w-full justify-center text-white mx-auto' onSubmit={handleSubmitSearch}>
          <input className='outline-none w-full bg-black/60 border-2 border-green-500' type="text" id='newLocation' placeholder='Type a location ID...' />
          <button className=' bg-green-400 border-2 border-green-500 text-white flex items-center gap-2 px-4 py-1  '>search<i className='bx bx-search' ></i></button>
        </form>

        {/* LOCATION INFO */}
        {/* location name */}
        <h2 className='text-white text-2xl my-4 text-center pt-24'>{Dimension?.name}</h2>
        <section className='text-white bg-black/60 border-2 border-green-500 flex justify-between px-6 p-2 gap-8 text-center'>
          {/* Dimension type, dimension name, residents number */}
          
          <p><span className=' text-slate-500'>Type: </span>{Dimension?.type}</p>
          <p><span className=' text-slate-500'>Dimension: </span>{Dimension?.dimension} </p>
          <p><span className=' text-slate-500'>Residents: </span>{Dimension?.residents.length} </p>
        </section>
      </section>
    </section>
  )
}

export default Location 