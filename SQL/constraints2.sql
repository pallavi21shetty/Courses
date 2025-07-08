create table Voters(
    Id int not null auto_increment primary key,
    name varchar(255),
    age int,
    check(age>17)
);

create table Voters(
    Id int not null auto_increment primary key,
    name varchar(255),
    age int,
    constraint voters_age_check check(age>17)
);

create table e_users(
    user_id int auto_increment primary key,
    user_name varchar(100) not null,
    email varchar(100) not null unique,
    password varchar(255) not null,
    created_at timestamp default current_timestamp
);

create table products(
    product_id int auto_increment primary key,
    product_name varchar(100) not null,
    description text,
    price decimal(10, 2) not null,
    stock int not null,
    created_at timestamp default current_timestamp
);

create table orders(
    order_id int auto_increment primary key,
    user_id int not null,
    order_date timestamp default current_timestamp,
    foreign key  (user_id) references e_users(user_id)
);

insert into e_users(user_name, email, password) values
('john doe', 'john@example.com', 'password123'),
('srikanth', 'srikanth@example.com', 'password123'),
('jane smith', 'jane@example.com', 'password');

insert into products (product_name, description, price,stock)values 
('samsung','this is washing machine','4500.67',10),
('mi','this is tv','300.99',20),
('hp','this is printer','20000', 15),
('dell','this is a laptop','800.13',12);

insert into orders (user_id, product_id) values
(1,6),
(2,899.98);





joins
select  orders.order_id, e_users.user_name, e_users.email, product_id
from orders
inner join e_users on e_users.user_id=orders.user_id;

select  orders.order_id, products.product_name, products.price
from orders
inner join products on products.product_id=orders.product_id;

select orders.order_id, orders.product_id, e_users.user_name, e_users.email
from orders
inner join e_users on e_users.user_id=orders.user_id;

select orders.order_id, orders.product_id, e_users.user_name, e_users.email
from orders
right join e_users on e_users.user_id=orders.user_id;

select orders.order_id, orders.product_id, e_users.user_name, e_users.email
from orders
left join e_users on e_users.user_id=orders.user_id;

select orders.order_id, orders.product_id, e_users.user_name, e_users.email
from orders
join e_users on e_users.user_id=orders.user_id;

select orders.order_id, orders.product_id, e_users.user_name, e_users.email
from orders
join e_users;

select orders.order_id, orders.product_id, e_users.user_name, e_users.email
from orders
 cross join e_users;















C:\Users\HP\OneDrive\Documents\Courses>"C:\Program Files\MySQL\MySQL Server 8.0\bin\mysql.exe" -u root -p -h 127.0.0.1 -P 3307
Enter password: ********
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 16
Server version: 8.0.42 MySQL Community Server - GPL

Copyright (c) 2000, 2025, Oracle and/or its affiliates.

Oracle is a registered trademark of Oracle Corporation and/or its      
affiliates. Other names may be trademarks of their respective
owners.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

mysql> show databases;
+--------------------+
| Database           |
+--------------------+
| ecommerce          |
| information_schema |
| mysql              |
| performance_schema |
| sys                |
| test               |
| test2              |
| todo_app           |
| world              |
+--------------------+
9 rows in set (0.17 sec)

mysql> use test2;
Database changed
mysql> show tables;
+-----------------+
| Tables_in_test2 |
+-----------------+
| users           |
+-----------------+
1 row in set (0.03 sec)

mysql> create table Voters(
    ->     Id int not null auto_increment,
    ->     name varchar(255),
    ->     age int,
    ->     check(age>17)
    -> );
ERROR 1075 (42000): Incorrect table definition; there can be only one auto column and it must be defined as a key
mysql> create table Voters(
    ->     Id int not null auto_increment primary key,
    ->     name varchar(255),
    ->     age int,
    ->     check(age>17)
    -> );
Query OK, 0 rows affected (0.23 sec)

mysql> show tables;
+-----------------+
| Tables_in_test2 |
+-----------------+
| users           |
| voters          |
+-----------------+
2 rows in set (0.01 sec)

