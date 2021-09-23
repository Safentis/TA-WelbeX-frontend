import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import Filter from './index';

import { Props } from './index.interface';

const setUp = (props: Props) => {
  return shallow(<Filter {...props} />);
};

describe('<Filter />', () => {
  let component: ShallowWrapper<
    any,
    Readonly<{}>,
    React.Component<{}, {}, any>
  >;
  let props: Props = {
    filter: {
      column: {
        name: false,
        number: false,
        distance: false,
      },
      operation: {
        more: false,
        less: false,
        equal: false,
        contains: false,
      },
      search: '',
    },
    setFilter: () => {},
  };

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

    it('has 1 Button element', () => {
      expect(component.find('Button')).toBeTruthy();
    });

    it('has 1 FontAwesomeIcon element', () => {
      expect(component.find('FontAwesomeIcon')).toBeTruthy();
    });

    it('has 2 FilterRadio element', () => {
      expect(component.find('FilterRadio').length === 2).toBeTruthy();
    });

    it('has 1 FilterSearch element', () => {
      expect(component.find('FilterSearch')).toBeTruthy();
    });
  });
});
