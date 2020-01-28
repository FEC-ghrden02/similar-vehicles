import App from '../App.jsx'; 
import {shallow} from 'enzyme'; 
// import renderer from 'react-test-renderer'; 

describe('App', () => {
  let wrapper;
  window.fetch = jest.fn(); 
  beforeEach(() => {
    wrapper = shallow(<App />);
    // const component =  renderer.create(<App />); 
    // let compJson = component.toJSON()
  }); 

  it('should match snapshoot', () => {
    expect(wrapper).toMatchSnapshot(); 
  })
  // expect(App.state).toMatchObject({
  //   similarVehicles: []
  // })
}); 