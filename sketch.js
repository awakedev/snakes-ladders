let tiles = [];
let player;

let rolls = [];
let index = 0;
let averageRolls = 0;

let avgP;

function setup() {
    createCanvas(400, 400);
    avgP = createP('');

    let resolution = 40;
    rolls[index] = 0;
    let cols = width / resolution;
    let rows = height / resolution;

    let x = 0;
    let y = (rows - 1) * resolution;
    let dir = 1;
    for (let i = 0; i < cols * rows; i++) {
        let tile = new Tile(x, y, resolution, i, i + 1);
        tiles.push(tile);
        x = x + (resolution * dir);
        if (x >= width || x <= -resolution) {
            dir *= -1;
            x += resolution * dir;
            y -= resolution;
        }
    }

    player = new Player()
}


function draw() {
    background(51);

    for (let tile of tiles) {
        tile.show();

    }
    player.roll();
    rolls[index]++;

    let gameOver = false;
    if (player.spot >= tiles.length-1) {
        player.spot = tiles.length-1;
        index++;
        gameOver = true;
    }

    player.show(tiles);

    if (gameOver) {
        player.reset();
        index++;
        rolls[index] = 0;
    }

    let sum = 0;
    for (let index = 0; index < rolls.length-1; index++) {
        sum += rolls[index];

        
    }
    let avg = sum / (rolls.length-1)
    avgP.html(avg);
}