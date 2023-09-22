'use client';

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import Link from 'next/link';

function getRenderDate() {
  const renderedAt = new Date();
  const formattedBuildDate = renderedAt.toLocaleDateString('en-US', {
    dateStyle: 'long',
  });
  const formattedBuildTime = renderedAt.toLocaleTimeString('en-US', {
    timeStyle: 'long',
  });
  return `${formattedBuildDate} at ${formattedBuildTime}`;
}

function Home({ signOut, user }: any) {
  const renderedAt = getRenderDate()

  return (
    <main>
      <h1>Girl Talk {renderedAt}</h1>
      <h2>Logged in as {user.username}</h2>
      <p className='py-2 text-blue-400'>Page rendered {renderedAt}</p>
      <Link href='/users'>Users</Link>
      <button className='bg-slate-600' onClick={signOut}>Logout</button>
    </main>
  );
}

export default withAuthenticator(Home)
