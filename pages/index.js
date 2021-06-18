import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Companies from '../components/Companies'
import Features from '../components/Features'
import Footer from '../components/Footer'
export default function Home() {
  return (
    <div className="">
      <Head>
        <title>App Lab</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
      <Companies />
      <Features />
      <Footer />
    </div>
  )
}
