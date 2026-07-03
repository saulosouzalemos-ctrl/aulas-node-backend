import express from 'express'
 

const app = express()

app.get("/api/v1/somar", (req, res) => {
   
    console.log(req.query)
 
    const num1 = Number(req.query.num1)
    const num2 = Number(req.query.num2)
    const resultado = num1 + num2
 
    res.send({ resultado, "Tarefa": "Pesquise sobre QueryParams" })
})
 

 
app.listen(3000, () => {
    console.log("Servidor ouvindo na porta 3000")
})
 