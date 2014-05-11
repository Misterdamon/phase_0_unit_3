
*** TERMINAL OUTPUT FROM your own database challenge

`sqlite> CREATE TABLE match_winners (  
   ...> id INTEGER PRIMARY KEY AUTOINCREMENT  
   ...> , match_id INTEGER,  
   ...> match_length INTEGER,  
   ...> match_type VARCHAR(64) NOT NULL,  
   ...> created_at DATETIME NOT NULL,  
   ...> updated_at DATETIME NOT NULL);  
sqlite> .schema  
CREATE TABLE match_winners (  
id INTEGER PRIMARY KEY AUTOINCREMENT  
, match_id INTEGER,   
match_length INTEGER,  
match_type VARCHAR(64) NOT NULL,  
created_at DATETIME NOT NULL,  
updated_at DATETIME NOT NULL);`

`sqlite> CREATE TABLE players (  
   ...> id INTEGER PRIMARY KEY AUTOINCREMENT,  
   ...> first_name VARCHAR(64) NOT NULL,  
   ...> last_name VARCHAR(64) NOT NULL,  
   ...> years_played INTEGER,  
   ...> matches_won INTEGER,  
   ...> created_at DATETIME NOT NULL,  
   ...> updated_at DATETIME NOT NULL);`

`sqlite> INSERT INTO players  
   ...> (first_name, last_name, years_played, matches_won, created_at, updated_at)  
   ...> VALUES  
   ...> ('Jake','Persing',2,45, DATETIME('now'),DATETIME('now'));  
sqlite> SELECT * FROM players  
   ...> ;`  
`id          first_name  last_name   years_played  matches_won  created_at           updated_at`           
----------  ----------  ----------  ------------  -----------  -------------------  -------------------  
`1           Jake        Persing     2             45           2014-05-11 20:25:53  2014-05-11 20:25:53`   
`sqlite> INSERT INTO players  
   ...> (first_name, last_name, years_played, matches_won, created_at, updated_at)  
   ...> VALUES  
   ...> ('John','Smith',5,24,DATETIME('now'),DATETIME('now'));`  
`sqlite> INSERT INTO players  
   ...> (first_name, last_name, years_played, matches_won, created_at, updated_at)  
   ...> VALUES  
   ...> ('G.I.','Joe',3,10,DATETIME('now'),DATETIME('now'));`  
`sqlite> INSERT INTO players  
   ...> (first_name, last_name, years_played, matches_won, created_at, updated_at)  
   ...> VALUES  
   ...> ('Thomas','Anderson',2,15,DATETIME('now'),DATETIME('now'));`  
`sqlite> INSERT INTO players  
   ...> (first_name, last_name, years_played, matches_won, created_at, updated_at)  
   ...> VALUES  
   ...> ('Carl','Sagan',2,15,DATETIME('now'),DATETIME('now'));`  
`sqlite> INSERT INTO players  
   ...> (first_name, last_name, years_played, matches_won, created_at, updated_at)  
   ...> VALUES  
   ...> ('Gandalf','The White',2,15,DATETIME('now'),DATETIME('now'));`  
`sqlite> INSERT INTO players  
   ...> (first_name, last_name, years_played, matches_won, created_at, updated_at)  
   ...> VALUES  
   ...> ('Mina','Harker',2,15,DATETIME('now'),DATETIME('now'));`  
`sqlite> INSERT INTO players  
   ...> (first_name, last_name, years_played, matches_won, created_at, updated_at)  
   ...> VALUES  
   ...> ('Bob','Barker',2,15,DATETIME('now'),DATETIME('now'));`  
`sqlite> INSERT INTO players  
   ...> (first_name, last_name, years_played, matches_won, created_at, updated_at)  
   ...> VALUES  
   ...> ('Tina','Fay',2,15,DATETIME('now'),DATETIME('now'));`  
`sqlite> INSERT INTO players  
   ...> (first_name, last_name, years_played, matches_won, created_at, updated_at)  
   ...> VALUES  
   ...> ('Bilbo','Baggins',8,34,DATETIME('now'),DATETIME('now'));`  
`sqlite> INSERT INTO players  
   ...> (first_name, last_name, years_played, matches_won, created_at, updated_at)  
   ...> VALUES  
   ...> ('Bruce','Wayne',3,25,DATETIME('now'),DATETIME('now'));`  
`sqlite> SELECT * FROM players  
   ...> ;  
id          first_name  last_name   years_played  matches_won  created_at           updated_at`           
----------  ----------  ----------  ------------  -----------  -------------------  -------------------  
`1           Jake        Persing     2             45           2014-05-11 20:25:53  2014-05-11 20:25:53  
2           John        Smith       5             24           2014-05-11 20:27:20  2014-05-11 20:27:20  
3           G.I.        Joe         3             10           2014-05-11 20:27:59  2014-05-11 20:27:59  
4           Thomas      Anderson    2             15           2014-05-11 20:28:31  2014-05-11 20:28:31  
5           Carl        Sagan       2             15           2014-05-11 20:28:59  2014-05-11 20:28:59  
6           Gandalf     The White   2             15           2014-05-11 20:29:31  2014-05-11 20:29:31  
7           Mina        Harker      2             15           2014-05-11 20:30:13  2014-05-11 20:30:13  
8           Bob         Barker      2             15           2014-05-11 20:30:29  2014-05-11 20:30:29  
9           Tina        Fay         2             15           2014-05-11 20:30:57  2014-05-11 20:30:57  
10          Bilbo       Baggins     8             34           2014-05-11 20:31:26  2014-05-11 20:31:26  
11          Bruce       Wayne       3             25           2014-05-11 20:32:10  2014-05-11 20:32:10` 



`sqlite> INSERT INTO match_winners
   ...> (winner_id, match_length, match_type, created_at, updated_at)
   ...> VALUES
   ...> (8, 38, '3 goals', DATETIME('now'), DATETIME('now'));
sqlite> INSERT INTO match_winners
   ...> (winner_id, match_length, match_type, created_at, updated_at)
   ...> VALUES
   ...> (1, 41, '3 goals', DATETIME('now'), DATETIME('now'));
sqlite> INSERT INTO match_winners
   ...> (winner_id, match_length, match_type, created_at, updated_at)
   ...> VALUES
   ...> (1, 27, '3 goals', DATETIME('now'), DATETIME('now'));
sqlite> INSERT INTO match_winners
   ...> (winner_id, match_length, match_type, created_at, updated_at)
   ...> VALUES
   ...> (5, 37, '5 goals', DATETIME('now'), DATETIME('now'));`

`sqlite> SELECT first_name, last_name, years_played, matches_won, match_winners.updated_at FROM players JOIN match_winners ON match_winners.winner_id = players.id  
WHERE players.id = 1;`
`first_name  last_name   years_played  matches_won  updated_at`         
----------  ----------  ------------  -----------  -------------------
`Jake        Persing     2             45           2014-05-11 21:43:23
Jake        Persing     2             45           2014-05-11 21:43:38`


