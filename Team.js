const team = [];

const student1 = {
  name: "Vittorio",
  surname: "De Giorgio",
  age: 27,
  city: "Amaroni",
  hobby: "Gym",
  favoriteFood: "Carbonara",
  favoriteVideoGame: "DaysGone",
  favoriteFilm: "Interstellar",
  favoriteBook: "",
  petName: "Dog",
};

team.push(student1);
const student4 = {
  name: "Massimo",
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

team.push(student4);
function stampaStudentiConAnimaleDomestico(team) {
  for (let i = 0; i < team.length; i++) {
    const studente = team[i];
    if (studente.petName !== "") {
      console.log(studente.name + " ha un animale domestico.");
    }
  }
}
stampaStudentiConAnimaleDomestico();