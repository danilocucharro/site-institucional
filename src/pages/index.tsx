import Head from 'next/head'
import styles from '../styles/home.module.scss';
import { GetStaticProps } from 'next';

import Image from 'next/image'

import techsImage from '../../public/images/techs.svg'

import { getPrismicClient } from '../services/prismic'
import Prismic from '@prismicio/client'
import { RichText } from 'prismic-dom'

type Content= {
  title: string,
  titleContent: string,
  linkAction: string,
  mobileTitle: string,
  mobileContent: string,
  mobileBanner: string,
  webTitle: string,
  webContent: string,
  webBanner: string
}

interface ContentProps{
  content: Content;
}

export default function Home({ content }: ContentProps) {
  return (
    <>
      <Head>
        <title>Apaixonado por tecnologia - Sujeito Programador</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.containerHeader}>
          <section className={styles.ctaText}>
            <h1>Levando você ao próximo nivel!</h1>
            <span>Uma plataforma com cursos que vão do zero até o profissional na pratica, direto ao ponto aplicando oque usamos no mercado de trabalho. 👋</span>
            <a>
              <button>
                COMEÇAR AGORA!
              </button>
            </a>
          </section>
          
          <img src="/images/banner-conteudos.png" alt="conteudos do curso" />
        </div>

        <hr className={styles.divisor}/>

        <div className={styles.sectionContent}>
          <section>
            <h2>Aprenda a criar aplicativos para Android e IOS</h2>
            <span>Você vai descobri o jeito mais moderno de desenvolver apps nativos para IOS e Android, construindo aplicativos do zero até apps profissionais.</span>
          </section>      

          <img src="/images/financasApp.png" alt="conteudos de app mobile" />
        </div>

        <hr className={styles.divisor}/>

        <div className={styles.sectionContent}>
          <img src="/images/webDev.png" alt="conteudos de aplicações web" />
          
          <section>
            <h2>Aprenda a criar Sistemas Web</h2>
            <span>Criar Sistemas Web, sites usando as tecnologias mais modernas e requisitadas pelo mercado.</span>
          </section>      
        </div>

        <div className={styles.footerContainer}>
          <Image quality={100} src={techsImage} alt='tecnologias do curso' />
          <h2>Mais de <span>15 mil</span> já levaram sua carreira ao<br/> próximo nivel.</h2>
          <span>Não fique ai parado e venha para o próximo nivel.</span>
          <a>
            <button>
              ACESSAR TURMA
            </button>
          </a>
        </div>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () =>{
  const prismic = getPrismicClient();

  const response = await prismic.query([
    Prismic.Predicates.at('document.type', 'home')
  ])
  //console.log(response.results[0].data)

  const {
    title,
    sub_title,
    link_action,
    mobile,
    mobile_content,
    mobile_banner,
    title_web,
    web_content,
    web_banner
  } = response.results[0].data; 

  const content = {
    title: RichText.asText(title),
    titleContent: RichText.asText(sub_title),
    linkAction: link_action.url,
    mobileTitle: RichText.asText(mobile),
    mobileContent: RichText.asText(mobile_content),
    mobileBanner: mobile_banner.url,
    webTitle: RichText.asText(title_web),
    webContent: RichText.asText(web_content),
    webBanner: web_banner.url
  }

  return{
    props:{
      content
    },
    revalidate: 60 * 5
  }
}