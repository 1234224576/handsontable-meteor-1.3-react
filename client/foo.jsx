import React from 'react';
import Handsontable from 'handsontable/dist/handsontable';

class Foo extends React.Component {
  render() {
    return (
      <div id="foo"></div>
    );
  }

  componentDidMount() {
    let container = document.getElementById('foo');
    let hot = new Handsontable(container, {
      rowHeaders: true,
      colHeaders: true,
      data: [[1, 2, 3], [4, 5, 6]]
    });
  }
}

export default Foo;
