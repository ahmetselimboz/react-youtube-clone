import React from 'react'
import dataFilter from '../assets/data/dataFilter'

const Filter = ({setLetter}) => {
  return (
    <div className='flex items-center overflow-x-auto'>
      {
        dataFilter.map((data,i)=>(
          <div onClick={()=>setLetter(data.name)} key={i} className='text-sm bg-gray-100 cursor-pointer hover:bg-gray-200 px-3 py-1 mx-2 rounded-2xl'>{data.name}</div>
        ))
      }
    </div>
  )
}

export default Filter