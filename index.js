const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const CricketScoreKeeper = require('./cricketScoreKeeper');

const cricketScoreKeeper = CricketScoreKeeper();

const app = express();

//Configuring express handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())







app.get('/', (req, res) => {
    res.render('index', {
      
    });
}) 

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});
