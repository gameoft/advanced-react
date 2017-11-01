import React from 'react';
import ArticleList from '../ArticleList';
import Article from '../Article';

import { shallow } from 'enzyme';
//import renderer from 'react-test-renderer';

describe('ArticleList', () => {

  const testProps = {
    articles: {
      a: { id: 'a' },
      b: { id: 'b' },
    },
    // store: {
    //   lookupAuthor: jest.fn(() => ({})),
    // },
  };

  
  //Article.propTypes = {};

  it('renders correctly', () => {
    // const tree = renderer.create(
    //   <ArticleList
    //     {...testProps}
    //   />
    // ).toJSON();
    const wrapper = shallow(
      <ArticleList
        {...testProps}
      />
    );

    // expect(tree.children.length).toBe(2);
    // expect(tree).toMatchSnapshot();
    expect(wrapper.find('ArticleContainer').length).toBe(2);
    expect(wrapper).toMatchSnapshot();

  });

});