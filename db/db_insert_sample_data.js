const db = require("./db_connection");

const delete_species_table_sql = "DELETE FROM species;"

db.execute(delete_species_table_sql);

const delete_fish_table_sql = "DELETE FROM fish;"

db.execute(delete_fish_table_sql);

const insert_species_sql = `
    INSERT INTO species 
        (species_id, species_name) 
    VALUES 
        (?, ?);
`

db.execute(insert_species_sql, [1, 'Goldfish']);

const insert_fish_sql = '
    INSERT INTO fish
        (fish_id, amount, color, awesomeness, anecdote, species_name)
    VALUES
        (?, ?, ?, ?, ?, ?);
'

db.execute(insert_fish_sql, [1, 3, 'blue', 5, 'cool fish!', 1]);

db.end();

