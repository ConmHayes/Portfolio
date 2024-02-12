import { useNavigate} from 'react-router-dom'
import './project.css'

function Project1() {
    const navigate = useNavigate()

    const sourceCode = () => {
        window.open('https://github.com/ConmHayes/Lap-1-Project', '_blank')
    }

    return (
        <div className='p1'>
        <div className='backTitle'>    
        <div className='backButtonDiv'><button onClick={() => navigate(`/`)}>Back</button></div>
        <div className='projectTitleDiv'><h1 className='pageTitle'>Educational Gaming</h1></div>
        </div>
        <img src="/Project_1.jpg" alt="Project1" />

        <h2>Tech Stack</h2>
        <ul className='techStackList'>
            <li><img src="/html-5.png" alt="HTML" /></li>
            <li><img src="/js.png" alt="JavaScript" /></li>
            <li><img src="/css-3.png" alt="CSS" /></li>
            <li><img src="/bootstrap.png" alt="Bootstrap" /></li>
            <li><img src="/Node.js_logo.png" alt="Nodejs" /></li>
            <li><img src="/Npm-logo.png" alt="npm" /></li>
        </ul>

        <h2>About</h2>
        <p>
        While at La Fosse Academy we had to complete projects. This was my first group project. The brief was to create am app that would help make education more engaging. So, my team decided to create a multiple-choice quiz site that covered art history and geography. Which each category having a timed quiz and a quiz where you answer as many question as possible.        </p>

        <hr />
        <h2>Skills used and learnt</h2>
        <p>
        This was my first project building an app and my first at La Fosse. During this project our group decided to no assign anyone with specific roles as it allowed everyone to practice what we had learnt in the first week of the academy. 
        </p>
        <ul>
            <li>Building an pp using JS, HTML and CSS</li>
            <li>Connecting a frontend and backend</li>
            <li>Learned what it was like to work in a team on developers</li>
            <li>Learnt how to communicate bugs and issues effectively</li>
        </ul>
        <div className='SourceButtonDiv'><button onClick={sourceCode}>Source Code</button></div>
        </div>
    )
}

export default Project1