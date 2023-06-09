import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Layout from './Components/Layout/Index'
import Home from './Components/Home'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Portfolio from './Components/Portfolio/Portfolio'

function App() {
  return (
    <div className='wrapper'>
      <Routes>
        <Route path='/' element={ <Layout/> }>
        <Route index element={ <Home /> }/>
        <Route path='/about'  element={ <About /> } />
        <Route path='/portfolio'  element={ <Portfolio /> } />
        <Route path='/contact'  element={ <Contact /> } />
        </Route>
      </Routes>
    </div>
  )
}

export default App
