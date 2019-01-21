class Player {
    constructor() 
    {
        this.reset();
    }

    roll() {
        let r  = floor(random(1,4));
        this.spot += r;
    }
    
    reset() {
        this.spot = 0;
    }

    show(tiles){
        let current = tiles[this.spot];
        fill(255);
        let center = current.getCenter();
        ellipse(center[0], center[1], 32);
    }
}