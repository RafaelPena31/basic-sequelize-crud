/* não mexer nesse arquivo */ 

CREATE TABLE IF NOT EXISTS usuario (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name varchar(255) NOT NULL,
    born_date TIMESTAMP NOT NULL, 
    nickname DEFAULT ''
);

TRUCATE TABLE usuario;
