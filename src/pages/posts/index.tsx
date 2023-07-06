import styles from './styles.module.scss';
import Head from 'next/head'
import Link from 'next/link';
import Image from 'next/image';

import thumbPng from '../../../public/images/thumb.png'

export default function Posts(){
  return(
    <>
      <Head>
        <title>Blog | Sujeito Programador</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <Link href="/" legacyBehavior>
            <a>
              <Image 
               src={thumbPng} 
               alt="Post 1"
               width={720}
               height={410}
               quality={100}
              />
              <strong>Criando meu primeiro aplicativo</strong>
              <time>14 JULHO 2023</time>
              <p>Hoje vamos criar o controle de exibir a senha no input, uma opção para os nossos formulários de cadastro e login. Mas chega de conversa e bora pro código junto comigo</p>
            </a>
          </Link>

          <Link href="/" legacyBehavior>
            <a>
              <Image 
               src={thumbPng} 
               alt="Post 1"
               width={720}
               height={410}
               quality={100}
              />
              <strong>Criando meu primeiro aplicativo</strong>
              <time>14 JULHO 2023</time>
              <p>Hoje vamos criar o controle de exibir a senha no input, uma opção para os nossos formulários de cadastro e login. Mas chega de conversa e bora pro código junto comigo</p>
            </a>
          </Link>
        </div>
      </main>
    </>
  )
}