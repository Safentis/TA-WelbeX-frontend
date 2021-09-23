import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import THead from './THead';

import { Props } from './THead.interface';

const setUp = (props: Props) => shallow(<THead {...props} />);

describe('<THead />', () => {
  let component: ShallowWrapper<
    any,
    Readonly<{}>,
    React.Component<{}, {}, any>
  >;
  let props: Props = {};

  beforeEach(() => {
    component = setUp(props);
  });

  it('component does match to the snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  describe('Markup: ', () => {
    it('has 1 thead element', () => {
      expect(component.find('thead')).toBeTruthy();
    });

    it('has 1 tr elemnt', () => {
      expect(component.find('tr')).toBeTruthy();
    });

    it('has 4 th element', () => {
      expect(component.find('th').length).toBe(4);
    });
  });
});
