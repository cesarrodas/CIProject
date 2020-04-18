import { v4 as uuidv4 } from 'uuid';
import md5 from 'md5';
import User from '../Schemas/userSchema';
import connectDB from '../connect-db';


export const addUser = async (userData) => {
  const db = await connectDB();
  db.once('open', () => {
    const newUser = new User({
      name: userData.name,
      id: uuidv4(),
      hashedPassword: md5(userData.password),
    });
    newUser.save((err, user) => {
      if (err) { return err; }
      return user;
    });
  });
};

export const updateUser = async (userData) => {
  const db = await connectDB();
  db.once('open', () => {
    User.updateOne({ id: userData.id }, userData, (err, res) => {
      if (err) { return err; }
      return res;
    });
  });
};

const deleteUser = async (userData) => {
  const db = await connectDB();
  db.once('open', () => {
    User.deleteOne({ id: userData.id }, (err, res) => {
      if (err) { return err; }
      return res;
    });
  });
};

export default userRoutes = async (app) => {
  app.post('/user/new', async (req, res) => {
    const { user } = req.body;
    await addUser(user);
    res.status(203).send();
  });

  app.post('/user/update', async (req, res) => {
    const { user } = req.body;
    await updateUser(user);
    res.status(200).send();
  });

  app.post('/user/delete', async (req, res) => {
    const { user } = req.body;
    await deleteUser(user);
    res.status(200).send();
  });
};
