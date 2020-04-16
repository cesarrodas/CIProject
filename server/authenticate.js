// import { v4 as uuidv4 } from 'uuid';
import md5 from 'md5';
import connectDB from './connect-db';

import User from './Schemas/userSchema';

const authenticateRoute = (app) => {
  app.post('/authenticate', async (req, res) => {
    const { username, password } = req.body;
    connectDB();

    const user = User.find({ name: username });

    if (!user) {
      return res.status(500).send('User and password combination not found.');
    }

    const hash = md5(password);
    const passwordCorrect = (hash === user.hashedPassword);

    if (!passwordCorrect) {
      return res.status(500).send('User and password combination not found.');
    }

    const token = 1;

    return res.send({ token });
  });
};

export default authenticateRoute;
