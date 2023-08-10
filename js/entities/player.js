class Player {
  constructor() {
    this.position = {
      x: 100,
      y: 100,
    }
    this.width = 32
    this.height = 32
    this.sides = {
      bottom: this.position.y + this.height,
    }
  }
  draw() {
    c.fillStyle = 'red'
    c.fillRect(this.x, this.y, this.width, this.height)
  }
  updatePos() {
  }
)
