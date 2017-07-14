describe("Player", function() {
  var player;

  beforeEach(function() {
    player = new Player();
  });

  it('can keep the plaayer identity as X or O', function() {
    expect((player.getName() == 'X') || (player.getName() == 'O')).toBe(true);
  });


});
