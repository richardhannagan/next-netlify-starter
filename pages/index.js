import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>international waters funk</title>


      </Head>

      <main>
        <Header title="russia" />
        <p className="description">
        </p>
      </main>

      <Footer />
    </div>
  )
}
