
const Post = require('../models/Post');

const mongoose = require('mongoose');
 
mongoose.connect('mongodb://localhost/node-blog')
    .then(() => console.log('Now connected to MongoDB!'))
    .catch(err => console.error('Something went wrong', err));
    



app.delete('/post/:id', function(req, res){
	Post.findByIdAndRemove({_id: req.params.id}, 
	   function(err, docs){
		if(err) res.json(err);
		else    res.redirect('/');
	});
});

