import express from 'express';
import pkg from 'pg';
import cors from 'cors';

const { Pool } = pkg;
const app = express();
const port = 5000;

// Middleware setup
app.use(cors());
app.use(express.json());

// PostgreSQL connection pool setup
const pool = new Pool({
  connectionString: "postgresql://postgres:giridhar1105@db.umounynznyxkpwfeeupg.supabase.co:5432/postgres",
});

// Signup API to create a new user
app.post('/api/signup', async (req, res) => {
  const { fullName, email, password, phone } = req.body;

  // Basic validation
  if (!fullName || !email || !password || !phone) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    // Query to insert user into the users table
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

// API to get user profile by ID
app.get('/api/profile/:id', async (req, res) => {
  const { id } = req.params;

  try {
    // Query to fetch user details by ID
    const query = `
      SELECT full_name, email, phone
      FROM users
      WHERE id = $1;
    `;
    const result = await pool.query(query, [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }

    const user = result.rows[0];

    return res.status(200).json(user);
  } catch (error) {
    console.error('Error fetching user:', error);
    return res.status(500).json({ error: 'Failed to fetch user' });
  }
});

// Start the server and connect to the database
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  console.log('Database connection established.');
});
