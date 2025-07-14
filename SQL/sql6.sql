select name as country,
(select count(*)
from city 
where countrycode=country.code ) as NunCities
from countryorder by NunCities desc;

 select country.code,country.name, (select count(*) from city where CountryCode=country.code) as num_of_cities from country;

subquery with exists or in

select name as country
from country
where code in (
    select countrycode
    from countrylanguage
    where Language = 'English' and IsOfficial ='T'
);

select 
student_id, student_name, score
Rank() over (order by score desc) as `rank`
from students;

select name as country, Continent, Population,
rank() over (partition by Continent order by population desc)
 as RankWithContinent
 from country;















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
9 rows in set (0.24 sec)

mysql> use test2;
Database changed
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
5 rows in set (0.03 sec)

mysql> select * from e_users;
+---------+------------+----------------------+-------------+---------------------+
| user_id | user_name  | email                | password    | created_at          |
+---------+------------+----------------------+-------------+---------------------+
|       1 | john doe   | john@example.com     | password123 | 2025-07-07 12:47:40 |
|       2 | srikanth   | srikanth@example.com | password123 | 2025-07-07 12:47:40 |
|       3 | jane smith | jane@example.com     | password    | 2025-07-07 12:47:40 |
+---------+------------+----------------------+-------------+---------------------+
3 rows in set (0.01 sec)

mysql> select user_name as person from e_users;
+------------+
| person     |
+------------+
| john doe   |
| srikanth   |
| jane smith |
+------------+
3 rows in set (0.00 sec)

mysql> select *,  user_name as person from e_users;
+---------+------------+----------------------+-------------+---------------------+------------+
| user_id | user_name  | email                | password    | created_at          | person     |
+---------+------------+----------------------+-------------+---------------------+------------+
|       1 | john doe   | john@example.com     | password123 | 2025-07-07 12:47:40 | john doe   |
|       2 | srikanth   | srikanth@example.com | password123 | 2025-07-07 12:47:40 | srikanth   |
|       3 | jane smith | jane@example.com     | password    | 2025-07-07 12:47:40 | jane smith |
+---------+------------+----------------------+-------------+---------------------+------------+
3 rows in set (0.00 sec)


mysql> select 1 from e_users;
+---+
| 1 |
+---+
| 1 |
| 1 |
| 1 |
+---+
3 rows in set (0.00 sec)

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
3 rows in set (0.01 sec)

mysql> select * from city limit 5;
+----+----------------+-------------+---------------+------------+
| ID | Name           | CountryCode | District      | Population |
+----+----------------+-------------+---------------+------------+
|  1 | Kabul          | AFG         | Kabol         |    1780000 |
|  2 | Qandahar       | AFG         | Qandahar      |     237500 |
|  3 | Herat          | AFG         | Herat         |     186800 |
|  4 | Mazar-e-Sharif | AFG         | Balkh         |     127800 |
|  5 | Amsterdam      | NLD         | Noord-Holland |     731200 |
+----+----------------+-------------+---------------+------------+
5 rows in set (0.01 sec)

mysql> select * from country limit 5;
+------+-------------+---------------+---------------------------+-------------+-----------+------------+----------------+---------+---------+-----------------------+----------------------------------------------+-------------------------+---------+-------+
| Code | Name        | Continent     | Region                    | SurfaceArea | IndepYear | Population | LifeExpectancy | GNP     | GNPOld  | LocalName             | GovernmentForm         
                      | HeadOfState             | Capital | Code2 |
+------+-------------+---------------+---------------------------+-------------+-----------+------------+----------------+---------+---------+-----------------------+----------------------------------------------+-------------------------+---------+-------+
| ABW  | Aruba       | North America | Caribbean                 |      193.00 |      NULL |     103000 |           78.4 |  828.00 |  793.00 | Aruba                 | Nonmetropolitan Territory of The Netherlands | Beatrix                 |     129 | AW    |
| AFG  | Afghanistan | Asia          | Southern and Central Asia |   652090.00 |      1919 |   22720000 |           45.9 | 5976.00 |    NULL | Afganistan/Afqanestan | Islamic Emirate        
                      | Mohammad Omar           |       1 | AF    |
| AGO  | Angola      | Africa        | Central Africa            |  1246700.00 |      1975 |   12878000 |           38.3 | 6648.00 | 7984.00 | Angola                | Republic               
                      | José Eduardo dos Santos |      56 | AO    |
| AIA  | Anguilla    | North America | Caribbean                 |       96.00 |      NULL |       8000 |           76.1 |   63.20 |    NULL | Anguilla              | Dependent Territory of the UK                | Elisabeth II            |      62 | AI    |
| ALB  | Albania     | Europe        | Southern Europe           |    28748.00 |      1912 |    3401200 |           71.6 | 3205.00 | 2500.00 | Shqipëria             | Republic               
                      | Rexhep Mejdani          |      34 | AL    |
+------+-------------+---------------+---------------------------+-------------+-----------+------------+----------------+---------+---------+-----------------------+----------------------------------------------+-------------------------+---------+-------+
5 rows in set (0.02 sec)


mysql> select avg(population) from country; 
+-----------------+
| avg(population) |
+-----------------+
|   25434098.1172 |
+-----------------+
1 row in set (0.01 sec)

mysql> select * from country where population >(select avg(population) from country); 
+------+---------------------------------------+---------------+---------------------------+-------------+-----------+------------+----------------+------------+------------+----------------------------------+-------------------------------------+-------------------------------+---------+-------+
| Code | Name                                  | Continent     | Region                    | SurfaceArea | IndepYear | Population | LifeExpectancy | GNP        | GNPOld     | LocalName                        | GovernmentForm                      | HeadOfState                   | Capital | Code2 |
+------+---------------------------------------+---------------+---------------------------+-------------+-----------+------------+----------------+------------+------------+----------------------------------+-------------------------------------+-------------------------------+---------+-------+
| ARG  | Argentina                             | South America | South America             |  2780400.00 |      1816 |   37032000 |           75.1 |  340238.00 |  323310.00 | Argentina                        | Federal Republic                    | Fernando de la Rúa            |      69 | AR    |
| BGD  | Bangladesh                            | Asia          | Southern and Central Asia |   143998.00 |      1971 |  129155000 |           60.2 |   32852.00 |   31966.00 | Bangladesh                       | Republic                            | Shahabuddin Ahmad             |     150 | BD    |
| BRA  | Brazil                                | South America | South America             |  8547403.00 |      1822 |  170115000 |           62.9 |  776739.00 |  804108.00 | Brasil                           | Federal Republic                    | Fernando Henrique Cardoso     |     211 | BR    |
| CAN  | Canada                                | North America | North America             |  9970610.00 |      1867 |   31147000 |           79.4 |  598862.00 |  625626.00 | Canada         
                  | Constitutional Monarchy, Federation | Elisabeth II                  |    1822 | CA    |
