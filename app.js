//set up the server
const express = require( "express" );
const app = express();
const port = 3000;
const logger = require("morgan");

// start the server
app.listen( port, () => {
    console.log(`App server listening on ${ port }. (Go to http://localhost:${ port })` );
} );

// define middleware that logs all incoming requests
app.use(logger("dev"));

// define middleware that serves static resources in the public directory
app.use(express.static(__dirname + '/public'));

// define a route for the default home page
app.get( "/", ( req, res ) => {
    res.sendFile( __dirname + "/views/index.html" );
} );

// define a route for the fish list page
app.get( "/fishlist", ( req, res ) => {
    res.sendFile( __dirname + "/views/fishlist.html" );
} );

// define a route for the fishlist detail page
app.get( "/fishlist/detail", ( req, res ) => {
    res.sendFile( __dirname + "/views/detail.html" );
} );

// define a route for the purchase page
app.get( "/purchase", ( req, res ) => {
    res.sendFile( __dirname + "/views/purchase.html" );
} );