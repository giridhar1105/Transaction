import express from 'express';
import pkg from 'pg';
const { Pool } = pkg;
import cors from 'cors';
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const pool = new Pool({
  connectionString: "postgresql://postgres:giridhar1105@db.umounynznyxkpwfeeupg.supabase.co:5432/postgres",
  ssl: { rejectUnauthorized: false },
});

app.post('/api/signup', async (req, res) => {
  const { fullName, email, password, phone } = req.body;

  if (!fullName || !email || !password || !phone) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const query = `
      INSERT INTO users (full_name, email, password, phone)
      VALUES ($1, $2, $3, $4)
      RETURNING id, full_name, email, phone;
    `;
    const values = [fullName, email, password, phone];

    const result = await pool.query(query, values);

    const user = result.rows[0];

    return res.status(200).json({
      message: 'User created successfully',
      user, 
    });
  } catch (error) {
    console.error('Error creating user:', error);
    return res.status(500).json({ error: 'Failed to create user' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  console.log(`Database connection established.`);
});