| CHN  | China                                 | Asia          | Eastern Asia              |  9572900.00 |     -1523 | 1277558000 |           71.4 |  982268.00 |  917719.00 | Zhongquo                         | People'sRepublic                    | Jiang Zemin                   |    1891 | CN    |
| COD  | Congo, The Democratic Republic of the | Africa        | Central Africa            |  2344858.00 |      1960 |   51654000 |           48.8 |    6964.00 |    2474.00 | République Démocratique du Congo | Republic                            | Joseph Kabila                 |    2298 | CD    |
| COL  | Colombia                              | South America | South America             |  1138914.00 |      1810 |   42321000 |           70.3 |  102896.00 |  105116.00 | Colombia                         | Republic                            | Andrés Pastrana Arango        |    2257 | CO    |
| DEU  | Germany                               | Europe        | Western Europe            |   357022.00 |      1955 |   82164700 |           77.4 | 2133367.00 | 2102826.00 | Deutschland                      | Federal Republic                    | Johannes Rau                  |    3068 | DE    |
| DZA  | Algeria                               | Africa        | Northern Africa           |  2381741.00 |      1962 |   31471000 |           69.7 |   49982.00 |   46966.00 | Al-Jaza?ir/Algérie               | Republic                            | Abdelaziz Bouteflika          |      35 | DZ    |
| EGY  | Egypt                                 | Africa        | Northern Africa           |  1001449.00 |      1922 |   68470000 |           63.3 |   82710.00 |   75617.00 | Misr                       | Africa        | Eastern Africa            |   883749.00 |      1961 |   33517000 |           52.3 |    8005.00 |    7388.00 | Tanzania                         | Republic                            | Benjamin William Mkapa        |    3306 | TZ    |
| UKR  | Ukraine                               | Europe        | Eastern Europe            |   603700.00 |      1991 |   50456000 |           66.0 |   42168.00 |   49677.00 | Ukrajina                         | Republic                            | Leonid Kut?ma                 |    3426 | UA    |
| USA  | United States                         | North America | North America             |  9363520.00 |      1776 |  278357000 |           77.1 | 8510700.00 | 8110900.00 | United States                    | Federal Republic                    | George W. Bush                |    3813 | US    |
| VNM  | Vietnam                               | Asia          | Southeast Asia            |   331689.00 |      1945 |   79832000 |           69.3 |   21929.00 |   22834.00 | Viêt Nam                         | Socialistic Republic                | Trân Duc Luong                |    3770 | VN    |
| ZAF  | South Africa                          | Africa        | Southern Africa           |  1221037.00 |      1910 |   40377000 |           51.1 |  116729.00 |  129092.00 | South Africa                     | Republic                            | Thabo Mbeki                   |     716 | ZA    |
+------+---------------------------------------+---------------+---------------------------+-------------+-----------+------------+----------------+------------+------------+----------------------------------+-------------------------------------+-------------------------------+---------+-------+
38 rows in set (0.01 sec)

mysql> select * from country where Continent='Asia' and population > (select avg(population) from country);
+------+-------------+-----------+---------------------------+-------------+-----------+------------+----------------+------------+------------+-------------------------+-------------------------+-------------------------------+---------+-------+
| Code | Name        | Continent | Region                    | SurfaceArea | IndepYear | Population | LifeExpectancy | GNP        | GNPOld     | LocalName               | GovernmentForm          | HeadOfState                   | Capital | Code2 |
+------+-------------+-----------+---------------------------+-------------+-----------+------------+----------------+------------+------------+-------------------------+-------------------------+-------------------------------+---------+-------+
| BGD  | Bangladesh  | Asia      | Southern and Central Asia |   143998.00 |      1971 |  129155000 |           60.2 |   32852.00 |   31966.00 | Bangladesh              | Republic           
     | Shahabuddin Ahmad             |     150 | BD    |
| CHN  | China       | Asia      | Eastern Asia              |  9572900.00 |     -1523 | 1277558000 |           71.4 |  982268.00 |  917719.00 | Zhongquo                | People'sRepublic        | Jiang Zemin                   |    1891 | CN    |
| IDN  | Indonesia   | Asia      | Southeast Asia            |  1904569.00 |      1945 |  212107000 |           68.0 |   84982.00 |  215002.00 | Indonesia               | Republic           
     | Abdurrahman Wahid             |     939 | ID    |
| IND  | India       | Asia      | Southern and Central Asia |  3287263.00 |      1947 | 1013662000 |           62.5 |  447114.00 |  430572.00 | Bharat/India            | Federal Republic        | Kocheril Raman Narayanan      |    1109 | IN    |
| IRN  | Iran        | Asia      | Southern and Central Asia |  1648195.00 |      1906 |   67702000 |           69.7 |  195746.00 |  160151.00 | Iran                    | Islamic Republic        | Ali Mohammad Khatami-Ardakani |    1380 | IR    |
| JPN  | Japan       | Asia      | Eastern Asia              |   377829.00 |      -660 |  126714000 |           80.7 | 3787042.00 | 4192638.00 | Nihon/Nippon            | Constitutional Monarchy | Akihito                       |    1532 | JP    |
| KOR  | South Korea | Asia      | Eastern Asia              |    99434.00 |      1948 |   46844000 |           74.4 |  320749.00 |  442544.00 | Taehan Min?guk (Namhan) | Republic           
     | Kim Dae-jung                  |    2331 | KR    |
| MMR  | Myanmar     | Asia      | Southeast Asia            |   676578.00 |      1948 |   45611000 |           54.9 |  180375.00 |  171028.00 | Myanma Pye              | Republic           
     | kenraali Than Shwe            |    2710 | MM    |
| PAK  | Pakistan    | Asia      | Southern and Central Asia |   796095.00 |      1947 |  156483000 |           61.1 |   61289.00 |   58549.00 | Pakistan                | Republic           
     | Mohammad Rafiq Tarar          |    2831 | PK    |
| PHL  | Philippines | Asia      | Southeast Asia            |   300000.00 |      1946 |   75967000 |           67.5 |   65107.00 |   82239.00 | Pilipinas               | Republic           
     | Gloria Macapagal-Arroyo       |     766 | PH    |
| THA  | Thailand    | Asia      | Southeast Asia            |   513115.00 |      1350 |   61399000 |           68.6 |  116416.00 |  153907.00 | Prathet Thai            | Constitutional Monarchy | Bhumibol Adulyadej            |    3320 | TH    |
| TUR  | Turkey      | Asia      | Middle East               |   774815.00 |      1923 |   66591000 |           71.0 |  210721.00 |  189122.00 | Türkiye                 | Republic           
     | Ahmet Necdet Sezer            |    3358 | TR    |
| VNM  | Vietnam     | Asia      | Southeast Asia            |   331689.00 |      1945 |   79832000 |           69.3 |   21929.00 |   22834.00 | Viêt Nam                | Socialistic Republic    | Trân Duc Luong                |    3770 | VN    |
+------+-------------+-----------+---------------------------+-------------+-----------+------------+----------------+------------+------------+-------------------------+-------------------------+-------------------------------+---------+-------+
13 rows in set (0.01 sec)

mysql> select * from city limit 5;                                                             
+----+----------------+-------------+---------------+------------+
| ID | Name           | CountryCode | District      | Population |
+----+----------------+-------------+---------------+------------+
|  1 | Kabul          | AFG         | Kabol         |    1780000 |
|  2 | Qandahar       | AFG         | Qandahar      |     237500 |
|  3 | Herat          | AFG         | Herat         |     186800 |
|  4 | Mazar-e-Sharif | AFG         | Balkh         |     127800 |
|  5 | Amsterdam      | NLD         | Noord-Holland |     731200 |
+----+----------------+-------------+---------------+------------+
5 rows in set (0.15 sec)

mysql> select * from country limit 5;
+------+-------------+---------------+---------------------------+-------------+-----------+------------+----------------+---------+---------+-----------------------+----------------------------------------------+-------------------------+---------+-------+
| Code | Name        | Continent     | Region                    | SurfaceArea | IndepYear | Population | LifeExpectancy | GNP     | GNPOld  | LocalName             | GovernmentForm         
                      | HeadOfState             | Capital | Code2 |
+------+-------------+---------------+---------------------------+-------------+-----------+------------+----------------+---------+---------+-----------------------+----------------------------------------------+-------------------------+---------+-------+
| ABW  | Aruba       | North America | Caribbean                 |      193.00 |      NULL |     103000 |           78.4 |  828.00 |  793.00 | Aruba                 | Nonmetropolitan Territory of The Netherlands | Beatrix                 |     129 | AW    |
| AFG  | Afghanistan | Asia          | Southern and Central Asia |   652090.00 |      1919 |   22720000 |           45.9 | 5976.00 |    NULL | Afganistan/Afqanestan | Islamic Emirate                              | Mohammad Omar           |       1 | AF    |
| AGO  | Angola      | Africa        | Central Africa            |  1246700.00 |      1975 |   12878000 |           38.3 | 6648.00 | 7984.00 | Angola                | Republic               
                      | José Eduardo dos Santos |      56 | AO    |
