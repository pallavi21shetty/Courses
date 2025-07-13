UPDATE <table_name> SET col1=value col2=value col3=value where <condition>

insert the data in table
    insert into itd_users(user_id,user_name, email, password) values
    (3,'mohamadd ali', 'mohamad@example.com', 'password0123'),
    (4,'Srikanth', 'srikanth@example.com', 'password987');

    create table users(
    user_id int auto_increment primary key,
    user_name varchar(100) not null,
    email varchar(100) not null unique,
    password varchar(255) not null,
    created_at timestamp default current_timestamp
); 






















mysql> use world;
Database changed

mysql> show tables;
+-----------------+
| Tables_in_world |
+-----------------+
| city            |
| country         |
| countrylanguage |
+-----------------+
3 rows in set (0.13 sec)

mysql> select * from country limit 5;
+------+-------------+---------------+---------------------------+-------------+-----------+------------+----------------+---------+---------+-----------------------+----------------------------------------------+-------------------------+---------+-------+
| Code | Name        | Continent     | Region                    | SurfaceArea | IndepYear | Population | LifeExpectancy | GNP     | GNPOld  | LocalName             | GovernmentForm                               | HeadOfState             | Capital | Code2 |
+------+-------------+---------------+---------------------------+-------------+-----------+------------+----------------+---------+---------+-----------------------+----------------------------------------------+-------------------------+---------+-------+
| ABW  | Aruba       | North America | Caribbean                 |      193.00 |      NULL |     103000 |           78.4 |  828.00 |  793.00 | Aruba                 | Nonmetropolitan Territory of The Netherlands | Beatrix                 |     129 | AW    |
| AFG  | Afghanistan | Asia          | Southern and Central Asia |   652090.00 |      1919 |   22720000 |           45.9 | 5976.00 |    NULL | Afganistan/Afqanestan | Islamic Emirate                              | Mohammad Omar           |       1 | AF    |
| AGO  | Angola      | Africa        | Central Africa            |  1246700.00 |      1975 |   12878000 |           38.3 | 6648.00 | 7984.00 | Angola                | Republic                                     | José Eduardo dos Santos |      56 | AO    |
| AIA  | Anguilla    | North America | Caribbean                 |       96.00 |      NULL |       8000 |           76.1 |   63.20 |    NULL |
 Anguilla              | Dependent Territory of the UK                | Elisabeth II            |      62 | AI    |
| ALB  | Albania     | Europe        | Southern Europe           |    28748.00 |      1912 |    3401200 |           71.6 | 3205.00 | 2500.00 | Shqipëria             | Republic                Rexhep Mej Rexhep Mejdani          |      34 | AL    |
+------+-------------+---------------+---------------------------+-------------+-----------+------------+----------------+---------+---------+-----------------------+----------------------------------------------+-------------------------+---------+-------+
5 rows in set (0.04 sec)

mysql> select continent, count(*) as Total_countries from country group by continent;
+---------------+-----------------+
| continent     | Total_countries |
+---------------+-----------------+
| North America |              37 |
| Asia          |              51 |
| Africa        |              58 |
| Europe        |              46 |
| South America |              14 |
| Oceania       |              28 |
| Antarctica    |               5 |
+---------------+-----------------+
7 rows in set (0.01 sec)

mysql> show databases;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| mysql              |
| performance_schema |
| sys                |
| test               |
| test2              |
| todo_app           |
| world              |
+--------------------+
8 rows in set (0.01 sec)

mysql> use test2;
Database changed
mysql> show tables;
+-----------------+
| Tables_in_test2 |
+-----------------+
| users           |
+-----------------+
1 row in set (0.00 sec)

mysql> describe users;
+------------+--------------+------+-----+-------------------+-------------------+
| Field      | Type         | Null | Key | Default           | Extra             |
+------------+--------------+------+-----+-------------------+-------------------+
| user_id    | int          | NO   | PRI | NULL              | auto_increment    |
| user_name  | varchar(100) | NO   |     | NULL              |                   |
| email      | varchar(100) | NO   | UNI | NULL              |                   |
| password   | varchar(255) | NO   |     | NULL              |                   |
| created_at | timestamp    | YES  |     | CURRENT_TIMESTAMP | DEFAULT_GENERATED |
+------------+--------------+------+-----+-------------------+-------------------+
5 rows in set (0.01 sec)


mysql> select * from users;
+---------+------------+------------------+-------------+---------------------+
| user_id | user_name  | email            | password    | created_at          |
+---------+------------+------------------+-------------+---------------------+
|       1 | john doe   | john@example.com | password123 | 2025-06-21 12:57:56 |
|       2 | jane smith | jane@example.com | password    | 2025-06-21 12:57:56 |
+---------+------------+------------------+-------------+---------------------+
2 rows in set (0.02 sec)

