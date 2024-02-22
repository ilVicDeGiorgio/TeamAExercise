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
