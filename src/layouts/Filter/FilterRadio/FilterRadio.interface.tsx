import React from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';

export interface Props {
  className?: string;
  icons?: IconDefinition[];
  name: string;
  fields: {
    [key: string]: boolean;
  };
  handleChange: (event: React.ChangeEvent) => void;
}