mysql> update users set user_name="kiran" where user_id=2;
Query OK, 1 row affected (0.03 sec)
Rows matched: 1  Changed: 1  Warnings: 0

mysql> select * from users;
+---------+-----------+------------------+-------------+---------------------+
| user_id | user_name | email            | password    | created_at          |
+---------+-----------+------------------+-------------+---------------------+
|       1 | john doe  | john@example.com | password123 | 2025-06-21 12:57:56 |
|       2 | kiran     | jane@example.com | password    | 2025-06-21 12:57:56 |
+---------+-----------+------------------+-------------+---------------------+
2 rows in set (0.00 sec)

mysql> alter table users rename to itd_users;
Query OK, 0 rows affected (0.06 sec)

mysql> show tables;
+-----------------+
| Tables_in_test2 |
+-----------------+
| itd_users       |
+-----------------+
1 row in set (0.00 sec)

mysql> describe itd_users;
+------------+--------------+------+-----+-------------------+-------------------+
| Field      | Type         | Null | Key | Default           | Extra             |
+------------+--------------+------+-----+-------------------+-------------------+
| user_id    | int          | NO   | PRI | NULL              | auto_increment    |
| user_name  | varchar(100) | NO   |     | NULL              |                   |
| email      | varchar(100) | NO   | UNI | NULL              |                   |
| password   | varchar(255) | NO   |     | NULL              |                   |
| created_at | timestamp    | YES  |     | CURRENT_TIMESTAMP | DEFAULT_GENERATED |
+------------+--------------+------+-----+-------------------+-------------------+
5 rows in set (0.00 sec)

