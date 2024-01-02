import React from 'react'
import getAllHeroes from '../api/all'
import Card from '../components/Card'
import Skleton from '../components/Skleton'

export default function Home() {
  const data = getAllHeroes()

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
        {data.slice(1).map(item => (
          <Card key={item.id} data={item} />
        ))}
      </div>
    )
  }

}
