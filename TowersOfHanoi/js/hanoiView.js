(function() {
  if (typeof Hanoi === "undefined") {
    window.Hanoi = {};
  }

  var View = Hanoi.View = function(game, $el) {
    this.$el = $el;
    this.game = game;
    this.startTower = null;
    this.render();
  }

  View.prototype.render = function() {
    $( "div" ).remove();
    for(i=0;i<3;i++) {
      var $stack = $("<div></div>");
      for(j=0; j<3; j++) {
        var $piece = $("<li></li>");
        var disc = this.game.towers[i][2-j]
        if (disc === 1) {
          $piece.attr("class", "one");
        } else if (disc === 2) {
          $piece.attr("class", "two");
        } else if (disc === 3) {
          $piece.attr("class", "three")
        }
        $stack.append($piece);
      };
      $stack.data("idx", i)
      this.$el.append($stack);
    };
    $("div").on("click", this.clickTower.bind(this))
  }

  View.prototype.clickTower = function (event) {
    var currentIdx = $(event.currentTarget).data("idx")
    if (this.startTower === null) {
      this.startTower = currentIdx
      $(event.currentTarget).attr("class", "selected")
      console.log(event.currentTarget)
    } else {
      if (this.game.move(this.startTower, currentIdx)) {
        $(event.currentTarget).attr("class", "unselected");
      } else {
        alert("this is not a valid move!");
      }
      this.startTower = null;
      this.render();
    }
    if (this.game.isWon()) {
      console.log(this.game.isWon)
      alert("You win!");
      $("div").off("click");
    };
  }
})();
