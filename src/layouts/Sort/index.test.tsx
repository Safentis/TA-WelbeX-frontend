import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import Sort from './index';

import { Props } from './index.interface';

const setUp = (props: Props) => {
  return shallow(<Sort {...props} />);
};

describe('<Sort />', () => {
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

    it('has 1 Button element', () => {
      expect(component.find('Button')).toBeTruthy();
    });

    it('has 1 FontAwesomeIcon element', () => {
      expect(component.find('FontAwesomeIcon')).toBeTruthy();
    });
  });
});
