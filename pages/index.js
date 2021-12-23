import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>international waters funk</title>
		<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
		<link rel="icon" href="/favicon.ico" type="image/x-icon">

      </Head>

      <main>
        <Header title="russia" />
        <p className="description">
        while their name is russia, these sparkly jacket and purple jewel-clad funk divas hail from melbourne. when you hear them you'll know that their sound is an ode to the funk of old, while forging a contemporary path woven with pop elements. prepare to be engrossed in a high energy charismatic experience.
        </p>
      </main>

      <Footer />
    </div>
  )
}
