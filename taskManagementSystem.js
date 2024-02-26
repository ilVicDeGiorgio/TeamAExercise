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

function completeTask(task, index, callback) {
  // Simulazione di un'operazione asincrona utilizzando setTimeout
  setTimeout(() => {
    if (index < 0 || index >= task.length) {
      // Se l'indice non è nell'intervallo valido, richiama la callback con un oggetto Error
      callback(new Error("Indice attività non valido"));
    } else {
      // Rimuovi l'attività all'indice specificato
      task.splice(index, 1);
      // Richiama la callback con null (nessun errore) e il messaggio di successo
      callback(null, "Attività completata correttamente");
    }
  }, 0); // Timeout impostato a 0 per l'esecuzione immediata (dopo il ciclo degli eventi)
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

addTask("Annaffia le piante", handleResult);
addTask(41, handleResult);
