import './skills.css'
function Skills() {

    return (
        <>
        <h1>Skills</h1>
        <h2>Languages</h2>
        <div className='languagesSkills'>
        <img src="/public/python.png" alt="Python" />
        <img src="/public/Flask.png" alt="Flask" />
        <img src="/public/html-5.png" alt="HTML" />
        <img src="/public/js.png" alt="JavaScript" />
        <img src="/public/bootstrap.png" alt="Bootstrap" />
        <img src="/public/react.png" alt="React" />

        <img src="/public/database.png" alt="SQL" />
        <img src="/public/postgresql-logo.png" alt="PostgreSQL" />

        <img src="/public/github-logo.png" alt="GitHub" />
        <img src="/public/docker.png" alt="Docker" />
        <img src="/public/Npm-logo.png" alt="npm" />
        <img src="/public/Node.js_logo.png" alt="Nodejs" />
        </div>
        <hr />
        <h2>Key Skills</h2>
        <ul>
            <li>Communication</li>
            <li>Presentation</li>
            <li>Leader ship</li>
            <li>Adaptability</li>
            <li>Teamwork</li>
            <li>Critical Thinking</li>
        </ul>
        </>
        
    )
}

export default Skills