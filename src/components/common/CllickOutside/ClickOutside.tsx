import React, { MutableRefObject, useEffect, useRef } from 'react';

import { IClickOutsideProps } from './ClickOutside.types';

const useClickOutside = (ref: MutableRefObject<HTMLDivElement>, action: () => void) => {
  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      const target = event.target as HTMLDivElement;
      ref?.current && !ref?.current.contains(target) && action();
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, action]);
};

export const ClickOutside = (props: IClickOutsideProps) => {
  const { children, action } = props;
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;

  useClickOutside(wrapperRef, action);

  return <div ref={wrapperRef}>{children}</div>;
};
