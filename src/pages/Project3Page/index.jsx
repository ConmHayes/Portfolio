import { useNavigate } from 'react-router-dom'

function Project3() {
    const navigate = useNavigate()

    return (
        <>
        <button onClick={() => navigate(`/`)}>Back</button>

        <hr></hr>
        <h1>StudyAsync</h1>
        <img src="/Project_3.jpg" alt="Project3" />
        
        <hr></hr>
        <h2>Tech Stack</h2>
        <ul className='techStackList'>
            <li>React</li>
            <li>JavaScript</li>
            <li>CSS</li>
            <li>NodeJs</li>
            <li>npm</li>
            <li>PostgreSQL</li>
            <li>Jest</li>
            <li>Vitest</li>
        </ul>

        <hr></hr>
        <h2>About</h2>
        <p>While at La Fosse Academy we had to complete projects. This was my Third project and we had to create something to help students study using react.</p>
        <p>So my team went to build a timetabling and notes app.</p>

        <hr/>
        <h2>Skills used and learnt</h2>
        <p>I had the role of project manager for my third project at La Fosse. I had a focus on the backend but I also helped debug and build up the frontend.</p>
        <ul>
            <li>How to manage a team in an agile manner</li>
            <li>building a react project</li>
            <li>Using MVC Structure</li>
        </ul>
        </>
    )
}

export default Project3