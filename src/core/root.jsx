import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Form from '../form/form';
import Foods from '../foods/foods';

function Root() {
  return (
    <BrowserRouter>
      <div>
        <Link id='page1' to="/">Вернулься к расчетам</Link>
        <Link id='page2' to="/foods">Посчитаем сколько уже было съедено?</Link>
        <Route exact path="/" component={Form} />
        <Route path="/foods" component={Foods} />
      </div>
    </BrowserRouter>
  );
}

export default Root;
