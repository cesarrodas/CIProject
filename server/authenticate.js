import { v4 as uuidv4 } from 'uuid';
import md5 from 'md5';
import { connectDB } from './connect-db'; 

import { User } from './Schemas/userSchema';

export const authenticateRoute = (app) => {
  app.post('/authenticate', async (req, res) => {
    let { username, password } = req.body;
    let db = connectDB();

    let user = User.find({ name: username });

    if(!user) {
      return res.status(500).send("User and password combination not found.");
    }

    let hash = md5(password);
    let passwordCorrect = (hash === user.hashedPassword);

    if(!passwordCorrect){
      return res.status(500).send("User and password combination not found.");
    }

    
  });
}