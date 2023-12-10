import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const apiKey = "MTMxNjc1XzE3MDA3NjU4NjVfZGY4NTBlZDBhNmZlOWVjZDU4ZDNlMGQ2MjZjMmNiYjVlOTdhZjg5YQ==";
const apiURL="https://www.scorebat.com/video-api/v3/feed/?token=";
app.use(express.static('public'));

app.get("/", async (req,res)=>{
    const respo = await axios.get(apiURL+apiKey);
    const result = respo.data;
  //  console.log(result.response[0].videos[0].embed);
  //  console.log(result);
    res.render("index.ejs",{
      title:result.response,
    });
    
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });