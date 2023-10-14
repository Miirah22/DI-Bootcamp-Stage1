*1.Fetch the last 2 customers in alphabetical order (A-Z) – exclude ‘id’ from the results.*/
SELECT first_name, last_name FROM customers ORDER BY first_name ASC LIMIT 2;

/*2.Use SQL to delete all purchases made by Scott.*/
DELETE FROM items WHERE id = (SELECT id FROM customers WHERE first_name = 'Scott');

/*3.Does Scott still exist in the customers table, even though he has been deleted? Try and find him.*/
SELECT * FROM customers WHERE first_name = 'Scott';


