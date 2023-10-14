/*We will work on the public database that we created yesterday.

Part I

Create a table named purchases. It should have 3 columns :
id : the primary key of the table
customer_id : this column references the table customers
item_id : this column references the table items
quantity_purchased : this column is the quantity of items purchased by a certain customer*/

CREATE TABLE purchases (
  id INT PRIMARY KEY,
  customer_id INT NOT NULL,
  item_id INT NOT NULL,
  quantity_purchased INT
);

/*Insert purchases for the customers, use subqueries:
1.Scott Scott bought one fan*/
INSERT INTO purchases (customer_id, item_id, quantity_purchased)
SELECT c.id, i.id, 1
FROM customers c
JOIN items i ON i.name = 'fan'
WHERE c.first_name = 'Scott' AND c.last_name = 'Scott';

/*2.Melanie Johnson bought ten large desks*/
INSERT INTO purchases (customer_id, item_id, quantity_purchased)
SELECT c.id, i.id, 10
FROM customers c
JOIN items i ON i.name = 'large desk'
WHERE c.first_name = 'Melanie' AND c.last_name = 'Johnson';

/*3.Greg Jones bougth two small desks*/
INSERT INTO purchases (customer_id, item_id, quantity_purchased)
SELECT c.id, i.id, 2
FROM customers c
JOIN items i ON i.name = 'small desk'
WHERE c.first_name = 'Greg' AND c.last_name = 'Jones';
