const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//creamos esquema
const recipeSchema = new Schema({
  // TODO: write the schema
  title: {
    type: String,
    required: true,
    unique: true
  },
  level: {
    type: String,
    enum: ["Easy Peasy", "Amateur Chef", "UltraPro Chef"],
  },
  ingredients:{
    type: [String],
  },
  cuisine: {
    type: String,
    required: true
  },
  dishType: {
    type: String,
    enum: ['breakfast', 'main_course', 'soup', 'snack', 'drink', 'dessert', 'other']
  },
  image: {
    type: String,
    default: 'https://images.media-allrecipes.com/images/75131.jpg'
  },
  duration:{
    type: Number,
    min: 0
  },
  creator: {
    type: String
  },
  created: {
    type: Date,
    default: Date.now
  }
});

//creamos modelo
const Recipe = mongoose.model('Recipe', recipeSchema);
//exportamos el modelo
module.exports = Recipe;
