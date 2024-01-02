import React from 'react'
import { useParams } from 'react-router-dom'
import getElementById from '../../api/role'
import Card from '../../components/Card'
import Skleton from '../../components/Skleton'

export default function Fighter() {

  const { role } = useParams()
  const data = getElementById(role)


  if (data.length === 0) {
    return (
      <div className='p-4 grid md:grid-cols-2 lg:grid-cols-3 gap-2'>
        <Skleton />
        <Skleton />
        <Skleton />

        <Skleton />
        <Skleton />
        <Skleton />

        <Skleton />
        <Skleton />
        <Skleton />
      </div>
    )
  } else {
    return (
      <div className='p-4 grid md:grid-cols-2 lg:grid-cols-3 gap-2'>
        {data.map(item => (
          <Card key={item.id} data={item} />
        ))}
      </div>
    )
  }
}
