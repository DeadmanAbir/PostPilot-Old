import Head from 'next/head'

import Hero from '../components/Hero'
import Demo from '../components/Demo'
import Card from '../components/Card'



export default function Home() {

  
    return ( 
      <>
       <Head>
        <title>PostPilot</title>

      </Head>
  <Hero />
  <Card />
  <Demo />

</>
    ) 
  
}
