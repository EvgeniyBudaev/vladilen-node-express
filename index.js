const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const homeRoutes = require('./routes/home');
const coursesRoutes = require('./routes/courses');
const addRoutes = require('./routes/add');
const cartRoutes = require('./routes/cart');

const app = express();

const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs'
});

app.engine('hbs', hbs.engine); // регистрируем в express движок hbs
app.set('view engine', 'hbs'); // используем движок
app.set('views', 'templates'); // отслеживать папку с шаблонами

app.use(express.static(path.join(__dirname, 'public'))); // подключаем статику
app.use(express.urlencoded({extended: true}))

// регистрация роутовов
app.use('/', homeRoutes);
app.use('/courses', coursesRoutes);
app.use('/add', addRoutes);
app.use('/cart', cartRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
});