import { useNavigate } from 'react-router-dom'
import './project.css'

function Project1() {
    const navigate = useNavigate()

    const sourceCode = () => {
        window.location.href = 'https://github.com/ConmHayes/Lap-1-Project'
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
        <p>While at La Fosse Academy we had to complete projects. This was my first project and it was to make something that would help make education more engaging.</p>
        <p>So what my team decided to do was create a multiple choice quiz across non-STEM subjects</p>

        <hr />
        <h2>Skills used and learnt</h2>
        <p>For this project no one had a specified role as it allowed all of us to tackle the frontend and backend to gain experience.</p>
        <ul>
            <li>Connecting a frontend and backend</li>
            <li>Learned what it was like to work in a team on developers</li>
            <li>Learnt how to communicate bugs and issues effectively</li>
        </ul>
        <div className='SourceButtonDiv'><button onClick={sourceCode}>Source Code</button></div>
        </div>
    )
}

export default Project1