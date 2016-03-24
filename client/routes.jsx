import React from 'react';
import {mount} from 'react-mounter';
import Foo from './foo';

import {Layout} from './app.jsx';

FlowRouter.route('/', {
  action() {
    mount(Layout, {
      content: (<Foo />)
    }); 
  }
});

