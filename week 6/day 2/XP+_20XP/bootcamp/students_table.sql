/*Create a table called students.*/
CREATE TABLE students (
  id INT PRIMARY KEY,
  last_name VARCHAR(255) NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  birth_date DATE NOT NULL
);

/*Add the following columns: id, first_name, last_name, birth_date 
Insert the data seen above to the students table. Find the most efficient way to insert the data.
Insert last_name, first_name and birth_date to the students table (Take a look at the id given).*/
INSERT INTO students (id, first_name, last_name, birth_date)
VALUES
	(1, 'Marc', 'Benichou', '02/11/1998'),
	(2, 'Yoan', 'Cohen', '03/12/2010'),
	(3, 'Lea', 'Benichou', '27/07/1987'),
	(4, 'Amelia', 'Dux', '07/04/1996'),
	(5, 'David', 'Grez', '14/06/2003'),
	(6, 'Omer', 'Simpson', '03/10/1980'),
	(7, 'John', 'Doe', '1990-01-01');
	
/*Fetch all of the data from the table.*/
SELECT * FROM students;

/*Fetch all of the students first_names and last_names.*/
SELECT first_name, last_name FROM students;

/*For the following questions, only fetch the first_names and last_names of the students.

1.Fetch the student which id is equal to 2.*/
SELECT first_name, last_name FROM students WHERE id = 2;

/*2.Fetch the student whose last_name is Benichou AND first_name is Marc.*/
SELECT first_name, last_name FROM students WHERE last_name = 'Benichou' AND first_name = 'Marc';

/*3.Fetch the students whose last_names are Benichou OR first_names are Marc.*/
SELECT first_name, last_name FROM students WHERE last_name = 'Benichou' OR first_name = 'Marc';

/*4.Fetch the students whose first_names contain the letter a.*/
SELECT first_name FROM students WHERE first_name LIKE '%a%';

/*5.Fetch the students whose first_names start with the letter a.*/
SELECT first_name FROM students WHERE first_name LIKE 'A%';

/*6.Fetch the students whose first_names end with the letter a.*/
SELECT first_name FROM students WHERE first_name LIKE '%a';

/*7.Fetch the students whose second to last letter of their first_names are a (Example: Leah).*/
/*SELECT first_name FROM students WHERE SUBSTRING(first_name, -2, 1) = 'a';*/
SELECT first_name FROM students WHERE SUBSTR (LOWER (first_name), 2, 1) = 'a';

/*8.Fetch the students whose id’s are equal to 1 AND 3 */
SELECT first_name, last_name FROM students WHERE id <= 3;





	
	

