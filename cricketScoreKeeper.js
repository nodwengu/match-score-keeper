
module.exports = function CricketScoreKeeper() {
  let maxOvers = 6;
  let currentScore = 0;
  let totalWicketsAvail = 10;
  let fallenWickets = 0;
  let scoresFor = {};

  function setScore(scoreForOver) {
    let scores = scoreForOver.split('')

    // if(scores.length > 5){ return }
    // if(maxOvers <= 0) { return }
    // if(totalWicketsAvail <= 0) { return }
    
    for(let score of scores) {
      if(score === 'w') {
        totalWicketsAvail--
        fallenWickets++
      } else if(score === '-'){
        currentScore = currentScore
      } else {
        currentScore += Number(score);
      }
    }
    maxOvers--;
  }

  function setMaxOvers(max) {
    maxOvers = max;
  }

  function getMaxOvers() {
    return maxOvers
  }

  function getCurrentScore() {
    return currentScore;
  }

  function getWicketsAvailable() {
    return totalWicketsAvail;
  }

  function getFallenWickets() {
    return fallenWickets;
  }

  function setScoresFor(score, fallen) {
    scoresFor = {
      score,
      fallen
    }
  }

  function getScoresFor() {
    return scoresFor;
  }

  function reset() {
    maxOvers = 6;
    currentScore = 0;
    totalWicketsAvail = 10;
    fallenWickets = 0;
  }

 
  return {
    setScore,
    getMaxOvers,
    setMaxOvers,
    getCurrentScore,
    getWicketsAvailable,
    getFallenWickets,
    getScoresFor,
    setScoresFor,
    reset
  }
}