| AIA  | Anguilla    | North America | Caribbean                 |       96.00 |      NULL |       8000 |           76.1 |   63.20 |    NULL | Anguilla              | Dependent Territory of the UK                | Elisabeth II            |      62 | AI    |
| ALB  | Albania     | Europe        | Southern Europe           |    28748.00 |      1912 |    3401200 |           71.6 | 3205.00 | 2500.00 | Shqipëria             | Republic               
                      | Rexhep Mejdani          |      34 | AL    |
+------+-------------+---------------+---------------------------+-------------+-----------+------------+----------------+---------+---------+-----------------------+----------------------------------------------+-------------------------+---------+-------+
5 rows in set (0.01 sec)

mysql> select count(*) from city where countrycode='IND';
+----------+
| count(*) |
+----------+
|      341 |
+----------+
1 row in set (0.03 sec)

mysql> select count(*) as num_of_cities from city where countrycode='IND';
+---------------+
| num_of_cities |
+---------------+
|           341 |
+---------------+
1 row in set (0.01 sec)

mysql> select name from country limit 5;
+-------------+
| name        |
+-------------+
| Aruba       |
| Afghanistan |
| Angola      |
| Anguilla    |
| Albania     |
+-------------+
5 rows in set (0.00 sec)

mysql> select code,name from country limit 15;
+------+-----------------------------+
| code | name                        |
+------+-----------------------------+
| ABW  | Aruba                       |
| AFG  | Afghanistan                 |
| AGO  | Angola                      |
| AIA  | Anguilla                    |
| ALB  | Albania                     |
| AND  | Andorra                     |
| ANT  | Netherlands Antilles        |
| ARE  | United Arab Emirates        |
| ARG  | Argentina                   |
| ARM  | Armenia                     |
| ASM  | American Samoa              |
| ATA  | Antarctica                  |
| ATF  | French Southern territories |
| ATG  | Antigua and Barbuda         |
| AUS  | Australia                   |
+------+-----------------------------+
15 rows in set (0.00 sec)

mysql> describe city;
+-------------+----------+------+-----+---------+----------------+
| Field       | Type     | Null | Key | Default | Extra          |
+-------------+----------+------+-----+---------+----------------+
| ID          | int      | NO   | PRI | NULL    | auto_increment |
| Name        | char(35) | NO   |     |         |                |
| CountryCode | char(3)  | NO   | MUL |         |                |
| District    | char(20) | NO   |     |         |                |
| Population  | int      | NO   |     | 0       |                |
+-------------+----------+------+-----+---------+----------------+
5 rows in set (0.07 sec)

mysql> select country.code,country.name, (select count(*) from city where CountryCode=country.code) as num_of_cities from country;
+------+----------------------------------------------+---------------+
| code | name                                         | num_of_cities |
+------+----------------------------------------------+---------------+
| ABW  | Aruba                                        |             1 |
| AFG  | Afghanistan                                  |             4 |
| AGO  | Angola                                       |             5 |
| AIA  | Anguilla                                     |             2 |
| ALB  | Albania                                      |             1 |
| AND  | Andorra                                      |             1 |
| ANT  | Netherlands Antilles                         |             1 |
| ARE  | United Arab Emirates                         |             5 |
| ARG  | Argentina                                    |            57 |
| ARM  | Armenia                                      |             3 |
| ASM  | American Samoa                               |             2 |
| ATA  | Antarctica                                   |             0 |
| ATF  | French Southern territories                  |             0 |
| ATG  | Antigua and Barbuda                          |             1 |
| AUS  | Australia                                    |            14 |
| AUT  | Austria                                      |             6 |
| AZE  | Azerbaijan                                   |             4 |
| BDI  | Burundi                                      |             1 |
| BEL  | Belgium                                      |             9 |
| BEN  | Benin                                        |             4 |
| BFA  | Burkina Faso                                 |             3 |
| BGD  | Bangladesh                                   |            24 |
| BGR  | Bulgaria                                     |            10 |
| BHR  | Bahrain                                      |             1 |
| BHS  | Bahamas                                      |             1 |
| BIH  | Bosnia and Herzegovina                       |             3 |
| BLR  | Belarus                                      |            16 |
| BLZ  | Belize                                       |             2 |
| BMU  | Bermuda                                      |             2 |
| BOL  | Bolivia                                      |             8 |
| BRA  | Brazil                                       |           250 |
| BRB  | Barbados                                     |             1 |
| BRN  | Brunei                                       |             1 |
| BTN  | Bhutan                                       |             1 |
| BVT  | Bouvet Island                                |             0 |
| BWA  | Botswana                                     |             2 |
| CAF  | Central African Republic                     |             1 |
| CAN  | Canada                                       |            49 |
| CCK  | Cocos (Keeling) Islands                      |             2 |
| CHE  | Switzerland                                  |             5 |
| CHL  | Chile                                        |            29 |
| CHN  | China                                        |           363 |
| CIV  | Côte d?Ivoire                                |             5 |
| YEM  | Yemen                                        |             6 |
| YUG  | Yugoslavia                                   |             8 |
| ZAF  | South Africa                                 |            44 |
| ZMB  | Zambia                                       |             7 |
| ZWE  | Zimbabwe                                     |             6 |
+------+----------------------------------------------+---------------+
239 rows in set (0.01 sec)

