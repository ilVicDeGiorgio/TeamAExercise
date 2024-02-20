const taskNames = [];

function handleResult(task) {
  if (typeof task === "string") {
    taskNames.push(task);
    return `Task aggiunta: ${task}`;
  } else {
    return "Error: Task non è una stringa.";
  }
}

function addTask(task, callback) {
  setTimeout(() => {
    callback(task);
    console.log(handleResult(task));
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
