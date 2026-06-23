WITH SalaryRank AS (
    SELECT
        name,
        salary,
        DENSE_RANK() OVER (ORDER BY salary DESC) AS rnk
    FROM Employee
)
SELECT *
FROM SalaryRank
WHERE rnk = 2;