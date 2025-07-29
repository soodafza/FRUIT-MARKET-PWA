// pages/index.tsx

import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Al-Tofiq Market</title>
        <link rel="manifest" href="/manifest.json" />
      </Head>

      <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-green-50">
        <h1 className="text-3xl font-bold text-green-700 mb-4">Welcome to Al-Tofiq Fruit Market</h1>
        <p className="text-lg mb-6 text-gray-700">Smart Grocery PWA for Your City</p>
        <Link href="/dashboard">
          <button className="px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition">
            Enter Store Dashboard
          </button>
        </Link>
      </main>
    </>
  )
}
