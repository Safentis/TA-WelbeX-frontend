import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import SortColumn from './SortColumn';

import { Props } from './SortColumn.interface';

const setUp = (props: Props) => {
  return shallow(<SortColumn {...props} />);
};

describe('<SortColumn />', () => {
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

    it('has 3 li element', () => {
      expect(component.find('li').length === 3).toBeTruthy();
    });

    it('has 1 input element', () => {
      expect(component.find('input').length === 3).toBeTruthy();
    });
  });
});
