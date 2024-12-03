function generateRandomName() {
    const names = ["Alice", "Bob", "Charlie", "Diana", "Eve"];
    return names[Math.floor(Math.random() * names.length)];
}

function generateRandomNumber(min = 0, max = 100) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomDate(start = new Date(2000, 0, 1), end = new Date()) {
    const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return date.toISOString();
}

module.exports = {
    generateRandomName,
    generateRandomNumber,
    generateRandomDate
};
