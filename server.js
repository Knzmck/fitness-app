var express = require("express");
var app = express();
const mongoose = require("mongoose");

var PORT = process.env.PORT || 8080;



var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout";
mongoose.connect(MONGODB_URI,{  
    useNewUrlParser:true,
    useFindAndModify:false
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
// require("./routes/apiRoutes")(app);
app.use(require("./routes/htmlRoutes"));



app.listen(PORT,function() {
    console.log("App listening on PORT: " + PORT)
});