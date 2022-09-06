
    const linkedinBtn = document.querySelector('.fa-linkedin')
    const linkedinGabi = () => window.open('https://www.linkedin.com/in/gabriellebrumer/','_blank')
    const linkedinVagner = () => window.open('https://www.linkedin.com/in/vagner-siqueira-junior-27197b135/','_blank')
    const linksLinkedin = [linkedinGabi, linkedinVagner]
    linkedinBtn.addEventListener('click', () => {
        linksLinkedin.forEach(link => {
            link()
        })
    })

    const githubBtn = document.querySelector('.fa-github')
    const githubGabi = () => window.open('https://github.com/gabiBrumer','_blank')
    const githubVagner = () => window.open('https://github.com/jrbigmon/VagnerJr','_blank')
    const linkGithub = [githubGabi, githubVagner]
    githubBtn.addEventListener('click', () => {
        linkGithub.forEach(link => {
            link()
        })
    })
