const taskNames = [];

function handleResult(error,data) {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
}

function addTask(task, callback) {
  setTimeout(() => {
    if (typeof task === "string") {
      taskNames.push(task);
      callback(null, "Task added successfully");
    } else {
      callback(new Error("Task must be a non-empty string"), null);
    }
  }, 2000);
}

function callback2() {
  //a function to handle the result
}
function completeTask(index, callback) {
  setTimeout(/*/*/ 3000);
}

addTask("Annaffia le piante", handleResult);
addTask(41, handleResult);
