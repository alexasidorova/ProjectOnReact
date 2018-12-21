import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Form from '../form/form';
import Foods from '../foods/foods';

function Root() {
  return (
    <BrowserRouter>
      <div>
        <Link to="/">Посчитаем сколько уже было съедено?</Link>
        <Link to="/foods">Вернулься к расчетам</Link>
        <Route exact path="/" component={Form} />
        <Route path="/foods" component={Foods} />
      </div>
    </BrowserRouter>
  );
}

export default Root;
