const express = require('express');
const router = express.Router();

// Item modals 
const Item = require('../../models/Items')
//@route Get api/items
//@ descr Get All item.
//@ access public
router.get('/', (req , res )=>{
    Item.find()
    // mongoose has method sort by ascending  = 1/ descending  = -1
    .sort({date: -1
    })
    .then(items => res.json(items))

} )

//@route POST api/items
//@ descr create an item.
//@ access public
router.post('/', (req , res )=>{
 const newItem = new Item({
     name:req.body.name
 });
 newItem.save().then(item => res.json(item))
});
//@routes DELETEby id api/items:id
// @desc delete an item
// access public
router.delete('/:id', (req, res) =>{
    Item.findById(req.params.id)
    .then(item => item.remove().then(()=> res.json({success: true})))
    .catch(err => res.status(404).json({success:false}))
});






module.exports = router