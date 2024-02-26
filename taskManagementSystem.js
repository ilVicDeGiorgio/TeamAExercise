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
    if (index < 0 || index >= taskNames.length) {
      callback(new Error("Indice attività non valido"));
    } else {
      taskNames.splice(index, 1);
      callback(null, "Attività completata con successo");
    }
  }, 0);
}

function listTasks() {
  for (let i = 0; i < taskNames.length; i++) {
    console.log(`${i}: ${taskNames[i]}`);
  }
}

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
