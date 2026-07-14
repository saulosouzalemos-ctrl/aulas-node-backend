
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


const app = express()
app.use(express.json())

// 1. Somar dois números
app.post('/api/v1/somar', (req, res) => {
    const { num1, num2 } = req.body
    const resultado = Number(num1) + Number(num2)
    
    res.status(200).send({ message: resultado })
})

// 2. Cálculo de salário mensal
app.post('/api/v1/salario', (req, res) => {
    const { valor_hora, horas_trabalhadas } = req.body
    const resultado = Number(valor_hora) * Number(horas_trabalhadas)
    
    res.status(200).send({ message: resultado })
})

// 3. Média de peso de 5 pessoas
app.post('/api/v1/media-pesos', (req, res) => {
    const { peso1, peso2, peso3, peso4, peso5 } = req.body
    const soma = Number(peso1) + Number(peso2) + Number(peso3) + Number(peso4) + Number(peso5)
    const resultado = soma / 5
    
    res.status(200).send({ message: resultado })
})

// 4. Celsius para Fahrenheit
app.post('/api/v1/celsius-fahrenheit', (req, res) => {
    const { celsius } = req.body
    const resultado = (9 * Number(celsius) + 160) / 5
    
    res.status(200).send({ message: resultado })
})

// 5. Milhas para Quilômetros
app.post('/api/v1/milhas-quilometros', (req, res) => {
    const { milhas } = req.body
    const resultado = Number(milhas) * 1.60934
    
    res.status(200).send({ message: resultado })
})

// 6. Conversão de segundos em h, m, s
app.post('/api/v1/segundos-tempo', (req, res) => {
    const { segundos } = req.body
    const totalSegundos = Number(segundos)
    
    const horas = Math.floor(totalSegundos / 3600)
    const resto = totalSegundos % 3600
    const minutos = Math.floor(resto / 60)
    const segundosFinais = resto % 60
    
    const resultado = `${horas}h ${minutos}m ${segundosFinais}s`
    
    res.status(200).send({ message: resultado })
})

// Inicialização do servidor
const PORT = 3000
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})