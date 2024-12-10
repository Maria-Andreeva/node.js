const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

const DATA_FILE = path.join(__dirname, "views.json");

let views = {};
if (fs.existsSync(DATA_FILE)) {
    const fileData = fs.readFileSync(DATA_FILE, "utf-8");
    views = JSON.parse(fileData);
} else {
    views = { "/": 0, "/about": 0 };
}

const saveViewsToFile = () => {
    fs.writeFileSync(DATA_FILE, JSON.stringify(views, null, 2));
};

app.get("/", (req, res) => {
    views["/"] = (views["/"] || 0) + 1;
    saveViewsToFile();
    res.send(`
        <h1>Добро пожаловать на главную страницу!</h1>
        <p>Эта страница была просмотрена <strong>${views["/"]}</strong> раз.</p>
        <a href='/about'>Перейти на страницу обо мне!</a>
    `);
});

app.get("/about", (req, res) => {
    views["/about"] = (views["/about"] || 0) + 1;
    saveViewsToFile();
    res.send(`
        <h1>Страница обо мне</h1>
        <p>Эта страница была просмотрена <strong>${views["/about"]}</strong> раз.</p>
        <a href='/'>Перейти на главную страницу!</a>
    `);
});

app.use((req, res) => {
    res.status(404).send(`
        <h1>Ошибка 404</h1>
        <p>Страница по адресу <strong>${req.url}</strong> не найдена.</p>
        <a href='/'>Вернуться на главную страницу</a>
    `);
});

app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});
