import './Projects.css'
import descriptions from '../../projects'
import { useNavigate } from 'react-router-dom'

function Projects() {
    const navigate = useNavigate()

    return (
        <>
        <h1 className='pageTitle'>Projects</h1>
        <div className = 'projectCards'>
        {descriptions.map((project,i) => (
                <article className = 'projectCard' key={i}>
                    <h3>{project.name}</h3>
                    <img src={project.img} alt={project.name} />
                    <p>{project.description}</p>
                    <button onClick={() => navigate(`/project${i+1}`)}>Learn More</button>
                </article> )
        )}
        </div>
        <div className='pad'>
        </div>
        </>
    )
}

export default Projects