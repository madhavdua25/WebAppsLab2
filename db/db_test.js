const db = require("./db_connection")

//Query
db.execute('select 1+1 as solution', (error, results) => {
    if(error) throw error;
    console.log(results);

}
)

db.end();

// terminal > node db/db_test.js