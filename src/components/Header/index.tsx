import styles from './styles.module.scss'
import Image from 'next/image'
import logo from '../../../public/images/logo.svg'

import Link from 'next/link'

export function Header(){
  return(
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <a>
          <Image src={logo} alt="logo" />
        </a>

        <nav>
          <Link href="/" legacyBehavior>
            <a>Home</a>
          </Link>
          <Link href="/posts" legacyBehavior>
            <a>Conteúdos</a>
          </Link>
          <Link href="/sobre" legacyBehavior>
            <a>Quem somos?</a>
          </Link>
        </nav>

        <a className={styles.readyButton} type="button" href="https://sujeitoprogramador.com">COMEÇAR</a>
      </div>
    </header>
  )
}