mysql> alter table itd_users add phone_no varchar(15);
Query OK, 0 rows affected (0.04 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> describe itd_users;
+------------+--------------+------+-----+-------------------+-------------------+
| Field      | Type         | Null | Key | Default           | Extra             |
+------------+--------------+------+-----+-------------------+-------------------+
| user_id    | int          | NO   | PRI | NULL              | auto_increment    |
| user_name  | varchar(100) | NO   |     | NULL              |                   |
| email      | varchar(100) | NO   | UNI | NULL              |                   |
| password   | varchar(255) | NO   |     | NULL              |                   |
| created_at | timestamp    | YES  |     | CURRENT_TIMESTAMP | DEFAULT_GENERATED |
| phone_no   | varchar(15)  | YES  |     | NULL              |                   |
+------------+--------------+------+-----+-------------------+-------------------+
6 rows in set (0.00 sec)

mysql> select * from itd_users;
+---------+-----------+------------------+-------------+---------------------+----------+
| user_id | user_name | email            | password    | created_at          | phone_no |      
+---------+-----------+------------------+-------------+---------------------+----------+      
|       1 | john doe  | john@example.com | password123 | 2025-06-21 12:57:56 | NULL     |      
|       2 | kiran     | jane@example.com | password    | 2025-06-21 12:57:56 | NULL     |      
+---------+-----------+------------------+-------------+---------------------+----------+      
2 rows in set (0.00 sec)

mysql> truncate table itd_users;
Query OK, 0 rows affected (0.06 sec)

mysql> select * from itd_users; 
Empty set (0.00 sec)

mysql> insert into itd_users (user_name, email, password) values
    ->     ('john doe', 'john@example.com', 'password123'),
    ->     ('jane smith', 'jane@example.com', 'password');
Query OK, 2 rows affected (0.01 sec)
Records: 2  Duplicates: 0  Warnings: 0

mysql> select * from itd_users;
+---------+------------+------------------+-------------+---------------------+----------+
| user_id | user_name  | email            | password    | created_at          | phone_no |     
+---------+------------+------------------+-------------+---------------------+----------+     
|       1 | john doe   | john@example.com | password123 | 2025-07-04 15:19:30 | NULL     |     
|       2 | jane smith | jane@example.com | password    | 2025-07-04 15:19:30 | NULL     |     
+---------+------------+------------------+-------------+---------------------+----------+     
2 rows in set (0.00 sec)

mysql>     insert into itd_users(user_id,user_name, email, password) values
    ->     (3,'mohamadd ali', 'mohamad@example.com', 'password0123'),
    ->     (4,'Srikanth', 'srikanth@example.com', 'password987');
Query OK, 2 rows affected (0.01 sec)
Records: 2  Duplicates: 0  Warnings: 0

mysql> select * from itd_users;
+---------+--------------+----------------------+--------------+---------------------+----------+
| user_id | user_name    | email                | password     | created_at          | phone_no |
+---------+--------------+----------------------+--------------+---------------------+----------+
|       1 | john doe     | john@example.com     | password123  | 2025-07-04 15:19:30 | NULL     |
|       2 | jane smith   | jane@example.com     | password     | 2025-07-04 15:19:30 | NULL     |
|       3 | mohamadd ali | mohamad@example.com  | password0123 | 2025-07-04 15:24:58 | NULL     |
|       4 | Srikanth     | srikanth@example.com | password987  | 2025-07-04 15:24:58 | NULL     |
+---------+--------------+----------------------+--------------+---------------------+----------+
4 rows in set (0.00 sec)

mysql> delete from itd_users where email='jane@example.com'; 
Query OK, 1 row affected (0.01 sec)

mysql> select * from itd_users;
+---------+--------------+----------------------+--------------+---------------------+----------+
| user_id | user_name    | email                | password     | created_at          | phone_no |
+---------+--------------+----------------------+--------------+---------------------+----------+
|       1 | john doe     | john@example.com     | password123  | 2025-07-04 15:19:30 | NULL     |
|       3 | mohamadd ali | mohamad@example.com  | password0123 | 2025-07-04 15:24:58 | NULL     |
|       4 | Srikanth     | srikanth@example.com | password987  | 2025-07-04 15:24:58 | NULL     |
+---------+--------------+----------------------+--------------+---------------------+----------+
3 rows in set (0.00 sec)

mysql> drop table itd_users;
Query OK, 0 rows affected (0.03 sec)

mysql> select * from itd_users;
ERROR 1146 (42S02): Table 'test2.itd_users' doesn't exist
mysql> show tables;
Empty set (0.00 sec)



mysql>     create table users(
    ->     user_id int auto_increment primary key,
    ->     user_name varchar(100) not null,
    ->     email varchar(100) not null unique,
    ->     password varchar(255) not null,
    ->     created_at timestamp default current_timestamp
    -> );
Query OK, 0 rows affected (0.05 sec)

mysql> describe users;
+------------+--------------+------+-----+-------------------+-------------------+
| Field      | Type         | Null | Key | Default           | Extra             |
+------------+--------------+------+-----+-------------------+-------------------+
| user_id    | int          | NO   | PRI | NULL              | auto_increment    |
| user_name  | varchar(100) | NO   |     | NULL              |                   |
| email      | varchar(100) | NO   | UNI | NULL              |                   |
| password   | varchar(255) | NO   |     | NULL              |                   |
| created_at | timestamp    | YES  |     | CURRENT_TIMESTAMP | DEFAULT_GENERATED |
+------------+--------------+------+-----+-------------------+-------------------+
5 rows in set (0.00 sec)


mysql> insert into users(user_name, email, password) values ("rahul", "rahul@gmail.com","passwo
rd123"); 
Query OK, 1 row affected (0.01 sec)

mysql> select * from users;                                                                    
+---------+-----------+-----------------+-------------+---------------------+
| user_id | user_name | email           | password    | created_at          |
+---------+-----------+-----------------+-------------+---------------------+
|       1 | rahul     | rahul@gmail.com | password123 | 2025-07-04 15:51:02 |
+---------+-----------+-----------------+-------------+---------------------+
1 row in set (0.00 sec)

mysql> insert into users(user_name, email, password) values ("rahul", "rahul@gmail.com","passwo
rd123");
ERROR 1062 (23000): Duplicate entry 'rahul@gmail.com' for key 'users.email'

mysql> insert into users(user_name, email, password) values ("rahul", "rahul2@gmail.com","passw
ord123");
Query OK, 1 row affected (0.01 sec)

mysql> select * from users;                                                                    
+---------+-----------+------------------+-------------+---------------------+
| user_id | user_name | email            | password    | created_at          |
+---------+-----------+------------------+-------------+---------------------+
|       1 | rahul     | rahul@gmail.com  | password123 | 2025-07-04 15:51:02 |
|       3 | rahul     | rahul2@gmail.com | password123 | 2025-07-04 15:53:15 |
+---------+-----------+------------------+-------------+---------------------+
2 rows in set (0.00 sec)











mysql> CREATE TABLE users (
    ->   id INT PRIMARY KEY,
    ->   email VARCHAR(100) UNIQUE
    -> );
Query OK, 0 rows affected (0.02 sec)

mysql> desribe users;
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'desribe users' at line 1
mysql> describe users;
+-------+--------------+------+-----+---------+-------+
| Field | Type         | Null | Key | Default | Extra |
+-------+--------------+------+-----+---------+-------+
| id    | int          | NO   | PRI | NULL    |       |
| email | varchar(100) | YES  | UNI | NULL    |       |
+-------+--------------+------+-----+---------+-------+
2 rows in set (0.00 sec)

mysql> INSERT INTO users (id, email) VALUES (1, 'pallavi@example.com');
Query OK, 1 row affected (0.01 sec)

mysql> INSERT INTO users (id, email) VALUES (2, NULL);
Query OK, 1 row affected (0.01 sec)

mysql> INSERT INTO users (id, email) VALUES (3, NULL);
Query OK, 1 row affected (0.01 sec)

mysql> select * from users;
+----+---------------------+
| id | email               |
+----+---------------------+
|  2 | NULL                |
|  3 | NULL                |
|  1 | pallavi@example.com |
+----+---------------------+
3 rows in set (0.00 sec)

mysql> select * from users;
+----+---------------------+
| id | email               |
+----+---------------------+
|  2 | NULL                |
|  3 | NULL                |
|  1 | pallavi@example.com |
+----+---------------------+
3 rows in set (0.00 sec)

mysql> INSERT INTO users (id, email) VALUES (3);      
ERROR 1136 (21S01): Column count doesn't match value count at row 1
mysql> INSERT INTO users (id, email) VALUES (3,'');
ERROR 1062 (23000): Duplicate entry '3' for key 'users.PRIMARY'
mysql> INSERT INTO users (id, email) VALUES (4,'');
Query OK, 1 row affected (0.02 sec)

mysql> select * from users;                        
+----+---------------------+
| id | email               |
+----+---------------------+
|  2 | NULL                |
|  3 | NULL                |
|  4 |                     |
|  1 | pallavi@example.com |
+----+---------------------+
4 rows in set (0.01 sec)

mysql> INSERT INTO users (id, email) VALUES (5,'');
ERROR 1062 (23000): Duplicate entry '' for key 'users.email'








mysql> drop table users;
Query OK, 0 rows affected (0.06 sec)

mysql> CREATE TABLE users (
    ->   id INT PRIMARY KEY,
    ->   email VARCHAR(100) UNIQUE
    -> , name varchar(30) not null);
Query OK, 0 rows affected (0.08 sec)

mysql> describe users;
+-------+--------------+------+-----+---------+-------+
| Field | Type         | Null | Key | Default | Extra |
+-------+--------------+------+-----+---------+-------+
| id    | int          | NO   | PRI | NULL    |       |
| email | varchar(100) | YES  | UNI | NULL    |       |
| name  | varchar(30)  | NO   |     | NULL    |       |
+-------+--------------+------+-----+---------+-------+
3 rows in set (0.04 sec)

mysql> INSERT INTO users (id, email,name) VALUES (1, 'pallavi@example.com','pallavi');
Query OK, 1 row affected (0.01 sec)

mysql> INSERT INTO users (id, email,name) VALUES ('', 'pallavi12@example.com','pallavi');
ERROR 1366 (HY000): Incorrect integer value: '' for column 'id' at row 1
mysql> INSERT INTO users (id, email,name) VALUES ( , 'pallavi12@example.com','pallavi'); 
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near ', 'pallavi12@example.com','pallavi')' at line 1
mysql> INSERT INTO users (id, email,name) VALUES (2, 'pallavi12@example.com',' ');       
Query OK, 1 row affected (0.01 sec)

mysql> select * from users;
+----+-----------------------+---------+
| id | email                 | name    |
+----+-----------------------+---------+
|  1 | pallavi@example.com   | pallavi |
|  2 | pallavi12@example.com |         |
+----+-----------------------+---------+
2 rows in set (0.00 sec)

mysql> INSERT INTO users (id, email,name) VALUES (3, 'pavi12@example.com',' ');   
Query OK, 1 row affected (0.01 sec)

mysql> select * from users;
+----+-----------------------+---------+
| id | email                 | name    |
+----+-----------------------+---------+
|  1 | pallavi@example.com   | pallavi |
|  2 | pallavi12@example.com |         |
|  3 | pavi12@example.com    |         |
+----+-----------------------+---------+
3 rows in set (0.00 sec)

mysql> INSERT INTO users (id, email,name) VALUES (4, 'arun@example.com',null);     
ERROR 1048 (23000): Column 'name' cannot be null





mysql> INSERT INTO users (id, email,name) VALUES (5, ' ','kiran ');                   
Query OK, 1 row affected (0.01 sec)

mysql> INSERT INTO users (id, email,name) VALUES (6, ' ','kiran ');  
ERROR 1062 (23000): Duplicate entry ' ' for key 'users.email'
mysql> INSERT INTO users (id, email,name) VALUES (6, '   ','kiran ');  
Query OK, 1 row affected (0.01 sec)

mysql> select * from users;
+----+-----------------------+---------+
| id | email                 | name    |
+----+-----------------------+---------+
|  1 | pallavi@example.com   | pallavi |
|  2 | pallavi12@example.com |         |
|  3 | pavi12@example.com    |         |
|  5 |                       | kiran   |
|  6 |                       | kiran   |
+----+-----------------------+---------+
5 rows in set (0.00 sec)