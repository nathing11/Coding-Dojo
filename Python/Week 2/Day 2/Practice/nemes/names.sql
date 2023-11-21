SELECT * FROM names.table1;
SELECT name FROM names.table1;
insert INTO table1(name)
values("amen");
insert INTO table1(name)
values("ahmed");
insert INTO table1(name)
values("amin"),("yassin");
UPDATE table1
SET name="ghaithe"
WHERE id = 1;
SET SQL_SAFE_UPDATES = 0;
DELETE FROM table1 WHERE id = 1;