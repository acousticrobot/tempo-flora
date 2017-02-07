import {expect} from 'chai';
import Game from './../../../app/bundles/TicTacToe/components/Game';

describe("Game", ()=> {
  it("sets an initial state", ()=> {
    var game = new Game();
    expect(game.state.history.length).to.equal(1);
    expect(game.state.history[0].squares).to.deep.equal(Array(9).fill(null));
  });
});
