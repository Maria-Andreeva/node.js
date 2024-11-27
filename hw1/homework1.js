const http = require("http");

let homePageViews = 0;
let aboutPageViews = 0;

const server = http.createServer((req, res) => {
    console.log("Запрос получен");
    if(req.url === "/") {
        homePageViews++;
        res.writeHead(200, {
            "Content-Type": "text/html; charset=UTF-8",
        });
        res.end(`
            <h1>Добро пожаловать на главную страницу!</h1>
            <p>Эта страница была просмотрена <strong>${homePageViews}</strong> раз.</p>
            <a href='/about'>Перейти на страницу обо мне!</a>
        `);
    } else if (req.url === "/about") {
        aboutPageViews++;
        res.writeHead(200, {
            "Content-Type": "text/html; charset=UTF-8",
        });
        res.end(`
            <h1>Страница обо мне</h1>
            <p>Эта страница была просмотрена <strong>${aboutPageViews}</strong> раз.</p>
            <a href='/'>Перейти на главную страницу!</a>
        `);
    } else {
        res.writeHead(404, {
            "Content-Type": "text/html; charset=UTF-8",
        });
        res.end(`
            <h1>Ошибка 404</h1>
            <p>Страница по адресу <strong>${req.url}</strong> не найдена.</p>
            <a href='/'>Вернуться на главную страницу</a>
        `);
    }
})

const port = "5000";

server.listen(port);