import express from 'express';
let router = express.Router();
import userService from '../services/UserService.js';
import multer from 'multer';
import process from 'process';
import { profile } from 'console';


// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, './images');
  },
  filename: (req, file, callback) => {
    callback(null, req.body.first_name + '-' + file.originalname+ '-' + Date.now()+file.originalname);
  }
});

const upload = multer({ storage: storage }).single('file');

router.post('/addUser', async function (req, res)  {
  
  upload(req, res, async (err) => {

 const userModel = {
    first_name:req.body.first_name,
    last_name:req.body.last_name,
    email:req.body.email,
    gender:req.body.gender,
    profile_picture:req.file.path
 }

 if (err) {
    return res.status(500).json({ error: 'Error uploading file' });
  }

  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

      const user = await userService.saveUser(userModel);
      return res.status(201).json(user);

  });

});

router.get("/user/:id", async function (req, res) {
    const user = await userService.getUserById(req.params.id);
    return res.status(200).json(user);
});

router.get('/getAllUsers', async function(req, res)  {
  const users = await userService.getAllUsers();
  return res.status(200).json(users);
});


router.get('/getByIdUser', async function (req, res)  {
  const user = await userService.getUserById(req.params.id);
  return res.status(200).json(user);
});

router.delete('/deleteUser/:id', async function(req, res)  {
  const user = await userService.deleteUser(req.params.id);
  return res.status(200).json(user);
});


router.put('/updateUser/:id', async function (req, res) {
   upload(req, res, async (err) => {
  const userModel = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    gender: req.body.gender,
    profile_picture: req.file.path
  }
   if (err) {
    return res.status(500).json({ error: 'Error uploading file' });
  }

  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }
  const user = await userService.updateUser(req.params.id, userModel);
  return res.status(200).json(user);
  });
});

router.get('/userImage/:id', async function (req, res)  {
  const user = await userService.getUserById(req.params.id);
  res.sendFile(process.cwd() + '\\' + user.profile_picture)
  
});

export default router;