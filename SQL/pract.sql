mysql> use test;
Database changed
mysql> CREATE TABLE employee (
    ->     emp_id INT PRIMARY KEY,
    ->     name VARCHAR(100) NOT NULL,
    ->     designation VARCHAR(50),
    ->     department VARCHAR(50),
    ->     salary DECIMAL(10, 2),
    ->     hire_date DATE,
    ->     email VARCHAR(100) UNIQUE,
    ->     gender VARCHAR(10)
    -> );
Query OK, 0 rows affected (0.22 sec)

mysql> show tables;
+----------------+
| Tables_in_test |
+----------------+
| employee       |
| user           |
+----------------+
2 rows in set (0.04 sec)

mysql> describe employee;
+-------------+---------------+------+-----+---------+-------+
| Field       | Type          | Null | Key | Default | Extra |
+-------------+---------------+------+-----+---------+-------+
| emp_id      | int           | NO   | PRI | NULL    |       |
| name        | varchar(100)  | NO   |     | NULL    |       |
| designation | varchar(50)   | YES  |     | NULL    |       |
| department  | varchar(50)   | YES  |     | NULL    |       |
| salary      | decimal(10,2) | YES  |     | NULL    |       |
| hire_date   | date          | YES  |     | NULL    |       |
| email       | varchar(100)  | YES  | UNI | NULL    |       |
| gender      | varchar(10)   | YES  |     | NULL    |       |
+-------------+---------------+------+-----+---------+-------+
8 rows in set (0.01 sec)

mysql> select * from employee;
Empty set (0.01 sec)

mysql> INSERT INTO employee VALUES (1, 'Amit Sharma', 'Manager', 'Sales', 75000.00, '2021-05-10', 'amit1@example.com', 'Male');
Query OK, 1 row affected (0.01 sec)

mysql> INSERT INTO employee VALUES (2, 'Pooja', 'Developer', 'IT', 60000.00, '2022-01-15', 'pooja1@example.com', 'Female');
Query OK, 1 row affected (0.01 sec)

mysql> INSERT INTO employee VALUES (3, 'Rahul Mehta', 'Analyst', 'Finance', 55000.00, '2023-03-20', 'rahul@example.com', 'Male');
Query OK, 1 row affected (0.00 sec)

mysql> INSERT INTO employee VALUES (4, 'Amit Sharma', 'Developer', 'IT', 55000.00, '2022-04-25', 'amit2@example.com', 'Male');
Query OK, 1 row affected (0.00 sec)

mysql> INSERT INTO employee VALUES (5, 'Sneha', 'HR Executive', 'HR', 50000.00, '2022-01-15', 'sneha@example.com', 'Female');
Query OK, 1 row affected (0.01 sec)

mysql> INSERT INTO employee VALUES (6, 'Ravi Kumar', 'Technician', 'Maintenance', 48000.00, '2021-10-10', 'ravi1@example.com', 'Male');
Query OK, 1 row affected (0.00 sec)

mysql> INSERT INTO employee VALUES (7, 'Amit Sharma', 'Lead', 'IT', 55000.00, '2023-01-01', 'amit3@example.com', 'Male');
Query OK, 1 row affected (0.00 sec)

mysql> INSERT INTO employee VALUES (8, 'Kavita Joshi', 'Designer', 'Design', 62000.00, '2021-07-17', 'kavita@example.com', 'Female');
Query OK, 1 row affected (0.00 sec)

mysql> INSERT INTO employee VALUES (9, 'Nikhil Rao', 'Support', 'Customer Service', 45000.00, '2020-09-09', 'nikhil@example.com', 'Male');
Query OK, 1 row affected (0.00 sec)

mysql> INSERT INTO employee VALUES (10, 'Amit Sharma', 'Consultant', 'Sales', 72000.00, '2022-01-15', 'amit4@example.com', 'Male');
Query OK, 1 row affected (0.00 sec)

mysql>
mysql> INSERT INTO employee VALUES (11, 'Deepika', 'Developer', 'IT', 55000.00, '2022-03-11', 'deepika@example.com', 'Female');
Query OK, 1 row affected (0.00 sec)

