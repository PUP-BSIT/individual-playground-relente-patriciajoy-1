enum PetCategory {
  DOG,
  CAT,
  BIRD,
  FISH,
  OTHER
}

export type PetProfile = {
  id: number;
  name: string;
  owner: string;
  age: number;
  category: PetCategory;
  favoriteFood?: string;
  print: () => void;
}

const petJasper: PetProfile = {
  id: 1,
  name: "Indie",
  owner: "Jasper",
  age: 2,
  category: PetCategory.DOG,
  favoriteFood: "Beef Wellington",

  print: function () {
    console.log(`--- Pet Profile ${this.id} ---`);
    console.log(`Pet Name: ${this.name}`);
    console.log(`Owner: ${this.owner}`);
    console.log(`Age: ${this.age}`);
    console.log(`Category: ${PetCategory[this.category]}`);
    if (this.favoriteFood) {
      console.log(`Favorite Food: ${this.favoriteFood}`);
    }
  }
};
petJasper.print();

const petLuna: PetProfile = {
  id: 2,
  name: "Moonie",
  owner: "Luna",
  age: 3,
  category: PetCategory.CAT,
  favoriteFood: "Tuna Tartare",

  print: function () {
    console.log(`--- Pet Profile ${this.id} ---`);
    console.log(`Pet Name: ${this.name}`);
    console.log(`Owner: ${this.owner}`);
    console.log(`Age: ${this.age}`);
    console.log(`Category: ${PetCategory[this.category]}`);
    if (this.favoriteFood) {
      console.log(`Favorite Food: ${this.favoriteFood}`);
    }
  }
};
petLuna.print();

const petAqua: PetProfile = {
  id: 3,
  name: "Bubbles",
  owner: "Aqua",
  age: 1,
  category: PetCategory.FISH,
  print: function () {
    console.log(`--- Pet Profile ${this.id} ---`);
    console.log(`Pet Name: ${this.name}`);
    console.log(`Owner: ${this.owner}`);
    console.log(`Age: ${this.age}`);
    console.log(`Category: ${PetCategory[this.category]}`);
    if (this.favoriteFood) {
      console.log(`Favorite Food: ${this.favoriteFood}`);
    }
  }
};
petAqua.print();

const petSky: PetProfile = {
  id: 4,
  name: "Chirpy",
  owner: "Sky",
  age: 4,
  category: PetCategory.BIRD,
  favoriteFood: "Sunflower Seeds",
  print: function () {
    console.log(`--- Pet Profile ${this.id} ---`);
    console.log(`Pet Name: ${this.name}`);
    console.log(`Owner: ${this.owner}`);
    console.log(`Age: ${this.age}`);
    console.log(`Category: ${PetCategory[this.category]}`);
    if (this.favoriteFood) {
      console.log(`Favorite Food: ${this.favoriteFood}`);
    }
  }
};
petSky.print();

const petContractor: PetProfile = {
  id: 5,
  name: "Crocodilo Bombardino",
  owner: "Contractor",
  age: 5,
  category: PetCategory.OTHER,
  favoriteFood: "Steak worth 7B",
  print: function () {
    console.log(`--- Pet Profile ${this.id} ---`);
    console.log(`Pet Name: ${this.name}`);
    console.log(`Owner: ${this.owner}`);
    console.log(`Age: ${this.age}`);
    console.log(`Category: ${PetCategory[this.category]}`);
    if (this.favoriteFood) {
      console.log(`Favorite Food: ${this.favoriteFood}`);
    }
  }
};
petContractor.print();

const msg: string = "Hello from TypeScript!";
console.log(msg);