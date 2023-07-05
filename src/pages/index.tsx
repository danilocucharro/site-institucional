import Head from 'next/head'
import styles from '../styles/home.module.scss';

import Image from 'next/image'

import techsImage from '../../public/images/techs.svg'

export default function Home() {
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
