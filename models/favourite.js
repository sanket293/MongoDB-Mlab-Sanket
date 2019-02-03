let mongoose = require('mongoose');


let favouriteSchema = mongoose.Schema({
    name:String,
    description:String
},
{
    collection:"favourite_things" 
});


module.exports= mongoose.model('sanket',favouriteSchema);