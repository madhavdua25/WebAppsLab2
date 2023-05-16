const db = require("./db_connection");

/**** Drop existing tables, if any ****/

const drop_fish_table_sql = "DROP TABLE IF EXISTS assignments;"

db.execute(drop_fish_table_sql);

const create_species_table_sql = '
    CREATE TABLE `webapp_9MF_maddua25`.`species` (
        `species_id` INT NOT NULL,
        `species_name` VARCHAR(45) NOT NULL,
        PRIMARY KEY (`species_id`));
'

db.execute(create_species_table_sql)

const create_assignments_table_sql = `
    CREATE TABLE `webapp_9MF_maddua25`.`fish` (
        `fish_id` INT NOT NULL,
        `amount` VARCHAR(45) NOT NULL,
        `color` VARCHAR(45) NOT NULL,
        `awesomeness` INT NOT NULL,
        `anecdote` VARCHAR(45) NULL,
        `species_name` INT NOT NULL,
        PRIMARY KEY (`fish_id`),
        INDEX `fishtospecies_idx` (`species_name` ASC),
        CONSTRAINT `fishtospecies`
        FOREIGN KEY (`species_name`)
        REFERENCES `webapp_9MF_maddua25`.`species` (`species_id`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION);
'
db.execute(create_assignments_table_sql)

db.end();
