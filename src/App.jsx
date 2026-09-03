import Nav from './components/Nav'
import Hero from './components/Hero'
import Wave from './components/Wave'
import Escola from './components/Escola'
import Percurso from './components/Percurso'
import { Localizacao, Contato, Rodape } from './components/Visita'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Wave from="paper" to="blue" curva="a" />
        <Escola />
        <Wave from="blue" to="paper" curva="b" />
        <Percurso />
        <Localizacao />
        <Wave from="paper" to="deep" curva="a" />
        <Contato />
      </main>
      <Rodape />
    </>
  )
}
