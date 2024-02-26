addTask("Fare la spesa", (error, message) => {
  if (error) {
    console.error("Errore durante l'aggiunta dell'attività:", error.message);
  } else {
    console.log(message);
  }
});

addTask("", (error, message) => {
  if (error) {
    console.error("Errore durante l'aggiunta dell'attività:", error.message);
  } else {
    console.log(message);
  }
});

completeTask(0, (error, message) => {
  if (error) {
    console.error(
      "Errore durante il completamento dell'attività:",
      error.message
    );
  } else {
    console.log(message);
  }
});

completeTask(1, (error, message) => {
  if (error) {
    console.error(
      "Errore durante il completamento dell'attività:",
      error.message
    );
  } else {
    console.log(message);
  }
});

console.log("Attività attuali:");
listTasks();

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

function completeTask(index, callback) {
  setTimeout(
    //
      3000);
}

addTask("Annaffia le piante", handleResult);
addTask(41, handleResult);
