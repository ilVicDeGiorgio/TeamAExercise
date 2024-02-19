const team = [];

const student = {
  name: "Vittorio",
  surname: "De Giorgio",
  age: 27,
  city: "Amaroni",
  hobby: "Gym",
  favouriteFood: "Carbonara",
  favouriteVideogame: "Daysgone",
  favouriteFilm: "Interstellar",
  favouriteBook: "Adrenalina",
  petName: "Doggo",
};

const student2 = {
  name: "Letterio",
  surname: "Briguglio",
  age: 28,
  city: "Messina",
  hobby: "Roleplaying",
  favouriteFood: "Lasagne",
  favouriteVideogame: "Metal gear solid 3",
  favouriteFilm: "Everything Everywhere All at Once",
  favouriteBook: "NON-A by A. Van Vogt",
  petName: "JoJo",
};

const student3 = {
  name: "Rossella",
  surname: "Sonzogni",
  age: 30,
  city: "Anzio",
  hobby: "Cooking",
  favoriteFood: "Pizza",
  favoriteVideoGame: "The Witcher",
  favoriteFilm: "V per Vendetta",
  favoriteBook: "Io e te, Nicola Ammaniti",
  petName: "Pizzetta",
};

const student4 = {
  name: "Rossella",
  surname: "Altamura",
  age: 20,
  city: "Nocera Superiore",
  hobby: "Gym",
  favoriteFood: "Pizza",
  favoriteVideoGame: "Call of duty",
  favoriteFilm: "",
  favoriteBook: "",
  petName: "",
};

team.push(student, student2, student3, student4);
//Stampare il team in ordine alfabetico (cognome nome).
const sortSurname = team.sort((a, b) => a.surname.localeCompare(b.surname));
sortSurname.forEach((element) => {
  console.log(element.surname, element.name);
});

//Stampare il team in ordine di età (nome età).
const sortAge = team.sort((a, b) => a.age - b.age);
sortAge.forEach((element) => {
  console.log(element.name, element.age);
});

//Stampare l'età media del team.
const totalAge = team.reduce((a, element) => a + element.age, 0);
const averAge = Math.round(totalAge / team.length);
console.log(averAge);

//Stampare chi ha un animale domestico (nome nomeAnimale).
/*function stampaStudentiConAnimaleDomestico(team) {

  for (let i = 0; i < team.length; i++) {
    const studente = team[i];
    if (studente.petName !== "") {
      console.log(studente.name + " ha un animale domestico.");
    }
  }
}
stampaStudentiConAnimaleDomestico(team);*/
const filterPet = team.filter((element) => {
  return element.petName !== "";
});
filterPet.forEach((element) => {
  console.log(`${element.name} ha un animale domestico.`);
});
//Stampare chi ha scritto 'LOL' o 'League Of Legends' come videogioco preferito. (nome).
const findLoL = team.filter((element) => {
  return (
    element.favoriteVideoGame === "LoL" ||
    element.favoriteVideoGame === "League of Legends"
  );
});
findLoL.forEach((element) => {
  console.log(
    `${element.name} ama passare 60 minuti della sua vita giocando a League of Legends. :)`
  );
});
//Stampare se ci sono membri con lo stesso nome (nome).
const duplicates = team.filter((element, index) => {
  return team.findIndex((el) => el.name === element.name) !== index;
});
if (duplicates.length > 0) {
  console.log("Ci sono almeno due studenti con lo stesso nome.");
  const namesOfDuplicates = duplicates.map((student) => student.name);
  console.log("Nomi duplicati:", namesOfDuplicates);
} else {
  console.log("Non ci sono studenti con lo stesso nome.");
}
/*function controllaMembriConStessoNome(team) {
  const nomiIncontrati = {};
  let nomeDuplicato = false;

  for (let i = 0; i < team.length; i++) {
    const studente = team[i];
    if (nomiIncontrati[studente.name]) {
      nomeDuplicato = true;
      break;
    } else {
      nomiIncontrati[studente.name] = true;
    }
  }

  if (nomeDuplicato) {
    console.log("Ci sono membri con lo stesso nome nel team.");
  } else {
    console.log("Non ci sono membri con lo stesso nome nel team.");
  }
}

// Chiamata alla funzione per controllare i membri con lo stesso nome nel team
controllaMembriConStessoNome(team);*/