mysql> select CountryCode, count(*) as num_of_citys from city group by CountryCode;
+-------------+--------------+
| CountryCode | num_of_citys |
+-------------+--------------+
| ABW         |            1 |
| AFG         |            4 |
| AGO         |            5 |
| AIA         |            2 |
| ALB         |            1 |
| AND         |            1 |
| ANT         |            1 |
| ARE         |            5 |
| ARG         |           57 |
| ARM         |            3 |
| ASM         |            2 |
| ATG         |            1 |
| AUS         |           14 |
| AUT         |            6 |
| AZE         |            4 |
| BDI         |            1 |
| BEL         |            9 |
| BEN         |            4 |
| BFA         |            3 |
| BGD         |           24 |
| BGR         |           10 |
| BHR         |            1 |
| BHS         |            1 |
| BIH         |            3 |
| BLR         |           16 |
| BLZ         |            2 |
| BMU         |            2 |
| BOL         |            8 |
| BRA         |          250 |
| BRB         |            1 |
| BRN         |            1 |
| BTN         |            1 |
| BWA         |            2 |
| CAF         |            1 |
| CAN         |           49 |
| CCK         |            2 |
| CHE         |            5 |
| CHL         |           29 |
| CHN         |          363 |
| CIV         |            5 |
| CMR         |            7 |
| COD         |           18 |
| COG         |            2 |
| COK         |            1 |
| COL         |           38 |
| COM         |            1 |
| CPV         |            1 |
| CRI         |            1 |
| CUB         |           14 |
| CXR         |            1 |
| CYM         |            1 |
| CYP         |            2 |
| CZE         |           10 |
| DEU         |           93 |
| DJI         |            1 |
| DMA         |            1 |
| DNK         |            5 |
| DOM         |            6 |
| DZA         |           18 |
| ECU         |           15 |
| EGY         |           37 |
| ERI         |            1 |
| ESH         |            1 |
| ESP         |           59 |
| EST         |            2 |
| ETH         |            7 |
| FIN         |            7 |
| FJI         |            1 |
| FLK         |            1 |
| FRA         |           40 |
| FRO         |            1 |
| FSM         |            2 |
| GAB         |            1 |
| GBR         |           81 |
| GEO         |            5 |
| GHA         |            5 |
| GIB         |            1 |
| GIN         |            1 |
| GLP         |            2 |
| GMB         |            2 |
| GNB         |            1 |
| GNQ         |            1 |
| GRC         |            8 |
| GRD         |            1 |
| GRL         |            1 |
| GTM         |            4 |
| GUF         |            1 |
| GUM         |            2 |
| GUY         |            1 |
| HKG         |            2 |
| HND         |            3 |
| HRV         |            4 |
| HTI         |            4 |
| HUN         |            9 |
| IDN         |           85 |
| IND         |          341 |
| IRL         |            2 |
| IRN         |           67 |
| IRQ         |           15 |
| ISL         |            1 |
| ISR         |           14 |
| ITA         |           58 |
| JAM         |            3 |
| JOR         |            5 |
| JPN         |          248 |
| KAZ         |           21 |
| KEN         |            8 |
| KGZ         |            2 |
| KHM         |            3 |
| KIR         |            2 |
| KNA         |            1 |
| KOR         |           70 |
| KWT         |            3 |
| LAO         |            2 |
| LBN         |            2 |
| LBR         |            1 |
| LBY         |            4 |
| LCA         |            1 |
| LIE         |            2 |
| LKA         |            7 |
| LSO         |            1 |
| LTU         |            5 |
| LUX         |            1 |
| LVA         |            3 |
| MAC         |            1 |
| MAR         |           22 |
| MCO         |            2 |
| MDA         |            4 |
| MDG         |            5 |
| MDV         |            1 |
| MEX         |          173 |
| MHL         |            1 |
| MKD         |            1 |
| MLI         |            1 |
| MLT         |            2 |
| MMR         |           16 |
| MNG         |            1 |
| MNP         |            1 |
| MOZ         |           12 |
| MRT         |            2 |
| MSR         |            1 |
| MTQ         |            1 |
| MUS         |            3 |
| MWI         |            2 |
| MYS         |           18 |
| MYT         |            1 |
| NAM         |            1 |
| NCL         |            1 |
| NER         |            3 |
| NFK         |            1 |
| NGA         |           64 |
| NIC         |            4 |
| NIU         |            1 |
| NLD         |           28 |
| NOR         |            5 |
| NPL         |            5 |
| NRU         |            2 |
| NZL         |            9 |
| OMN         |            5 |
| PAK         |           59 |
| PAN         |            2 |
| PCN         |            1 |
| PER         |           22 |
| PHL         |          136 |
| PLW         |            1 |
| PNG         |            1 |
| POL         |           44 |
| PRI         |            9 |
| PRK         |           13 |
| PRT         |            5 |
| PRY         |            5 |
| PSE         |            6 |
| PYF         |            2 |
| QAT         |            1 |
| REU         |            1 |
| ROM         |           29 |
| RUS         |          189 |
| RWA         |            1 |
| SAU         |           24 |
| SDN         |           12 |
| SEN         |            9 |
| SGP         |            1 |
| SHN         |            1 |
| SJM         |            1 |
| SLB         |            1 |
| SLE         |            1 |
| SLV         |            7 |
| SMR         |            2 |
| SOM         |            3 |
| SPM         |            1 |
| STP         |            1 |
| SUR         |            1 |
| SVK         |            3 |
| SVN         |            2 |
| SWE         |           15 |
| SWZ         |            1 |
| SYC         |            1 |
| SYR         |           11 |
| TCA         |            1 |
| TCD         |            2 |
| TGO         |            1 |
| THA         |           12 |
| TJK         |            2 |
| TKL         |            1 |
| TKM         |            4 |
| TMP         |            1 |
| TON         |            1 |
| TTO         |            2 |
| TUN         |            8 |
| TUR         |           62 |
| TUV         |            1 |
| TWN         |           42 |
| TZA         |           10 |
| UGA         |            1 |
| UKR         |           57 |
| URY         |            1 |
| USA         |          274 |
| UZB         |           17 |
| VAT         |            1 |
| VCT         |            1 |
| VEN         |           41 |
| VGB         |            1 |
| VIR         |            1 |
| VNM         |           22 |
| VUT         |            1 |
| WLF         |            1 |
| WSM         |            1 |
| YEM         |            6 |
| YUG         |            8 |
| ZAF         |           44 |
| ZMB         |            7 |
| ZWE         |            6 |
+-------------+--------------+
232 rows in set (0.01 sec)

mysql> select CountryCode, name, count(*) as num_of_citys from city group by CountryCode;
ERROR 1055 (42000): Expression #2 of SELECT list is not in GROUP BY clause and contains nonaggregated column 'world.city.Name' which is not functionally dependent on columns in GROUP BY clause; this is incompatible with sql_mode=only_full_group_by
mysql> SELECT CountryCode, MIN(name) AS example_city, COUNT(*) AS num_of_citys
    -> FROM city
    -> GROUP BY CountryCode;
