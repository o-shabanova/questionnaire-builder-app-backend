const cors = require('cors');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const pool = require('./db')

const corsOptions = {
    origin: 'https://questionnaire-app-client-63ff70b3d682.herokuapp.com/',
    credentials: true
};

app.use(cors(corsOptions));
app.use(express.json());

app.get('/quizzes', async (req, res) => {
    try {
        const result = await pool.query(`
            SELECT id,
                   name,
                   description,
                   questioncount   as "questionCount",
                   completionCount as "completionCount"
            FROM quizzes`
        );
        res.json(result.rows);
    } catch (error) {
        console.error('Error fetching quizzes:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

app.delete('/quizzes/:id', async (req, res) => {
    try {
        const { id } = req.params
        const result = await pool.query(`DELETE FROM quizzes WHERE id = $1`, [id]);
        if (result.rowCount === 0) return res.status(404).json({ message: 'Item not found' });
        res.status(200).json({ message: `Item ${id} deleted` });
    } catch (error) {
        console.error('Error fetching quizzes:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT} port`);
});