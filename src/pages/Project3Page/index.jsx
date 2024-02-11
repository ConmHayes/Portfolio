import { useNavigate } from 'react-router-dom'
import './project.css'

function Project3() {
    const navigate = useNavigate()

    const sourceCode = () => {
        window.location.href = 'https://github.com/ConmHayes/Revision-App'
    }

    return (
        <div className='p3'>
        <div className='backTitle'>    
        <div className='backButtonDiv'><button onClick={() => navigate(`/`)}>Back</button></div>
        <div className='projectTitleDiv'><h1 className='pageTitle'>StudyAsync</h1></div>
        </div>

        <img src="/Project_3.jpg" alt="Project3" />
        
        <h2>Tech Stack</h2>
        <ul className='techStackList'>
            <li><img src="/react.png" alt="React" /></li>
            <img src="/js.png" alt="JavaScript" />
            <img src="/css-3.png" alt="CSS" />
            <img src="/Node.js_logo.png" alt="Nodejs" />
            <img src="/Npm-logo.png" alt="npm" />
            <img src="/postgresql-logo.png" alt="PostgreSQL" />
            <img src="/jest.png" alt="Jest" />
            <img src="/vitest.svg" alt="Vitest" />
        </ul>

        <h2>About</h2>
        <p>While at La Fosse Academy we had to complete projects. This was my Third project and we had to create something to help students study using react.</p>
        <p>So my team went to build a timetabling and notes app.</p>

        <h2>Skills used and learnt</h2>
        <p>I had the role of project manager for my third project at La Fosse. I had a focus on the backend but I also helped debug and build up the frontend.</p>
        <ul>
            <li>How to manage a team in an agile manner</li>
            <li>building a react project</li>
            <li>Using MVC Structure</li>
        </ul>
        <div className='SourceButtonDiv'><button onClick={sourceCode}>Source Code</button></div>
        </div>
    )
}

export default Project3