const express = require('express');
const exphbs = require('express-handlebars');
const homeRoutes = require('./routes/home');
const coursesRoutes = require('./routes/courses');
const addRoutes = require('./routes/add');

const app = express();

const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs'
});

app.engine('hbs', hbs.engine); // регистрируем в express движок hbs
app.set('view engine', 'hbs'); // используем движок
app.set('views', 'templates'); // отслеживать папку с шаблонами

app.use(express.static('public')); // подключаем статику
app.use(express.urlencoded({extended: true}))

app.use('/', homeRoutes); // регистрация роутов
app.use('/courses', coursesRoutes);
app.use('/add', addRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
});