mysql> INSERT INTO employee VALUES (12, 'Siddharth Reddy', 'Executive', 'Marketing', 49000.00, '2023-04-12', 'siddharth@example.com', 'Male');
Query OK, 1 row affected (0.00 sec)

mysql> INSERT INTO employee VALUES (13, 'Anjali Kapoor', 'Lead Analyst', 'Finance', 70000.00, '2022-07-19', 'anjali@example.com', 'Female');
Query OK, 1 row affected (0.00 sec)

mysql> INSERT INTO employee VALUES (14, 'Amit Sharma', 'Manager', 'Operations', 75000.00, '2021-08-01', 'amit5@example.com', 'Male');
Query OK, 1 row affected (0.01 sec)

mysql> INSERT INTO employee VALUES (15, 'Vikram', 'Architect', 'IT', 88000.00, '2020-11-11', 'vikram@example.com', 'Male');
Query OK, 1 row affected (0.00 sec)

mysql> INSERT INTO employee VALUES (16, 'Neha Jain', 'Receptionist', 'Admin', 40000.00, '2022-10-10', 'neha@example.com', 'Female');
Query OK, 1 row affected (0.01 sec)

mysql> INSERT INTO employee VALUES (17, 'Manish Agarwal', 'Developer', 'IT', 55000.00, '2023-01-01', 'manish@example.com', 'Male');
Query OK, 1 row affected (0.00 sec)

mysql> INSERT INTO employee VALUES (18, 'Riya D’Souza', 'Designer', 'Design', 61000.00, '2023-02-05', 'riya@example.com', 'Female');
Query OK, 1 row affected (0.00 sec)

mysql> INSERT INTO employee VALUES (19, 'Pranav', 'Engineer', 'Production', 65000.00, '2022-06-06', 'pranav@example.com', 'Male');
Query OK, 1 row affected (0.00 sec)

mysql> INSERT INTO employee VALUES (20, 'Meera Pillai', 'Consultant', 'HR', 58000.00, '2021-12-12', 'meera@example.com', 'Female');
Query OK, 1 row affected (0.00 sec)

mysql>
mysql> INSERT INTO employee VALUES (21, 'Arjun Menon', 'Support', 'Customer Service', 47000.00, '2022-05-15', 'arjun@example.com', 'Male');
Query OK, 1 row affected (0.00 sec)

mysql> INSERT INTO employee VALUES (22, 'Divya', 'Executive', 'Marketing', 49000.00, '2023-04-12', 'divya@example.com', 'Female');
Query OK, 1 row affected (0.00 sec)

mysql> INSERT INTO employee VALUES (23, 'Ravi Kumar', 'Technician', 'Maintenance', 52000.00, '2021-04-01', 'ravi2@example.com', 'Male');
Query OK, 1 row affected (0.00 sec)

mysql> INSERT INTO employee VALUES (24, 'Tanvi', 'Developer', 'IT', 55000.00, '2023-06-06', 'tanvi@example.com', 'Female');
Query OK, 1 row affected (0.01 sec)

mysql> INSERT INTO employee VALUES (25, 'Karan Malhotra', 'Manager', 'Logistics', 67000.00, '2020-10-10', 'karan@example.com', 'Male');
Query OK, 1 row affected (0.01 sec)

mysql> INSERT INTO employee VALUES (26, 'Shreya Patil', 'HR Executive', 'HR', 51000.00, '2022-09-09', 'shreya@example.com', 'Female');
Query OK, 1 row affected (0.01 sec)

mysql> INSERT INTO employee VALUES (27, 'Ajay Chauhan', 'Lead', 'Operations', 74000.00, '2022-08-08', 'ajay@example.com', 'Male');
Query OK, 1 row affected (0.01 sec)

mysql> INSERT INTO employee VALUES (28, 'Nisha', 'Support', 'Customer Service', 45000.00, '2021-03-03', 'nisha@example.com', 'Female');
Query OK, 1 row affected (0.00 sec)

mysql> INSERT INTO employee VALUES (29, 'Yash Tripathi', 'Consultant', 'Sales', 73000.00, '2022-12-12', 'yash@example.com', 'Male');
Query OK, 1 row affected (0.01 sec)

