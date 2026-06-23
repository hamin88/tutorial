 SELECT email, COUNT(*)
 FROM users
 GROUP BY email
 HAVING COUNT(*) > 1;