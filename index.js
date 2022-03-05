import express from "express";
import path from "path";
import {requestTime, logger} from "./middlewares.js"
import serverRoute from "./routes/servers.js"

const app = express();
const PORT = process.env.PORT ?? 3000
const __dirname = path.resolve()


app.set('view engine', 'ejs') //подключение ejs
app.set('views', path.resolve(__dirname, 'ejs')) //переписываем директорию views


app.use(express.static(path.resolve(__dirname, 'static'))) //middleware объявление статичной папки
// app.use(requestTime)
// app.use(logger)
app.use(serverRoute)
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//Routing динамической html
app.get('/', (req, res) => {
    res.render('index', {title: 'Main Page', active: 'main'})
})
app.get('/features', (req, res) => {
    res.render('features', {title: 'Features Page', active: 'features'})
})

//Routing статичной html
// app.get('/', (req, res) => {
//     // res.send('<h1>Hello Express</h1>')
//     res.sendFile(path.resolve(__dirname, 'static', 'index.html'))
// })
// app.get('/features', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'static', 'features.html'))
// })
// app.get('/download', (req, res) => { //скачивание страницы
//     res.download(path.resolve(__dirname, 'static', 'index.html'))
// })



app.listen(PORT, () => {
    console.log(`Sever has been started on ${PORT}...`);
});

