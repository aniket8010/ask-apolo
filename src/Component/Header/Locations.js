import React, { useEffect, useState } from 'react'
import { LocationsList } from './Service'

const Locations = ({onClick}) => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])
  async function getData() {
    setLoading(true)
    const result = await LocationsList()
    setData(result || [])
    setLoading(false)
  }

  useEffect(() => {
    getData()
  }, [])
  if (loading) return <>Loading...</>
  console.log(data)
  return (
    <div className='flex gap-2 items-center flex-wrap'>
      {data?.map(({ id, name, icon: { data: { attributes: { url } } } }) => {
        return <div onClick={() => onClick && onClick(false)} key={id} className='text-center cursor-pointer'>
          <div className='w-[80px] hover:border-primary border-2 hover:border-2 h-[80px] rounded-md bg-blue-50 p-2'>
            <img src={`http://localhost:1337${url}`} alt="" />
          </div>
          <h6 className='text-xs font-mono'>{name}</h6>
        </div>
      })}
    </div>
  )
}

export default Locations