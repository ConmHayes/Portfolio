import { useNavigate } from 'react-router-dom'
import './project.css'

function Project4() {
    const navigate = useNavigate()

    return (
        <div className='p4'>
        <div className='backTitle'>    
        <div className='backButtonDiv'><button onClick={() => navigate(`/`)}>Back</button></div>
        <div className='projectTitleDiv'><h1 className='pageTitle'>Educational Gaming</h1></div>
        </div>

        <img src="/Project_4.jpg" alt="Project4" />
        
        <h2>Tech Stack</h2>
        <ul className='techStackList'>
            <img src="/Flask.png" alt="Flask" />
            <img src="/python.png" alt="Python" />
            <img src="/pytest.png" alt="Pytest" />
            <img src="/react.png" alt="React" />
            <img src="/js.png" alt="JavaScript" />
            <img src="/css-3.png" alt="CSS" />
            <img src="/bootstrap.png" alt="Bootstrap" />
            <img src="/Node.js_logo.png" alt="Nodejs" />
            <img src="/Npm-logo.png" alt="npm" />
            <img src="/postgresql-logo.png" alt="PostgreSQL" />
            <img src="/vitest.svg" alt="Vitest" />
        </ul>

        <h2>About</h2>
        <p>While at La Fosse Academy we had to complete projects. For my final project all we had to do was build a site using technologies that we had learnt throughout the course.</p>
        <p>After thinking of and pitching multiple ideas we settled on a book/games sharing site with a community forum.</p>

        <h2>Skills used and learnt</h2>
        <p>Once again I had the role of project manager for Final project at La Fosse. I had an overview of the project so was able to spend time on both the front and backend.</p>
        <ul>
            <li>How to manage a team in an agile manner</li>
            <li>building a react project</li>
            <li>Using MVC Structure</li>
        </ul>
        </div>
    )
}

export default Project4