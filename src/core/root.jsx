import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Form from '../form/form';
import Foods from '../foods/foods';

function Root() {
  return (
    <BrowserRouter>
      <div>
        <Link to="/">form</Link>
        <Link to="/foods">foods</Link>
        <Route exact path="/" component={Form} />
        <Route path="/foods" component={Foods} />
      </div>
    </BrowserRouter>
  );
}

export default Root;
