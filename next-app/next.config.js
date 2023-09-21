/** @type {import('next').NextConfig} */
const nextConfig = {
  serverRuntimeConfig: {
    fakeUsersUrl: 'https://jsonplaceholder.typicode.com/users'
  }
}

module.exports = nextConfig
