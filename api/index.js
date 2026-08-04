const express = require("express");
const cors = require("cors");
const { createClient } = require("@supabase/supabase-js");

const app = express();
app.use(cors());
app.use(express.json());

// Initialize Supabase with your unique credentials
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// Route to handle inserting data into the database
app.post("/api/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    // Insert form fields directly into your cloud table
    const { data, error } = await supabase.from("messages").insert([
      {
        name,
        email,
        subject,
        message,
        created_at: new Date(),
      },
    ]);

    if (error) {
      console.error("Database Insert Error:", error);
      return res.status(400).json({ error: error.message });
    }

    return res
      .status(200)
      .json({ success: true, message: "Data saved directly to your DB!" });
  } catch (err) {
    console.error("Server Connection Error:", err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = app;
