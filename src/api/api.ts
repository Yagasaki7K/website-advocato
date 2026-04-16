import express from "express";
import "dotenv/config";

const app = express();

app.use(express.json());

app.get("/comunicacao?numeroProcesso=:numero", async (req, res) => {
    const { numero } = req.params;
    const apiUrl = process.env.API_URL!.replace("NUMERO", numero);
    const response = await fetch(apiUrl);
    const data = await response.json();

    res.send(data);
});

app.listen(3000, () => {
    console.log("Server running, all checked!");
});
