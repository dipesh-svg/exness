import express from "express";
import cors from "cors";
import routes from "./routes";
import { RUNTIME_CONFIG } from "./libs/runtime-config";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/v1", routes);

const PORT = RUNTIME_CONFIG.PORT || 3001;
app.listen(PORT, () => {
    console.log(`API Service listening on port ${PORT}`);
});
