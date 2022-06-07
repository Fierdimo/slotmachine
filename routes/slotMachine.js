var express = require('express');
var router = express.Router();

const symbol = ['😀', '😎', '🥰', '😴', '🤬', '🤡', '💀', '👽', '🤖',]
const prizes = [
    { combination: '😀,😀', value: 10 },
    { combination: '😎,😎', value: 10 },
    { combination: '🥰,🥰', value: 10 },
    { combination: '😴,😴', value: 10 },
    { combination: '🤬,🤬', value: 10 },
    { combination: '🤡,🤡', value: 10 },
    { combination: '💀,💀', value: 10 },
    { combination: '👽,👽', value: 10 },
    { combination: '🤖,🤖', value: 10 },
    { combination: '💩,💩', value: 10 },
    { combination: '😀,😀,😀', value: 100 },
    { combination: '😎,😎,😎', value: 100 },
    { combination: '🥰,😎,😎', value: 100 },
    { combination: '😴,😎,😎', value: 100 },
    { combination: '🤬,😎,😎', value: 100 },
    { combination: '🤡,🤡,🤡', value: 100 },
    { combination: '💀,💀,💀', value: 100 },
    { combination: '👽,👽,👽', value: 100 },
    { combination: '🤖,🤖,🤖', value: 100 },
    { combination: '💩,💩,💩', value: 100 },
]

router.get('/', (req, res, next) => {
    let matrix = [
        { line: 'top', stream: [] },
        { line: 'central', stream: [] },
        { line: 'bottom', stream: [] },
        { line: 'angleup', stream: [] },
        { line: 'angledw', stream: [] },
    ]

    let contracounter = 2
    for (let column = 0; column < 3; column++) {
        for (let row = 0; row < 3; row++) {
            const thisSymbol = symbol[parseInt(Math.random() * 9)]
            if (row === 0) matrix[0].stream.push(thisSymbol);
            if (row === 1) matrix[1].stream.push(thisSymbol);
            if (row === 2) matrix[2].stream.push(thisSymbol);
            if (row === column) matrix[3].stream.push(thisSymbol);
            if (row === contracounter) matrix[4].stream.push(thisSymbol);
        }
        contracounter--
    }
    let winpot = 0
    const result = matrix.map((slot) => {
        //let array =slot 
        prizes.forEach(price => {
            if (slot.stream.slice(0,2).toString()==(price.combination)){
                slot = {...slot,  price: price.value }
                winpot += price.value
            }
            })
        return slot
        
    })
res.json({...result, winning:winpot})
})
module.exports = router;