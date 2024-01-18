import { useNavigate } from 'react-router-dom'

function Project2() {
    const navigate = useNavigate()

    return (
        <>
        <button onClick={() => navigate(`/`)}>Back</button>

        <hr></hr>
        <h1>Florin & Burkes Library Service</h1>
        <img src="/public/Project_2.jpg" alt="Project2" />
        
        <hr></hr>
        <h2>Tech Stack</h2>
        <ul className='techStackList'>
            <li>HTML</li>
            <li>JavaScript</li>
            <li>CSS</li>
            <li>BootStrap</li>
            <li>NodeJs</li>
            <li>npm</li>
            <li>PostgreSQL</li>
            <li>Jest</li>
        </ul>

        <hr></hr>
        <h2>About</h2>
        <p>While at La Fosse Academy we had to complete projects. This was my second project and it was to solve a problem for The Florin & Burkes County Council.</p>
        <p>So we decided to build an app to help people reserve books without the requirement of staff intervention.</p>

        <hr/>
        <h2>Skills used and learnt</h2>
        <p>My role in this project was on the frontend and on the styling of the site.</p>
        <ul>
            <li>How to build, manage and integrate a database in the project</li>
            <li>Using pair programming more effectively especially to debug</li>
            <li>Using MVC Structure</li>
        </ul>
        </>
    )
}

export default Project2