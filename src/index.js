import React from 'react';

const Component = ({ a, b }) => (
  <div>
    <button onClick={b}>LOL {a}</button>
  </div>
);

export default class SecondComponent extends React.Component {
  state = {
    field1: 'one'
  };

  handleB = () => {
    console.log('LOL');
  };

  render() {
    const { field1 } = this.state;
    return <Component a={field1} b={this.handleB} />;
  }
}
