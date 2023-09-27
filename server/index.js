const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3');

const app = express();

const port = 3000;

app.use(bodyParser.json());


// Create a SQLite database
const db = new sqlite3.Database('./tasks.db');

db.serialize(() => {
    // Create tables
    db.run(`
        CREATE TABLE IF NOT EXISTS users(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT NOT NULL,
            email TEXT NOT NULL
        )
    `);
    db.run(`
        CREATE TABLE IF NOT EXISTS tasks (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            description TEXT,
            dueDate DATE,
            isComplete BOOLEAN DEFAULT 0
        )
    `);
});

const apiRoutes = express.Router();

apiRoutes.post('/tasks', (req, res) => {
    db.run(`
    INSERT INTO tasks(title, description, dueDate, isComplete) VALUES (?, ?, ?, ?)`,
        ['Test', 'Test Desc', null, false],
        (err) => {
            if (err) {
                return res.status(500).json({ error: 'Error in inserting the task' })
            }
            return res.status(201).json({ message: 'Task created successfully' });
        });
})

apiRoutes.get('/', (req, res) => {
    return res.status(200).json({ message: 'Ok' })
})

apiRoutes.get('/tasks', (req, res) => {
    db.all('select * from tasks', (err, tasks) => {
        if (err) {
            return res.status(500).json({ error: 'Could not retrieve tasks' });
        }
        res.json(tasks);
    });
})

app.use('/api', apiRoutes);


app.listen(port, () => {
    console.log('Server is running on port ' + port);
})