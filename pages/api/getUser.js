import getUser from'../../utils/getUser'

const apitGetUser = async(req, res) =>{
    const data = await getUser('Igor-Moreira')
    res.send(data)
}

export default apitGetUser