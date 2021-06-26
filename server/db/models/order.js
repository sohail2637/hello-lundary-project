let mongoose = require('mongoose');

let OrderSchema = mongoose.Schema({
  fullname: String,
  email: String,
  address: String,
  deliveryContact: Number,
  postalCode: Number,
  descraption: String,
  quantitey: String,
});
let Orders= mongoose.model('order',OrderSchema,"ludaryorder");
module.exports=Orders;