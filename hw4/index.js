const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 6000;

// Путь к файлу с пользователями
const DATA_FILE = path.join(__dirname, "users.json");

// Middleware для парсинга JSON
app.use(express.json());

// Функция для чтения данных из файла
const readUsersFromFile = () => {
    if (fs.existsSync(DATA_FILE)) {
        const data = fs.readFileSync(DATA_FILE, "utf-8");
        return JSON.parse(data);
    }
    return [];
};

// Функция для записи данных в файл
const writeUsersToFile = (users) => {
    fs.writeFileSync(DATA_FILE, JSON.stringify(users, null, 2));
};

// Получить всех пользователей
app.get("/users", (req, res) => {
    const users = readUsersFromFile();
    res.json(users);
});

// Получить пользователя по ID
app.get("/users/:id", (req, res) => {
    const users = readUsersFromFile();
    const user = users.find((u) => u.id === req.params.id);
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ error: "User not found" });
    }
});

// Создать нового пользователя
app.post("/users", (req, res) => {
    const users = readUsersFromFile();
    const newUser = req.body;

    // Проверка, что ID уникален
    if (users.some((u) => u.id === newUser.id)) {
        return res.status(400).json({ error: "User with this ID already exists" });
    }

    users.push(newUser);
    writeUsersToFile(users);
    res.status(201).json(newUser);
});

// Обновить данные пользователя по ID
app.put("/users/:id", (req, res) => {
    const users = readUsersFromFile();
    const userIndex = users.findIndex((u) => u.id === req.params.id);

    if (userIndex === -1) {
        return res.status(404).json({ error: "User not found" });
    }

    users[userIndex] = { ...users[userIndex], ...req.body };
    writeUsersToFile(users);
    res.json(users[userIndex]);
});

// Удалить пользователя по ID
app.delete("/users/:id", (req, res) => {
    const users = readUsersFromFile();
    const updatedUsers = users.filter((u) => u.id !== req.params.id);

    if (updatedUsers.length === users.length) {
        return res.status(404).json({ error: "User not found" });
    }

    writeUsersToFile(updatedUsers);
    res.status(204).send();
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
