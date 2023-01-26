interface IFilterItem {
  name: string;
  type: string;
}

interface IFiltersProps {
  filters: Array<IFilterItem>;
}

interface IFilterItemProps extends IFilterItem {
  active: boolean;
}

export { IFilterItem, IFiltersProps, IFilterItemProps };
