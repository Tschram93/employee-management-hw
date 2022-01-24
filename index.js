const inquirer = require('inquirer');
const cTable = require('console.table');
const mysql = require('mysql2');
const ListPrompt = require('inquirer/lib/prompts/list');
const db = require('./config/connection');

function employeeQuestions() {
	inquirer
		.prompt([
			{
				type: list,
				name: selection,
				choices: [
					'View Departments',
					'View Roles',
					'View Employees',
					'Add Department',
					'Add Role',
					'Add Employee',
					'Update Role',
					'Exit',
				],
			},
		])
		.then((answers) => {
			switch (answers.selection) {
				case 'View Departments':
					viewDepartments();
					break;

				case 'View Roles':
					viewRoles();
					break;

				case 'View Employees':
					viewEmployees();
					break;
				case 'Add Department':
					addDepartment();
					break;
				case 'Add Role':
					addRole();
					break;
				case 'Add Employee':
					addEmployee();
					break;
				case 'Update Role':
					updateRole();
					break;
				default:
					process.exit(0);
			}
		});
}

