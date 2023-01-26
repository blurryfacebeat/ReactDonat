import { ReactNode } from 'react';

interface IClickOutsideProps {
  children: ReactNode;
  action: () => void;
}

export { IClickOutsideProps };
