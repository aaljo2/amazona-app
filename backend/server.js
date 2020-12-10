import express from 'express';
import data from './data.js';


const app = express();

app.use('/api/products', (req,res)=>{
  res.send(data.products);
});


app.get("/",(req,res)=>{
  res.send("서버실행중");
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
