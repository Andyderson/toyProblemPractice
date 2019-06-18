// Given a table salary, such as the one below, that has m=male and f=female values. Swap all f and m values (i.e., change all f values to m and vice versa) with a single update statement and no intermediate temp table.

// Note that you must write a single update statement, DO NOT write any select statement for this problem.

UPDATE salary

set sex =
CASE sex
when 'm' then 'f'
WHEN 'f' then 'm'
end