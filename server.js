const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

// In-memory storage for scores (in production, you'd use a database)
let scores = [];

app.use(cors());
app.use(express.json());
app.use(express.static('.')); // Serve static files from current directory

// Get top 10 scores
app.get('/api/leaderboard', (req, res) => {
    const topScores = scores
        .sort((a, b) => b.score - a.score)
        .slice(0, 10);
    res.json(topScores);
});

// Submit a new score
app.post('/api/scores', (req, res) => {
    const { username, score } = req.body;
    
    if (!username || !score) {
        return res.status(400).json({ error: 'Username and score are required' });
    }

    // Sanitize username and convert score to number
    const sanitizedUsername = username.trim().slice(0, 20);
    const numericScore = Number(score);

    if (isNaN(numericScore)) {
        return res.status(400).json({ error: 'Invalid score' });
    }

    // Add new score
    scores.push({
        username: sanitizedUsername,
        score: numericScore,
        timestamp: Date.now()
    });

    // Keep only top 100 scores to manage memory
    scores = scores
        .sort((a, b) => b.score - a.score)
        .slice(0, 100);

    res.json({ success: true });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
}); 