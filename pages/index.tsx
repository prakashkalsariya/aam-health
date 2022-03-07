import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <div className={styles.main_layout_container}>
       
       <header className={styles.header}></header>
       
       <nav className={styles.navbar}>
         
            <div className={styles.logo}>
              <ul><li><Link href="/"><a>Aam Health</a></Link></li></ul>
            </div>
              <div className={styles.menubar}>
               <ul>
                 <li><Link href=""><a>COVID-19</a></Link></li>
                 <li><Link href=""><a>Get Care</a></Link></li>
                 <li><Link href=""><a>Insurance & Pricing</a></Link></li>
                 <li><Link href=""><a>Location </a></Link></li>
                 <li><Link href=""><a>Company</a></Link></li>
               </ul>
             </div>

             <div className='login_btn'>
               <button>Log In</button>
             </div>



         
       </nav>
      
       
       </div>
    </div>
  )
}

export default Home
