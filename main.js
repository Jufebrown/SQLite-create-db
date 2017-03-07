#!/usr/bin/env node

'use strict'

const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('example.sqlite')

const dropEmployees = () => {
  db.run(`DROP TABLE employees`)
}

// dropEmployees()

db.run('CREATE TABLE IF NOT EXISTS employees (id INT, first TEXT, last TEXT, salary DECIMAL(6, 2), department TEXT)')

// db.run(`INSERT INTO employees VALUES (1, "Jufe", "Brown-Tsai", 125000.86)`)


const populateEmployees = () => {
  const {list} = require('./employees.json')
  list.forEach(each => {
    db.run(`INSERT INTO employees VALUES (
      ${each.id},
      "${each.firstName}",
      "${each.lastName}",
      ${each.salary},
      "${each.department}"
    )`)
  })
}

// populateEmployees()


//.get returns first row
// db.get(`SELECT * FROM employees`, (err, row) => {
//   console.log('row', row)
// })


//.all returns array of results
// db.all(`SELECT * FROM employees`, (err, allRows) => {
//   // console.log('row', row)
//   allRows.forEach(({id, first, last, department, salary}) => {
//     console.log(`
//       ${id} ${first} ${last}
//       from ${department} Department.
//       Salary: ${salary}
//     `)
//   })
// })


//.each returns each row (array of table)
db.each(`SELECT * FROM employees`, (err, {id, first, last, department, salary}) => {
  console.log(`
    ${id} ${first} ${last}
    from ${department} Department.
    Salary: ${salary}
  `)
})
