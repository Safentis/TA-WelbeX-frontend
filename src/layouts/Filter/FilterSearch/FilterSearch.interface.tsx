import React from 'react';

export interface Props {
  className?: string;
  value: string;
  handleSearch: (event: React.ChangeEvent) => void;
}
