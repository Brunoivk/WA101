import express from 'express';
import moment from 'moment';


let polje=['Suncano','Kisovito','Oblacno']

const app = express() // instanciranje aplikacije
const port = 3000 // port na kojem će web server slušati

app.get('/', (req, res) => res.send('Početna stranica'))
app.get('/datum', (req, res) => res.send(moment().format('MMM Do YY')))
app.get('/prognoza', (req, res) => res.send(polje[Math.floor(Math.random()*polje.length)]))


app.listen(port, () => console.log(`Slušam na portu ${port}!`))

