import express from "express";
import "dotenv/config";
import axios from "axios";

const app = express();

app.use(express.json());

app.get("/processos-judiciais/:numero", async (req, res) => {
  const { numero } = req.params;
  const apiUrl = process.env.API_URL!.replace("NUMERO", numero);
  const { data } = await axios.get(apiUrl);

  res.send(data);
});

app.listen(3000, () => {
  console.log("Server running, all checked!");
});
