#! /usr/bin/env node

import inquirer from "inquirer"
import chalk from "chalk";


let todoList:string[] = [];
let condition =true;

console.log(chalk.greenBright("\n\t WELCOM TO TODO-LIST \n"));

let main = async() => {
    while(condition){
        let option = await inquirer.prompt([
            {
                name: "Choices",
                type:"list",
                message:chalk.cyanBright( "Select an option you want to do:"),
                choices:["Add Task","Delete Task","Update Task","View Todo-List","Exit"]
            }
        ]);
        if (option.Choices ==="Add Task"){
            await addTask()
        }
        else if (option.Choices === "Delete Task"){
            await deleteTask()
        }
        else if (option.Choices === "Update Task"){
            await updateTask()
        }
        else if(option.Choices === "View Todo-List"){
            await viewTask()
        }
        else if(option.Choices ==="Exit" ){
            condition = false;
        }

    }
}
 // FUNCTION TO ADD THE TASK IN  LIST

let addTask = async() => {
    let newTask = await inquirer.prompt([
        {
         name:"task",
         type:"input",
         message:chalk.cyanBright("Enter your new task :")   
        }
    ]);
todoList.push(newTask.task)
console.log( chalk.bold(`\n "${newTask.task }" Task added Successfully in Todo-list`));
}
//FUNCTION TO VIEW THE TASK

let viewTask = async() =>{
    console.log(chalk.bold("\n Your Todo-List: \n"));
    todoList.forEach((task,index) =>{
        console.log(`${index+1}: ${task}`);
    })   
}
//FUCNTION TO DELETE A TASK FROM LIST

let deleteTask = async () => {
    await viewTask ()
    let taskIndex = await inquirer.prompt([
        {
            name:"index",
            type:"number",
            message:chalk.cyanBright(" Task added Successfully in Todo-list :")
        }
    ]);
    let deletedTask = todoList.splice(taskIndex.index -1 , 1)
    console.log(chalk.bold(`\n"${deletedTask}" task has been deleted successfully from your Todo-List`));
}
// FUNCTION TO UPDATE THE TASK FORM TODO-LIST

let updateTask = async () => {
    await viewTask()
    let task_update_index = await inquirer.prompt([
        {
            name:"index",
            type:"number",
            message:chalk.cyanBright("Enter the Index No. of the task you want to update :")
        },
        {
            name:"new_task",
            type:"input",
            message:chalk.cyanBright("Now Enter Your New Task :")
        }
    ]);
    todoList[task_update_index.index -1] = task_update_index.new_task
    console.log(chalk.bold(`\n Task at index no. "${task_update_index.index - 1}"updated successfully `));
    console.log(chalk.bold("Check the updated View Todo-List "));
}

main()