+-------------+-----------------------------------+--------------+
| CountryCode | example_city                      | num_of_citys |
+-------------+-----------------------------------+--------------+
| ABW         | Oranjestad                        |            1 |
| AFG         | Herat                             |            4 |
| AGO         | Benguela                          |            5 |
| AIA         | South Hill                        |            2 |
| ALB         | Tirana                            |            1 |
| AND         | Andorra la Vella                  |            1 |
| ANT         | Willemstad                        |            1 |
| ARE         | Abu Dhabi                         |            5 |
| ARG         | Almirante Brown                   |           57 |
| ARM         | Gjumri                            |            3 |
| ASM         | Fagatogo                          |            2 |
| ATG         | Saint John´s                      |            1 |
| AUS         | Adelaide                          |           14 |
| AUT         | Graz                              |            6 |
| AZE         | Bakı                              |            4 |
| BDI         | Bujumbura                         |            1 |
| BEL         | Antwerpen                         |            9 |
| BEN         | Cotonou                           |            4 |
| BFA         | Bobo-Dioulasso                    |            3 |
| BGD         | Barisal                           |           24 |
| BGR         | Burgas                            |           10 |
| BHR         | al-Manama                         |            1 |
| BHS         | Nassau                            |            1 |
| BIH         | Banja Luka                        |            3 |
| BLR         | Baranovit?i                       |           16 |
| BLZ         | Belize City                       |            2 |
| BMU         | Hamilton                          |            2 |
| BOL         | Cochabamba                        |            8 |
| BRA         | Abaetetuba                        |          250 |
| BRB         | Bridgetown                        |            1 |
| BRN         | Bandar Seri Begawan               |            1 |
| BTN         | Thimphu                           |            1 |
| BWA         | Francistown                       |            2 |
| CAF         | Bangui                            |            1 |
| CAN         | Abbotsford                        |           49 |
| CCK         | Bantam                            |            2 |
| CHE         | Basel                             |            5 |
| CHL         | Antofagasta                       |           29 |
| CHN         | Acheng                            |          363 |
| CIV         | Abidjan                           |            5 |
| CMR         | Bafoussam                         |            7 |
| COD         | Boma                              |           18 |
| COG         | Brazzaville                       |            2 |
| COK         | Avarua                            |            1 |
| COL         | Armenia                           |           38 |
| COM         | Moroni                            |            1 |
| CPV         | Praia                             |            1 |
| CRI         | San José                          |            1 |
| CUB         | Bayamo                            |           14 |
| CXR         | Flying Fish Cove                  |            1 |
| CYM         | George Town                       |            1 |
| CYP         | Limassol                          |            2 |
| CZE         | Brno                              |           10 |
| DEU         | Aachen                            |           93 |
| DJI         | Djibouti                          |            1 |
| DMA         | Roseau                            |            1 |
| DNK         | Aalborg                           |            5 |
| DOM         | La Romana                         |            6 |
| DZA         | Alger                             |           18 |
| ECU         | Ambato                            |           15 |
| EGY         | al-Arish                          |           37 |
| ERI         | Asmara                            |            1 |
| ESH         | El-Aaiún                          |            1 |
| ESP         | [San Cristóbal de] la Laguna      |           59 |
| EST         | Tallinn                           |            2 |
| ETH         | Addis Abeba                       |            7 |
| FIN         | Espoo                             |            7 |
| FJI         | Suva                              |            1 |
| FLK         | Stanley                           |            1 |
| FRA         | Aix-en-Provence                   |           40 |
| FRO         | Tórshavn                          |            1 |
| FSM         | Palikir                           |            2 |
| GAB         | Libreville                        |            1 |
| GBR         | Aberdeen                          |           81 |
| GEO         | Batumi                            |            5 |
| GHA         | Accra                             |            5 |
| GIB         | Gibraltar                         |            1 |
| GIN         | Conakry                           |            1 |
| GLP         | Basse-Terre                       |            2 |
| GMB         | Banjul                            |            2 |
| GNB         | Bissau                            |            1 |
| GNQ         | Malabo                            |            1 |
| GRC         | Athenai                           |            8 |
| GRD         | Saint George´s                    |            1 |
| GRL         | Nuuk                              |            1 |
| GTM         | Ciudad de Guatemala               |            4 |
| GUF         | Cayenne                           |            1 |
| GUM         | Agaña                             |            2 |
| GUY         | Georgetown                        |            1 |
| HKG         | Kowloon and New Kowloon           |            2 |
| HND         | La Ceiba                          |            3 |
| HRV         | Osijek                            |            4 |
| HTI         | Carrefour                         |            4 |
| HUN         | Budapest                          |            9 |
| IDN         | Ambon                             |           85 |
| IND         | Abohar                            |          341 |
| IRL         | Cork                              |            2 |
| IRN         | Abadan                            |           67 |
| IRQ         | al-Amara                          |           15 |
| ISL         | Reykjavík                         |            1 |
| ISR         | Ashdod                            |           14 |
| ITA         | Alessandria                       |           58 |
| JAM         | Kingston                          |            3 |
| JOR         | al-Rusayfa                        |            5 |
| JPN         | Abiko                             |          248 |
| KAZ         | Almaty                            |           21 |
| KEN         | Eldoret                           |            8 |
| KGZ         | Bishkek                           |            2 |
| KHM         | Battambang                        |            3 |
| KIR         | Bairiki                           |            2 |
| KNA         | Basseterre                        |            1 |
| KOR         | Andong                            |           70 |
| KWT         | al-Salimiya                       |            3 |
| LAO         | Savannakhet                       |            2 |
| LBN         | Beirut                            |            2 |
| LBR         | Monrovia                          |            1 |
| LBY         | al-Zawiya                         |            4 |
| LCA         | Castries                          |            1 |
| LIE         | Schaan                            |            2 |
| LKA         | Colombo                           |            7 |
| LSO         | Maseru                            |            1 |
| LTU         | Kaunas                            |            5 |
| LUX         | Luxembourg [Luxemburg/Lëtzebuerg] |            1 |
| LVA         | Daugavpils                        |            3 |
| MAC         | Macao                             |            1 |
| MAR         | Agadir                            |           22 |
| MCO         | Monaco-Ville                      |            2 |
| MDA         | Balti                             |            4 |
| MDG         | Antananarivo                      |            5 |
| MDV         | Male                              |            1 |
| MEX         | Acámbaro                          |          173 |
| MHL         | Dalap-Uliga-Darrit                |            1 |
| MKD         | Skopje                            |            1 |
| MLI         | Bamako                            |            1 |
| MLT         | Birkirkara                        |            2 |
| MMR         | Bassein (Pathein)                 |           16 |
| MNG         | Ulan Bator                        |            1 |
| MNP         | Garapan                           |            1 |
| MOZ         | Beira                             |           12 |
| MRT         | Nouâdhibou                        |            2 |
| MSR         | Plymouth                          |            1 |
| MTQ         | Fort-de-France                    |            1 |
| MUS         | Beau Bassin-Rose Hill             |            3 |
| MWI         | Blantyre                          |            2 |
| MYS         | Alor Setar                        |           18 |
| MYT         | Mamoutzou                         |            1 |
| NAM         | Windhoek                          |            1 |
| NCL         | Nouméa                            |            1 |
| NER         | Maradi                            |            3 |
| NFK         | Kingston                          |            1 |
| NGA         | Aba                               |           64 |
| NIC         | Chinandega                        |            4 |
| NIU         | Alofi                             |            1 |
| NLD         | ´s-Hertogenbosch                  |           28 |
| NOR         | Bærum                             |            5 |
| NPL         | Biratnagar                        |            5 |
| NRU         | Yangor                            |            2 |
| NZL         | Auckland                          |            9 |
| OMN         | al-Sib                            |            5 |
| PAK         | Abottabad                         |           59 |
| PAN         | Ciudad de Panamá                  |            2 |
| PCN         | Adamstown                         |            1 |
| PER         | Arequipa                          |           22 |
| PHL         | Angeles                           |          136 |
| PLW         | Koror                             |            1 |
| PNG         | Port Moresby                      |            1 |
| POL         | Bialystok                         |           44 |
| PRI         | Arecibo                           |            9 |
| PRK         | Chongjin                          |           13 |
| PRT         | Amadora                           |            5 |
| PRY         | Asunción                          |            5 |
| PSE         | Gaza                              |            6 |
| PYF         | Faaa                              |            2 |
| QAT         | Doha                              |            1 |
| REU         | Saint-Denis                       |            1 |
| ROM         | Arad                              |           29 |
| RUS         | Abakan                            |          189 |
| RWA         | Kigali                            |            1 |
| SAU         | Abha                              |           24 |
| SDN         | al-Fashir                         |           12 |
| SEN         | Dakar                             |            9 |
| SGP         | Singapore                         |            1 |
| SHN         | Jamestown                         |            1 |
| SJM         | Longyearbyen                      |            1 |
| SLB         | Honiara                           |            1 |
| SLE         | Freetown                          |            1 |
| SLV         | Apopa                             |            7 |
| SMR         | San Marino                        |            2 |
| SOM         | Hargeysa                          |            3 |
| SPM         | Saint-Pierre                      |            1 |
| STP         | São Tomé                          |            1 |
| SUR         | Paramaribo                        |            1 |
| SVK         | Bratislava                        |            3 |
| SVN         | Ljubljana                         |            2 |
| SWE         | Borås                             |           15 |
| SWZ         | Mbabane                           |            1 |
| SYC         | Victoria                          |            1 |
| SYR         | al-Qamishliya                     |           11 |
| TCA         | Cockburn Town                     |            1 |
| TCD         | Moundou                           |            2 |
| TGO         | Lomé                              |            1 |
| THA         | Bangkok                           |           12 |
| TJK         | Dushanbe                          |            2 |
| TKL         | Fakaofo                           |            1 |
| TKM         | Ashgabat                          |            4 |
| TMP         | Dili                              |            1 |
| TON         | Nuku´alofa                        |            1 |
| TTO         | Chaguanas                         |            2 |
| TUN         | Ariana                            |            8 |
| TUR         | Adana                             |           62 |
| TUV         | Funafuti                          |            1 |
| TWN         | Changhwa                          |           42 |
| TZA         | Arusha                            |           10 |
| UGA         | Kampala                           |            1 |
| UKR         | Alt?evsk                          |           57 |
| URY         | Montevideo                        |            1 |
| USA         | Abilene                           |          274 |
| UZB         | Andijon                           |           17 |
| VAT         | Città del Vaticano                |            1 |
| VCT         | Kingstown                         |            1 |
| VEN         | Acarigua                          |           41 |
| VGB         | Road Town                         |            1 |
| VIR         | Charlotte Amalie                  |            1 |
| VNM         | Biên Hoa                          |           22 |
| VUT         | Port-Vila                         |            1 |
| WLF         | Mata-Utu                          |            1 |
| WSM         | Apia                              |            1 |
| YEM         | Aden                              |            6 |
| YUG         | Beograd                           |            8 |
| ZAF         | Alberton                          |           44 |
| ZMB         | Chingola                          |            7 |
| ZWE         | Bulawayo                          |            6 |
+-------------+-----------------------------------+--------------+
232 rows in set (0.01 sec)


mysql> select * from countrylanguage  limit 10;                                                
+-------------+------------+------------+------------+
| CountryCode | Language   | IsOfficial | Percentage |
+-------------+------------+------------+------------+
| ABW         | Dutch      | T          |        5.3 |
| ABW         | English    | F          |        9.5 |
| ABW         | Papiamento | F          |       76.7 |
| ABW         | Spanish    | F          |        7.4 |
| AFG         | Balochi    | F          |        0.9 |
| AFG         | Dari       | T          |       32.1 |
| AFG         | Pashto     | T          |       52.4 |
| AFG         | Turkmenian | F          |        1.9 |
| AFG         | Uzbek      | F          |        8.8 |
| AGO         | Ambo       | F          |        2.4 |
+-------------+------------+------------+------------+
10 rows in set (0.01 sec)


