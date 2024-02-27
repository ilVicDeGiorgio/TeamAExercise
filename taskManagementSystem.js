const taskNames = [];

function handleResult(error, data) {
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
      callback(null, `${task}: Task added successfully`);
    } else {
      callback(new Error("Task must be a non-empty string"), null);
    }
  }, 2000);
}

function completeTask(index, callback) {
  setTimeout(() => {
    if (index < 0 || index > taskNames.length) {
      callback(new Error("Indice attività non valido"));
    } else {
      taskNames.splice(index, 1);
      callback(null, "Attività completata con successo");
    }
  }, 5000);
}

function listTasks() {
  setTimeout(() => {
    for (let i = 0; i < taskNames.length; i++) {
      //andava bene un forEach poiché più indicato per iterare su un array
      console.log(`${i}: ${taskNames[i]}`);
    }
  }, 4000);
}

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
addTask("Fare la spesa", handleResult);
addTask("Cucinare", handleResult);
listTasks();
