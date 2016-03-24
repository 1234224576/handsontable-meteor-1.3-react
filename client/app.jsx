import React from 'react';

export const Layout = ({ content }) => (
  <div>
    <h1>Handsontable Demo in Meteor 1.3 w/ React</h1>
    <hr />
    <div>{ content }</div>
  </div>
);

export const Welcome = ({ name }) => (
  <div>
    Hello, {name}
    <Foo />
  </div>
); 