mysql> select name as country
    -> from country
    -> where code in (
    ->     select countrycode
    ->     from countrylanguage
    ->     where Language = 'English' and IsOfficial ='T'
    -> );
+--------------------------------------+
| country                              |
+--------------------------------------+
| Anguilla                             |
| American Samoa                       |
| Antigua and Barbuda                  |
| Australia                            |
| Belize                               |
| Bermuda                              |
| Barbados                             |
| Canada                               |
| Cocos (Keeling) Islands              |
| Christmas Island                     |
| Cayman Islands                       |
| Falkland Islands                     |
| United Kingdom                       |
| Gibraltar                            |
| Guam                                 |
| Hong Kong                            |
| Ireland                              |
| Saint Kitts and Nevis                |
| Saint Lucia                          |
| Lesotho                              |
| Marshall Islands                     |
| Malta                                |
| Northern Mariana Islands             |
| Montserrat                           |
| Norfolk Island                       |
| Niue                                 |
| Nauru                                |
| New Zealand                          |
| Palau                                |
| Saint Helena                         |
| Seychelles                           |
| Turks and Caicos Islands             |
| Tokelau                              |
| Tonga                                |
| Tuvalu                               |
| United States Minor Outlying Islands |
| United States                        |
| Saint Vincent and the Grenadines     |
| Virgin Islands, British              |
| Virgin Islands, U.S.                 |
| Vanuatu                              |
| Samoa                                |
| South Africa                         |
| Zimbabwe                             |
+--------------------------------------+
44 rows in set (0.01 sec)

mysql> select * from countrylanguage where Language='English' and IsOfficial='T';              
+-------------+----------+------------+------------+
| CountryCode | Language | IsOfficial | Percentage |
+-------------+----------+------------+------------+
| AIA         | English  | T          |        0.0 |
| ASM         | English  | T          |        3.1 |
| ATG         | English  | T          |        0.0 |
| AUS         | English  | T          |       81.2 |
| BLZ         | English  | T          |       50.8 |
| BMU         | English  | T          |      100.0 |
| BRB         | English  | T          |        0.0 |
| CAN         | English  | T          |       60.4 |
| CCK         | English  | T          |        0.0 |
| CXR         | English  | T          |        0.0 |
| CYM         | English  | T          |        0.0 |
| FLK         | English  | T          |        0.0 |
| GBR         | English  | T          |       97.3 |
| GIB         | English  | T          |       88.9 |
| GUM         | English  | T          |       37.5 |
| HKG         | English  | T          |        2.2 |
| IRL         | English  | T          |       98.4 |
| KNA         | English  | T          |        0.0 |
| LCA         | English  | T          |       20.0 |
| LSO         | English  | T          |        0.0 |
| MHL         | English  | T          |        0.0 |
| MLT         | English  | T          |        2.1 |
| MNP         | English  | T          |        4.8 |
| MSR         | English  | T          |        0.0 |
| NFK         | English  | T          |        0.0 |
| NIU         | English  | T          |        0.0 |
| NRU         | English  | T          |        7.5 |
| NZL         | English  | T          |       87.0 |
| PLW         | English  | T          |        3.2 |
| SHN         | English  | T          |        0.0 |
| SYC         | English  | T          |        3.8 |
| TCA         | English  | T          |        0.0 |
| TKL         | English  | T          |        0.0 |
| TON         | English  | T          |        0.0 |
| TUV         | English  | T          |        0.0 |
| UMI         | English  | T          |        0.0 |
| USA         | English  | T          |       86.2 |
| VCT         | English  | T          |        0.0 |
| VGB         | English  | T          |        0.0 |
| VIR         | English  | T          |       81.7 |
| VUT         | English  | T          |       28.3 |
| WSM         | English  | T          |        0.6 |
| ZAF         | English  | T          |        8.5 |
| ZWE         | English  | T          |        2.2 |
+-------------+----------+------------+------------+
44 rows in set (0.00 sec)

mysql> select name as countryName from country where code in(select countrycode  from countryla
nguage where Language='English' and IsOfficial='T');
+--------------------------------------+
| countryName                          |
+--------------------------------------+
| Anguilla                             |
| American Samoa                       |
| Antigua and Barbuda                  |
| Australia                            |
| Belize                               |
| Bermuda                              |
| Barbados                             |
| Canada                               |
| Cocos (Keeling) Islands              |
| Christmas Island                     |
| Cayman Islands                       |
| Falkland Islands                     |
| United Kingdom                       |
| Gibraltar                            |
| Guam                                 |
| Hong Kong                            |
| Ireland                              |
| Saint Kitts and Nevis                |
| Saint Lucia                          |
| Lesotho                              |
| Marshall Islands                     |
| Malta                                |
| Northern Mariana Islands             |
| Montserrat                           |
| Norfolk Island                       |
| Niue                                 |
| Nauru                                |
| New Zealand                          |
| Palau                                |
| Saint Helena                         |
| Seychelles                           |
| Turks and Caicos Islands             |
| Tokelau                              |
| Tonga                                |
| Tuvalu                               |
| United States Minor Outlying Islands |
| United States                        |
| Saint Vincent and the Grenadines     |
| Virgin Islands, British              |
| Virgin Islands, U.S.                 |
| Vanuatu                              |
| Samoa                                |
| South Africa                         |
| Zimbabwe                             |
+--------------------------------------+
44 rows in set (0.00 sec)

mysql> select name from country where LifeExpectancy = (select max(LifeExpectancy) from country
);
+---------+
| name    |
+---------+
| Andorra |
+---------+
1 row in set (0.00 sec)

mysql> select name, LifeExpectancy  from country where LifeExpectancy = (select max(LifeExpecta
ncy) from country);
+---------+----------------+
| name    | LifeExpectancy |
+---------+----------------+
| Andorra |           83.5 |
+---------+----------------+
1 row in set (0.00 sec)

mysql> use test2;
Database changed
mysql> show tables
    -> ;
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


mysql> create table student 
    -> (student_id int(6) primary key auto_increment not null,
    -> student_name varchar(255),
    -> score int);
Query OK, 0 rows affected, 1 warning (0.15 sec)


