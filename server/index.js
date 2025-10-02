import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// route
app.post('/api/about', async (req, res) => {
    const { name } = req.body;

    if (name === 'saurabh') {
        return res.json({ message: "kya bolti public !!!" });
    } else if (name === "sania") {
        return res.json({ message: "lessgooooooo !!!" });
    } else {
        return res.json({ message: "bsdk kya bheja h kuch nahi h yaha" });
    }
});

app.listen(PORT, () => {
    console.log(`Server up and Running on ${PORT}☑️`);
});
