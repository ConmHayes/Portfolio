import { useNavigate } from 'react-router-dom'
import './project.css'

function Project3() {
    const navigate = useNavigate()

    const sourceCode = () => {
        window.open('https://github.com/ConmHayes/Revision-App', '_blank')
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
        <p>For my third project at La Fosse, we were given a brief, because of the pandemic we needed to build an app to assist online learning. So, my team decided to build a time tabling app to assist with time organisation. </p>

        <h2>Skills used and learnt</h2>
        <p>For this project I had the role of project manager and working on full stack development. This was my first experience of leading a team of developers.</p>
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