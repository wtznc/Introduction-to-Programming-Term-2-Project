class Tile {
    constructor(_pathToFile, _posX, _posY) {
        this.pathToFile = _pathToFile;
        this.posX = _posX;
        this.posY = _posY;
        this.img = loadImage(this.pathToFile);
    }
    
    draw() {
        image(this.img, this.posX, this.posY);
    }
}