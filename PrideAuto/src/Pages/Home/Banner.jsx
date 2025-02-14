import './Banner.css'
import Imagem1 from '../../assets/imagem1.jpg'
import Imagem2 from '../../assets/imagem2.jpg'
import Imagem3 from '../../assets/imagem3.jpg'

function Banner() {
  return (
    <div className='container'>
        <div className='banner'>
          <img src={Imagem1} alt="Banner" />
          <img src={Imagem2} alt="Banner" />
          <img src={Imagem3} alt="Banner" />
          <img src={Imagem1} alt="Banner" />
          <img src={Imagem2} alt="Banner" />
          <img src={Imagem3} alt="Banner" />

        </div>
    </div>
  )
}

export default Banner
