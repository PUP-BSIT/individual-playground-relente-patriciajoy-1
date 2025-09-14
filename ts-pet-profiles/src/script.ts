export enum PetCategory {
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