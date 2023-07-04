import { ReactElement, cloneElement } from 'react'
import { useRouter } from 'next/router'
import Link, { LinkProps } from 'next/link'

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
  activeClassName: string;
}

export function ActiveLink({ children, activeClassName, ...rest}: ActiveLinkProps){
  const { asPath } = useRouter(); //valor da url da pagina atual ex: /sobre

  const className = asPath === rest.href ? activeClassName : '';
  //Se a rota/pagina que esta sendo acessada foi igual ao link que o usuario clicou o activeClassName é ativado

  return(
    <Link {...rest} legacyBehavior>
      {cloneElement(children,{
        className
      })}
    </Link>
  )
}