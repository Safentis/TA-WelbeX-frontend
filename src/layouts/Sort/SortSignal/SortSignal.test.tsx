import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import SortSignal from './SortSignal';

import { Props } from './SortSignal.interface';

const setUp = (props: Props) => {
  return shallow(<SortSignal {...props} />);
};

describe('<SortSignal />', () => {
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

    it('has 4 li element', () => {
      expect(component.find('li').length === 4).toBeTruthy();
    });

    it('has 4 Button element', () => {
      expect(component.find('Button').length === 4).toBeTruthy();
    });

    it('has 4 FontAwesomeIcon element', () => {
      expect(component.find('FontAwesomeIcon').length === 4).toBeTruthy();
    });
  });
});
