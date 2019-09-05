const express = require('express');
const authRoutes = require('./routes/auth-routes');
const app = express();

//view engine
app.set('view engine', 'ejs');

// //home page
// app.get('/', (req, res) => {
//     res.send(`<h1 style="color: blue; text-align: center">Just Love Krsna!<h2>`);
// })

//set up routes with condition
app.use('/auth', authRoutes)

//home page from template
app.get('/', (req, res) => {
    res.render(`Home`);
})

app.listen(3000, () => {
    console.log('Listening to port 3000')
})