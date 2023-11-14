import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Demo from '../components/Demo'
import Card from '../components/Card'
import Footer from '../components/Footer'
import { useSetRecoilState } from 'recoil';
import { connectedCredentials } from '../Store/Variables';

import { useEffect } from 'react';
// import { cookies } from 'next/headers'
import { useClerk } from '@clerk/nextjs'
export default function Home() {
  const { signOut } = useClerk();

  useEffect(() => {
    // Add a listener for the 'beforeunload' event
    window.addEventListener('unload', handleBeforeUnload);

    return () => {
      // Remove the event listener when the component unmounts
      window.removeEventListener('unload', handleBeforeUnload);
    };
  }, []);

  const handleBeforeUnload = async (event) => {
    // Prompt the user before closing the browser tab/window
    event.preventDefault();
    event.returnValue = 'Are you sure to close';

    await signOut();
  };
    return ( 
      <>
      
  <Hero />
  <Card />
  <Demo />

</>
    ) 
  
}
