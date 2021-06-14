import React, { Suspense, lazy } from 'react';
import {HashRouter as Router , Redirect, Route, Switch} from "react-router-dom";


const InquireContainer = lazy(() => import('../mooni/index.js')); //문의하기
const AMContainer = lazy(() => import('../gonzis/index.js')); //공지



const Path =() => {
    return (
        <>  
            <Router>
            <Suspense fallback={ <div>hello </div> }>
                <Switch>
                    <Route path="/announcement" exact component = {AMContainer} />
                    <Route path="/inquire" exact component = {InquireContainer} />
                    <Redirect from="*" to="/"/>
                </Switch>
                </Suspense>
            </Router>
        </>
    );
};

export default Path;