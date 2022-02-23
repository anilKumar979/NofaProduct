import React, { useState } from "react";
import {
  BrowserRouter as Router, Route
} from "react-router-dom";
// import homepage from './Home/Index';
import Index from './ListData/Index';
import NofaProgram from './NofaProgram/main';
import ViewData from './ListData/viewData';
import { useIsAuthenticated } from '@azure/msal-react';
import Login from './Login/Index';
import Org from './Organization/main';
import OrgList from './Organization/Index';
import ViewOrg from './Organization/viewData';
import Admin from './NofaProgram/Admin/Index';
import UserData from './NofaProgram/Admin/userData';
import PostFile from './Organization/PostFile';
import Report from './ReportForm/Index';

import NofaCreation from './Nofa/nofa-creation';
import Nofalineitem from './Nofa/nofa-line-items';
 import Nofa from './Nofa/nofa';
import Nofatab from './Nofa/nofaTabs';
import NofalineitemType from './Nofa/nofa-line-item-type';
export function Navigation(props) {
  const isAuthenticated = useIsAuthenticated()

  return (
    <Router basename="/faast">
      <div className="navcss">
        <div className="container-fluid">
          <div className="App1">
          {/* <Route path="/" exact component={homepage} /> */}           
            {isAuthenticated ?
              <div>
              
                <Route path="/organization/file" exact component={PostFile} />
                <Route path="/faast/admin" exact component={Admin} />
                <Route path="/faast/apply" exact component={NofaProgram} />
                <Route path="/faast/submission/view/:id" exact component={ViewData} />
                <Route path="/faast/Admin/view/:id" exact component={UserData} />              
                <Route path="/snap" exact component={Index} />
                <Route path="/" exact component={Index} />
                <Route path="/organization/:id/edit/" component={Org} />
                <Route path="/organization/List" component={OrgList} />
                <Route path="/organization/view" component={ViewOrg} />
                <Route path="/faast/report" exact component={Report} />


                <Route path="/nofa" exact component={NofaCreation} />
                <Route path="/create-nofa" exact component={Nofa} />
                <Route path="/nofa-line-items" exact component={Nofalineitem} />
                <Route path="/nofa-tabs" exact component={Nofatab} />
                <Route path="/nofa-line-item-type" exact component={NofalineitemType} />
                
              </div>
              :
              <div>
                <Route path="/" component={Login} />
            </div>
            }
          </div>
        </div>
      </div>
    </Router>
  );
}



