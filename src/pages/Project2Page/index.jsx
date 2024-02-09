import { useNavigate } from 'react-router-dom'
import './project.css'

function Project2() {
    const navigate = useNavigate()

    return (
        <div className='p2'>
        <div className='backTitle'>    
        <div className='backButtonDiv'><button onClick={() => navigate(`/`)}>Back</button></div>
        <div className='projectTitleDiv'><h1 className='pageTitle'>Florin & Burkes Library Service</h1></div>
        </div>

        <img src="/Project_2.jpg" alt="Project2" />
        
        <h2>Tech Stack</h2>
        <ul className='techStackList'>
            <li><img src="/html-5.png" alt="HTML" /></li>
            <li><img src="/js.png" alt="JavaScript" /></li>
            <li><img src="/jest.png" alt="Jest" /></li>
            <li><img src="/css-3.png" alt="CSS" /></li>
            <li><img src="/bootstrap.png" alt="Bootstrap" /></li>
            <li><img src="/Node.js_logo.png" alt="Nodejs" /></li>
            <li><img src="/Npm-logo.png" alt="npm" /></li>
            <li><img src="/postgresql-logo.png" alt="PostgreSQL" /></li>
        </ul>

        <h2>About</h2>
        <p>While at La Fosse Academy we had to complete projects. This was my second project and it was to solve a problem for The Florin & Burkes County Council.</p>
        <p>So we decided to build an app to help people reserve books without the requirement of staff intervention.</p>

        <h2>Skills used and learnt</h2>
        <p>My role in this project was on the frontend and on the styling of the site.</p>
        <ul>
            <li>How to build, manage and integrate a database in the project</li>
            <li>Using pair programming more effectively especially to debug</li>
            <li>Using MVC Structure</li>
        </ul>
        </div>
    )
}

export default Project2