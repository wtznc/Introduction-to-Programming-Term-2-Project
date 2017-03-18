//
//: Tile class
//
class Tile {
    constructor(_id, _pathToFile) {
        this.id = _id;
        this.pathToFile = _pathToFile;
        this.img = loadImage(this.pathToFile);
    }
}
