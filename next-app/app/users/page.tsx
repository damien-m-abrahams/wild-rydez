import React from 'react'
import ProductCard from '../components/product-card'
import getConfig from 'next/config'

const { serverRuntimeConfig } = getConfig();

interface User {
  id: number
  name: string
}

const UsersPage = async () => {
  const response = await fetch(
    serverRuntimeConfig.fakeUsersUrl,
    { next: { revalidate: 3600 } }
  )
  const users: Array<User> = await response.json()

  return (
    <>
      <h1 className='text-yellow-400'>Users</h1>
      <p className='py-2 text-blue-400'>{ new Date().toLocaleString() }</p>
      <ul>
        {users.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
      <ProductCard name="Nike"/>
    </>
  )
}

export default UsersPage
