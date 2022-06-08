// const { ethers } = require("hardhat");

var scoreElement = document.getElementById('scoreElement');
var canvas = document.getElementById('game-layer');
var context = canvas.getContext('2d');

canvas.width = 1024;
canvas.height = 576;

class Player {
    constructor() {

        this.velocity = {
            x: 0,
            y: 0
        }

        this.rotation = 0

        this.opacity = 1

        const image = new Image()
        image.src = 'img/spacecraft.png'

        image.onload = () => {
            const scale = 0.15
            this.image = image
            this.width = image.width * scale
            this.height = image.height * scale
            this.position = {
                x: canvas.width / 2 - this.width / 2,
                y: canvas.height - this.height - 20
            }
        }


    }
    draw() {
        context.save()
        context.globalAlpha = this.opacity
        context.translate(player.position.x + player.width / 2, player.position.y + player.height / 2)

        context.rotate(this.rotation)

        context.translate(-player.position.x - player.width / 2, -player.position.y - player.height / 2)

        context.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
        context.restore()
    }

    update() {
        if (this.image) {
            this.draw()
            this.position.x += this.velocity.x
        }

    }
}

class Projectile {
    constructor({ position, velocity }) {
        this.position = position
        this.velocity = velocity

        this.radius = 4
    }

    draw() {
        context.beginPath()
        context.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2)
        context.fillStyle = 'red'
        context.fill()
        context.closePath()
    }

    update() {
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
    }
}

class Particle {
    constructor({ position, velocity, radius, color, fades }) {
        this.position = position
        this.velocity = velocity

        this.radius = radius
        this.color = color
        this.opacity = 1
        this.fades = fades
    }

    draw() {
        context.save()
        context.globalAlpha = this.opacity
        context.beginPath()
        context.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2)
        context.fillStyle = this.color
        context.fill()
        context.closePath()
        context.restore()
    }

    update() {
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y

        if (this.fades) this.opacity -= 0.01
    }
}


class InvaderProjectile {
    constructor({ position, velocity }) {
        this.position = position
        this.velocity = velocity

        this.width = 4
        this.height = 11
    }

    draw() {
        context.fillStyle = 'white'
        context.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    update() {
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
    }

}

class Invader {
    constructor({ position }) {
        this.velocity = {
            x: 0,
            y: 0
        }

        const purpleEnemy = new Image()
        purpleEnemy.src = 'img/invader.png'

        purpleEnemy.onload = () => {
            const scale = 1
            this.purpleEnemy = purpleEnemy
            this.width = purpleEnemy.width * scale
            this.height = purpleEnemy.height * scale
            this.position = {
                x: position.x,
                y: position.y
            }

        }
    }

    draw() {
        context.drawImage(this.purpleEnemy, this.position.x, this.position.y, this.width, this.height)

    }

    update({ velocity }) {
        if (this.purpleEnemy) {
            this.draw()
            this.position.x += velocity.x
            this.position.y += velocity.y

        }

    }

    shoot(invaderProjectiles) {
        invaderProjectiles.push(new InvaderProjectile({
            position: {
                x: this.position.x + this.width / 2,
                y: this.position.y + this.height
            },
            velocity: {
                x: 0,
                y: 5
            }
        }))
    }
}

class Grid {
    constructor() {
        this.position = {
            x: 0,
            y: 0
        }

        this.velocity = {
            x: 3,
            y: 0
        }

        this.invaders = []

        const columns = Math.floor(Math.random() * 10 + 5)
        const rows = Math.floor(Math.random() * 5 + 2)
        const enemy_size = 30

        this.width = columns * enemy_size

        for (let x = 0; x < columns; x++) {
            for (let y = 0; y < rows; y++) {
                this.invaders.push(new Invader({
                    position: {
                        x: x * enemy_size,
                        y: y * enemy_size
                    }
                }))
            }
        }

    }

