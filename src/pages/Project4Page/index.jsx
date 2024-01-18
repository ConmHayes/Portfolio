import { useNavigate } from 'react-router-dom'

function Project4() {
    const navigate = useNavigate()

    return (
        <>
        <button onClick={() => navigate(`/`)}>Back</button>

        <hr></hr>
        <h1>NerdWork</h1>
        <img src="/public/Project_4.jpg" alt="Project4" />
        
        <hr></hr>
        <h2>Tech Stack</h2>
        <ul className='techStackList'>
            <li>Flask</li>
            <li>Python</li>
            <li>PyTest</li>
            <li>React</li>
            <li>JavaScript</li>
            <li>CSS</li>
            <li>BootStrap</li>
            <li>NodeJs</li>
            <li>npm</li>
            <li>PostgreSQL</li>
            <li>Vitest</li>
        </ul>

        <hr></hr>
        <h2>About</h2>
        <p>While at La Fosse Academy we had to complete projects. For my final project all we had to do was build a site using technologies that we had learnt throughout the course.</p>
        <p>After thinking of and pitching multiple ideas we settled on a book/games sharing site with a community forum.</p>

        <hr/>
        <h2>Skills used and learnt</h2>
        <p>Once again I had the role of project manager for Final project at La Fosse. I had an overview of the project so was able to spend time on both the front and backend.</p>
        <ul>
            <li>How to manage a team in an agile manner</li>
            <li>building a react project</li>
            <li>Using MVC Structure</li>
        </ul>
        </>
    )
}

export default Project4