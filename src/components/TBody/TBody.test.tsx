import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import TBody from './TBody';

import { Props } from './TBody.interface';

const setUp = (props: Props) => shallow(<TBody {...props} />);

describe('TBody', () => {
  let component: ShallowWrapper<
    any,
    Readonly<{}>,
    React.Component<{}, {}, any>
  >;
  let props: Props = {
    filtered: [],
  };

  beforeEach(() => {
    component = setUp(props);
  });

  it('component does match to the snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  describe('Markup: ', () => {
    it('has 1 tbody element', () => {
      expect(component.find('thead')).toBeTruthy();
    });

    it('has 1 tr elemnt', () => {
      expect(component.find('tr')).toBeTruthy();
    });

    it('has 0 td element', () => {
      expect(component.find('td').length === 0).toBeTruthy();
    });
  });
});
