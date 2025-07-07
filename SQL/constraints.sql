create table customer(
    id int auto_increment,
    name varchar(20),
    email varchar(50),
    address varchar(255),
    primary key (id));

create table product(
    id int,
    title varchar(20),
    description varchar(50),
    price varchar(255),
     unique (id));

    create table transaction(
        id int,
        title varchar(20),
        customer int,
        product int,
        quantity int,
        date_of_purchase varchar(255)
         );

insert into customer (name, email, address)values 
('sumesh','sumesh@gmail.com','delhi'),
('girish','girish@gmail.com','mumbai'),
('faran','faran@gmail.com','mysore'),
('raj','raj@gmail.com','Noida'),
('yuvaraj','yuvaraj@gmail.com','gurgon');

insert into customer (id,name, email, address)values 
(4,'kiran','kiran@gmail.com','delhi');

alter table customer modify name varchar(20)  not null;

alter table customer add constraint unique (email);

create table product(
    id int,
    title varchar(20),
    description varchar(50),
    price varchar(255),
     unique (id),
     unique(title));

create table product(
    id int auto_increment,
    title varchar(20) not null default "AAA",
    description varchar(50),
    price varchar(255),
    primary key (id),
    unique(title));

insert into product (title, description, price)values 
(null,'this is an apple phone','120000'),
('samsung','this is washing machine','45000'),
('mi','this is tv','30000'),
('hp','this is printer','20000'),
('dell','this is a laptop','80000');

alter table product drop  index title;

insert into product (title, description, price)values 
('samsung','this is washing machine','45000'),
('mi','this is tv','30000'),
('hp','this is printer','20000'),
('dell','this is a laptop','80000');

insert into product (title, description, price)values 
('samsung','this is washing machine','25000');

create index cust_name on customer (name);





















mysql> create database ecommerce;
Query OK, 1 row affected (0.13 sec)

mysql> use ecommerce;
Database changed

mysql> show tables;
Empty set (0.09 sec)

mysql> create table customer(
    ->     id int auto_increment,
    ->     name varchar(20),
    ->     email varchar(50),
    ->     address varchar(255));
ERROR 1075 (42000): Incorrect table definition; there can be only one auto column and it must be defined as a key
mysql> create table customer(
    ->     id int auto_increment,
    ->     name varchar(20),
    ->     email varchar(50),
    ->     address varchar(255),
    ->     primary key (id));
Query OK, 0 rows affected (0.12 sec)

mysql> describe customer;
+---------+--------------+------+-----+---------+----------------+
| Field   | Type         | Null | Key | Default | Extra          |
+---------+--------------+------+-----+---------+----------------+
| id      | int          | NO   | PRI | NULL    | auto_increment |
| name    | varchar(20)  | YES  |     | NULL    |                |
| email   | varchar(50)  | YES  |     | NULL    |                |
| address | varchar(255) | YES  |     | NULL    |                |
+---------+--------------+------+-----+---------+----------------+
4 rows in set (0.02 sec)

mysql> insert into customer values 
    -> ('sumesh','sumesh@gmail.com','delhi'),
    -> ('girish','girish@gmail.com','mumbai'),
    -> ('faran','faran@gmail.com','mysore'),
    -> ('raj','raj@gmail.com','Noida'),
    -> ('yuvaraj','yuvaraj@gmail.com','gurgon');
ERROR 1136 (21S01): Column count doesn't match value count at row 1

mysql> insert into customer (name, email, address)values 
    -> ('sumesh','sumesh@gmail.com','delhi'),
    -> ('girish','girish@gmail.com','mumbai'),
    -> ('faran','faran@gmail.com','mysore'),
    -> ('raj','raj@gmail.com','Noida'),
    -> ('yuvaraj','yuvaraj@gmail.com','gurgon');
Query OK, 5 rows affected (0.02 sec)
Records: 5  Duplicates: 0  Warnings: 0

