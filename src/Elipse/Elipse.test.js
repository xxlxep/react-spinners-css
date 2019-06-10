import React from 'react';
import renderer from 'react-test-renderer';
import { Elipse } from '..';

it('renders correctly', () => {
  const tree = renderer.create(<Elipse />).toJSON();
  expect(tree).toMatchSnapshot();
});
