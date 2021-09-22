import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import FilterSearch from './FilterSearch';

import { Props } from './FilterSearch.interface';

const setUp = (props: Props) => {
  return shallow(<FilterSearch {...props} />);
};

describe('<FilterSearch />', () => {
  let component: ShallowWrapper<
    any,
    Readonly<{}>,
    React.Component<{}, {}, any>
  >;
  let props: Props = {
    className: 'custom-style',
    value: '',
    handleSearch: () => {}
  }

  beforeEach(() => {
    component = setUp(props);
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
