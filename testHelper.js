function uniqueCheck(players) {
  let set = new Set;
  for (let i = 0; i < players.length; i++) {
    if (set.has(players[i].name)) {
      return false;
    }
    else {
      set.add(players[i].name);
    }
  }
  return true;
}

module.exports = {
  uniqueCheck
}