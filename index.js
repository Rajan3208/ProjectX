const {onRequest} = require("firebase-functions/v2/https");
const admin = require("firebase-admin");
const serviceAccount = require("./permissions.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();
const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors({origin: true}));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from Firebase!");
});

app.get("/api/news/:id", async (req, res) => {
  try {
    const doc = await db.collection("news").doc(req.params.id).get();
    if (!doc.exists) {
      return res.status(404).json({
        success: false,
        error: "News not found",
      });
    }
    return res.status(200).json({
      success: true,
      data: doc.data(),
    });
  } catch (error) {
    console.error("Error getting document:", error);
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

app.get("/api/news", async (req, res) => {
  try {
    const querySnapshot = await db.collection("news").get();
    const news = [];
    querySnapshot.forEach((doc) => {
      news.push({id: doc.id, ...doc.data()});
    });
    return res.status(200).json({
      success: true,
      data: news,
    });
  } catch (error) {
    console.error("Error getting documents:", error);
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

app.post("/api/news", async (req, res) => {
  try {
    const docId = req.body.id || Date.now().toString();
    const newsData = {
      title: req.body.title,
      description: req.body.description,
      source: req.body.source,
      time: req.body.time,
      imageUrl: req.body.imageUrl,
      createdAt: new Date(),
    };

    await db.collection("news").doc(docId).set(newsData);

    return res.status(201).json({
      success: true,
      message: "News added successfully",
      docId,
    });
  } catch (error) {
    console.error("Error adding document:", error);
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

app.put("/api/news/:id", async (req, res) => {
  try {
    const updates = {
      title: req.body.title,
      description: req.body.description,
      source: req.body.source,
      time: req.body.time,
      imageUrl: req.body.imageUrl,
      updatedAt: new Date(),
    };

    await db.collection("news").doc(req.params.id).update(updates);

    return res.status(200).json({
      success: true,
      message: "News updated successfully",
    });
  } catch (error) {
    console.error("Error updating document:", error);
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

app.delete("/api/news/:id", async (req, res) => {
  try {
    await db.collection("news").doc(req.params.id).delete();
    return res.status(200).json({
      success: true,
      message: "News deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting document:", error);
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

exports.app = onRequest(app);
