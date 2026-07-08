
import express from 'express'
import bancoDeDados from './repository'
 

 
app.get("/api/pessoa/:id", (req, res) => {
    const id  = req.params.id
    const pessoa = bancoDeDados.find(it => it.id == id)
    if(!pessoa) {

        res.send({ pessoa })
    
}})
app.get("/api/pessoa/", (req, res) => {
    const { id, name } = req.query

    if(!id || !name) {

        
        bancoDeDados.push({ id, name })
        console.log(bancoDeDados)
        
        res.send({ message: "Pessoa criada com sucesso" })
    }

    //const pessoa = {
      //  nome: "Neymar Jr",
        //idade: 34,
        //cpf: "123.456.789-10"
        
    //}

 
})
 
app.listen(3000, () => {
    console.log("Servidor ouvindo na porta 3000")
})
 