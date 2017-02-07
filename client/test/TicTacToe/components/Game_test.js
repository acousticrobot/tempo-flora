import {expect} from 'chai';
import Game from './../../../app/bundles/TicTacToe/components/Game';

describe("Game", ()=>  {
  describe("initial state", ()=> {

    var game;
    beforeEach(()=>{
      game = new Game();
    });

    it("should have a history with one entry", ()=>  {
      expect(game.state.history.length).to.equal(1);
      expect(game.state.history[0].squares).to.deep.equal(Array(9).fill(null));
    });

    it("should start with x as the first player", ()=> {
      expect(game.state.xIsNext).to.beTrue;
    });

    it("should start on step number 0", ()=> {
      expect(game.state.stepNumber).to.equal(0);
    });
  });

  describe("handleClick()", ()=> {

  });
});
