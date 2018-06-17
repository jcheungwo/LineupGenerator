/*
  Input:Object
        Object.keys.length = 5
        QB must be at least 1
        RB must be at least 2
        WR must be at least 3
        TE must be at least 1
        RB + WR + TE must be at least 7
        DEF must be at least 1
*/

let inputPlayers = [
  [{score: 10, price: 10}, {score: 15, price: 12}, {score: 13, price: 12}],
  [{score: 12, price: 8}, {score: 25, price: 10}, {score: 15, price: 12}],
  [{score: 13, price: 10}, {score: 13, price: 11}, {score: 20, price: 16}],
  [{score: 8, price: 7}, {score: 6, price: 4}, {score: 12, price: 11}],
  [{score: 6, price: 4}, {score: 4, price: 5}]
]

function lineupGenerator(inputPlayers, lineups, limit) {
  let input = [];
  inputPlayers.map((position) => {
    input.push(position.sort((a, b) => a.score / a.price - b.score / b.price))
  })
  return input
}

console.log(lineupGenerator(inputPlayers))
module.exports = lineupGenerator;