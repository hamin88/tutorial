--  Delete Duplicate Records

-- Preview which records will be deleted
SELECT id, email
FROM users
WHERE id NOT IN (
    SELECT MIN(id)
    FROM users
    GROUP BY email
)
ORDER BY email;

-- option 2 : keep latest record and delete all previous records
WITH CTE AS
(
    SELECT
        id,
        ROW_NUMBER() OVER
        (
            PARTITION BY email
            ORDER BY id DESC
        ) rn
    FROM Employee
)
DELETE
FROM Employee
WHERE id IN
(
    SELECT id
    FROM CTE
    WHERE rn > 1
);