mysql> INSERT INTO employee VALUES (30, 'Pooja', 'Receptionist', 'Admin', 40000.00, '2023-01-01', 'pooja2@example.com', 'Female');
Query OK, 1 row affected (0.00 sec)

mysql> select * from employee;
+--------+-----------------+--------------+------------------+----------+------------+-----------------------+--------+
| emp_id | name            | designation  | department       | salary   | hire_date  | email                 | gender |
+--------+-----------------+--------------+------------------+----------+------------+-----------------------+--------+
|      1 | Amit Sharma     | Manager      | Sales            | 75000.00 | 2021-05-10 | amit1@example.com     | Male   |
|      2 | Pooja           | Developer    | IT               | 60000.00 | 2022-01-15 | pooja1@example.com    | Female |
|      3 | Rahul Mehta     | Analyst      | Finance          | 55000.00 | 2023-03-20 | rahul@example.com     | Male   |
|      4 | Amit Sharma     | Developer    | IT               | 55000.00 | 2022-04-25 | amit2@example.com     | Male   |
|      5 | Sneha           | HR Executive | HR               | 50000.00 | 2022-01-15 | sneha@example.com     | Female |
|      6 | Ravi Kumar      | Technician   | Maintenance      | 48000.00 | 2021-10-10 | ravi1@example.com     | Male   |
|      7 | Amit Sharma     | Lead         | IT               | 55000.00 | 2023-01-01 | amit3@example.com     | Male   |
|      8 | Kavita Joshi    | Designer     | Design           | 62000.00 | 2021-07-17 | kavita@example.com    | Female |
|      9 | Nikhil Rao      | Support      | Customer Service | 45000.00 | 2020-09-09 | nikhil@example.com    | Male   |
|     10 | Amit Sharma     | Consultant   | Sales            | 72000.00 | 2022-01-15 | amit4@example.com     | Male   |
|     11 | Deepika         | Developer    | IT               | 55000.00 | 2022-03-11 | deepika@example.com   | Female |
|     12 | Siddharth Reddy | Executive    | Marketing        | 49000.00 | 2023-04-12 | siddharth@example.com | Male   |
|     13 | Anjali Kapoor   | Lead Analyst | Finance          | 70000.00 | 2022-07-19 | anjali@example.com    | Female |
|     14 | Amit Sharma     | Manager      | Operations       | 75000.00 | 2021-08-01 | amit5@example.com     | Male   |
|     15 | Vikram          | Architect    | IT               | 88000.00 | 2020-11-11 | vikram@example.com    | Male   |
|     16 | Neha Jain       | Receptionist | Admin            | 40000.00 | 2022-10-10 | neha@example.com      | Female |
|     17 | Manish Agarwal  | Developer    | IT               | 55000.00 | 2023-01-01 | manish@example.com    | Male   |
|     18 | Riya D?Souza    | Designer     | Design           | 61000.00 | 2023-02-05 | riya@example.com      | Female |
|     19 | Pranav          | Engineer     | Production       | 65000.00 | 2022-06-06 | pranav@example.com    | Male   |
|     20 | Meera Pillai    | Consultant   | HR               | 58000.00 | 2021-12-12 | meera@example.com     | Female |
|     21 | Arjun Menon     | Support      | Customer Service | 47000.00 | 2022-05-15 | arjun@example.com     | Male   |
|     22 | Divya           | Executive    | Marketing        | 49000.00 | 2023-04-12 | divya@example.com     | Female |
|     23 | Ravi Kumar      | Technician   | Maintenance      | 52000.00 | 2021-04-01 | ravi2@example.com     | Male   |
|     24 | Tanvi           | Developer    | IT               | 55000.00 | 2023-06-06 | tanvi@example.com     | Female |
|     25 | Karan Malhotra  | Manager      | Logistics        | 67000.00 | 2020-10-10 | karan@example.com     | Male   |
|     26 | Shreya Patil    | HR Executive | HR               | 51000.00 | 2022-09-09 | shreya@example.com    | Female |
|     27 | Ajay Chauhan    | Lead         | Operations       | 74000.00 | 2022-08-08 | ajay@example.com      | Male   |
|     28 | Nisha           | Support      | Customer Service | 45000.00 | 2021-03-03 | nisha@example.com     | Female |
|     29 | Yash Tripathi   | Consultant   | Sales            | 73000.00 | 2022-12-12 | yash@example.com      | Male   |
|     30 | Pooja           | Receptionist | Admin            | 40000.00 | 2023-01-01 | pooja2@example.com    | Female |
+--------+-----------------+--------------+------------------+----------+------------+-----------------------+--------+
30 rows in set (0.01 sec)




