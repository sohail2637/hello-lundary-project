let express = require("express");
var cors = require("cors");
let myApp = express();
myApp.use(cors());
let fs = require("fs");
let path = require("path");

var multer = require("multer");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./server/allData/uploads/");
  },
  filename: function (req, file, cb) {
    // console.log(file)
    cb(null, file.originalname);
  },
});

var upload = multer({ storage: storage });
var nodemailer = require("nodemailer");

let BodyParser = require("body-parser");
myApp.use(BodyParser.json());

let config = require("./config");
let jwt = require("jsonwebtoken");
const jwt_decode = require("jwt-decode");

var transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  // service: 'gmail',
  auth: {
    user: "nabiha3802izhar@gmail.com",
    pass: "137287nabiha",
  },
});
// var transporter = nodemailer.createTransport({
//   host: "smtp.gmail.com",
//   port: 465,
//   secure: true,
//   // service: 'gmail',
//   auth: {
//     user: "nabiha3802izhar@gmail.com",
//     pass: "137287nabiha",
//   },
// });

// var mailOptions = {
//   from: "nabiha3802izhar@gmail.com",
//   to: "sohail25816@gmail.com",
//   subject: "Sending Email using Node.js",
//   text: "That was easy!",
// };

// transporter.sendMail(mailOptions, function (error, info) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Email sent: " + info.response);
//   }
// });

let mongoose = require("mongoose");

let SiteUsers = require(".//db/models/users");
let Dish = require("./db/models/dish");
let Complain = require("./db/models/complain");
let Order = require("./db/models/order");

const { decode } = require("punycode");

// ............off line DB code

// mongoose.connect(
//   "mongodb://localhost:27017/Food",
//   (err, connection) => {
//     console.log(err || connection);
//   }
// );
// ........////....... online Db code
mongoose.connect(
  "mongodb+srv://123456sohail:123456sohail@cluster0.chxyr.mongodb.net/Food?retryWrites=true&w=majority",
  (err, connection) => {
    console.log(err || connection);
  }
);

// myApp.get('/', function(req, res){
//     res.end('Main')
// });

myApp.post("/checksession", async function (req, res) {
  console.log(req.body);
  var decoded = jwt_decode(req.body.token);
  if (decoded.id) {
    SiteUsers.findOne({ _id: decoded.id }, function (err, docs) {
      res.send(docs);
    });
  }
});

