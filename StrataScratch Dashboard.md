```dataview
TABLE 
    difficulty as "Difficulty", 
    tags as "Topics", 
    link as "Problem Link",
    created as "Date Created"
FROM "StrataScratch-Solutions"
WHERE file.name != this.file.name
SORT file.name ASC
```