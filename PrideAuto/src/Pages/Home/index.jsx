import Container from '../../Components/Container'
import styles from './Index.module.css'
import Banner from './Banner'
import { FaSistrix } from "react-icons/fa";

function index() {
  return (
    <div>
      <Banner />
      <div className={styles.container}>
        <select className={styles.input}>
          <option selected>Marca</option>
          <option >Honda</option>
          <option >Ford</option>
          <option >Tayota</option>
        </select>
        <select className={styles.input}>
          <option>Civic</option>
          <option>Ka</option>
          <option>Etios</option>
        </select>
        <input type="text" placeholder="Ano de" className={styles.input} />
        <input type="text" placeholder="Ano até" className={styles.input} />
        <input type="text" placeholder="Valor Minimo" className={styles.input} />
        <input type="text" placeholder="Valor Maximo" className={styles.input} />
        <button className={styles.button}><FaSistrix />Buscar</button>
      </div>
      <Container>
        <p>Inicio</p>
      </Container>
    </div>
  )
}

export default index
