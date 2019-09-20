
module.exports = function CricketScoreKeeper() {
  let maxOvers = 6;
  let currentScore = 0;
  let totalWicketsAvail = 10;

  function setScore(scoreForOver) {
    let scores = scoreForOver.split('')

    if(maxOvers <= 0) { return }
    if(totalWicketsAvail <= 0) { return }
    
    for(let score of scores) {
      if(score === 'w') {
        totalWicketsAvail--
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


 
  return {
    setScore,
    getMaxOvers,
    setMaxOvers,
    getCurrentScore,
    getWicketsAvailable
  }
}