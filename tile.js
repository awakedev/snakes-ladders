class Tile {
    constructor(x, y, wh, index, next)
    {
        this.x = x;
        this.y = y
        this.wh = wh;
        this.next = next;
        this.index = index;
        this.color = random(255);
        if (this.index % 2 == 0){
            this.color = 220;

        } else {
            this.color = 30;
        }
    }

    getCenter(){
        let cx = this.x + this.wh / 2;
        let cy = this.y + this.wh / 2;
        return [cx, cy];
    }

    show(){
        fill(this.color);
        rect(this.x, this.y, this.wh, this.wh);
    }
    
}