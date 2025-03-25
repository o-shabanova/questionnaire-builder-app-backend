const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const quizzes = [
    {
        id: '1',
        name: 'JavaScript Basics',
        description: 'Test your knowledge of JavaScript fundamentals including variables, functions, and basic syntax.',
        questionCount: 17,
        completionCount: 156
    },
    {
        id: '2',
        name: 'React Fundamentals',
        description: 'Evaluate your understanding of React components, state management, and lifecycle methods.',
        questionCount: 17,
        completionCount: 98
    },
    {
        id: '3',
        name: 'TypeScript Quiz',
        description: 'Check your TypeScript skills including interfaces, types, generics, and type assertions.',
        questionCount: 17,
        completionCount: 72
    }
];

app.get('/quizzes', (req, res) => {
    res.json(quizzes);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});