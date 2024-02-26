function completeTask(tasks, index, callback) {
    // Simulazione di un'operazione asincrona utilizzando setTimeout
    setTimeout(() => {
      if (index < 0 || index >= tasks.length) {
        // Se l'indice non è nell'intervallo valido, richiama la callback con un oggetto Error
        callback(new Error("Indice attività non valido"));
      } else {
        // Rimuovi l'attività all'indice specificato
        tasks.splice(index, 1);
        // Richiama la callback con null (nessun errore) e il messaggio di successo
        callback(null, "Attività completata correttamente");
      }
    }, 0); // Timeout impostato a 0 per l'esecuzione immediata (dopo il ciclo degli eventi)
  }