myApp.post("/signup", upload.single("image"), async function (req, res) {
  console.log(req.body);
  let user1 = await SiteUsers.findOne({
    email: req.body.email,
  });
  if (user1) {
    res.json({
      msg: "Email Already in Use",
    });
  } else {
    let userToken = { password: req.body.password };
    let token = jwt.sign(userToken, config.secret);
    console.log(token);
    let user = new SiteUsers();
    (user.username = req.body.UserName),
      (user.contact = req.body.MobileNumber),
      (user.email = req.body.email),
      (user.password = token),
      await user.save();
    res.json({
      msg: "Signed Up...!",
    });
  }
});
myApp.post("/login", async function (req, res) {
  console.log(req.body);
  let user = await SiteUsers.findOne(
    {
      email: req.body.email,
    },
    function (err, docs) {
      if (docs) {
        console.log(docs._doc.password);
        var decoded = jwt_decode(docs._doc.password);
        console.log(decoded);
        if (decoded.password == req.body.password) {
          console.log("Password");

          let userToken = { id: docs._doc._id };
          jwt.sign(
            userToken,
            config.secret,
            {
              expiresIn: "6d",
            },
            (err, token) => {
              res.json({
                token,
                success: true,
                msg: "User Found",
                _id: docs._doc._id,
                username: docs._doc.username,
                password: docs._doc.password,
                email: docs._doc.email,
                contact: docs._doc.contact,
                type: docs._doc.type,
                Image: docs._doc.sellerimage,
              });
            }
          );
        } else {
          res.json({
            msg: "Wrong Password",
          });
        }
      } else {
        res.json({
          msg: "SignUp First..!",
        });
      }
      // res.send(err)||
    }
  );
});
myApp.post(
  "/postproduct",
  upload.single("dishImage"),
  async function (req, res) {
    console.log(req.body);
    let dish = new Dish();
    (dish.referenceId = req.body.id),
      (dish.dishName = req.body.dishName),
      (dish.dishCategory = req.body.dishCategory),
      (dish.dishPrize = req.body.dishPrize),
      (dish.dishQuantity = req.body.dishQuantity),
      (dish.dishImage = req.file.originalname),
      (dish.dishdescription = req.body.description);
    await dish.save();
    res.json({
      msg: "Dish Saved",
    });
  }
);
// myApp.post("/dishes", async function (req, res) {
//   Dish.find({}, function (err, dishes) {
//     res.send(dishes);
//   });
// });
// myApp.post("/showsellers", async function (req, res) {
//   SiteUsers.find({ type: "seller" }, function (err, sellers) {
//     res.send(sellers);
//   });
// });
// myApp.post("/showdeliveryboys", async function (req, res) {
//   SiteUsers.find({ type: "delivery boy" }, function (err, deliveryboys) {
//     res.send(deliveryboys);
//   });
// });
// myApp.post("/sellerpost", async function (req, res) {
//   Dish.find({ referenceId: req.body.id }, function (err, sellerpost) {
//     res.send(sellerpost);
//   });
// });
myApp.delete("/deleteseller", async function (req, res) {
  SiteUsers.findByIdAndDelete({ _id: req.body.sellerid }, function (err, docs) {
    if (err) {
      console.log(err);
    } else {
      console.log("Deleted Seller : ", docs);
      res.json({
        msg: "Seller Deleted",
      });
    }
  });
});
myApp.delete("/deletpost", async function (req, res) {
  Dish.findByIdAndDelete({ _id: req.body.dishid }, function (err, docs) {
    if (err) {
      console.log(err);
    } else {
      console.log("Deleted Post : ", docs);
      res.json({
        msg: "Dish Deleted",
      });
    }
  });
});
// myApp.post("/usercomplain", async function (req, res) {
//   console.log(req.body);
//   let complain = new Complain();
//   (complain.username = req.body.userName),
//     (complain.email = req.body.email),
//     (complain.contact = req.body.contactNumber),
//     (complain.complainText = req.body.complainMsg);
//   await complain.save();
//   res.json({
//     msg: "Complain Saved",
//   });
// });
// myApp.post("/showcomplain", async function (req, res) {
//   Complain.find({}, function (err, complains) {
//     res.send(complains);
//   });
// });
myApp.post("/lundryorder", async function (req, res) {
  console.log(req.body);
  let order = new Order();
     (order.fullname = req.body.fullname),
       (order.email = req.body.email),
       (order.address = req.body.address),
       (order.deliveryContact = req.body.deliveryContact),
       (order.postalCode = req.body.postalCode),
       (order.descraption = req.body.descraption),
       (order.quantitey = req.body.quantitey),
       //  (order.description = req.body.description);
       await order.save();
  res.json({
    msg: "Order Saved",
  });
});
myApp.post("/showorder", async function (req, res) {
  Order.find({}, function (err, order) {
    res.send(order);
  });
});
// myApp.delete("/deletecomplain", async function (req, res) {
//   Complain.findByIdAndDelete(
//     { _id: req.body.complainId },
//     function (err, docs) {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log("Deleted Complain : ", docs);
//         res.json({
//           msg: "Complain Rmoved",
//         });
//       }
//     }
//   );
// });
myApp.delete("/deleteorder", async function (req, res) {
  Order.findOneAndRemove({ _id: req.body.userId }, function (err, docs) {
  // Order.findByIdAndDelete({ _id: req.body.userId }, function (err, docs) {
    if (err) {
      console.log(err);
    } else {
      console.log("Deleted Order : ", docs);
      res.json({
        msg: "Order Removed",
      });
    }
  });
});
myApp.use(express.static("./server/allData/uploads"));
// myApp.use(express.static('./server/build'))

myApp.listen(5050, function () {
  console.log("Server in Working State");
});

/// // "start": "node server/server.js & react-scripts start",
