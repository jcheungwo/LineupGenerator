var assert = require('assert');
var lineupGenerator = require('./lineupGenerator')
var { uniqueCheck } = require('./testHelper')

describe('Lineups', function(){
  let qb = [];
  let rb = [];
  let wr = [];
  let te = [];
  let def = [];
  let dummyData = [qb, rb, wr, te, def];
  let testResult = lineupGenerator(dummyData)[0];
  describe('Single Lineup should be valid', function() {
    it('Should return an array', function(){
      assert.equal(Array.isArray(testResult), true);
    });

    it('Should return an array with length 9', function(){
      assert.equal(testResult.length), 9);
    });

    it('Should return a QB at 0th index', function(){
      assert.equal(qb.includes(testResult[0]), true);
    });

    it('Should return a RB at 1st and 2nd index', function(){
      assert.equal(rb.includes(testResult[1] && rb.includes(testResult[2])), true);
    });

    it('RB should be unique', function(){
      assert.equal(testResult[1] !== testResult[2], true);
    });

    it('Should return a WR at 3rd, 4th, and 5th index', function(){
      assert.equal(wr.includes(testResult[3]) && wr.includes(testResult[4]) && wr.includes(testResult[5]), true);
    });

    it('WR should be unique', function(){
      assert.equal(uniqueCheck([testResult[3], testResult[4], testResult[5]]), true);
    });

    it('Should return a TE at 6th index', function(){
      assert.equal(te.includes(testResult[6]), true);
    });

    it('Should return a RB, WR, or TE at 7th index', function(){
      assert.equal(rb.includes(testResult[7]) || wr.includes(testResult[7]) || te.includes(testResult[7]), true);
    });

    it('UTIL should be unique', function(){
      assert.equal(uniqueCheck([testResult[1], testResult[2], testResult[3], testResult[4], testResult[5], testResult[6], testResult[7]]), true);
    });

    it('Should return a DEF at 8th index', function(){
      assert.equal(def.includes(testResult[8]), true);
    });
  })
});