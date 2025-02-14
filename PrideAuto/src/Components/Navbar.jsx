import { Link } from 'react-router-dom'

import Container from './Container'
import Logo from '../assets/Logo.webp' 
import styles from './Navbar.module.css'

function Navbar() {
  return (
    <nav>
        <Container customClass='center'>
            <Link>
                <img src={Logo} alt='Logo' />
            </Link>
            <ul>
                <li className={styles.item}>
                    <Link to='/'>Início</Link>
                </li>
                <li className={styles.item}>
                    <Link to='/catalogo'>Catalogo</Link>
                </li>
                <li className={styles.item}>
                    <Link to='/sobre'>Sobre</Link>
                </li>
                <li className={styles.item}>
                    <Link to='/contato'>Contato</Link>
                </li>
            </ul>
            <ul>
                <li className={styles.item}>
                    <Link to='/venda-seu-veiculo'>Venda Seu Veículo</Link>
                </li>
                <li className={styles.login}>
                    {/* {UserLogin ? <p>Olá, Admin</p> : <Link to='/login'>Olá, Entrar!</Link>} */}
                    <Link to='/login'>Olá, Entrar!</Link>
                </li>
            </ul>
        </Container>
    </nav>
  )
}

export default Navbar
