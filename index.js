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

app.get('/', (req, res, next) => {
    try {
        res.render('index', {
            maximumOvers: cricketScoreKeeper.getMaxOvers(),
            availableWickets: cricketScoreKeeper.getWicketsAvailable(),
            scoreTotal: cricketScoreKeeper.getCurrentScore(),
        });
    }
    catch(error) {
        next(error)
    }
}) 

app.post('/add/', (req, res, next) => {
    try{
        cricketScoreKeeper.setScore(req.body.score);
    } 
    catch(error) {
        next(error);
    }
    res.redirect('/');
});

app.post('/maximum', (req, res, next) => {
    try{
        cricketScoreKeeper.setMaxOvers(req.body.maximum);
    } 
    catch(error) {
        next(error);
    }
    res.redirect('/');
});

app.get('/:current_score/:wickets_fallen', (req, res, next) => {
    try {
        let current_score = req.params.current_score;
        let wickets_fallen = req.params.wickets_fallen;

        cricketScoreKeeper.setScoresFor(current_score, wickets_fallen)

        res.render('scoreFor', {
            scoresFor: cricketScoreKeeper.getScoresFor()
        });
        
    } catch (error) {
        next(error)
    }
});

app.get('/reset', (req, res, next) => {
    try {
        cricketScoreKeeper.reset();
    } catch (error) {
        next(error)
    }

    res.redirect('/');
})

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});
