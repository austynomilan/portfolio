import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Layout from './Components/Layout/Index'
import Home from './Components/Home'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={ <Layout/> }>
        <Route index element={ <Home /> }/>
        <Route path='/about'  element={ <About /> } />
        <Route path='/contact'  element={ <Contact /> } />
        </Route>
      </Routes>
    </>
  )
}

export default App
