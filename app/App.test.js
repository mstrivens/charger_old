import React from 'react';
import renderer from 'react-test-renderer';

import App from './App'

describe ('<App />', () => {
  it('checks if the map component is in the document', () => {
    const testRenderer = renderer.create(<App />)
    const testInstance = testRenderer.root;
    expect(testInstance.findByType(Map)).toBeInTheDocument()
  })
});
