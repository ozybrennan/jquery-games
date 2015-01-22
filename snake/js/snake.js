(function() {
  if (typeof SnakeGame === "undefined") {
    window.SnakeGame = {};
  }

  var Snake = SnakeGame.Snake = function (dir, segments) {
    this.dir = dir;
    this.segments = segments;
  }

  Snake.prototype.move = function () {
    for (i = 0; i < this.segments.length; i++) {
      this.segments[i].plus(this.dir);
    }
  }

  Snake.prototype.turn = function (dir) {
    this.dir = dir;
  }

  var Coord = SnakeGame.Coord = function (pos) {
    this.x = pos[0];
    this.y = pos[1];
  }

  Coord.prototype.plus = function (dir) {
    if (dir === "N") {
      this.y -= 1;
    } else if (dir === "S") {
      this.y += 1;
    } else if (dir === "E") {
      this.x += 1;
    } else if (dir === "W") {
      this.x -+ 1;
    }
  }

  var Board = SnakeGame.Board = function () {
    this.snake = new Snake("S", [new Coord([0,0])]);
    this.board_x = 25;
    this.board_y = 25;
  }

  Board.prototype.render = function () {
    var board = [];
    for (var i = 0; i < this.board_x; i++) {
      var row = [];
      for (var j = 0; j < this.board_y; j++) {
        row.push(".");
      };
      row.push("\n");
      board.push(row);
    };
    for (var s = 0; s < this.snake.segments.length; s++) {
      var segment = this.snake.segments[s];
      board[segment.x][segment.y] = "S";
    };
    return board;
  }


})();
