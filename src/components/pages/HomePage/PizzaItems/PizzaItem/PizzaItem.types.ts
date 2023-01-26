interface IPizzaItem {
  name: string;
  doughs: Array<IDough>;
  sizes: Array<ISize>;
  price: number;
  img: string;
}

interface IDough {
  name: string;
  available: boolean;
}

interface ISize {
  name: string;
  available: boolean;
}

export { IPizzaItem };
