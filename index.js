const express = require('express');
const ejs = require('ejs')

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use('/', require('./routes/index'));


app.set('view engine', 'ejs');
app.set('views', './views');


app.use(express.static('public'));
app.listen(1234, ()=>{
	console.log(`app running on port 1234`);
})
