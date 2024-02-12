import { useNavigate } from 'react-router-dom'
import './project.css'

function Project2() {
    const navigate = useNavigate()

    const sourceCode = () => {
        window.open('https://github.com/ConmHayes/Library-Services-App', '_blank')
    }
    
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
        <p>This was my Second Project at La Fosse. The brief was to solve a problem for the local council. So, my team decided we would build a library service App where staff would be able to add books to the site and users would be able to browse their collection and rent books out as they wished. As we believed this would help alleviate pressure of the library from having to do everything person to person.</p>

        <h2>Skills used and learnt</h2>
        <p>For this project I was working on the frontend.</p>
        <ul>
            <li>A deeper understanding of styling and CSS</li>
            <li>How to build, manage and integrate a database in the project</li>
            <li>Using pair programming more effectively especially to debug</li>
            <li>Using MVC Structure</li>
        </ul>
        <div className='SourceButtonDiv'><button onClick={sourceCode}>Source Code</button></div>
        </div>
    )
}

export default Project2