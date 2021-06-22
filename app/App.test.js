import React from 'react';
import renderer from 'react-test-renderer';

import App from './App'

describe ('<App />', () => {
  it('checks if the map component is in the document', () => {
    const testRenderer = renderer.create(<App />)
    console.log(testRenderer.toJSON())
    const testInstance = testRenderer.root;
    console.log(testRenderer.toJSON())
    expect(testInstance.findByProps({ classname: 'map' })).toBeTruthy()
  })
});
