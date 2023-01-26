interface IPizzaItemSettingsProp {
  name: string;
  available: boolean;
  isActive: boolean;
  onSetActiveProp: () => void;
}

export { IPizzaItemSettingsProp };
