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
];

app.get('/', (req, res) => {
    res.render('home', { name: 'Pho', isAdmin: true, arrPerson });
});

app.get('/remove/:name', (req, res) => {
    const { name } = req.params;
    const index = arrPerson.findIndex(person => person.name === name);
    if (index !== -1) arrPerson.splice(index, 1);
    res.redirect('/');
});

app.get('/add/:name/:age', (req, res) => {
    const { name, age } = req.params;
    arrPerson.push({ name, age });
    res.redirect('/');
});

app.get('*', (req, res) => res.redirect('/'));

app.listen(3000, () => console.log('Server started!'));