mysql> select * from customer;
+----+---------+-------------------+---------+
| id | name    | email             | address |
+----+---------+-------------------+---------+
|  1 | sumesh  | sumesh@gmail.com  | delhi   |
|  2 | girish  | girish@gmail.com  | mumbai  |
|  3 | faran   | faran@gmail.com   | mysore  |
|  4 | raj     | raj@gmail.com     | Noida   |
|  5 | yuvaraj | yuvaraj@gmail.com | gurgon  |
+----+---------+-------------------+---------+
5 rows in set (0.00 sec)

mysql> insert into customer (id,name, email, address)values 
    -> (4,'kiran','kiran@gmail.com','delhi');
ERROR 1062 (23000): Duplicate entry '4' for key 'customer.PRIMARY'

mysql> insert into customer (id,name, email, address)values 
    -> (6,'kiran','kiran@gmail.com','delhi');
Query OK, 1 row affected (0.01 sec)

mysql> select * from customer;
+----+---------+-------------------+---------+
| id | name    | email             | address |
+----+---------+-------------------+---------+
|  1 | sumesh  | sumesh@gmail.com  | delhi   |
|  2 | girish  | girish@gmail.com  | mumbai  |
|  3 | faran   | faran@gmail.com   | mysore  |
|  4 | raj     | raj@gmail.com     | Noida   |
|  5 | yuvaraj | yuvaraj@gmail.com | gurgon  |
|  6 | kiran   | kiran@gmail.com   | delhi   |
+----+---------+-------------------+---------+
6 rows in set (0.00 sec)

mysql> insert into customer (name, email, address)values    
    -> ('karan','karan@gmail.com','delhi');  
Query OK, 1 row affected (0.01 sec)

mysql> select * from customer;
+----+---------+-------------------+---------+
| id | name    | email             | address |
+----+---------+-------------------+---------+
|  1 | sumesh  | sumesh@gmail.com  | delhi   |
|  2 | girish  | girish@gmail.com  | mumbai  |
|  3 | faran   | faran@gmail.com   | mysore  |
|  4 | raj     | raj@gmail.com     | Noida   |
|  5 | yuvaraj | yuvaraj@gmail.com | gurgon  |
|  6 | kiran   | kiran@gmail.com   | delhi   |
|  7 | karan   | karan@gmail.com   | delhi   |
+----+---------+-------------------+---------+
7 rows in set (0.00 sec)

mysql> insert into customer (id,name, email, address)values 
    -> (12,'abhishek','abhishek@gmail.com','delhi');
Query OK, 1 row affected (0.01 sec)

mysql> select * from customer;
+----+----------+--------------------+---------+
| id | name     | email              | address |
+----+----------+--------------------+---------+
|  1 | sumesh   | sumesh@gmail.com   | delhi   |
|  2 | girish   | girish@gmail.com   | mumbai  |
|  3 | faran    | faran@gmail.com    | mysore  |
|  4 | raj      | raj@gmail.com      | Noida   |
|  5 | yuvaraj  | yuvaraj@gmail.com  | gurgon  |
|  6 | kiran    | kiran@gmail.com    | delhi   |
|  7 | karan    | karan@gmail.com    | delhi   |
| 12 | abhishek | abhishek@gmail.com | delhi   |
+----+----------+--------------------+---------+
8 rows in set (0.00 sec)

mysql> insert into customer (name, email, address)values 
    -> ('alia','alia@gmail.com','delhi');  
Query OK, 1 row affected (0.01 sec)

mysql> select * from customer;
+----+----------+--------------------+---------+
| id | name     | email              | address |
+----+----------+--------------------+---------+
|  1 | sumesh   | sumesh@gmail.com   | delhi   |
|  2 | girish   | girish@gmail.com   | mumbai  |
|  3 | faran    | faran@gmail.com    | mysore  |
|  4 | raj      | raj@gmail.com      | Noida   |
|  5 | yuvaraj  | yuvaraj@gmail.com  | gurgon  |
|  6 | kiran    | kiran@gmail.com    | delhi   |
|  7 | karan    | karan@gmail.com    | delhi   |
| 12 | abhishek | abhishek@gmail.com | delhi   |
| 13 | alia     | alia@gmail.com     | delhi   |
+----+----------+--------------------+---------+
9 rows in set (0.00 sec)

