# U3.W7: Intro to SQLite

## Release 0: Create a dummy database

`Jacobs-MacBook-Pro:~ jacobpersing$ sqlite3 dummy.db  
-- Loading resources from /Users/jacobpersing/.sqliterc`

`SQLite version 3.7.13 2012-07-17 17:46:21  
Enter ".help" for instructions  
Enter SQL statements terminated with a ";"  
sqlite> CREATE TABLE users (  
   ...>   id INTEGER PRIMARY KEY AUTOINCREMENT,  
   ...>   first_name VARCHAR(64) NOT NULL,  
   ...>   last_name  VARCHAR(64) NOT NULL,  
   ...>   email VARCHAR(128) UNIQUE NOT NULL,  
   ...>   created_at DATETIME NOT NULL,  
   ...>   updated_at DATETIME NOT NULL  
   ...> );  
sqlite>  `

## Release 1: Insert Data 

`sqlite> INSERT INTO users  
   ...> (first_name, last_name, email, created_at, updated_at)  
   ...> VALUES  
   ...> ('Kimmey', 'Lin', 'kimmy@devbootcamp.com', DATETIME('now'), DATETIME('now'));  
sqlite> SELECT * FROM users  
   ...> ;  
id          first_name  last_name   email                  created_at           updated_at           
--!--!--!-  --!--!--!-  --!--!--!-  --!--!--!--!--!--!--!  --!--!--!--!--!--!-  --!--!--!--!--!--!-  
1           Kimmey      Lin         kimmy@devbootcamp.com  2014-04-26 18:48:18  2014-04-26 18:48:18  
sqlite>`    

`sqlite> INSERT INTO users  
   ...> (first_name, last_name, email, created_at, updated_at)  
   ...> VALUES  
   ...> ('Jacob','Persing','misterdamon@gmail.com',DATETIME('now'),DATETIME('now'));  
sqlite> SELECT * FROM users  
   ...> ;  
id          first_name  last_name   email                  created_at           updated_at           
--!--!--!-  --!--!--!-  --!--!--!-  --!--!--!--!--!--!--!  --!--!--!--!--!--!-  --!--!--!--!--!--!-      
1           Kimmey      Lin         kimmy@devbootcamp.com  2014-04-26 18:48:18  2014-04-26 18:48:18   
2           Jacob       Persing     misterdamon@gmail.com  2014-04-26 18:57:25  2014-04-26 18:57:25   
sqlite>`  
## Release 2: Multi-line commands

`sqlite> INSERT INTO users  
   ...> (first_name, last_name, email, created_at, updated_at)  
   ...> VALUES   
   ...> ('Kimmey','Lin','kimmy@devbootcamp.com',DATETIME('now'),DATETIME('now'))    
   ...> ;   
Error: column email is not unique   
sqlite> SELECT * FROM users  
   ...> ;
id          first_name  last_name   email                  created_at           updated_at           
--!--!--!-  --!--!--!-  --!--!--!-  --!--!--!--!--!--!--!  --!--!--!--!--!--!-  --!--!--!--!--!--!-      
1           Kimmey      Lin         kimmy@devbootcamp.com  2014-04-26 18:48:18  2014-04-26 18:48:18  
2           Jacob       Persing     misterdamon@gmail.com  2014-04-26 18:57:25  2014-04-26 18:57:25  
sqlite> `

## Release 3: Add a column

` sqlite> ALTER TABLE users  
   ...> ADD nickname VARCHAR(64);  
sqlite> UPDATE users  
   ...> SET nickname = 'Kimchee'  
   ...> WHERE email = 'kimmy@devbootcamp.com';  `

` sqlite> UPDATE users  
   ...> SET nickname = 'Jakey'  
   ...> WHERE email = 'misterdamon@gmail.com';  
sqlite> SELECT * FROM users   
   ...> ;  
id          first_name  last_name   email                  created_at           updated_at           nickname    
--!--!--!-  --!--!--!-  --!--!--!-  --!--!--!--!--!--!--!  --!--!--!--!--!--!-  --!--!--!--!--!--!-  !--!--!--   
1           Kimmey      Lin         kimmy@devbootcamp.com  2014-04-26 19:15:44  2014-04-26 19:15:44  Kimchee      
2           Jacob       Persing     misterdamon@gmail.com  2014-04-26 19:16:23  2014-04-26 19:16:23  Jakey         
sqlite> `  
## Release 4: Change a value

`sqlite> UPDATE users  
   ...> SET nickname = 'Ninja Coder', first_name = 'Kimmy', last_name = 'Lin', updated_at = DATETIME('now')  
   ...> WHERE email = 'kimmy@devbootcamp.com'  
   ...> ;  
sqlite> SELECT * FROM users  
   ...> ;  
id          first_name  last_name   email                  created_at           updated_at           nickname      
--!--!--!-  --!--!--!-  --!--!--!-  --!--!--!--!--!--!--!  --!--!--!--!--!--!-  --!--!--!--!--!--!-  !--!--!--     
1           Kimmy       Lin         kimmy@devbootcamp.com  2014-04-26 19:15:44  2014-04-26 19:32:13  Ninja Coder   
2           Jacob       Persing     misterdamon@gmail.com  2014-04-26 19:16:23  2014-04-26 19:16:23  Jakey         
sqlite> `   

## Release 5: Reflect

* For this challenge, it was really cool learning how to use sqlite3 in more detail. I learned how to add and modify columns, create tables, etc... I had a bit of trouble trying to set the nickname column to NOT NULL because sqlite said it wouldn't let me set NOT NULL to a column that already had a NULL. I ended up getting around it by just making it a VARCHAR(64) and then immediately altering the column to contain data. Other than that, I didn't really have any problems and the challenge with smoothly. Overall I feel pretty comfortable with SQL queries and I'm getting more comfortable with database relationships and how they work. I didn't find any part of the challenge to be tedious because I was getting good practice with SQL the whole time.