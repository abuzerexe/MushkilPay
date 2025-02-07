const express = require("express");
const cors = require("cors")
const port = 3000;

const app = express();

app.use(cors());
app.use(express.json());

const rootRouter = require("./routes")
app.use("api/v1", rootRouter);


app.listen(port,()=>{
    console.log(`Server Running on port ${port}`);
})