mysql> insert into customer (email, address)values       
    -> ('alla@gmail.com','delhi');       
Query OK, 1 row affected (0.01 sec)

mysql> select * from customer;
+----+----------+--------------------+---------+
| id | name     | email              | address |
+----+----------+--------------------+---------+
|  1 | sumesh   | sumesh@gmail.com   | delhi   |
|  2 | girish   | girish@gmail.com   | mumbai  |
|  3 | faran    | faran@gmail.com    | mysore  |
|  4 | raj      | raj@gmail.com      | Noida   |
|  5 | yuvaraj  | yuvaraj@gmail.com  | gurgon  |
|  6 | kiran    | kiran@gmail.com    | delhi   |
|  7 | karan    | karan@gmail.com    | delhi   |
| 12 | abhishek | abhishek@gmail.com | delhi   |
| 13 | alia     | alia@gmail.com     | delhi   |
| 14 | NULL     | alla@gmail.com     | delhi   |
+----+----------+--------------------+---------+
10 rows in set (0.00 sec)

mysql> alter table customer modify name varchar(20)  not null;
ERROR 1138 (22004): Invalid use of NULL value
mysql> delete from customer where id=14;
Query OK, 1 row affected (0.01 sec)

mysql> select * from customer;
+----+----------+--------------------+---------+
| id | name     | email              | address |
+----+----------+--------------------+---------+
|  1 | sumesh   | sumesh@gmail.com   | delhi   |
|  2 | girish   | girish@gmail.com   | mumbai  |
|  3 | faran    | faran@gmail.com    | mysore  |
|  4 | raj      | raj@gmail.com      | Noida   |
|  5 | yuvaraj  | yuvaraj@gmail.com  | gurgon  |
|  6 | kiran    | kiran@gmail.com    | delhi   |
|  7 | karan    | karan@gmail.com    | delhi   |
| 12 | abhishek | abhishek@gmail.com | delhi   |
| 13 | alia     | alia@gmail.com     | delhi   |
+----+----------+--------------------+---------+
9 rows in set (0.00 sec)

