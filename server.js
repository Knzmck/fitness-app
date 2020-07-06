var express = require("express");
var app = express();
const mongoose = require("mongoose");

var PORT = process.env.PORT || 8080;



var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout";
mongoose.connect(MONGODB_URI,{  
    useNewUrlParser:true,
    useFindAndModify:false
})

require("./routes/apiRoutes")(app);
// require("./routes/htmlRoutes")(app);


app.listen(PORT,function() {
    console.log("App listening on PORT: " + PORT)
});