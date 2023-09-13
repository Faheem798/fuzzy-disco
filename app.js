import express from "express";
import mongoose from "mongoose";
const app = express();

mongoose
  .connect("mongodb://127.0.0.1:27017", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database Connected"))
  .catch((e) => console.log(e));
  app.use(express.json())

const mongoSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});
const User = mongoose.model('users', mongoSchema);
app.post('/users/new', async (req, res) => {
  const {name,email,password} = req.body 
  const king = await User.create({
    name,
    email,
    password
  })
  res.status(201).cookie('fingle', 'jingle').json({
    success: true,
    message: "every thins is good",
       king,
      });

});



// app.post('/users/all', async (req, res) => {
//   const user = await User.create({
//     name: 'faheem',
//     email: 'rational23@gmail.com',
//     password: 'sdkfjieorhgt',
//   });

//   res.json({
//  success: true,
//     user,
//   });
// });

app.listen(3000, () => {
  console.log('Server is working');
});