    update() {
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y

        this.velocity.y = 0

        if (this.position.x + this.width >= canvas.width || this.position.x <= 0) {
            this.velocity.x = -this.velocity.x
            this.velocity.y = 30 //enemy size 
        }
    }
}

const player = new Player()
const grids = []
const projectiles = []
const invaderProjectiles = []
const particles = []



const keys = {
    a: {
        pressed: false
    },
    d: {
        pressed: false
    },
    space: {
        pressed: false
    },
    escape: {
        pressed: false
    }
}

let frames = 0
let randomInterval = Math.floor(Math.random() * 500 + 500)
    // let exitPrompt = prompt('Would you like to quit?', 'Yes')

let game = {
    over: false,
    active: true
}

let score = 0

for (let i = 0; i < 100; i++) {
    particles.push(new Particle({
        position: {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height

        },
        velocity: {
            x: 0,
            y: 0.3
        },
        radius: Math.random() * 2,
        color: '#D7E5F0'

    }))
}

function createParticles({ object, color, fades }) {
    for (let i = 0; i < 15; i++) {
        particles.push(new Particle({
            position: {
                x: object.position.x + object.width / 2,
                y: object.position.y + object.height / 2

            },
            velocity: {
                x: (Math.random() - 0.5) * 2,
                y: (Math.random() - 0.5) * 2
            },
            radius: Math.random() * 3,
            color: color || '#BAA0DE',
            fades

        }))
    }
}

function animate() {
    if (!game.active) return
    requestAnimationFrame(animate)
    context.fillStyle = 'black'
    context.fillRect(0, 0, canvas.width, canvas.height)

    player.update()

    particles.forEach((particle, ind) => {
        if (particle.position.y - particle.radius >= canvas.height) {
            particle.position.x = Math.random() * canvas.width
            particle.position.y = -particle.radius

        }
        if (particle.opacity <= 0) {
            setTimeout(() => {
                particles.splice(ind, 1)
            }, 0)
        } else {
            particle.update()

        }
    })

    invaderProjectiles.forEach(
        (invaderProjectile, index) => {
            if (invaderProjectile.position.y + invaderProjectile.height >= canvas.height) {
                setTimeout(() => {
                    invaderProjectiles.splice(index, 1)
                }, 0)
            } else {
                invaderProjectile.update()
            }

            if (invaderProjectile.position.y + invaderProjectile.height >= player.position.y &&
                invaderProjectile.position.x + invaderProjectile.width >= player.position.x &&
                invaderProjectile.position.x <= player.position.x + player.width) {
                setTimeout(() => {
                    invaderProjectiles.splice(index, 1)
                    player.opacity = 0
                    game.over = true
                    redirectToHome('main.html')
                }, 0)
                setTimeout(() => {
                    game.active = false
                }, 2000)
                console.log('you lose')
                    // saveRecord('Saving score', 'main.html')

                // newScore.key = score

                var lsScore = localStorage.getItem("score");
                const _newRecord = parseInt(document.getElementById('scoreElement').innerText);
                !lsScore && localStorage.setItem("score", _newRecord);
                // window.ethereum.request({
                //     "method ": "tx_getTransactionReceipt ",
                //     "params": [
                //         "0xf5ade9d9d30f5da689443524175b2c4285ad8bd8e93c9b0c1161bb21b314e101",
                //         // "0xbEd97598CfCD53D6B3A144A7c5BdFc2012f8e0C2"
                //     ],
                // });
                createParticles({
                    object: player,
                    color: 'orange',
                    fades: true
                })
            }

        })

    projectiles.forEach((projectile, index) => {
        if (projectile.position.y + projectile.radius <= 0) {
            setTimeout(() => {
                projectiles.splice(index, 1)
            }, 0)
        } else {
            projectile.update()

        }
    })

    grids.forEach((grid, gridIndex) => {
        grid.update()

        // spawn invader projectiles
        if (frames % 100 === 0 && grid.invaders.length > 0) {
            grid.invaders[Math.floor(Math.random() * grid.invaders.length)].shoot(invaderProjectiles)
        }

        grid.invaders.forEach((invader, i) => {
            invader.update({ velocity: grid.velocity })

            projectiles.forEach((projectile, j) => {
                if (projectile.position.y - projectile.radius <= invader.position.y + invader.height &&
                    projectile.position.x + projectile.radius >= invader.position.x &&
                    projectile.position.x - projectile.radius <= invader.position.x + invader.width &&
                    projectile.position.y + projectile.radius >= invader.position.y) {
                    setTimeout(() => {
                        const invaderFound = grid.invaders.find(
                            (targettedInvader) => targettedInvader === invader)
                        const projectileFound = projectiles.find(
                            (firedShot) => firedShot === projectile)

                        // remove projectiles and invaders
                        if (invaderFound && projectileFound) {
                            score += 100
                            var currentScore = parseInt(scoreElement.innerHTML)
                            scoreElement.innerHTML = currentScore + score
                            createParticles({
                                object: invader,
                                fades: true
                            })

                            grid.invaders.splice(i, 1)
                            projectiles.splice(j, 1)

                            if (grid.invaders.length > 0) {
                                const firstInvader = grid.invaders[0]
                                const lastInvader = grid.invaders[grid.invaders.length - 1]

                                grid.width = lastInvader.position.x - firstInvader.position.x + lastInvader.width
                                grid.position.x = firstInvader.position.x
                            } else {
                                grids.splice(gridIndex, 1)
                            }
                        }
                    }, 0)
                }
            })
        })
    })


    const ship_speed = 7;
    const ship_rotation = 0.15

    if (keys.a.pressed && player.position.x >= 0) {
        player.velocity.x = -ship_speed
        player.rotation = -ship_rotation

    } else if (keys.d.pressed && player.position.x + player.width <= canvas.width) {
        player.velocity.x = ship_speed
        player.rotation = ship_rotation

    } else {
        player.velocity.x = 0
        player.rotation = 0

    }

    // spawn invaders
    if (frames % randomInterval === 0) {
        grids.push(new Grid())
        randomInterval = Math.floor(Math.random() * 500 + 500)
        frames = 0

    }

    frames++

}


const cancelModal = () => {
    console.log("cancel modal!!");
    document.getElementById("modal").style.display = "none";
    game.active = true;
    animate()
}

const showConfirmation = (msg, redirect) => {
    document.getElementById('modal').style.display = 'block';
    var container = "<div style='position:absolute; width: 270px; left:40%; top:50%; background:transparent ; color:#66FF00; font-size: 19px; font-weight: bolder;'>";
    container += `<div>${msg}</div>`;
    container += `<div class="flex-row"><input class="purple-btn" type='button' onclick='cancelModal()' value="Cancel"/><a class="green-btn" href="${redirect}">Yes</a></div>`;
    container += `</div>`;
    document.getElementById('modal').innerHTML = container;
}

const redirectToHome = (home) => {
    record_setter();
    document.getElementById('modal').style.display = 'block';
    var container = "<div style='position:absolute; width:300px; left:50%; top:50%; background:transparent ; color:#66FF00; font-size: 20px; font-weight: bolder;'>";
    container += `<div> <p> Game Over </p></div > `
    container += `<div> <a class = "purple-btn" href = "${home}"> Home </a></div> `;
    // container += `<button id = "button" onclick=""> Save Score </button>`
    container += `</div>`;
    container += `<script type = "module" src = "bridge.js" > < /script>`
    container += `<script src = "https://cdn.ethers.io/lib/ethers-5.2.umd.min.js" type = "application/javascript" > < /script>`

    document.getElementById('modal').innerHTML = container;
}

animate();

addEventListener('keydown', ({ key }) => {
    console.log("key :" + key);
    if (game.over) return
    switch (key) {
        case 'a':
            keys.a.pressed = true
            break
        case 'd':
            keys.d.pressed = true
            break
        case ' ':
            projectiles.push(new Projectile({
                position: {
                    x: player.position.x + player.width / 2,
                    y: player.position.y
                },
                velocity: {
                    x: 0,
                    y: -5
                }
            }))
            break
        case 'Escape':
            keys.escape.pressed = true
            game.active = false
            showConfirmation('Would you like to quit the game?', 'main.html');
            break
    }
})


addEventListener('keyup', ({ key }) => {
    switch (key) {
        case 'a':
            keys.a.pressed = false
            break
        case 'd':
            keys.d.pressed = false
            break
        case ' ':
            keys.space.pressed = false
            break
        case 'Escape':
            keys.escape.pressed = false
    }

})

var savedRecord = document.getElementById('held-record');
//Contract address
const contractAddress = "0xbEd97598CfCD53D6B3A144A7c5BdFc2012f8e0C2";

// Contract abi
const contractABI = {
    "_format": "hh-sol-artifact-1",
    "contractName": "HighScoreRecorder",
    "sourceName": "contracts/HighScoreRecorder.sol",
    "abi": [{
            "inputs": [],
            "name": "getNewRecord",
            "outputs": [{
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "record",
            "outputs": [{
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [{
                "internalType": "uint256",
                "name": "_record",
                "type": "uint256"
            }],
            "name": "setNewRecord",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ],
    "bytecode": "0x608060405234801561001057600080fd5b5060c28061001f6000396000f3fe6080604052348015600f57600080fd5b5060043610603c5760003560e01c8063266cf109146041578063539c5afd14605957806384ccfcca14605f575b600080fd5b6047607b565b60408051918252519081900360200190f35b60476081565b607960048036036020811015607357600080fd5b50356087565b005b60005481565b60005490565b60005556fea2646970667358221220b95b6bfd9f1dd200f1ac985b48fbff536310f3c718ea5dfc7fd02c0612568f7364736f6c63430007030033",
    "deployedBytecode": "0x6080604052348015600f57600080fd5b5060043610603c5760003560e01c8063266cf109146041578063539c5afd14605957806384ccfcca14605f575b600080fd5b6047607b565b60408051918252519081900360200190f35b60476081565b607960048036036020811015607357600080fd5b50356087565b005b60005481565b60005490565b60005556fea2646970667358221220b95b6bfd9f1dd200f1ac985b48fbff536310f3c718ea5dfc7fd02c0612568f7364736f6c63430007030033",
    "linkReferences": {},
    "deployedLinkReferences": {}
}

const provider = new ethers.providers.JsonRpcProvider('https://dev.kardiachain.io/');

function record_getter() {
    // const contractAddress = '0x2Bc7A39c22403dA3617b237D42BF0db2C5dcaBA1'
    const signer = provider.getSigner(contractAddress);
    const connectedContract = new ethers.Contract(contractAddress, contractABI.abi, signer);
    const txn = connectedContract.getNewRecord()
    savedRecord.innerHTML = txn
    console.log(txn)
    txn.then(function(result) {
        alert(result)
    })
}

const record_setter = async() => {
    var lsScore = localStorage.getItem("score");
    const _newRecord = parseInt(lsScore || 0);
    const signer = provider.getSigner(contractAddress);

    // const contractAddress = '0xbEd97598CfCD53D6B3A144A7c5BdFc2012f8e0C2'
    try {
        console.log('__newScore: ', _newRecord)
        const connectedContract = new ethers.Contract(contractAddress, contractABI.abi, signer);
        console.log("connectedContract: ", connectedContract);
        const txn = await connectedContract.setNewRecord(_newRecord);
        localStorage.setItem("txn", txn);

        console.log('tx: ', txn)
            // savedRecord.innerHTML = txn
        if (txn) alert(result);

    } catch (error) {
        console.log("record_setter_error: ", error)
    }

}