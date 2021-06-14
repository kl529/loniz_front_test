import React, { Suspense, lazy } from 'react';
import {HashRouter as Router , Redirect, Route, Switch} from "react-router-dom";


const InquireContainer = lazy(() => import('../mooni/index.js'));
const AMContainer = lazy(() => import('../gongzi/index.js'));



const Path =() => {
    return (
        <>  
            <Router>
            <Suspense fallback={ <div>hello </div> }>
                <Switch>
                    <Route path="/vv" exact component = {InquireContainer} />
                    <Route path="/g" exact component = {AMContainer} />
                    <Redirect from="*" to="/"/>
                </Switch>
                </Suspense>
            </Router>
        </>
    );
};

export default Path;