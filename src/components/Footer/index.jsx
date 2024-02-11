import './footer.css'

export default function ProjectCard() {
  
  const redirectToLinkedin = () => {
    window.location.href = 'https://www.linkedin.com/in/connor-hayes-933236224/'
  }

  const redirectToGithub = () => {
    window.location.href = 'https://github.com/ConmHayes'
  }

    return (
      <div className="footer">
        <p>Email: conmhayes@gmail.com</p>
        <p>Socials:</p>
        <div className='socials'>
        <img onClick={redirectToLinkedin} src="/linkedin.png" alt="Linkedin" />
        <img onClick={redirectToGithub} src="/github-logo.png" alt="GitHub" />
        </div>
      </div>
    );
  }