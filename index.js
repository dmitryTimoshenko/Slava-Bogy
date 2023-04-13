require('@babel/register')

const express = require('express')
const app = express()

const React = require('react')
const ReactDOMServer = require('react-dom/server')

const Logo = require('./components/Logo')
const Home = require('./components/Home')
const Statistic = require('./components/Statistic')

app.get('/', (req,res)=>{
    const element = React.createElement(Logo)
    const html = ReactDOMServer.renderToStaticMarkup(element)
    res.send(html)
})

app.post('/', (req,res)=>{
    // if(req.body.login === 'qwe' && req.body.password === '123'){

    // }
})

app.get('/home', (req,res)=>{
    const element = React.createElement(Home)
    const html = ReactDOMServer.renderToStaticMarkup(element)
    res.send(html)
})

app.post('/home', (req,res)=>{
    if(tema){
        res.send(vopros)
    }
    if(tem2){
        res.send(vopros2)
    }
})

app.get('/statistic', (req,res)=>{
    const element = React.createElement(Statistic)
    const html = ReactDOMServer.renderToStaticMarkup(element)
    res.send(html)
})

app.listen(3000)