mysql> SELECT *
    -> FROM employee
    -> WHERE department = (
    ->     SELECT department
    ->     FROM employee
    ->     WHERE emp_id = 5
    -> );
+--------+--------------+--------------+------------+----------+------------+--------------------+--------+
| emp_id | name         | designation  | department | salary   | hire_date  | email              | gender |
+--------+--------------+--------------+------------+----------+------------+--------------------+--------+
|      5 | Sneha        | HR Executive | HR         | 50000.00 | 2022-01-15 | sneha@example.com  | Female |
|     20 | Meera Pillai | Consultant   | HR         | 58000.00 | 2021-12-12 | meera@example.com  | Female |
|     26 | Shreya Patil | HR Executive | HR         | 51000.00 | 2022-09-09 | shreya@example.com | Female |
+--------+--------------+--------------+------------+----------+------------+--------------------+--------+
3 rows in set (0.00 sec)

mysql> select * from employee wher department ="HR";
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'department ="HR"' at line 1
mysql> select * from employee where department ="HR";
+--------+--------------+--------------+------------+----------+------------+--------------------+--------+
| emp_id | name         | designation  | department | salary   | hire_date  | email              | gender |
+--------+--------------+--------------+------------+----------+------------+--------------------+--------+
|      5 | Sneha        | HR Executive | HR         | 50000.00 | 2022-01-15 | sneha@example.com  | Female |
|     20 | Meera Pillai | Consultant   | HR         | 58000.00 | 2021-12-12 | meera@example.com  | Female |
|     26 | Shreya Patil | HR Executive | HR         | 51000.00 | 2022-09-09 | shreya@example.com | Female |
+--------+--------------+--------------+------------+----------+------------+--------------------+--------+
3 rows in set (0.00 sec)

mysql> SELECT department
    -> FROM employee
    -> GROUP BY department
    -> HAVING COUNT(*) > 1;
+------------------+
| department       |
+------------------+
| Sales            |
| IT               |
| Finance          |
| HR               |
| Maintenance      |
| Design           |
| Customer Service |
| Marketing        |
| Operations       |
| Admin            |
+------------------+
10 rows in set (0.01 sec)

mysql> SELECT *
    -> FROM employee
    -> WHERE department IN (
    ->     SELECT department
    ->     FROM employee
    ->     GROUP BY department
    ->     HAVING COUNT(*) > 1
    -> );
