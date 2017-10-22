import React from 'react';
import ReactDom from 'react-dom';
import ContentWrapper from '../Layout/ContentWrapper';
import { Grid, Row, Col, Dropdown, MenuItem,ProgressBar} from 'react-bootstrap';
import StarRatingComponent from 'react-star-rating-component';
import DashboardRun from './Dashboard.run';
import TeamViewer from '../Extras/TeamViewer';

class Dashboard extends React.Component {

 componentDidMount() {
        DashboardRun(
            ReactDom.findDOMNode(this.refs.chartSpline)
        );
    }
    render() {
        return (
            <ContentWrapper>
                <div className="content-heading">
                    { /* START Language list */ }
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
                    { /* END Language list */ } Dashboard
                </div>
                { /* START widgets box */ }
                <Row>
                    <Col lg={ 4 } sm={ 6 }>
                        { /* START widget */ }
                        <div className="panel widget bg-primary">
                            <Row className="row-table">
                                <Col xs={ 4 } className="text-center bg-primary-dark pv-lg">
                                    <em className="icon-call-in fa-3x"></em>
                                </Col>
                                <Col xs={ 8 } className="pv-lg">
                                    <div className="h2 mt0">1700</div>
                                    <div className="text-camelcase">Total llamadas</div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col lg={ 4 } sm={ 6 }>
                        { /* START widget */ }
                        <div className="panel widget bg-danger">
                            <Row className="row-table">
                                <Col xs={ 4 } className="text-center bg-danger-dark pv-lg">
                                    <em className="icon-call-end fa-3x"></em>
                                </Col>
                                <Col xs={ 8 } className="pv-lg">
                                    <div className="h2 mt0">700</div>
                                    <div className="text-camelcase">Llamadas abandonadas</div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col lg={ 4 } md={ 6 } sm={ 12 }>
                        { /* START date widget */ }
                        <div className="panel widget">
                            <Row className="row-table">
                                <Col xs={ 4 } className="text-center bg-green pv-lg">
                                    { /* See formats: https://docs.angularjs.org/api/ng/filter/date */ }
                                    <div data-now="" data-format="MMMM" className="text-sm"></div>
                                    <br />
                                    <div data-now="" data-format="D" className="h2 mt0"></div>
                                </Col>
                                <Col xs={ 8 } className="pv-lg">
                                    <div data-now="" data-format="dddd" className="text-uppercase"></div>
                                    <br />
                                    <div data-now="" data-format="h:mm" className="h2 mt0"></div>
                                    <div data-now="" data-format="a" className="text-muted text-sm"></div>
                                </Col>
                            </Row>
                        </div>
                        { /* END date widget */ }
                    </Col>
                </Row>
                { /* END widgets box */ }
                <Row>
                    { /* START dashboard main content */ }
                    <Col lg={ 5 }>
                        { /* START chart */ }
                        <Row>
                            <Col lg={12}>
                                { /* START widget */ }
                                <div className="panel panel-green">
                                  <div className="panel-heading">Meta</div>
                                <div className="panel-body">
                                <Row>
                                <Col lg={ 6 } sm={ 6 } xs={ 6 }>
                                <canvas data-classyloader="" data-percentage="10" data-speed="20" data-font-size="40px" data-diameter="80" data-line-color="#23b7e5" data-remaining-line-color="rgba(200,200,200,0.4)"
                                data-line-width="10" data-rounded-line="true" className="center-block"></canvas>
                                </Col>
                                <Col lg={ 6 } sm={ 6 } xs={ 6 }>
                                    <Row>
                                      <div className="table-grid table-grid-align-middle mv">
                                        <div className="col wd-xxs text-center">
                                          <div data-label="35%" className="radial-bar radial-bar-warning radial-bar-35 radial-bar-sm"></div>
                                        </div>
                                        <div className="col wd-xxs text-left">
                                        <span className="mt0">ANS</span><span className="text-muted"> 20''</span>
                                        </div>
                                      </div>
                                    </Row>
                                    <Row>
                                    <div className="table-grid table-grid-align-middle mv">
                                      <div className="col wd-xxs text-center">
                                        <div data-label="90%" className="radial-bar radial-bar-danger radial-bar-90 radial-bar-sm"></div>
                                      </div>
                                      <div className="col wd-xxs text-left">
                                      <span className="mt0">AHT</span><span className="text-muted"> 90''</span>
                                      </div>
                                    </div>
                                    </Row>
                                    <Row>
                                    <div className="table-grid table-grid-align-middle mv">
                                      <div className="col wd-xxs text-center">
                                        <div data-label="10%" className="radial-bar radial-bar-success radial-bar-10 radial-bar-sm"></div>
                                      </div>
                                      <div className="col wd-xxs text-left">
                                        <span className="mt0">ABML</span><span className="text-muted"> 5%</span>
                                      </div>
                                    </div>
                                    </Row>
                                </Col>
                                </Row>
                              <Row>
                                <Col lg={ 12 } sm={ 12 } xs={ 12 }>
                                    <div className="panel widget">
                                       <div className="panel-body">
                                           <Row>
                                           <Col lg={ 2 } sm={ 2 } xs={ 2 }><p className="text-muted">Periodo inicial</p></Col>
                                               <Col lg={ 8 } sm={ 8 } xs={ 8 }>
                                               <div className="progress progress-striped progress-lg">
                                                   <div role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="70" className="progress-bar progress-bar-yellow progress-60">
                                                       <span className="sr-only">60% Complete</span>
                                                   </div>
                                                   </div>
                                               </Col>
                                            <Col lg={ 2 } sm={ 2 } xs={ 2 }><p className="text-muted">Periodo final</p></Col>
                                           </Row>
                                       </div>
                                   </div>
                                </Col>
                              </Row>
                            </div>
                                </div>
                                { /* END widget */ }
                                { /* START messages and activity */ }
                                <div className="panel panel-info">
                                <div className="panel-heading">Desempeño</div>
                                    <div className="panel-body">
                                    <p style={{float: 'right'}}>Scorecards</p>
                                    <canvas data-classyloader="" data-height="150px" data-diameter="60" data-font-size="25px" data-percentage="60" data-speed="30" data-line-color="#37bc9b" data-remaining-line-color="#edf2f6"
                                    data-line-width="2"></canvas>
                                      <ul className="list-group">
                                          <li className="list-group-item">
                                            <Row className="row-table pv-lg">
                                              <Col xs={ 6 }>
                                                  <p className="m0 lead">1204</p>
                                                  <p className="m0">
                                                      <small>Calificaciones</small>
                                                  </p>
                                              </Col>
                                              <Col xs={ 6 } className="text-right"  style={{'fontSize': '17px'}}>
                                              <StarRatingComponent
                                                     name="rate1"
                                                     starCount={5}
                                                     value={4.5}/>
                                              </Col>
                                          </Row>
                                          </li>
                                          <li className="list-group-item">
                                            <Row className="row-table pv-lg">
                                              <Col xs={ 5 }>
                                                  <p className="m0 lead">1204</p>
                                                  <p className="m0">
                                                      <small>Recomendaciones</small>
                                                  </p>
                                              </Col>
                                              <Col xs={ 7 } className="text-right"  style={{'fontSize': '17px'}}>
                                                <StarRatingComponent
                                                name="rate2"
                                                starCount={10}
                                                value={4.5}
                                                starColor="#f05050"
                                                renderStarIcon={() => <span className="fa fa-user" style={{'marginRight': '6px'}}></span>}
                                                />
                                              </Col>
                                          </Row>
                                          </li>
                                          <li className="list-group-item">
                                            <Row className="row-table pv-lg">
                                              <Col xs={ 6 }>
                                                  <p className="m0">
                                                      <p className="m0">Llamadas auditadas 1204</p>
                                                      <small>Porcentaje efectividad</small>
                                                  </p>
                                              </Col>
                                              <Col xs={ 6 } className="text-center">
                                              <div className="table-grid table-grid-align-middle mv">
                                                <div className="hidden-xs col wd-xxs text-left">
                                                   <div className="text-bold text-muted">%0</div>
                                                </div>
                                                 <div className="col">
                                                    <ProgressBar className="progress-lg m0" bsStyle="warning" now={ 88 } />
                                                 </div>
                                                 <div className="hidden-xs col wd-xxs text-right">
                                                    <div className="text-bold text-muted">%100</div>
                                                 </div>
                                              </div>
                                              </Col>
                                          </Row>
                                          </li>
                                      </ul>
                                    </div>
                                </div>
                                { /* END messages and activity */ }
                            </Col>
                        </Row>
                    </Col>
                    { /* END dashboard main content */ }
                    { /* START dashboard sidebar */ }
                    <Col lg={ 7 }>
                        { /* START loader widget */ }
                        <TeamViewer/>
                        { /* END loader widget */ }
                    </Col>
                    { /* END dashboard sidebar */ }
                </Row>
            </ContentWrapper>
            );

    }

}

export default Dashboard;
