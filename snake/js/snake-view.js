(function() {
  if (typeof SnakeGame === "undefined") {
    window.SnakeGame = {};
  }

  var View = SnakeGame.View = function($el) {
    this.$el = $el;
    this.board = new SnakeGame.Board();
    this.$el.on("keydown", this.handleKeyEvent.bind(this))
    window.setInterval(this.step.bind(this), 500)
  }

  View.prototype.handleKeyEvent = function (event) {
    var key = event.keyCode
    if (key === "ArrowDown") {
      this.board.snake.turn("S");
    } else if (key === "ArrowUp") {
      this.board.snake.turn("N");
    } else if (key === "Arrow Left") {
      this.board.snake.turn("W");
    } else if (key === "Arrow Right") {
      this.board.snake.turn("E");
    } else {
      alert("Please press an arrow key!");
    }
  }

  View.prototype.step = function () {
    this.board.snake.move();
    $("pre").remove()
    this.$el.append($("<pre>" + this.board.render() + "</pre>"));

  };

})();
