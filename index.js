const express = require('express');
const reload = require('reload');

const app = express();

reload(app);
app.set('view engine', 'ejs');
// app.set('views', './views');
app.use(express.static('public'));

const arrPerson = [
    { name: 'Teo', age: 10 },
    { name: 'Ti', age: 15 },
    { name: 'Tun', age: 20 }
]

app.get('/', (req, res) => {
    res.render('home', { name: 'Pho', isAdmin: true, arrPerson });
});
app.listen(3000, () => console.log('Server started!'));
