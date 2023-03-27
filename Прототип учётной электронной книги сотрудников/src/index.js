const PEOPLE_LIST = [
  {
    name: 'Иван',
    specialist: 'Врач',
  },
  {
    name: 'Владимир',
    specialist: 'Преподаватель',
  },
  {
    name: 'Виталий',
    specialist: 'Студент',
  },
];
const ROOT = document.getElementById('app');

class Card {
  classes = {
    Студент: 'student',
    Преподаватель: 'teacher',
    Врач: 'doctor',
  };

  constructor(info) {
    const {name, specialist} = info;
    this.name = name;
    this.specialist = specialist;
  }

  create() {
    const card = document.createElement('div');
    card.classList.add('card', this.classes[this.specialist]);
    card.textContent = `Карточка ${this.specialist.toLowerCase()}: ${
      this.name
    }`;
    return card;
  }
}

class Fabric {
  create(info) {
    return new Card(info).create();
  }
}

PEOPLE_LIST.forEach(p => {
  const fabric = new Fabric();
  ROOT.append(fabric.create(p));
});