mysql> describe voters;
+-------+--------------+------+-----+---------+----------------+
| Field | Type         | Null | Key | Default | Extra          |
+-------+--------------+------+-----+---------+----------------+
| Id    | int          | NO   | PRI | NULL    | auto_increment |
| name  | varchar(255) | YES  |     | NULL    |                |
| age   | int          | YES  |     | NULL    |                |
+-------+--------------+------+-----+---------+----------------+
3 rows in set (0.03 sec)

mysql> insert into voters (name, age) values ('prakash',20); 
Query OK, 1 row affected (0.02 sec)

mysql> select * from voters;
+----+---------+------+
| Id | name    | age  |
+----+---------+------+
|  1 | prakash |   20 |
+----+---------+------+
1 row in set (0.00 sec)

mysql> insert into voters (name, age) values ('praveen',16);
ERROR 3819 (HY000): Check constraint 'voters_chk_1' is violated.

mysql> insert into voters (name, age) values ('pramod',19); 
Query OK, 1 row affected (0.01 sec)

mysql> select * from voters;
+----+---------+------+
| Id | name    | age  |
+----+---------+------+
|  1 | prakash |   20 |
|  2 | pramod  |   19 |
+----+---------+------+
2 rows in set (0.00 sec)


mysql> create table e_users(
    ->     user_id int auto_increment primary key,
    ->     user_name varchar(100) not null,
    ->     email varchar(100) not null unique,
    ->     password varchar(255) not null,
    ->     created_at timestamp default current_timestamp
    -> );
Query OK, 0 rows affected (0.20 sec)

mysql> create table products(
    ->     product_id int auto_increment primary key,
    ->     product_name varchar(100) not null,
    ->     description text,
    ->     price decimal(10, 2) not null,
    ->     created_at timestamp default current_timestamp
    -> );
Query OK, 0 rows affected (0.04 sec)

mysql> create table orders(
    ->     order_id int auto_increment primary key,
    ->     user_id int not null,
    ->     order_date timestamp default current_timestamp,
    ->     total decimal(10, 2) not null,
    ->     foreign key  (user_id) references e_users(user_id)
    -> );
Query OK, 0 rows affected (0.05 sec)

mysql> show tables;
+-----------------+
| Tables_in_test2 |
+-----------------+
| e_users         |
| orders          |
| products        |
| users           |
| voters          |
+-----------------+
5 rows in set (0.01 sec)

mysql> insert into e_users(user_name, email, password) values
    -> ('john doe', 'john@example.com', 'password123'),
    -> ('srikanth', 'srikanth@example.com', 'password123'),
    -> ('jane smith', 'jane@example.com', 'password');
Query OK, 3 rows affected (0.02 sec)
Records: 3  Duplicates: 0  Warnings: 0

mysql> select * from e_users;
+---------+------------+----------------------+-------------+---------------------+
| user_id | user_name  | email                | password    | created_at          |
+---------+------------+----------------------+-------------+---------------------+
|       1 | john doe   | john@example.com     | password123 | 2025-07-07 12:47:40 |
|       2 | srikanth   | srikanth@example.com | password123 | 2025-07-07 12:47:40 |
|       3 | jane smith | jane@example.com     | password    | 2025-07-07 12:47:40 |
+---------+------------+----------------------+-------------+---------------------+
3 rows in set (0.00 sec)

