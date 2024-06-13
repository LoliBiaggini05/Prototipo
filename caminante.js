class Caminante {
  constructor(img, color) {
    this.x = random(150, width - 150);
    this.y = random(150, height - 150);
    this.xInicial = this.x;
    this.yInicial = this.y;
    this.dir = radians(random(360));
    this.vel = 4;
    this.variacion = 3;
    this.relleno = color;
    this.circuloCompleto = false;
    this.img = img; // Almacena la imagen
  }

  dibujar() {
    if (!this.circuloCompleto) {
      push();
      imageMode(CENTER);
      tint(this.relleno); // Aplicar el color de relleno a la imagen
      image(this.img, this.x, this.y, 20, 20); // Dibuja la imagen en lugar del círculo
      pop();
    }
  }

  mover() {
    if (this.circuloCompleto) return;

    this.variacion = radians(2);
    this.dir += this.variacion;
    let dx = this.vel * cos(this.dir);
    let dy = this.vel * sin(this.dir);
    this.y += dy;
    this.x += dx;

    this.x = (this.x > width ? this.x - width : this.x);
    this.x = (this.x < 0 ? this.x + width : this.x);
    this.y = (this.y > height ? this.y - height : this.y);
    this.y = (this.y < 0 ? this.y + height : this.y);

    if (dist(this.x, this.y, this.xInicial, this.yInicial) < this.vel) {
      this.circuloCompleto = true;
      circulosCompletados++; // Incrementar el contador de círculos completados
    }
  }
}