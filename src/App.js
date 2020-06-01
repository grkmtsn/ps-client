import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

// Pages
import { ProductList, ProductPriceDetail, NotFound } from './pages';

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/" exact>
                        <ProductList />
                    </Route>
                    <Route path="/:id" exact>
                        <ProductPriceDetail />
                    </Route>
                    <Route>
                        <NotFound />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
