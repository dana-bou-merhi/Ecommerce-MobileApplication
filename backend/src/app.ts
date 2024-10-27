import express from 'express';
import cors from "cors";
import verifyToken,{CustomRequest} from './firebaseauth/tokenauth';
import { auth } from './firebaseauth/firebaseadmin';

const app = express();
const PORT = process.env.PORT || 4550;

app.use(express.json());
app.use(cors());

app.get('/protected', verifyToken, (req:CustomRequest, res) => {
    const user = req.user;
  
    res.json({
      message: 'This is a protected route',
      user: user,
    });
  });
  
  

  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));