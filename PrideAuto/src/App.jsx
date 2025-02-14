import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home/index'
import Catalogo from './Pages/Catalogo/index'
import Sobre from './Pages/Sobre'
import Contato from './Pages/Contato'
import VendaVeiculo from './Pages/VendaVeiculo'
import Login from './Pages/Login'

import './App.css'

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/catalogo' element={<Catalogo />} />
        <Route path='/sobre' element={<Sobre />} />
        <Route path='/contato' element={<Contato />} />
        <Route path='/venda-seu-veiculo' element={<VendaVeiculo />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App
