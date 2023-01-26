interface IFilterItem {
  name: string;
  type: string;
}

interface IFiltersProps {
  filters: Array<IFilterItem>;
}

interface IFilterItemProps extends IFilterItem {
  isActive: boolean;
  onSetNewFilter: () => void;
}

export { IFilterItem, IFiltersProps, IFilterItemProps };
