const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs'
});

app.engine('hbs', hbs.engine); // регистрируем в express движок hbs
app.set('view engine', 'hbs'); // используем движок
app.set('views', 'templates'); // отслеживать папку с шаблонами

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/about', (req, res) => {
  res.render('about');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
});