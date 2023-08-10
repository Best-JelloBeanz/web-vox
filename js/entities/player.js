class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 32
    this.height = 32
  }
  draw() {
    c.fillStyle = 'red'
    c.fillRect(this.x, this.y, this.width, this.height)
  }
  updatePos() {
  }
)
