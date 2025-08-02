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

router.post('/addUsers', async (req, res) => {
 const userModel = {
    first_name:req.body.first_name,
    last_name:req.body.last_name,
    email:req.body.email,
    gender:req.body.gender,
    profile_picture:req.file.path
 }

const user = await userService.createUser(userModel);
return res.status(201).json(user);

});

router.get('/getAllUsers', async (req, res) => {
  const users = await userService.getAllUsers();
  return res.status(200).json(users);
});


router.get('/getByIdUser', async (req, res) => {
  const user = await userService.getUserById(req.params.id);
  return res.status(200).json(user);
});

router.delete('/deleteUser/:id', async (req, res) => {
  const user = await userService.deleteUser(req.params.id);
  return res.status(200).json(user);
});


router.put('/updateUser/:id', async (req, res) => {
  const userModel = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    gender: req.body.gender,
    profile_picture: req.file.path
  }
  const user = await userService.updateUser(req.params.id, userModel);
  return res.status(200).json(user);
});

export default router;