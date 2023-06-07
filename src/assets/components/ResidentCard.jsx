import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ResidentCard = ({residentUrl}) => {
  const [resident, setResident] = useState()

  useEffect(() => {
    axios
    .get(residentUrl)
    .then(({data}) => {setResident(data)})
    .catch((err) => { console.log(err) })
  }, [])

  const status = {
    Alive:'bg-green-500',
    Dead:'bg-red-500',
    unknown:'bg-gray-600'
  }


  return (
    <article className='bg-black/75 text-slate-300 border-4 border-green-500'>
      <div className='relative'>
        <img src={`${resident?.image}`} alt="" />
        <div className=' text-slate-300 text-sm flex items-center gap-2 bg-black/60 max-w-min px-3  absolute bottom-3 left-1/2 -translate-x-1/2 border-2 border-green-400'>
          <div className={`h-3 aspect-square rounded-full  ${status[resident?.status]} `}></div>{resident?.status}
        </div>
      </div>
      <section>
        <h2 className=' text-center text-xl border-b-[1px] border-slate-600/80'>{resident?.name}</h2>
        <ul className='grid grid-cols-2 p-2'>
          <p className=' text-slate-400 text-sm'>
            Species: 
          </p>
          <span>{resident?.species}</span>
          <p className=' text-slate-400 text-sm'>
            Origin:
          </p>
          <span>{resident?.origin.name}</span>
          <p className=' text-slate-400 text-sm'>
            Times appear: 
          </p>
          <span>{resident?.episode.length}</span>
        </ul>
      </section>
    </article>
  )
}

export default ResidentCard