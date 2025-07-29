// pages/index.tsx

import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Al-Tofiq Market</title>
        <meta name="description" content="Smart PWA Fruit and Grocery Market" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/manifest.json" />
      </Head>

      <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-green-50">
        <h1 className="text-4xl font-bold text-green-700 mb-4">✅ Al-Tofiq Market is LIVE</h1>
        <p className="text-lg mb-6 text-gray-700">Smart Grocery PWA for Your City</p>
        <Link href="/dashboard">
          <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">
            Enter Store Dashboard
          </button>
        </Link>
      </main>
    </>
  )
}