+--------+-----------------+--------------+------------------+----------+------------+-----------------------+--------+
| emp_id | name            | designation  | department       | salary   | hire_date  | email                 | gender |
+--------+-----------------+--------------+------------------+----------+------------+-----------------------+--------+
|      1 | Amit Sharma     | Manager      | Sales            | 75000.00 | 2021-05-10 | amit1@example.com     | Male   |
|      2 | Pooja           | Developer    | IT               | 60000.00 | 2022-01-15 | pooja1@example.com    | Female |
|      3 | Rahul Mehta     | Analyst      | Finance          | 55000.00 | 2023-03-20 | rahul@example.com     | Male   |
|      4 | Amit Sharma     | Developer    | IT               | 55000.00 | 2022-04-25 | amit2@example.com     | Male   |
|      5 | Sneha           | HR Executive | HR               | 50000.00 | 2022-01-15 | sneha@example.com     | Female |
|      6 | Ravi Kumar      | Technician   | Maintenance      | 48000.00 | 2021-10-10 | ravi1@example.com     | Male   |
|      7 | Amit Sharma     | Lead         | IT               | 55000.00 | 2023-01-01 | amit3@example.com     | Male   |
|      8 | Kavita Joshi    | Designer     | Design           | 62000.00 | 2021-07-17 | kavita@example.com    | Female |
|      9 | Nikhil Rao      | Support      | Customer Service | 45000.00 | 2020-09-09 | nikhil@example.com    | Male   |
|     10 | Amit Sharma     | Consultant   | Sales            | 72000.00 | 2022-01-15 | amit4@example.com     | Male   |
|     11 | Deepika         | Developer    | IT               | 55000.00 | 2022-03-11 | deepika@example.com   | Female |
|     12 | Siddharth Reddy | Executive    | Marketing        | 49000.00 | 2023-04-12 | siddharth@example.com | Male   |
|     13 | Anjali Kapoor   | Lead Analyst | Finance          | 70000.00 | 2022-07-19 | anjali@example.com    | Female |
|     14 | Amit Sharma     | Manager      | Operations       | 75000.00 | 2021-08-01 | amit5@example.com     | Male   |
|     15 | Vikram          | Architect    | IT               | 88000.00 | 2020-11-11 | vikram@example.com    | Male   |
|     16 | Neha Jain       | Receptionist | Admin            | 40000.00 | 2022-10-10 | neha@example.com      | Female |
|     17 | Manish Agarwal  | Developer    | IT               | 55000.00 | 2023-01-01 | manish@example.com    | Male   |
|     18 | Riya D?Souza    | Designer     | Design           | 61000.00 | 2023-02-05 | riya@example.com      | Female |
|     20 | Meera Pillai    | Consultant   | HR               | 58000.00 | 2021-12-12 | meera@example.com     | Female |
|     21 | Arjun Menon     | Support      | Customer Service | 47000.00 | 2022-05-15 | arjun@example.com     | Male   |
|     22 | Divya           | Executive    | Marketing        | 49000.00 | 2023-04-12 | divya@example.com     | Female |
|     23 | Ravi Kumar      | Technician   | Maintenance      | 52000.00 | 2021-04-01 | ravi2@example.com     | Male   |
|     24 | Tanvi           | Developer    | IT               | 55000.00 | 2023-06-06 | tanvi@example.com     | Female |
|     26 | Shreya Patil    | HR Executive | HR               | 51000.00 | 2022-09-09 | shreya@example.com    | Female |
|     27 | Ajay Chauhan    | Lead         | Operations       | 74000.00 | 2022-08-08 | ajay@example.com      | Male   |
|     28 | Nisha           | Support      | Customer Service | 45000.00 | 2021-03-03 | nisha@example.com     | Female |
|     29 | Yash Tripathi   | Consultant   | Sales            | 73000.00 | 2022-12-12 | yash@example.com      | Male   |
|     30 | Pooja           | Receptionist | Admin            | 40000.00 | 2023-01-01 | pooja2@example.com    | Female |
+--------+-----------------+--------------+------------------+----------+------------+-----------------------+--------+
28 rows in set (0.00 sec)

mysql> SELECT *
    -> FROM employee
    -> WHERE department IN (
    ->     SELECT department
    ->     FROM employee
    ->     GROUP BY department
    ->     HAVING COUNT(*) > 1
    -> )
    -> ORDER BY department;
