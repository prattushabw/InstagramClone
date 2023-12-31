import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Feed from '@/components/Feed'
import Modal from '@/components/Modal'


export default function Home() {
  return (
    <div className="bg-gray-50">
      <Head>
        <title>Instagram 2.0</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
    
     <Header />
     <Feed />

     <Modal />
    </div>
   
  )
}
