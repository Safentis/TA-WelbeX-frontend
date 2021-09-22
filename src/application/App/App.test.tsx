import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import App from './App';

import { Props } from './App.interface';

const setUp = (props: Props) => {
  return shallow(<App {...props} />);
};

describe('<App />', () => {
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
    it('has 1 table element', () => {
      expect(component.find('table')).toBeTruthy();
    });
    
    it('has 1 Filter element', () => {
      expect(component.find('Filter')).toBeTruthy();
    });

    it('has 1 THead element', () => {
      expect(component.find('THead')).toBeTruthy();
    });

    it('has 1 TBody element', () => {
      expect(component.find('TBody')).toBeTruthy();
    });
  });
});
