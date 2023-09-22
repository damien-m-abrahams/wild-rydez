'use client'; // Needed for withAuthenticator function

import {
  WithAuthenticatorProps,
  withAuthenticator,
} from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import Link from 'next/link'

function getRenderDate() {
  const renderedAt = new Date()
  const formattedBuildDate = renderedAt.toLocaleDateString('en-US', {
    dateStyle: 'long',
  })
  const formattedBuildTime = renderedAt.toLocaleTimeString('en-US', {
    timeStyle: 'long',
  })
  return `${formattedBuildDate} at ${formattedBuildTime}`
}

function Home({ signOut, user }: WithAuthenticatorProps) {
  const renderedAt = getRenderDate()

  return (
    <main>
      <h1>Girl Talk {renderedAt}</h1>
      <p className='py-2 text-green-400'>
        Logged in as {user?.username ?? '_'}
      </p>
      <p className='py-2 text-blue-400'>Page rendered {renderedAt}</p>
      <Link className='underline' href='/users'>
        Users
      </Link>
      <div>
        <button className='bg-slate-600 mt-2' onClick={signOut}>
          Logout
        </button>
      </div>
    </main>
  )
}

export default withAuthenticator(Home)
