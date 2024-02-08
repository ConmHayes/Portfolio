import {Navbar, Footer} from './components'
import {Projects, About, Education, Skills, Project1, Project2, Project3, Project4} from './pages'
import './app.css';
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route index element={<Projects />} />
          <Route path='/Project1' element={<Project1 />}/>
          <Route path='/Project2' element={<Project2 />}/>
          <Route path='/Project3' element={<Project3 />}/>
          <Route path='/Project4' element={<Project4 />}/>
          <Route path='/about' element={<About />} />
          <Route path='/education' element={<Education />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='*' element={<h1>Page not Found</h1>} />
        </Route>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
