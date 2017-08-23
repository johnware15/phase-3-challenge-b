\copy grocery_items(name, price, section) FROM './grocery.csv' DELIMITER ',' CSV HEADER;

INSERT INTO orders (shopper_id)
  VALUES (1);
INSERT INTO orders (shopper_id)
  VALUES (2);
INSERT INTO orders (shoppers_id)
  VALUES (3);
INSERT INTO orders (shoppers_id)
  VALUES (4);
INSERT INTO orders (shoppers_id)
  VALUES (5);

INSERT INTO order_items (id, item_id)
  VALUES (1, 15);
INSERT INTO order_items (id, item_id)
  VALUES (2, 11);
INSERT INTO order_items (id, item_id)
  VALUES (3, 8);
INSERT INTO order_items (id, item_id)
  VALUES (4, 30);
INSERT INTO order_items (id, item_id)
  VALUES (5, 19);
INSERT INTO order_items (id, item_id)
  VALUES (1, 3);
INSERT INTO order_items (id, item_id)
  VALUES (2, 36);
INSERT INTO order_items (id, item_id)
  VALUES (3, 12);
INSERT INTO order_items (id, item_id)
  VALUES (4, 24);
INSERT INTO order_items (id, item_id)
  VALUES (5, 14);

INSERT INTO shoppers (firstname, lastname, email)
  VALUES ('Jon', 'Targaeryon', 'bastard@winterfell.com');
INSERT INTO shoppers (firstname, lastname, email)
  VALUES ('Arya', 'Stark', 'murdergirl@faceless.com');
INSERT INTO shoppers (firstname, lastname, email)
  VALUES ('Little', 'Finger', 'lord@sansastans.com');
INSERT INTO shoppers (firstname, lastname, email)
  VALUES ('Dany', 'Stormborn', 'queen@ironthrone.com');
INSERT INTO shoppers (firstname, lastname, email)
  VALUES ('Khal', 'Drago', 'king@moonofmylife.com');
