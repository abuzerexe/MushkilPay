import express from "express"
import cors from "cors"
const port = 3000;

const app = express();

app.use(cors());
app.use(express.json());

import rootRouter from "./routes/index.js"

app.use("/api/v1", rootRouter);




app.listen(port,()=>{
    console.log(`Server Running on port ${port}`);
})


