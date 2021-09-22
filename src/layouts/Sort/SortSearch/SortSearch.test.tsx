import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import SortSearch from './SortSearch';

import { Props } from './SortSearch.interface';

const setUp = (props: Props) => {
  return shallow(<SortSearch {...props} />);
};

describe('<SortSearch />', () => {
  let component: ShallowWrapper<
    any,
    Readonly<{}>,
    React.Component<{}, {}, any>
  >;

  beforeEach(() => {
    component = setUp({});
  });

  it('component does match to the snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  describe('Markup: ', () => {
    it('has 1 ul element', () => {
      expect(component.find('ul')).toBeTruthy();
    });

    it('has 1 li element', () => {
      expect(component.find('li')).toBeTruthy();
    });

    it('has 1 input element', () => {
      expect(component.find('input')).toBeTruthy();
    });
  });
});
