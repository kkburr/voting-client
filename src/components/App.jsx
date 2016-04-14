import React from 'react';
import { NavigationContainer } from '../components/Navigation';

export default React.createClass ({
  render(){
    return <div>
      <NavigationContainer />
      { this.props.children }
    </div>
  }
});
