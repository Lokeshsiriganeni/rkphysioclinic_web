import express from "express";
import mysql from "mysql2";
import dotenv from "dotenv";
import cors from "cors";
import nodemailer from "nodemailer";
import twilio from "twilio";

dotenv.config();

const app = express();
app.use(express.json());

// Create MySQL connection
// const db = mysql.createConnection({
//   host: process.env.DB_HOST, // 127.0.0.1
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
//   port: process.env.DB_PORT,
// });

// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: "lokeshsiriganeni7288@gmail.com",
//     pass: "L0kesh#098",
//   },
// });

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true only for 465
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.error("❌ Email config error:", error);
  } else {
    console.log("✅ Email server ready");
  }
});

app.use(
  cors({
    origin: "https://rkphysioclinic-web.onrender.com",
    credentials: true,
  }),
);

const db = mysql.createConnection({
  host: "https://rkphysioclinic-web.onrender.com",
  user: "root",
  password: "Lokesh#098",
  database: "food_subscription",
  port: 3307,
});

db.connect((err) => {
  if (err) {
    console.error("❌ MySQL Connection Failed:", err.message);
    return;
  }
  console.log("✅ MySQL Connected Successfully");
});

app.get("/api/users", (req, res) => {
  db.query("SELECT * FROM users", (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

app.post("/api/appointment", async (req, res) => {
  const { name, email, phone, date, time, reason } = req.body;

  try {
    console.log("testing");

    // 📧 Send Email
    await transporter.sendMail({
      from: `"Appointment App" <${process.env.EMAIL_USER}>`,
      to: "lokeshsiriganeni123@gmail.com",
      subject: "Appointment Confirmation",
      html: `
        <h3>Appointment Booked</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Date:</b> ${date}</p>
        <p><b>Time:</b> ${time}</p>
        <p><b>Reason:</b> ${reason}</p>
      `,
    });

    // 💬 Send WhatsApp

    res.status(200).json({ message: "Appointment booked" });
  } catch (error) {
    res.status(500).json({ error: "Failed to book appointment" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
