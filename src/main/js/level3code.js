import Rx from 'rx';
import Immutable from 'immutable';

var code = {
    //Monkeys and Coconuts https://youtu.be/U9qU20VmvaU?t=43s
    //
    //<n> sailors are stranded on a desert island with one monkey.
    //The sailors gather coconuts into a pile and go to sleep.
    //
    //That night (without the knowledge of the others) each sailor in turn
    //separates out equal shares of coconuts with one left over (which they throw to the monkey)
    //then they hide their own share and throw the rest back on the pile.
    //
    //The next morning, they all separate the remaining pile and there are no coconuts left for the monkey.
    //How many coconuts did they have in the pile the night before?
    monkeysAndCoconuts: function(sailors) {
        throw new Error("Not Implemented");
    },
    // A standard Sudoku puzzle contains 81 cells, in a 9 by 9 grid, and has 9 zones, each zone being the
    // intersection of 3 rows and 3 columns. Each cell may contain a number from one to nine; each number
    // can only occur once in each zone, row, and column of the grid. At the beginning of the game, many
    // cells begin with numbers in them, and the goal is to fill in the remaining cells. -- wikipedia

    // Solve any 9x9 Sudoku board that is input as an array.
    // Array values of 0 represent cells that must be solved for.
    // Array values > 0 must not be modified.
    // To solve: each number 1-9 must exist exactly 9 times, and never in the same row or same column as its self
    // The only valid values are 1-9
    // The more elegant the approach the better
    solveSudoku: function (arrBoard) {
        throw new Error("Not Implemented");
    },

    // Little Alchemy https://littlealchemy.com/
    //
    // Little Alchemy is a game where you combine elements to create other elements. For example,
    // earth + fire = lava; lava + earth = volcano.
    // Sometimes, combining two elements results in two or more elements. For example,
    // bird + rainbow = peacock, toucan; zombie + human = zombie, zombie.
    // You start with 4 base elements: earth, air, fire, water.
    //
    // The goal of this task is to produce a list of all possible elements that can be created by combining
    // two elements. Focus on calling combine() the fewest times possible.
    // There are 540 possible elements, but your code doesn't know that.
    // You are not allowed to access the Little Alchemy or Recipes libraries directly.
    //
    // baseElements: An array of earth, air, fire, water.
    // combine(element1, element2): Returns an array of elements resulting from combination.
    // Example: combine("earth", "fire") = ["lava"]
    // Example: combine("bird", "rainbow") = ["peacock", "toucan"]
    // Example: combine("peacock", "lava") = []
    deriveAllElements: function(baseElements, combine) {
        throw new Error("Not Implemented");
    }
}
module.exports = code;