+--------+-----------------+--------------+------------------+----------+------------+-----------------------+--------+
| emp_id | name            | designation  | department       | salary   | hire_date  | email                 | gender |
+--------+-----------------+--------------+------------------+----------+------------+-----------------------+--------+
|     16 | Neha Jain       | Receptionist | Admin            | 40000.00 | 2022-10-10 | neha@example.com      | Female |
|     30 | Pooja           | Receptionist | Admin            | 40000.00 | 2023-01-01 | pooja2@example.com    | Female |
|      9 | Nikhil Rao      | Support      | Customer Service | 45000.00 | 2020-09-09 | nikhil@example.com    | Male   |
|     21 | Arjun Menon     | Support      | Customer Service | 47000.00 | 2022-05-15 | arjun@example.com     | Male   |
|     28 | Nisha           | Support      | Customer Service | 45000.00 | 2021-03-03 | nisha@example.com     | Female |
|      8 | Kavita Joshi    | Designer     | Design           | 62000.00 | 2021-07-17 | kavita@example.com    | Female |
|     18 | Riya D?Souza    | Designer     | Design           | 61000.00 | 2023-02-05 | riya@example.com      | Female |
|      3 | Rahul Mehta     | Analyst      | Finance          | 55000.00 | 2023-03-20 | rahul@example.com     | Male   |
|     13 | Anjali Kapoor   | Lead Analyst | Finance          | 70000.00 | 2022-07-19 | anjali@example.com    | Female |
|      5 | Sneha           | HR Executive | HR               | 50000.00 | 2022-01-15 | sneha@example.com     | Female |
|     20 | Meera Pillai    | Consultant   | HR               | 58000.00 | 2021-12-12 | meera@example.com     | Female |
|     26 | Shreya Patil    | HR Executive | HR               | 51000.00 | 2022-09-09 | shreya@example.com    | Female |
|      2 | Pooja           | Developer    | IT               | 60000.00 | 2022-01-15 | pooja1@example.com    | Female |
|      4 | Amit Sharma     | Developer    | IT               | 55000.00 | 2022-04-25 | amit2@example.com     | Male   |
|      7 | Amit Sharma     | Lead         | IT               | 55000.00 | 2023-01-01 | amit3@example.com     | Male   |
|     11 | Deepika         | Developer    | IT               | 55000.00 | 2022-03-11 | deepika@example.com   | Female |
|     15 | Vikram          | Architect    | IT               | 88000.00 | 2020-11-11 | vikram@example.com    | Male   |
|     17 | Manish Agarwal  | Developer    | IT               | 55000.00 | 2023-01-01 | manish@example.com    | Male   |
|     24 | Tanvi           | Developer    | IT               | 55000.00 | 2023-06-06 | tanvi@example.com     | Female |
|      6 | Ravi Kumar      | Technician   | Maintenance      | 48000.00 | 2021-10-10 | ravi1@example.com     | Male   |
|     23 | Ravi Kumar      | Technician   | Maintenance      | 52000.00 | 2021-04-01 | ravi2@example.com     | Male   |
|     12 | Siddharth Reddy | Executive    | Marketing        | 49000.00 | 2023-04-12 | siddharth@example.com | Male   |
|     22 | Divya           | Executive    | Marketing        | 49000.00 | 2023-04-12 | divya@example.com     | Female |
|     14 | Amit Sharma     | Manager      | Operations       | 75000.00 | 2021-08-01 | amit5@example.com     | Male   |
|     27 | Ajay Chauhan    | Lead         | Operations       | 74000.00 | 2022-08-08 | ajay@example.com      | Male   |
|      1 | Amit Sharma     | Manager      | Sales            | 75000.00 | 2021-05-10 | amit1@example.com     | Male   |
|     10 | Amit Sharma     | Consultant   | Sales            | 72000.00 | 2022-01-15 | amit4@example.com     | Male   |
|     29 | Yash Tripathi   | Consultant   | Sales            | 73000.00 | 2022-12-12 | yash@example.com      | Male   |
+--------+-----------------+--------------+------------------+----------+------------+-----------------------+--------+
28 rows in set (0.00 sec)

mysql> SELECT MAX(salary) AS second_highest_salary
    -> FROM employee
    -> WHERE salary < (SELECT MAX(salary) FROM employee);
+-----------------------+
| second_highest_salary |
+-----------------------+
|              75000.00 |
+-----------------------+
1 row in set (0.00 sec)

mysql> SELECT DISTINCT salary
    -> FROM employee
    -> ORDER BY salary DESC
    -> LIMIT 1 OFFSET 1;
+----------+
| salary   |
+----------+
| 75000.00 |
+----------+
1 row in set (0.00 sec)

mysql> SELECT DISTINCT salary
    -> FROM employee
    -> ORDER BY salary DESC
    -> LIMIT 1 OFFSET 3;
+----------+
| salary   |
+----------+
| 73000.00 |
+----------+
1 row in set (0.00 sec)

mysql> SELECT emp_id, name, salary
    -> FROM employee
    -> WHERE salary = (
    ->     SELECT MAX(salary)
    ->     FROM employee
    ->     WHERE salary < (
    ->         SELECT MAX(salary)
    ->         FROM employee
    ->     )
    -> );
+--------+-------------+----------+
| emp_id | name        | salary   |
+--------+-------------+----------+
|      1 | Amit Sharma | 75000.00 |
|     14 | Amit Sharma | 75000.00 |
+--------+-------------+----------+
2 rows in set (0.00 sec)

mysql>

