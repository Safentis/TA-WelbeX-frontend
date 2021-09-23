import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import Pagination from './index';

import { Props } from './index.interface';

const setUp = (props: Props) => {
  return shallow(<Pagination {...props} />);
};

describe('<Pagination />', () => {
  let component: ShallowWrapper<
    any,
    Readonly<{}>,
    React.Component<{}, {}, any>
  >;
  let props: Props = {
    entries: [],
    entriesOnPage: 1,
    currentPage: 1,
    handlePagination: () => {},
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
  });
});
