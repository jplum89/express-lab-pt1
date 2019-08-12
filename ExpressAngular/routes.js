const express = require('express');

function getHighestId() {
    var maxId = 0;
    cart.map((obj) => {
        if (obj.id > maxId) maxId = obj.id;
    })
    return maxId + 1;
}

const router = express.Router();
let cart = [
    {
        id: 1,
        product: "pretzels",
        price: 1000000,
        quantity: 3
    },
    {
        id: 2,
        product: "games",
        price: 2000000,
        quantity: 4
    },
    {
        id: 3,
        product: "water",
        price: 3000000,
        quantity: 5
    },
]
router.get("/cart-items", (req, res) => {
    res.json(cart);
});

router.delete('/cart-items/:id', (req, res) => {
    let c = cart.filter(art => art.id !== parseInt(req.params.id));
    cart = c;
    res.json(cart);
});

router.post('/cart-items', (req, res) => {
    let newCartItem = {id: getHighestId(), price: parseInt(req.body.price), product: req.body.product, quantity: parseInt(req.body.quantity)};
    cart.push(newCartItem);
    res.json(cart);
})

router.put('/cart-items/:id', (req, res) => {
    const item = cart.find(el => el.id === parseInt(req.params.id));
    const index = cart.indexOf(item);
    cart[index].price = parseInt(req.body.price);
    cart[index].quantity = parseInt(req.body.quantity);
    cart[index].product = req.body.product;
    res.json(cart);
})

module.exports = router;