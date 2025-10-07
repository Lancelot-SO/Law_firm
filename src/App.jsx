
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import About from './Pages/About'
import MainTeam from './Pages/MainTeam'
import Consult from './Pages/Consult'
import Insights from './Pages/Insights'
import BlogDetails from './Components/insight/BlogDetails'
import CaseStudies from './Pages/CaseStudies'
import CaseBlogDetails from './Components/case/CaseBlogDetails'
import PracticalArea from './Pages/PracticalArea'
import Litigation from './Components/practices/Litigation'
import Transactional from './Components/practices/Transactional'
import Advisory from './Components/practices/Advisory'
import Corporate from './Components/practices/Corporate'
import Banking from './Components/practices/Banking'
import Legal from './Components/homesection/Legal'


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
          <Route path='/blog/:id' element={<BlogDetails />} />
          <Route path='/consultation' element={<Consult />} />
          <Route path='/case' element={<CaseStudies />} />
          <Route path='/case/:id' element={<CaseBlogDetails />} />
          <Route path='/practice-area' element={<PracticalArea />} />
          <Route path='/litigation' element={<Litigation />} />
          <Route path='/transactional' element={<Transactional />} />
          <Route path='/advisory' element={<Advisory />} />
          <Route path='/corporate' element={<Corporate />} />
          <Route path='/banking' element={<Banking />} />
          <Route path='/legal' element={<Legal />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
