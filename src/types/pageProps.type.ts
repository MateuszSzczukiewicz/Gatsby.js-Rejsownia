import { CruisesType } from './cruises.type.ts';

export type PagePropsType = {
  data: {
    cruises: {
      nodes: CruisesType[];
    };
  };
};
