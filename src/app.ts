import "reflect-metadata"
import express from 'express';
import cors from 'cors'
import controller from './Presentation/controller';

const app = express();

const corsOptions = {
  origin: 'http://localhost:5173', 
};

app.use(cors(corsOptions)); 
app.use(express.json()); 

app.post('/api', controller);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
