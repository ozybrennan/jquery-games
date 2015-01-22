(function () {
  if (typeof TTT === "undefined") {
    window.TTT = {};
  }

  var View = TTT.View = function (game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
  };

  View.prototype.bindEvents = function () {
    var that = this
    $("li").on("click", function(event) {
      var $currentTarget = $(event.currentTarget);
      try {
        that.game.playMove($currentTarget.data("pos"));
      }
      catch (e) {
        alert("Someone already clicked there!");
      }
      that.makeMove($currentTarget);
      if (that.game.isOver()) {
        var winner = that.game.winner()
        $("li").off("click"); 
        if (winner === null) {
          alert("It's a draw!")
        } else {
          alert(winner + " wins!")
        }
      }
    })

  };

  View.prototype.makeMove = function ($square) {
    var pos = $square.data("pos")
    var mark = this.game.board.grid[pos[0]][pos[1]]
    $square.css(
    {"background": "white", "font-size": "80px", "text-align": "center"}
    )
    if (mark === "x") {
      $square.text("X")
      $square.css("color", "red")
    } else {
      $square.text("O")
      $square.css("color", "black")
    }
  };

  View.prototype.setupBoard = function () {

    for (var i=0;i<3; i++) {
      var $i = $("<div></div>")
      for (var j = 0; j <3; j++) {
        var $j = $("<li></li>");
        $j.data("pos", [i, j]);
        $i.append($j);

      }
      this.$el.append($i)
    }
  };
})();
