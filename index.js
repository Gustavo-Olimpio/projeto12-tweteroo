import express from 'express'
import cors from 'cors'

        const usuarios = []
        const tweets = []
      

const app = express();
app.use(cors());
app.use(express.json());

app.post("/sign-up", (req, res) => {
    usuarios.push(req.body)
    res.send("OK")
})

app.get("/sign-up", (req, res) => {
    res.send(usuarios)
})

app.post("/tweets", (req, res) => {
    const {username,tweet} = req.body
    
    for(let i=0; i<usuarios.length ;i++ ){
       
        if(usuarios[i].username === username){
            const novotweet = {
                username: username,
                avatar:usuarios[i].avatar,
                tweet:tweet
            }
            
            tweets.push(novotweet)
            return res.send("OK")
        }
    }
    res.send("UNAUTHORIZED")

})

app.get("/tweets", (req, res) => {
    res.send(tweets)
})

function achar(nome){
    for (let i=0; i<usuarios.length;i++){
        if(usuarios[i].username === nome){
            return usuarios[i].avatar
        }
    }
}

app.listen(5000, () => console.log("terminal rodando na porta 5000"))
