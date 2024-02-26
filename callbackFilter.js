function filterArray(arr, callback) {
    // Crea un nuovo array vuoto
    const filteredNumbers = [];

    // Itera su ogni elemento dell'array originale
    for (let i = 0; i < arr.length; i++) {
        // Se la funzione di callback restituisce true, aggiungi l'elemento al nuovo array
        if (callback(arr[i])) {
            filteredNumbers.push(arr[i]);
        }
    }

    // Restituisce il nuovo array con i valori filtrati
    return filteredNumbers;
}

function isEven(num) {
    return num % 2 === 0;
}

const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = filterArray(numbers, isEven);

console.log(evenNumbers); // [2, 4, 6]