mysql> alter table products add stock int not null;
Query OK, 0 rows affected (0.13 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> insert into products (product_name, description, price,stock)values
    -> ('samsung','this is washing machine','4500.67',10),
    -> ('mi','this is tv','300.99',20),
    -> ('hp','this is printer','20000', 15),
    -> ('dell','this is a laptop','800.13',12);
Query OK, 4 rows affected (0.01 sec)
Records: 4  Duplicates: 0  Warnings: 0

mysql> select * from products;
+------------+--------------+-------------------------+----------+---------------------+-------+
| product_id | product_name | description             | price    | created_at          | stock |
+------------+--------------+-------------------------+----------+---------------------+-------+
|          1 | samsung      | this is washing machine |  4500.67 | 2025-07-07 12:56:25 |    10 |
|          2 | mi           | this is tv              |   300.99 | 2025-07-07 12:56:25 |    20 |
|          3 | hp           | this is printer         | 20000.00 | 2025-07-07 12:56:25 |    15 -07-07 12:56:25 |    15 |
|          4 | dell         | this is a laptop        |   800.13 | 2025-07-07 12:56:25 |    12 |
+------------+--------------+-------------------------+----------+---------------------+-------+
4 rows in set (0.01 sec)

mysql> insert into products (product_name, description, price,stock)values
    -> ('samsung','this is washing machine','4500.67',10),
    -> ('hp','this is printer','20000', 15);
Query OK, 2 rows affected (0.01 sec)
Records: 2  Duplicates: 0  Warnings: 0

mysql> select * from products;                                                                 
+------------+--------------+-------------------------+----------+---------------------+-------+
| product_id | product_name | description             | price    | created_at          | stock |
+------------+--------------+-------------------------+----------+---------------------+-------+
|          1 | samsung      | this is washing machine |  4500.67 | 2025-07-07 12:56:25 |    10 |
|          2 | mi           | this is tv              |   300.99 | 2025-07-07 12:56:25 |    20 |
|          3 | hp           | this is printer         | 20000.00 | 2025-07-07 12:56:25 |    15 |
|          4 | dell         | this is a laptop        |   800.13 | 2025-07-07 12:56:25 |    12 |
|          5 | samsung      | this is washing machine |  4500.67 | 2025-07-07 13:00:03 |    10 |
|          6 | hp           | this is printer         | 20000.00 | 2025-07-07 13:00:03 |    15 |
+------------+--------------+-------------------------+----------+---------------------+-------+
6 rows in set (0.00 sec)

mysql> describe orders;
+------------+---------------+------+-----+-------------------+-------------------+
| Field      | Type          | Null | Key | Default           | Extra             |
+------------+---------------+------+-----+-------------------+-------------------+
| order_id   | int           | NO   | PRI | NULL              | auto_increment    |
| user_id    | int           | NO   | MUL | NULL              |                   |
| order_date | timestamp     | YES  |     | CURRENT_TIMESTAMP | DEFAULT_GENERATED |
| total      | decimal(10,2) | NO   |     | NULL              |                   |
+------------+---------------+------+-----+-------------------+-------------------+
4 rows in set (0.02 sec)


mysql> alter table orders add column product_id int;
Query OK, 0 rows affected (0.08 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> describe orders;
+------------+---------------+------+-----+-------------------+-------------------+
| Field      | Type          | Null | Key | Default           | Extra             |
+------------+---------------+------+-----+-------------------+-------------------+
| order_id   | int           | NO   | PRI | NULL              | auto_increment    |
| user_id    | int           | NO   | MUL | NULL              |                   |
| order_date | timestamp     | YES  |     | CURRENT_TIMESTAMP | DEFAULT_GENERATED |
| total      | decimal(10,2) | NO   |     | NULL              |                   |
| product_id | int           | YES  |     | NULL              |                   |
+------------+---------------+------+-----+-------------------+-------------------+
5 rows in set (0.00 sec)

mysql> alter table orders drop total;
Query OK, 0 rows affected (0.07 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> describe orders;
+------------+-----------+------+-----+-------------------+-------------------+
| Field      | Type      | Null | Key | Default           | Extra             |
+------------+-----------+------+-----+-------------------+-------------------+
| order_id   | int       | NO   | PRI | NULL              | auto_increment    |
| user_id    | int       | NO   | MUL | NULL              |                   |
| order_date | timestamp | YES  |     | CURRENT_TIMESTAMP | DEFAULT_GENERATED |
| product_id | int       | YES  |     | NULL              |                   |
+------------+-----------+------+-----+-------------------+-------------------+
4 rows in set (0.00 sec)

mysql> select * from e_users;
+---------+------------+----------------------+-------------+---------------------+
| user_id | user_name  | email                | password    | created_at          |
+---------+------------+----------------------+-------------+---------------------+
|       1 | john doe   | john@example.com     | password123 | 2025-07-07 12:47:40 |
|       2 | srikanth   | srikanth@example.com | password123 | 2025-07-07 12:47:40 |
|       3 | jane smith | jane@example.com     | password    | 2025-07-07 12:47:40 |
+---------+------------+----------------------+-------------+---------------------+
3 rows in set (0.00 sec)

mysql> insert into orders (user_id, product_id) values
    -> (1,6),
    -> (2,899.98);
Query OK, 2 rows affected (0.01 sec)
Records: 2  Duplicates: 0  Warnings: 0

mysql> select * from orders;
+----------+---------+---------------------+------------+
| order_id | user_id | order_date          | product_id |
+----------+---------+---------------------+------------+
|        1 |       1 | 2025-07-07 13:07:46 |          6 |
|        2 |       2 | 2025-07-07 13:07:46 |        900 |
+----------+---------+---------------------+------------+
2 rows in set (0.00 sec)

mysql> insert into orders (user_id, product_id) values
    -> (2,6);
Query OK, 1 row affected (0.01 sec)

mysql> select * from orders;
+----------+---------+---------------------+------------+
| order_id | user_id | order_date          | product_id |
+----------+---------+---------------------+------------+
|        1 |       1 | 2025-07-07 13:07:46 |          6 |
|        2 |       2 | 2025-07-07 13:07:46 |        900 |
|        4 |       2 | 2025-07-07 13:11:15 |          6 |
+----------+---------+---------------------+------------+
3 rows in set (0.00 sec)

mysql> select  orders.order_id, e_users.user_name, e_users.email, product_id
    -> from orders
    -> inner join e_users on e_users.user_id=orders.user_id;
+----------+-----------+----------------------+------------+
| order_id | user_name | email                | product_id |
+----------+-----------+----------------------+------------+
|        1 | john doe  | john@example.com     |          6 |
|        2 | srikanth  | srikanth@example.com |        900 |
|        4 | srikanth  | srikanth@example.com |          6 |
+----------+-----------+----------------------+------------+
3 rows in set (0.03 sec)

mysql> select  orders.order_id, products.product_name, products.price
    -> from orders
    -> inner join products on products.product_id=orders.product_id;
+----------+--------------+----------+
| order_id | product_name | price    |
+----------+--------------+----------+
|        1 | hp           | 20000.00 |
|        4 | hp           | 20000.00 |
+----------+--------------+----------+
2 rows in set (0.01 sec)

mysql> select  orders.order_id, e_users.user_name, e_users.email,           
    ->  products.product_name, products.price                        
    -> from orders
    -> inner join e_users on e_users.user_id=orders.user_id 
    -> inner join products on products.product_id=orders.product_id;
+----------+-----------+----------------------+--------------+----------+
| order_id | user_name | email                | product_name | price    |
+----------+-----------+----------------------+--------------+----------+
|        1 | john doe  | john@example.com     | hp           | 20000.00 |
|        4 | srikanth  | srikanth@example.com | hp           | 20000.00 |
+----------+-----------+----------------------+--------------+----------+
2 rows in set (0.00 sec)

mysql> alter table orders drop constraint orders_ibfk_1;
Query OK, 0 rows affected (0.17 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> describe orders;
+------------+-----------+------+-----+-------------------+-------------------+
| Field      | Type      | Null | Key | Default           | Extra             |
+------------+-----------+------+-----+-------------------+-------------------+
| order_id   | int       | NO   | PRI | NULL              | auto_increment    |
| user_id    | int       | NO   | MUL | NULL              |                   |
| order_date | timestamp | YES  |     | CURRENT_TIMESTAMP | DEFAULT_GENERATED |
| product_id | int       | YES  |     | NULL              |                   |
+------------+-----------+------+-----+-------------------+-------------------+
4 rows in set (0.04 sec)

mysql> insert into orders (user_id, product_id) values (6,3);
Query OK, 1 row affected (0.01 sec)

mysql> select orders.order_id, orders.product_id, e_users.user_name, e_users.email
    -> from orders
    -> inner join e_users on e_users.user_id=orders.user_id;
+----------+------------+-----------+----------------------+
| order_id | product_id | user_name | email                |
+----------+------------+-----------+----------------------+
|        1 |          6 | john doe  | john@example.com     |
|        2 |        900 | srikanth  | srikanth@example.com |
|        4 |          6 | srikanth  | srikanth@example.com |
+----------+------------+-----------+----------------------+
3 rows in set (0.00 sec)

mysql> select orders.order_id, orders.product_id, e_users.user_name, e_users.email
    -> from orders
    -> inner join e_users on e_users.user_id=orders.user_id;
+----------+------------+-----------+----------------------+
| order_id | product_id | user_name | email                |
+----------+------------+-----------+----------------------+
|        1 |          6 | john doe  | john@example.com     |
|        2 |        900 | srikanth  | srikanth@example.com |
|        4 |          6 | srikanth  | srikanth@example.com |
+----------+------------+-----------+----------------------+
3 rows in set (0.00 sec)

mysql> select orders.order_id, orders.product_id, e_users.user_name, e_users.email
    -> from orders
    -> right join e_users on e_users.user_id=orders.user_id;
+----------+------------+------------+----------------------+
| order_id | product_id | user_name  | email                |
+----------+------------+------------+----------------------+
|        1 |          6 | john doe   | john@example.com     |
|        2 |        900 | srikanth   | srikanth@example.com |
|        4 |          6 | srikanth   | srikanth@example.com |
|     NULL |       NULL | jane smith | jane@example.com     |
+----------+------------+------------+----------------------+
4 rows in set (0.00 sec)

mysql> select orders.order_id, orders.product_id, e_users.user_name, e_users.email
    -> from orders
    -> left join e_users on e_users.user_id=orders.user_id;
+----------+------------+-----------+----------------------+
| order_id | product_id | user_name | email                |
+----------+------------+-----------+----------------------+
|        1 |          6 | john doe  | john@example.com     |
|        2 |        900 | srikanth  | srikanth@example.com |
|        4 |          6 | srikanth  | srikanth@example.com |
|        5 |          3 | NULL      | NULL                 |
+----------+------------+-----------+----------------------+
4 rows in set (0.00 sec)

mysql> select orders.order_id, orders.product_id, e_users.user_name, e_users.email
    -> from orders
    -> join e_users;
+----------+------------+------------+----------------------+
| order_id | product_id | user_name  | email                |
+----------+------------+------------+----------------------+
|        5 |          3 | john doe   | john@example.com     |
|        4 |          6 | john doe   | john@example.com     |
|        2 |        900 | john doe   | john@example.com     |
|        1 |          6 | john doe   | john@example.com     |
|        5 |          3 | srikanth   | srikanth@example.com |
|        4 |          6 | srikanth   | srikanth@example.com |
|        2 |        900 | srikanth   | srikanth@example.com |
|        1 |          6 | srikanth   | srikanth@example.com |
|        5 |          3 | jane smith | jane@example.com     |
|        4 |          6 | jane smith | jane@example.com     |
|        2 |        900 | jane smith | jane@example.com     |
|        1 |          6 | jane smith | jane@example.com     |
+----------+------------+------------+----------------------+
12 rows in set (0.01 sec)

mysql> select orders.order_id, orders.product_id, e_users.user_name, e_users.email
    -> from orders
    ->  cross join e_users;
+----------+------------+------------+----------------------+
| order_id | product_id | user_name  | email                |
+----------+------------+------------+----------------------+
|        5 |          3 | john doe   | john@example.com     |
|        4 |          6 | john doe   | john@example.com     |
|        2 |        900 | john doe   | john@example.com     |
|        1 |          6 | john doe   | john@example.com     |
|        5 |          3 | srikanth   | srikanth@example.com |
|        4 |          6 | srikanth   | srikanth@example.com |
|        2 |        900 | srikanth   | srikanth@example.com |
|        1 |          6 | srikanth   | srikanth@example.com |
|        5 |          3 | jane smith | jane@example.com     |
|        4 |          6 | jane smith | jane@example.com     |
|        2 |        900 | jane smith | jane@example.com     |
|        1 |          6 | jane smith | jane@example.com     |
+----------+------------+------------+----------------------+
12 rows in set (0.00 sec)
