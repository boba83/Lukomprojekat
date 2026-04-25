import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Jednostavan kontakt endpoint: samo loguje poruku i vraća uspeh
app.post('/api/contact', (req, res) => {
  console.log('Received contact message:', req.body);
  res.json({ success: true, message: 'Message received' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});