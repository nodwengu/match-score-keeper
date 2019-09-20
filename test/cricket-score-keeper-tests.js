const assert = require('assert');
const CricketScoreKeeper = require('../cricketScoreKeeper');

describe('Match Score Keeper Function ', () => {
  
  it('Should be able to set and return overs', () => {
    const cricketScoreKeeper = CricketScoreKeeper();

    cricketScoreKeeper.setMaxOvers(10);
    assert.equal(10, cricketScoreKeeper.getMaxOvers());
  })

  it('Should be able to set and return the current score', () => {
    const cricketScoreKeeper = CricketScoreKeeper();

    cricketScoreKeeper.setScore('1-11-2');
    assert.equal(5, cricketScoreKeeper.getCurrentScore());
  })

  it('Should be able to set and return the available wickets', () => {
    const cricketScoreKeeper = CricketScoreKeeper();

    cricketScoreKeeper.setScore('1-ww-2');
    assert.equal(8, cricketScoreKeeper.getWicketsAvailable());
  })

  it('Should be able to return 0 if there is no score', () => {
    const cricketScoreKeeper = CricketScoreKeeper();

    cricketScoreKeeper.setScore('------');
    assert.equal(0, cricketScoreKeeper.getCurrentScore());
  })


  
})

