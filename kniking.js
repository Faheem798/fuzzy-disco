import express from "express";
import mongoose from "mongoose";
import path from 'path';
import cookieParser from "cookie-parser";
mongoose.connect('mongodb://127.0.0.1:27017/backend', {
    // useNewUrlParser: true,
    // useUnifiedTopology: true
})
.then(() => {
    console.log('Database connected');
})
.catch((err) => {
    console.error("Database connection error:", err);
});
const messageSchema = new mongoose.Schema({
    name: String,
    email: String,
    Password: String
});
const Message = mongoose.model('Message', messageSchema);

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())

app.set('view engine', 'ejs');

app.get('/success', (req, res) => {
    res.render('success.ejs');
});

app.get('/', (req, res) => {
    res.render('login');
});

app.post('/login', async (req, res) => {
    res.cookie('token', 'kingg',
    {httpOnly : false, expires: new Date(Date.now()*60*1000)} );
    res.redirect('/');
});

app.get('/logout', (req, res) => {
    res.cookie('token', null,   {httpOnly : false, expires: new Date(Date.now())} ); // Clear the cookie by setting it to an empty string
    const {token} = req.cookies;


    if (token) {
        res.render('logout'); // Render the logout template
    } else {
        res.render('login'); // Render the login template
    }
});


    // console.log(req.body);
    // const messgData = { name: req.body.name, email: req.body.email ,Password: req.body.Password };
    // await Message.create(messgData)
    // .then(() => {
    //     res.redirect('/success');
    // })
    // .catch((err) => {
    //     console.error("Error creating message:", err);
    //     res.redirect('/success'); // Redirect to the success page even in case of an error
    // });


app.get('/users', (req, res) => {
    res.json({ users });
});
app.listen(3000, () => {
    console.log("Server is working damn");
});
