import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import Button from './Button';

import { Props } from './Button.interface';

const setUp = (props: Props) => shallow(<Button {...props} />);

describe('<Button />', () => {
  let component: ShallowWrapper<
    any,
    Readonly<{}>,
    React.Component<{}, {}, any>
  >;

  describe('Default props', () => {
    let props: Props = {
      handleClick: () => {},
      style: 'any-style',
    };

    beforeEach(() => {
      component = setUp(props);
    });

    it('component does match to the snapshot', () => {
      expect(component).toMatchSnapshot();
    });

    describe('Markup: ', () => {
      it('has 1 button element', () => {
        expect(component.find('button')).toBeTruthy();
      });
    });
  });

  describe('Custom props', () => {
    let props: Props = {
      handleClick: () => {},
    };

    beforeEach(() => {
      component = setUp(props);
    });

    it('component does match to the snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
