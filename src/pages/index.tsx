import Head from 'next/head'
import styles from '../styles/home.module.scss';

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
      </main>
    </>
  )
}
