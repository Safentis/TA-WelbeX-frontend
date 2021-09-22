import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import FilterRadio from './FilterRadio';

import { Props } from './FilterRadio.interface';

const setUp = (props: Props) => {
  return shallow(<FilterRadio {...props} />);
};

describe('<FilterRadio />', () => {
    let component: ShallowWrapper<
      any,
      Readonly<{}>,
      React.Component<{}, {}, any>
    >;
    let props = {
      className: 'custom-style',
      handleChange: () => {},
      fields: {
        name: true,
        number: false,
        distance: false,
      },
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
  
      it('has 3 li elements', () => {
        expect(component.find('li').length === 3).toBeTruthy();
      });
  
      it('has 3 input element', () => {
        expect(component.find('input').length === 3).toBeTruthy();
      });
      
      it('has 3 label element', () => {
        expect(component.find('label').length === 3).toBeTruthy();
      });
    });
  });
  