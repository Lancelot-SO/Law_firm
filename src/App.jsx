
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import About from './Pages/About'
import MainTeam from './Pages/MainTeam'
import Consult from './Pages/Consult'
import Insights from './Pages/Insights'
import BlogDetail from './Components/blogpost/BlogDetail'


function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/team' element={<MainTeam />} />
          <Route path='/insights' element={<Insights />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path='/consultation' element={<Consult />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
