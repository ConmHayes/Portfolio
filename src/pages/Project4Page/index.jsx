import { useNavigate } from 'react-router-dom'
import './project.css'

function Project4() {
    const navigate = useNavigate()

    const sourceCode = () => {
        window.open('https://github.com/ConmHayes/Nerdwork', '_blank')
    }
    
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
        <p>For my fourth and final project at La Fosse the brief was to pitch and build an app over two weeks with everything we had learned over the course. We built a react app, with a flask backend. So, we decided to build a book/games sharing site with a community forum.</p>

        <h2>Skills used and learnt</h2>
        <p>Once again I had the role of project manager for Final project at La Fosse. I had an overview of the project so was able to spend time on being full stack.</p>
        <ul>
            <li>How to pitch ideas and have them rejected.</li>
            <li>How to successfully move on from setbacks</li>
            <li>building a flask backend</li>
        </ul>
        <div className='SourceButtonDiv'><button onClick={sourceCode}>Source Code</button></div>
        </div>
    )
}

export default Project4