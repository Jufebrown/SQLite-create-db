#!/usr/bin/env node

'use strict'

const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('example.sqlite')

const dropEmployees = () => {
  db.run(`DROP TABLE employees`)
}

// dropEmployees()

db.run('CREATE TABLE IF NOT EXISTS employees (id INT, first TEXT, last TEXT, salary DECIMAL(6, 2))')

// db.run(`INSERT INTO employees VALUES (1, "Jufe", "Brown-Tsai", 125000.86)`)


const populateEmployees = () => {
  const {list} = require('./employees.json')
  console.log(list)
}

populateEmployees()
