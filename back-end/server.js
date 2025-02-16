// require('dotenv').config(); // Load environment variables
const express = require('express');
const { createClient } = require('@supabase/supabase-js');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Initialize Supabase client with environment variables
const supabaseUrl = "postgresql://postgres:giridhar1105@db.umounynznyxkpwfeeupg.supabase.co:5432/postgres";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVtb3VueW56bnl4a3B3ZmVldXBnIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczOTY5NTQ2NywiZXhwIjoyMDU1MjcxNDY3fQ.tZ8hweO2dCFVMJasmAJsNbfxpD2sAq_o8S0PGPN0H_I";
const supabase = createClient(supabaseUrl, supabaseKey);

// Signup endpoint
app.post('/api/signup', async (req, res) => {
    const { fullName, email, password, phone } = req.body;

    if (!fullName || !email || !password || !phone) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        // Check if the user already exists
        const { data: existingUser } = await supabase
            .from('users')
            .select('id')
            .eq('email', email)
            .single();

        if (existingUser) {
            return res.status(400).json({ error: 'Email is already registered' });
        }

        // Hash the password before saving it

        const { data, error } = await supabase
            .from('users')
            .insert([
                {
                    full_name: fullName,
                    email: email,
                    password: password, // Store the hashed password
                    phone: phone
                }
            ])
            .single();

        if (error) {
            return res.status(500).json({ error: error.message });
        }

        res.status(200).json({ message: 'User created successfully', user: data });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
