export interface IPizzaItem {
  name: string;
  doughs: Array<IDough>;
  sizes: Array<ISize>;
  price: number;
  img: string;
}

export interface IPizzaSettings {
  dough?: IDough;
  size?: ISize;
}

interface IDough {
  name: string;
  available: boolean;
}

interface ISize {
  name: string;
  available: boolean;
}
