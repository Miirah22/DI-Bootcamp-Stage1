CREATE TABLE actors(
    actor_id INT PRIMARY KEY,
    first_name VARCHAR (50) NOT NULL,
    last_name VARCHAR (100) NOT NULL,
    age DATE NOT NULL,
    number_oscars INT NOT NULL
   );
INSERT INTO actors (actor_id, first_name, last_name, age, number_oscars) VALUES
  (1,'Leonardo', 'DiCaprio', '1974-11-11', 25),
  (2,'Tom', 'Hanks', '1956-07-09', 5),
  (3,'Meryl', 'Streep', '1949-06-22', 15),
  (4,'Robert', 'De Niro', '1943-08-17', 10),
  (5,'Al', 'Pacino', '1940-04-25', 18),
  (6,'Jack', 'Nicholson', '1937-04-22', 19),
  (7,'Dustin', 'Hoffman', '1937-08-08', 17),
  (8,'Paul', 'Newman', '1925-01-26', 16),
  (9,'Marlon', 'Brando', '1924-04-03', 22),
  (10,'James', 'Dean', '1931-02-08', 24);
  
/*Count how many actors are in the table.*/
SELECT COUNT(*)FROM actors;

/*Try to add a new actor with some blank fields. What do you think the outcome will be ?*/
INSERT INTO actors (actor_id, first_name, last_name, age, number_oscars) VALUES
  (11, 'John', NULL, NULL, NULL, NULL);