mysql> alter table customer modify name varchar(20)  not null;
Query OK, 0 rows affected (0.09 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> describe customer;
+---------+--------------+------+-----+---------+----------------+
| Field   | Type         | Null | Key | Default | Extra          |
+---------+--------------+------+-----+---------+----------------+
| id      | int          | NO   | PRI | NULL    | auto_increment |
| name    | varchar(20)  | NO   |     | NULL    |                |
| email   | varchar(50)  | YES  |     | NULL    |                |
| address | varchar(255) | YES  |     | NULL    |                |
+---------+--------------+------+-----+---------+----------------+
4 rows in set (0.01 sec)

mysql> insert into customer (email, address)values 
    -> ('alla@gmail.com','delhi');
ERROR 1364 (HY000): Field 'name' doesn't have a default value
mysql> insert into customer (name,email, address)values 
    -> (null,'alla@gmail.com','delhi');
ERROR 1048 (23000): Column 'name' cannot be null

mysql> insert into customer (name,email, address)values 
    -> (raj,'raj@gmail.com','delhi');
ERROR 1054 (42S22): Unknown column 'raj' in 'field list'
mysql> insert into customer (name,email, address)values 
    -> ('raj','raj@gmail.com','delhi');
Query OK, 1 row affected (0.01 sec)

mysql> select * from customer;
+----+----------+--------------------+---------+
| id | name     | email              | address |
+----+----------+--------------------+---------+
|  1 | sumesh   | sumesh@gmail.com   | delhi   |
|  2 | girish   | girish@gmail.com   | mumbai  |
|  3 | faran    | faran@gmail.com    | mysore  |
|  4 | raj      | raj@gmail.com      | Noida   |
|  5 | yuvaraj  | yuvaraj@gmail.com  | gurgon  |
|  6 | kiran    | kiran@gmail.com    | delhi   |
|  7 | karan    | karan@gmail.com    | delhi   |
| 12 | abhishek | abhishek@gmail.com | delhi   |
| 13 | alia     | alia@gmail.com     | delhi   |
| 15 | raj      | raj@gmail.com      | delhi   |
+----+----------+--------------------+---------+
10 rows in set (0.00 sec)


mysql> insert into customer (id,name,email, address)values 
    -> (14,'raj','raj@gmail.com','delhi');
Query OK, 1 row affected (0.01 sec)

mysql> select * from customer;
+----+----------+--------------------+---------+
| id | name     | email              | address |
+----+----------+--------------------+---------+
|  1 | sumesh   | sumesh@gmail.com   | delhi   |
|  2 | girish   | girish@gmail.com   | mumbai  |
|  3 | faran    | faran@gmail.com    | mysore  |
|  4 | raj      | raj@gmail.com      | Noida   |
|  5 | yuvaraj  | yuvaraj@gmail.com  | gurgon  |
|  6 | kiran    | kiran@gmail.com    | delhi   |
|  7 | karan    | karan@gmail.com    | delhi   |
| 12 | abhishek | abhishek@gmail.com | delhi   |
| 13 | alia     | alia@gmail.com     | delhi   |
| 14 | raj      | raj@gmail.com      | delhi   |
| 15 | raj      | raj@gmail.com      | delhi   |
+----+----------+--------------------+---------+
11 rows in set (0.00 sec)

mysql> alter table customer add constraint unique (email);
ERROR 1062 (23000): Duplicate entry 'raj@gmail.com' for key 'customer.email'

mysql> update customer set email='rhul@gmail.com' where id=15;
Query OK, 1 row affected (0.01 sec)
Rows matched: 1  Changed: 1  Warnings: 0

mysql> update customer set email='raj1@gmail.com' where id=14;
Query OK, 1 row affected (0.01 sec)
Rows matched: 1  Changed: 1  Warnings: 0

mysql> select * from customer;                                
+----+----------+--------------------+---------+
| id | name     | email              | address |
+----+----------+--------------------+---------+
|  1 | sumesh   | sumesh@gmail.com   | delhi   |
|  2 | girish   | girish@gmail.com   | mumbai  |
|  3 | faran    | faran@gmail.com    | mysore  |
|  4 | raj      | raj@gmail.com      | Noida   |
|  5 | yuvaraj  | yuvaraj@gmail.com  | gurgon  |
|  6 | kiran    | kiran@gmail.com    | delhi   |
|  7 | karan    | karan@gmail.com    | delhi   |
| 12 | abhishek | abhishek@gmail.com | delhi   |
| 13 | alia     | alia@gmail.com     | delhi   |
| 14 | raj      | raj1@gmail.com     | delhi   |
| 15 | raj      | rhul@gmail.com     | delhi   |
+----+----------+--------------------+---------+
11 rows in set (0.00 sec)

mysql> alter table customer add constraint unique (email);
Query OK, 0 rows affected (0.05 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> describe customer;
+---------+--------------+------+-----+---------+----------------+
| Field   | Type         | Null | Key | Default | Extra          |
+---------+--------------+------+-----+---------+----------------+
| id      | int          | NO   | PRI | NULL    | auto_increment |
| name    | varchar(20)  | NO   |     | NULL    |                |
| email   | varchar(50)  | YES  | UNI | NULL    |                |
| address | varchar(255) | YES  |     | NULL    |                |
+---------+--------------+------+-----+---------+----------------+
4 rows in set (0.00 sec)

mysql> create table product(
    ->     id int,
    ->     title varchar(20),
    ->     description varchar(50),
    ->     price varchar(255),
    ->      unique (id));
Query OK, 0 rows affected (0.04 sec)

mysql> describe product; 
+-------------+--------------+------+-----+---------+-------+
| Field       | Type         | Null | Key | Default | Extra |
+-------------+--------------+------+-----+---------+-------+
| id          | int          | YES  | UNI | NULL    |       |
| title       | varchar(20)  | YES  |     | NULL    |       |
| description | varchar(50)  | YES  |     | NULL    |       |
| price       | varchar(255) | YES  |     | NULL    |       |
+-------------+--------------+------+-----+---------+-------+
4 rows in set (0.00 sec)

mysql> drop table product;
Query OK, 0 rows affected (0.02 sec)

mysql> create table product(
    ->     id int,
    ->     title varchar(20),
    ->     description varchar(50),
    ->     price varchar(255),
    ->      unique (id),
    ->      unique(title));
Query OK, 0 rows affected (0.05 sec)

mysql> describe product;           
+-------------+--------------+------+-----+---------+-------+
| Field       | Type         | Null | Key | Default | Extra |
+-------------+--------------+------+-----+---------+-------+
| id          | int          | YES  | UNI | NULL    |       |
| title       | varchar(20)  | YES  | UNI | NULL    |       |
| description | varchar(50)  | YES  |     | NULL    |       |
| price       | varchar(255) | YES  |     | NULL    |       |
+-------------+--------------+------+-----+---------+-------+
4 rows in set (0.00 sec)

mysql> create table product(
    ->     id int,
    ->     title varchar(20),
    ->     description varchar(50),
    ->     price varchar(255),
    ->      primary key (id),
    ->     primary key (title));
ERROR 1068 (42000): Multiple primary key defined

mysql> create table product(
    ->     id int auto_increment,
    ->     title varchar(20),
    ->     description varchar(50),
    ->     price varchar(255),
    ->     primary key (id),
    ->     unique(title));
Query OK, 0 rows affected (0.04 sec)

mysql> describe product;
+-------------+--------------+------+-----+---------+----------------+
| Field       | Type         | Null | Key | Default | Extra          |
+-------------+--------------+------+-----+---------+----------------+
| id          | int          | NO   | PRI | NULL    | auto_increment |
| title       | varchar(20)  | YES  | UNI | NULL    |                |
| description | varchar(50)  | YES  |     | NULL    |                |
| price       | varchar(255) | YES  |     | NULL    |                |
+-------------+--------------+------+-----+---------+----------------+
4 rows in set (0.00 sec)

mysql> insert into product (title, description, price)values 
    -> (null,'this is an apple phone','120000'),
    -> ('samsung','this is washing machine','45000'),
    -> ('mi','this is tv','30000'),
    -> ('hp','this is printer','20000'),
    -> ('dell','this is a laptop','80000');
Query OK, 5 rows affected (0.00 sec)
Records: 5  Duplicates: 0  Warnings: 0

mysql>
mysql> select * from product;
+----+---------+-------------------------+--------+
| id | title   | description             | price  |
+----+---------+-------------------------+--------+
|  1 | NULL    | this is an apple phone  | 120000 |
|  2 | samsung | this is washing machine | 45000  |
|  3 | mi      | this is tv              | 30000  |
|  4 | hp      | this is printer         | 20000  |
|  5 | dell    | this is a laptop        | 80000  |
+----+---------+-------------------------+--------+
5 rows in set (0.00 sec)

mysql> insert into product (title, description, price)values 
    -> (null,'this is an samsung  phone','120000');
Query OK, 1 row affected (0.01 sec)

mysql> insert into product (title, description, price)values 
    -> ('samsung','this is an samsung  phone','120000');
ERROR 1062 (23000): Duplicate entry 'samsung' for key 'product.title'

mysql> alter table product drop constraint unique (title);
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'unique (title)' at line 1
mysql> alter table product drop constraint index title;
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'index title' at line 1
mysql> alter table product drop  index title;
Query OK, 0 rows affected (0.03 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> describe product;
+-------------+--------------+------+-----+---------+----------------+
| Field       | Type         | Null | Key | Default | Extra          |
+-------------+--------------+------+-----+---------+----------------+
| id          | int          | NO   | PRI | NULL    | auto_increment |
| title       | varchar(20)  | YES  |     | NULL    |                |
| description | varchar(50)  | YES  |     | NULL    |                |
| price       | varchar(255) | YES  |     | NULL    |                |
+-------------+--------------+------+-----+---------+----------------+
4 rows in set (0.01 sec)

mysql> alter table product add constraint unique (title);
Query OK, 0 rows affected (0.05 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> describe product;
+-------------+--------------+------+-----+---------+----------------+
| Field       | Type         | Null | Key | Default | Extra          |
+-------------+--------------+------+-----+---------+----------------+
| id          | int          | NO   | PRI | NULL    | auto_increment |
| title       | varchar(20)  | YES  | UNI | NULL    |                |
| description | varchar(50)  | YES  |     | NULL    |                |
| price       | varchar(255) | YES  |     | NULL    |                |
+-------------+--------------+------+-----+---------+----------------+
4 rows in set (0.00 sec)

mysql> alter table product drop  index title;                
Query OK, 0 rows affected (0.02 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> describe product;
+-------------+--------------+------+-----+---------+----------------+
| Field       | Type         | Null | Key | Default | Extra          |
+-------------+--------------+------+-----+---------+----------------+
| id          | int          | NO   | PRI | NULL    | auto_increment |
| title       | varchar(20)  | YES  |     | NULL    |                |
| description | varchar(50)  | YES  |     | NULL    |                |
| price       | varchar(255) | YES  |     | NULL    |                |
+-------------+--------------+------+-----+---------+----------------+
4 rows in set (0.00 sec)

mysql> drop table product;
Query OK, 0 rows affected (0.02 sec)

mysql> create table product(
    ->     id int auto_increment,
    ->     title varchar(20) not null default "AAA",
    ->     description varchar(50),
    ->     price varchar(255),
    ->     primary key (id),
    ->     unique(title));
Query OK, 0 rows affected (0.03 sec)

mysql> describe product;         
+-------------+--------------+------+-----+---------+----------------+
| Field       | Type         | Null | Key | Default | Extra          |
+-------------+--------------+------+-----+---------+----------------+
| id          | int          | NO   | PRI | NULL    | auto_increment |
| title       | varchar(20)  | NO   | UNI | AAA     |                |
| description | varchar(50)  | YES  |     | NULL    |                |
| price       | varchar(255) | YES  |     | NULL    |                |
+-------------+--------------+------+-----+---------+----------------+
4 rows in set (0.00 sec)

mysql> insert into product (title, description, price)values 
    -> (null,'this is an apple phone','120000'),
    -> ('samsung','this is washing machine','45000'),
    -> ('mi','this is tv','30000'),
    -> ('hp','this is printer','20000'),
    -> ('dell','this is a laptop','80000');
ERROR 1048 (23000): Column 'title' cannot be null
mysql> insert into product (title, description, price)values 
    -> ('samsung','this is washing machine','45000'),
    -> ('mi','this is tv','30000'),
    -> ('hp','this is printer','20000'),
    -> ('dell','this is a laptop','80000');
Query OK, 4 rows affected (0.01 sec)
Records: 4  Duplicates: 0  Warnings: 0

mysql> insert into product (title, description, price)values 
    -> ('samsung','this is washing machine','25000');
ERROR 1062 (23000): Duplicate entry 'samsung' for key 'product.title'

mysql> insert into product ( description, price)values       
    -> ('this is TV','25000');                         
Query OK, 1 row affected (0.01 sec)

mysql> select *from product;                                 
+----+---------+-------------------------+-------+
| id | title   | description             | price |
+----+---------+-------------------------+-------+
|  1 | samsung | this is washing machine | 45000 |
|  2 | mi      | this is tv              | 30000 |
|  3 | hp      | this is printer         | 20000 |
|  4 | dell    | this is a laptop        | 80000 |
|  6 | AAA     | this is TV              | 25000 |
+----+---------+-------------------------+-------+
5 rows in set (0.00 sec)

mysql> insert into product ( description, price)values 
    -> ('this is TV','25000');
ERROR 1062 (23000): Duplicate entry 'AAA' for key 'product.title'

mysql> create index cust_name on customer (name);
Query OK, 0 rows affected (0.04 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> describe customer;
+---------+--------------+------+-----+---------+----------------+
| Field   | Type         | Null | Key | Default | Extra          |
+---------+--------------+------+-----+---------+----------------+
| id      | int          | NO   | PRI | NULL    | auto_increment |
| name    | varchar(20)  | NO   | MUL | NULL    |                |
| email   | varchar(50)  | YES  | UNI | NULL    |                |
| address | varchar(255) | YES  |     | NULL    |                |
+---------+--------------+------+-----+---------+----------------+
4 rows in set (0.00 sec)

mysql> alter table product drop  index title;
Query OK, 0 rows affected (0.02 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> alter table customer drop  index name;
ERROR 1091 (42000): Can't DROP 'name'; check that column/key exists

mysql> alter table customer drop  index cust_name;
Query OK, 0 rows affected (0.02 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> describe customer;                         
+---------+--------------+------+-----+---------+----------------+
| Field   | Type         | Null | Key | Default | Extra          |
+---------+--------------+------+-----+---------+----------------+
| id      | int          | NO   | PRI | NULL    | auto_increment |
| name    | varchar(20)  | NO   |     | NULL    |                |
| email   | varchar(50)  | YES  | UNI | NULL    |                |
| address | varchar(255) | YES  |     | NULL    |                |
+---------+--------------+------+-----+---------+----------------+
4 rows in set (0.00 sec)


mysql> create index cust_name on customer (name);
Query OK, 0 rows affected (0.04 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> describe customer;
+---------+--------------+------+-----+---------+----------------+
| Field   | Type         | Null | Key | Default | Extra          |
+---------+--------------+------+-----+---------+----------------+
| id      | int          | NO   | PRI | NULL    | auto_increment |
| name    | varchar(20)  | NO   | MUL | NULL    |                |
| email   | varchar(50)  | YES  | UNI | NULL    |                |
| address | varchar(255) | YES  |     | NULL    |                |
+---------+--------------+------+-----+---------+----------------+
4 rows in set (0.00 sec)

mysql> create index cust_email on customer (email);
Query OK, 0 rows affected (0.06 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> describe customer;
+---------+--------------+------+-----+---------+----------------+
| Field   | Type         | Null | Key | Default | Extra          |
+---------+--------------+------+-----+---------+----------------+
| id      | int          | NO   | PRI | NULL    | auto_increment |
| name    | varchar(20)  | NO   | MUL | NULL    |                |
| email   | varchar(50)  | YES  | UNI | NULL    |                |
| address | varchar(255) | YES  |     | NULL    |                |
+---------+--------------+------+-----+---------+----------------+
4 rows in set (0.00 sec)

mysql> alter table customer drop  index cust_email;
Query OK, 0 rows affected (0.02 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> describe customer;
+---------+--------------+------+-----+---------+----------------+
| Field   | Type         | Null | Key | Default | Extra          |
+---------+--------------+------+-----+---------+----------------+
| id      | int          | NO   | PRI | NULL    | auto_increment |
| name    | varchar(20)  | NO   | MUL | NULL    |                |
| email   | varchar(50)  | YES  | UNI | NULL    |                |
| address | varchar(255) | YES  |     | NULL    |                |
+---------+--------------+------+-----+---------+----------------+
4 rows in set (0.00 sec)

mysql> alter table customer drop  index email;     
Query OK, 0 rows affected (0.02 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> describe customer;
+---------+--------------+------+-----+---------+----------------+
| Field   | Type         | Null | Key | Default | Extra          |
+---------+--------------+------+-----+---------+----------------+
| id      | int          | NO   | PRI | NULL    | auto_increment |
| name    | varchar(20)  | NO   | MUL | NULL    |                |
| email   | varchar(50)  | YES  |     | NULL    |                |
| address | varchar(255) | YES  |     | NULL    |                |
+---------+--------------+------+-----+---------+----------------+
4 rows in set (0.00 sec)
