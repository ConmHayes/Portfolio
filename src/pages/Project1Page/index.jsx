import { useNavigate } from 'react-router-dom'
import './project.css'

function Project1() {
    const navigate = useNavigate()

    return (
        <div className='p1'>
        <div className='backTitle'>    
        <button onClick={() => navigate(`/`)}>Back</button>
        <h1 className='projectTitle'>Educational Gaming</h1>
        </div>
        <img src="/Project_1.jpg" alt="Project1" />

        <hr></hr>
        <h2>Tech Stack</h2>
        <ul className='techStackList'>
            <li>HTML</li>
            <li>JavaScript</li>
            <li>CSS</li>
            <li>BootStrap</li>
            <li>NodeJs</li>
            <li>npm</li>
        </ul>

        <hr></hr>
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
        </div>
    )
}

export default Project1