mysql> insert into student(student_name, score) values('arav', 85),('ar
adhya', 92), ('advik', 78), ('ananya' , 92), ('ishan', 85); 
Query OK, 5 rows affected (0.02 sec)
Records: 5  Duplicates: 0  Warnings: 0

mysql> select * from student;
+------------+--------------+-------+
| student_id | student_name | score |
+------------+--------------+-------+
|          1 | arav         |    85 |
|          2 | aradhya      |    92 |
|          3 | advik        |    78 |
|          4 | ananya       |    92 |
|          5 | ishan        |    85 |
+------------+--------------+-------+
5 rows in set (0.00 sec)


mysql> select *, rank() over (order by score desc)as 'Rank' from studen
t;
+------------+--------------+-------+------+
| student_id | student_name | score | Rank |
+------------+--------------+-------+------+
|          2 | aradhya      |    92 |    1 |
|          4 | ananya       |    92 |    1 |
|          1 | arav         |    85 |    3 |
|          5 | ishan        |    85 |    3 |
|          3 | advik        |    78 |    5 |
+------------+--------------+-------+------+
5 rows in set (0.01 sec)

mysql> select *, rank() over (order by score desc)as 'Rank',Dense_rank(
) over (order by score desc)as 'denscrank' from student;
+------------+--------------+-------+------+-----------+
| student_id | student_name | score | Rank | denscrank |
+------------+--------------+-------+------+-----------+
|          2 | aradhya      |    92 |    1 |         1 |
|          4 | ananya       |    92 |    1 |         1 |
|          1 | arav         |    85 |    3 |         2 |
|          5 | ishan        |    85 |    3 |         2 |
|          3 | advik        |    78 |    5 |         3 |
+------------+--------------+-------+------+-----------+
5 rows in set (0.00 sec)


mysql> use world;
Database changed
mysql> select name as country, Continent, Population,
    -> rank() over (partition by Continent order by population desc)
    ->  as RankWithContinent
    ->  from country;
+----------------------------------------------+---------------+------------+-------------------+
| country                                      | Continent     | Population | RankWithContinent |
+----------------------------------------------+---------------+------------+-------------------+
| China                                        | Asia          | 1277558000 |                 1 |
| India                                        | Asia          | 1013662000 |                 2 |
| Indonesia                                    | Asia          |  212107000 |                 3 |
| Pakistan                                     | Asia          |  156483000 |                 4 |
| Bangladesh                                   | Asia          |  129155000 |                 5 |
| Japan                                        | Asia          |  126714000 |                 6 |
| Vietnam                                      | Asia          |   79832000 |                 7 |
| Philippines                                  | Asia          |   75967000 |                 8 |
| Iran                                         | Asia          |   67702000 |                 9 |
| Turkey                                       | Asia          |   66591000 |                10 |
| Thailand                                     | Asia          |   61399000 |                11 |
| South Korea                                  | Asia          |   46844000 |                12 |
| Myanmar                                      | Asia          |   45611000 |                13 |
| Uzbekistan                                   | Asia          |   24318000 |                14 |
| North Korea                                  | Asia          |   24039000 |                15 |
| Nepal                                        | Asia          |   23930000 |                16 |
| Iraq                                         | Asia          |   23115000 |                17 |
| Afghanistan                                  | Asia          |   22720000 |                18 |
| Taiwan                                       | Asia          |   22256000 |                19 |
| Malaysia                                     | Asia          |   22244000 |                20 |
| Saudi Arabia                                 | Asia          |   21607000 |                21 |
| Sri Lanka                                    | Asia          |   18827000 |                22 |
| Yemen                                        | Asia          |   18112000 |                23 |
| Kazakstan                                    | Asia          |   16223000 |                24 |
| Syria                                        | Asia          |   16125000 |                25 |
| Cambodia                                     | Asia          |   11168000 |                26 |
| Azerbaijan                                   | Asia          |    7734000 |                27 |
| Hong Kong                                    | Asia          |    6782000 |                28 |
| Israel                                       | Asia          |    6217000 |                29 |
| Tajikistan                                   | Asia          |    6188000 |                30 |
| Laos                                         | Asia          |    5433000 |                31 |
| Jordan                                       | Asia          |    5083000 |                32 |
| Georgia                                      | Asia          |    4968000 |                33 |
| Kyrgyzstan                                   | Asia          |    4699000 |                34 |
| Turkmenistan                                 | Asia          |    4459000 |                35 |
| Singapore                                    | Asia          |    3567000 |                36 |
| Armenia                                      | Asia          |    3520000 |                37 |
| Lebanon                                      | Asia          |    3282000 |                38 |
| Palestine                                    | Asia          |    3101000 |                39 |
| Mongolia                                     | Asia          |    2662000 |                40 |
| Oman                                         | Asia          |    2542000 |                41 |
| United Arab Emirates                         | Asia          |    2441000 |                42 |
| Bhutan                                       | Asia          |    2124000 |                43 |
| Kuwait                                       | Asia          |    1972000 |                44 |
| East Timor                                   | Asia          |     885000 |                45 |
| Cyprus                                       | Asia          |     754700 |                46 |
| Bahrain                                      | Asia          |     617000 |                47 |
| Qatar                                        | Asia          |     599000 |                48 |
| Macao                                        | Asia          |     473000 |                49 |
| Brunei                                       | Asia          |     328000 |                50 |
| Maldives                                     | Asia          |     286000 |                51 |
| Russian Federation                           | Europe        |  146934000 |                 1 |
| Germany                                      | Europe        |   82164700 |                 2 |
| United Kingdom                               | Europe        |   59623400 |                 3 |
| France                                       | Europe        |   59225700 |                 4 |
| Italy                                        | Europe        |   57680000 |                 5 |
| Ukraine                                      | Europe        |   50456000 |                 6 |
| Spain                                        | Europe        |   39441700 |                 7 |
| Poland                                       | Europe        |   38653600 |                 8 |
| Romania                                      | Europe        |   22455500 |                 9 |
| Netherlands                                  | Europe        |   15864000 |                10 |
| Yugoslavia                                   | Europe        |   10640000 |                11 |
| Greece                                       | Europe        |   10545700 |                12 |
| Czech Republic                               | Europe        |   10278100 |                13 |
| Belgium                                      | Europe        |   10239000 |                14 |
| Belarus                                      | Europe        |   10236000 |                15 |
| Hungary                                      | Europe        |   10043200 |                16 |
| Portugal                                     | Europe        |    9997600 |                17 |
| Sweden                                       | Europe        |    8861400 |                18 |
| Bulgaria                                     | Europe        |    8190900 |                19 |
| Austria                                      | Europe        |    8091800 |                20 |
| Switzerland                                  | Europe        |    7160400 |                21 |
| Slovakia                                     | Europe        |    5398700 |                22 |
| Denmark                                      | Europe        |    5330000 |                23 |
| Finland                                      | Europe        |    5171300 |                24 |
| Norway                                       | Europe        |    4478500 |                25 |
| Croatia                                      | Europe        |    4473000 |                26 |
| Moldova                                      | Europe        |    4380000 |                27 |
| Bosnia and Herzegovina                       | Europe        |    3972000 |                28 |
| Ireland                                      | Europe        |    3775100 |                29 |
| Lithuania                                    | Europe        |    3698500 |                30 |
| Albania                                      | Europe        |    3401200 |                31 |
| Latvia                                       | Europe        |    2424200 |                32 |
| Macedonia                                    | Europe        |    2024000 |                33 |
| Slovenia                                     | Europe        |    1987800 |                34 |
| Estonia                                      | Europe        |    1439200 |                35 |
| Luxembourg                                   | Europe        |     435700 |                36 |
| Malta                                        | Europe        |     380200 |                37 |
| Iceland                                      | Europe        |     279000 |                38 |
| Andorra                                      | Europe        |      78000 |                39 |
| Faroe Islands                                | Europe        |      43000 |                40 |
| Monaco                                       | Europe        |      34000 |                41 |
| Liechtenstein                                | Europe        |      32300 |                42 |
| San Marino                                   | Europe        |      27000 |                43 |
| Gibraltar                                    | Europe        |      25000 |                44 |
| Svalbard and Jan Mayen                       | Europe        |       3200 |                45 |
| Holy See (Vatican City State)                | Europe        |       1000 |                46 |
| United States                                | North America |  278357000 |                 1 |
| Mexico                                       | North America |   98881000 |                 2 |
| Canada                                       | North America |   31147000 |                 3 |
| Guatemala                                    | North America |   11385000 |                 4 |
| Cuba                                         | North America |   11201000 |                 5 |
| Dominican Republic                           | North America |    8495000 |                 6 |
| Haiti                                        | North America |    8222000 |                 7 |
| Honduras                                     | North America |    6485000 |                 8 |
| El Salvador                                  | North America |    6276000 |                 9 |
| Nicaragua                                    | North America |    5074000 |                10 |
| Costa Rica                                   | North America |    4023000 |                11 |
| Puerto Rico                                  | North America |    3869000 |                12 |
| Panama                                       | North America |    2856000 |                13 |
| Jamaica                                      | North America |    2583000 |                14 |
| Trinidad and Tobago                          | North America |    1295000 |                15 |
| Guadeloupe                                   | North America |     456000 |                16 |
| Martinique                                   | North America |     395000 |                17 |
| Bahamas                                      | North America |     307000 |                18 |
| Barbados                                     | North America |     270000 |                19 |
| Belize                                       | North America |     241000 |                20 |
| Netherlands Antilles                         | North America |     217000 |                21 |
| Saint Lucia                                  | North America |     154000 |                22 |
| Saint Vincent and the Grenadines             | North America |     114000 |                23 |
| Aruba                                        | North America |     103000 |                24 |
| Grenada                                      | North America |      94000 |                25 |
| Virgin Islands, U.S.                         | North America |      93000 |                26 |
| Dominica                                     | North America |      71000 |                27 |
| Antigua and Barbuda                          | North America |      68000 |                28 |
| Bermuda                                      | North America |      65000 |                29 |
| Greenland                                    | North America |      56000 |                30 |
| Cayman Islands                               | North America |      38000 |                31 |
| Saint Kitts and Nevis                        | North America |      38000 |                31 |
| Virgin Islands, British                      | North America |      21000 |                33 |
| Turks and Caicos Islands                     | North America |      17000 |                34 |
| Montserrat                                   | North America |      11000 |                35 |
| Anguilla                                     | North America |       8000 |                36 |
| Saint Pierre and Miquelon                    | North America |       7000 |                37 |
| Nigeria                                      | Africa        |  111506000 |                 1 |
| Egypt                                        | Africa        |   68470000 |                 2 |
| Ethiopia                                     | Africa        |   62565000 |                 3 |
| Congo, The Democratic Republic of the        | Africa        |   51654000 |                 4 |
| South Africa                                 | Africa        |   40377000 |                 5 |
| Tanzania                                     | Africa        |   33517000 |                 6 |
| Algeria                                      | Africa        |   31471000 |                 7 |
| Kenya                                        | Africa        |   30080000 |                 8 |
| Sudan                                        | Africa        |   29490000 |                 9 |
| Morocco                                      | Africa        |   28351000 |                10 |
| Uganda                                       | Africa        |   21778000 |                11 |
| Ghana                                        | Africa        |   20212000 |                12 |
| Mozambique                                   | Africa        |   19680000 |                13 |
| Madagascar                                   | Africa        |   15942000 |                14 |
| Cameroon                                     | Africa        |   15085000 |                15 |
| Côte d?Ivoire                                | Africa        |   14786000 |                16 |
| Angola                                       | Africa        |   12878000 |                17 |
| Burkina Faso                                 | Africa        |   11937000 |                18 |
| Zimbabwe                                     | Africa        |   11669000 |                19 |
| Mali                                         | Africa        |   11234000 |                20 |
| Malawi                                       | Africa        |   10925000 |                21 |
| Niger                                        | Africa        |   10730000 |                22 |
| Somalia                                      | Africa        |   10097000 |                23 |
| Tunisia                                      | Africa        |    9586000 |                24 |
| Senegal                                      | Africa        |    9481000 |                25 |
| Zambia                                       | Africa        |    9169000 |                26 |
| Rwanda                                       | Africa        |    7733000 |                27 |
| Chad                                         | Africa        |    7651000 |                28 |
| Guinea                                       | Africa        |    7430000 |                29 |
| Burundi                                      | Africa        |    6695000 |                30 |
| Benin                                        | Africa        |    6097000 |                31 |
| Libyan Arab Jamahiriya                       | Africa        |    5605000 |                32 |
| Sierra Leone                                 | Africa        |    4854000 |                33 |
| Togo                                         | Africa        |    4629000 |                34 |
| Eritrea                                      | Africa        |    3850000 |                35 |
| Central African Republic                     | Africa        |    3615000 |                36 |
| Liberia                                      | Africa        |    3154000 |                37 |
| Congo                                        | Africa        |    2943000 |                38 |
| Mauritania                                   | Africa        |    2670000 |                39 |
| Lesotho                                      | Africa        |    2153000 |                40 |
| Namibia                                      | Africa        |    1726000 |                41 |
| Botswana                                     | Africa        |    1622000 |                42 |
| Gambia                                       | Africa        |    1305000 |                43 |
| Gabon                                        | Africa        |    1226000 |                44 |
| Guinea-Bissau                                | Africa        |    1213000 |                45 |
| Mauritius                                    | Africa        |    1158000 |                46 |
| Swaziland                                    | Africa        |    1008000 |                47 |
| Réunion                                      | Africa        |     699000 |                48 |
| Djibouti                                     | Africa        |     638000 |                49 |
| Comoros                                      | Africa        |     578000 |                50 |
| Equatorial Guinea                            | Africa        |     453000 |                51 |
| Cape Verde                                   | Africa        |     428000 |                52 |
| Western Sahara                               | Africa        |     293000 |                53 |
| Mayotte                                      | Africa        |     149000 |                54 |
| Sao Tome and Principe                        | Africa        |     147000 |                55 |
| Seychelles                                   | Africa        |      77000 |                56 |
| Saint Helena                                 | Africa        |       6000 |                57 |
| British Indian Ocean Territory               | Africa        |          0 |                58 |
| Australia                                    | Oceania       |   18886000 |                 1 |
| Papua New Guinea                             | Oceania       |    4807000 |                 2 |
| New Zealand                                  | Oceania       |    3862000 |                 3 |
| Fiji Islands                                 | Oceania       |     817000 |                 4 |
| Solomon Islands                              | Oceania       |     444000 |                 5 |
| French Polynesia                             | Oceania       |     235000 |                 6 |
| New Caledonia                                | Oceania       |     214000 |                 7 |
| Vanuatu                                      | Oceania       |     190000 |                 8 |
| Samoa                                        | Oceania       |     180000 |                 9 |
| Guam                                         | Oceania       |     168000 |                10 |
| Micronesia, Federated States of              | Oceania       |     119000 |                11 |
| Tonga                                        | Oceania       |      99000 |                12 |
| Kiribati                                     | Oceania       |      83000 |                13 |
| Northern Mariana Islands                     | Oceania       |      78000 |                14 |
| American Samoa                               | Oceania       |      68000 |                15 |
| Marshall Islands                             | Oceania       |      64000 |                16 |
| Cook Islands                                 | Oceania       |      20000 |                17 |
| Palau                                        | Oceania       |      19000 |                18 |
| Wallis and Futuna                            | Oceania       |      15000 |                19 |
| Nauru                                        | Oceania       |      12000 |                20 |
| Tuvalu                                       | Oceania       |      12000 |                20 |
| Christmas Island                             | Oceania       |       2500 |                22 |
| Norfolk Island                               | Oceania       |       2000 |                23 |
| Niue                                         | Oceania       |       2000 |                23 |
| Tokelau                                      | Oceania       |       2000 |                23 |
| Cocos (Keeling) Islands                      | Oceania       |        600 |                26 |
| Pitcairn                                     | Oceania       |         50 |                27 |
| United States Minor Outlying Islands         | Oceania       |          0 |                28 |
| Antarctica                                   | Antarctica    |          0 |                 1 |
| French Southern territories                  | Antarctica    |          0 |                 1 |
| Bouvet Island                                | Antarctica    |          0 |                 1 |
| Heard Island and McDonald Islands            | Antarctica    |          0 |                 1 |
| South Georgia and the South Sandwich Islands | Antarctica    |          0 |                 1 |
| Brazil                                       | South America |  170115000 |                 1 |
| Colombia                                     | South America |   42321000 |                 2 |
| Argentina                                    | South America |   37032000 |                 3 |
| Peru                                         | South America |   25662000 |                 4 |
| Venezuela                                    | South America |   24170000 |                 5 |
| Chile                                        | South America |   15211000 |                 6 |
| Ecuador                                      | South America |   12646000 |                 7 |
| Bolivia                                      | South America |    8329000 |                 8 |
| Paraguay                                     | South America |    5496000 |                 9 |
| Uruguay                                      | South America |    3337000 |                10 |
| Guyana                                       | South America |     861000 |                11 |
| Suriname                                     | South America |     417000 |                12 |
| French Guiana                                | South America |     181000 |                13 |
| Falkland Islands                             | South America |       2000 |                14 |
+----------------------------------------------+---------------+------------+-------------------+
239 rows in set (0.01 sec)