import React from 'react';
import App from '../App.jsx';
import { shallow } from 'enzyme';

describe('App', () => {
  let wrapper;
  window.fetch = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should match snapshoot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  // expect(App.state).toMatchObject({
  //   similarVehicles: []
  // })
});