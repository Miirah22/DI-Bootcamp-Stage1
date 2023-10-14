/*Continuation of the Exercise XP
For the following questions, you have to fetch the first_names, last_names and birth_dates of the students.

1.Fetch the first four students. You have to order the four students alphabetically by last_name.*/
SELECT first_name,last_name, birth_date FROM students ORDER BY last_name ASC LIMIT 4;

/*2.Fetch the details of the youngest student.*/
SELECT first_name, last_name, birth_date FROM students ORDER BY birth_date DESC LIMIT 1;

/*3.Fetch three students skipping the first two students.*/
SELECT first_name, last_name, birth_date FROM students OFFSET 2;



	
	

