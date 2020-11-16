const getUser = async(username) => {
    const resUser = await fetch('https://api.github.com/users/' + username)
    const user = await resUser.json()

    const resRepos = await fetch(`https://api.github.com/users/${username}/repos?sort=updated`)
    const originalRepos = await resRepos.json()

    //filtragem dos repositorios
    const dontShowRepos = ['Igor-Moreira/Project1']//Project === 0
    //só irá mostrar os repositorios com valor igual a -1
    const dontShowFilter = repo => dontShowRepos.indexOf(repo.full_name) === -1
    //filtagem de dados para melhorar o carregamento da página
    const extractData = repo => ({
        id: repo.id,
        full_name: repo.full_name,
        language: repo.language,
        stargazers_count: repo.stargazers_count
    })
    const repos = originalRepos
                    .filter(dontShowFilter)
                    .map(extractData)

    return {
        repos,user
    }
}


export default getUser