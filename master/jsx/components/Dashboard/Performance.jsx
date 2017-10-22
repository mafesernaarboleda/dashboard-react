import React from 'react';
import ReactDom from 'react-dom';
import ContentWrapper from '../Layout/ContentWrapper';
import {Grid, Row, Col, Dropdown, MenuItem, ProgressBar} from 'react-bootstrap';
import DashboardRun from './DashboardV1.run';

class Performance extends React.Component {
  componentDidMount() {
      DashboardRun(
          ReactDom.findDOMNode(this.refs.chartSpline)
      );
  }

    render() {
        return (
            <ContentWrapper>
                <div className="content-heading">
                    {/* START Language list */}
                    <div className="pull-right">
                        <Dropdown id="dropdown-tr" pullRight>
                            <Dropdown.Toggle>
                                English
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="animated fadeInUpShort">
                                <MenuItem eventKey="1" data-set-lang="en">English</MenuItem>
                                <MenuItem eventKey="2" data-set-lang="es">Spanish</MenuItem>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    {/* END Language list */}
                    Dashboard Performance
                    <small data-localize="dashboard.WELCOME">Welcome to LikeU!</small>
                </div>
                {/* START widgets box */}
                <Row>
                    <Col lg={3} sm={6}>
                        {/* START widget */}
                        <div className="panel widget bg-primary">
                           <div className="row row-table">
                              <div className="col-xs-4 text-center bg-primary-dark pv-lg">
                                 <em className="icon-star fa-3x"></em>
                                 <br/>
                                 4.7
                              </div>
                              <div className="col-xs-8 pv-lg">
                                 <div className="h1 m0 text-bold">4536</div>
                                 <div className="text-uppercase">Total Quality</div>
                              </div>
                           </div>
                        </div>
                    </Col>
                    <Col lg={9} sm={6}>
                      {/* START widget */}
                      <div className="panel widget">
                         <div className="panel-body">
                            <div className="text-right text-muted">
                               <em className="fa fa-smile-o fa-2x"></em>
                            </div>
                            <h3 className="mt0">
                              <span className="fa fa-user"></span>
                              <span className="fa fa-user"></span>
                              <span className="fa fa-user"></span>
                              <span className="fa fa-user"></span>
                              <span className="fa fa-user"></span>
                              <span className="fa fa-user"></span>
                            </h3>
                            <p className="text-muted">Recommendations</p>
                              <div className="table-grid table-grid-align-middle mv">
                                <div className="hidden-xs col wd-xxs text-left">
                                   <div className="text-bold text-muted">0</div>
                                </div>
                                 <div className="col">
                                    <ProgressBar className="progress-xs m0" bsStyle="warning" now={ 88 } />
                                 </div>
                                 <div className="hidden-xs col wd-xxs text-right">
                                    <div className="text-bold text-muted">10</div>
                                 </div>
                              </div>
                         </div>
                      </div>
                      {/* END widget */}
                    </Col>
                </Row>
                {/* END widgets box */}
                
            </ContentWrapper>
        );

    }

}

export default Performance;
