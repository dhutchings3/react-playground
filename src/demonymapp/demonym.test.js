import React from 'react';
import Demonym from './demonym';

describe(`Demonym function`, () => {
    it('renders without errors', () => {
      const div = document.createElement('div');
      ReactDOM.render(<Demonym />, div);
      ReactDOM.unmountComponentAtNode(div);
    })
}