import React from 'react';
import Link from './index';
import renderer from 'react-test-renderer';
import { act } from 'react-dom/test-utils';

test('Link changes the class when hovered', () => {
    const component = renderer.create(
      <Link href="/contacts">Contacts</Link>,
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  
    // manually trigger the callbawck
    tree.props.onMouseEnter();
    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    
  
    // manually trigger the callback
    tree.props.onMouseLeave();
    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });