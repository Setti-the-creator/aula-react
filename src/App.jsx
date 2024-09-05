import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from '../pages/Home'

import APIRickAndMorty from '../pages/APIRickAndMorty'
import { Routes, Route } from 'react-router-dom';

function App() {
  
  return (
    <>
    <Header />

    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Rick and Morty" element={<APIRickAndMorty />} />
      </Routes>
    
    {/* <main class="container">
        <section>
            <h2>Sobre mim</h2>
            <li>Oi meu nome é Victor e tenho 16 anos.</li>
            <li>Atualmente finalizando o EM no Colegio Catolica Machado de Assis e cursando o Jovem lirogramador.</li>
            <li>Possuo um certificado de Programador de Sistemas dado pela Faculdade de Sistemas do Senac Joinville e estou agora comecando o curso de Programador Web no Senac também.</li>
        </section>
        <section>
            <h2>Trabalhos feitos</h2>
            <ul>
                <li> Sistema para uma agropecuaria;</li>
                <li> Um aplicativo para registrar e organizar tarefas tanto de casa como escolares;</li>
                <li> Sistema de listagem de pets.</li>
            </ul>
        </section>
        
        
        <List titulo="Dicas"/>
        <Video />
        <Form />
</main> */}
<Footer />
    </>
  )
}

export default App
