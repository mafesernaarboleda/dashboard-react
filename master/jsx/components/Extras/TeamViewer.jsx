import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Grid, Row, Col, Panel, Button } from 'react-bootstrap';
import TeamViewerRun from './TeamViewer.run';

class TeamViewer extends React.Component {
    componentDidMount() {
        TeamViewerRun();
    }
    render() {
        return (
            <ContentWrapper>
                <div className="pull-right">
                   <span><em className="fa fa-power-off fa-lg text-success"></em> 300 logueados / </span>
                   <span>305 programados</span>
                   </div>
                <h3>Equipos</h3>
                <Row>
                   <Col lg={4} md={6}>
                      { /*  Team Panel */ }
                      <div className="panel panel-default">
                         <div className="panel-heading">
                           <a href="#" className="text-muted pull-right">
                           <em className="fa fa-arrow-right"></em>
                           </a>
                            <div className="panel-title">Equipo #1</div>
                         </div>
                         <div className="panel-body bt">
                           <div className="radial-bar radial-bar-40 radial-bar radial-bar-danger m0">
                              <img src="img/user/03.jpg" alt="" />
                           </div>
                         </div>
                         <div className="panel-body bb text-center">
                            <div data-toggle="tooltip" data-title="Progress of asigned tasks">
                               <div className="progress m0">
                                  <div style={{width:"50%"}} className="progress-bar progress-bar-green">50%</div>
                               </div>
                            </div>
                         </div>
                         <div className="panel-body bb">
                            <Row className="text-center">
                               <Col xs={4}>
                                  <p className="text-bold">PXT</p>
                                  <div data-sparkline="" data-values="60,40" data-type="pie" data-height="24" data-slice-colors='["#edf1f2", "#ff902b"]' className="sparkline inline mr"></div>
                               </Col>
                               <Col xs={4}>
                                  <p className="text-bold">PXA</p>
                                  <div data-sparkline="" data-values="60,40" data-type="pie" data-height="24" data-slice-colors='["#edf1f2", "#ff902b"]' className="sparkline inline mr"></div>
                               </Col>
                               <Col xs={4}>
                                  <p className="text-bold">TPD</p>
                                  <div data-sparkline="" data-values="70,30" data-type="pie" data-height="24" data-slice-colors='["#edf1f2", "#ff902b"]' className="sparkline inline mr"></div>
                               </Col>
                            </Row>
                         </div>
                      </div>
                      { /*  end Team Panel */ }
                   </Col>
                   <Col lg={4} md={6}>
                      { /*  Team Panel */ }
                      <div className="panel panel-default">
                         <div className="panel-heading">
                         <a href="#" className="text-muted pull-right">
                         <em className="fa fa-arrow-right"></em>
                         </a>
                            <div className="panel-title">Equipo #2</div>
                         </div>
                         <div className="panel-body bt">
                           <div className="radial-bar radial-bar-40 radial-bar radial-bar-success m0">
                              <img src="img/user/02.jpg" alt="" />
                           </div>
                         </div>
                         <div className="panel-body bb text-center">
                            <div data-toggle="tooltip" data-title="Progress of asigned tasks">
                               <div className="progress m0">
                                  <div style={{width:"90%"}} className="progress-bar progress-bar-green">90%</div>
                               </div>
                            </div>
                         </div>
                         <div className="panel-body bb">
                            <Row className="text-center">
                               <Col xs={4}>
                                  <p className="text-bold">PXT</p>
                                  <div data-sparkline="" data-values="10,90" data-type="pie" data-height="24" data-slice-colors='["#edf1f2", "#f05050"]' className="sparkline inline mr"></div>
                               </Col>
                               <Col xs={4}>
                                  <p className="text-bold">PXA</p>
                                  <div data-sparkline="" data-values="60,40" data-type="pie" data-height="24" data-slice-colors='["#edf1f2", "#ff902b"]' className="sparkline inline mr"></div>
                               </Col>
                               <Col xs={4}>
                                  <p className="text-bold">TPD</p>
                                  <div data-sparkline="" data-values="40,60" data-type="pie" data-height="24" data-slice-colors='["#edf1f2", "#27c24c"]' className="sparkline inline mr"></div>
                               </Col>
                            </Row>
                         </div>
                      </div>
                      { /*  end Team Panel */ }
                   </Col>
                   <Col lg={4} md={6}>
                      { /*  Team Panel */ }
                      <div className="panel panel-default">
                         <div className="panel-heading">
                         <a href="#" className="text-muted pull-right">
                         <em className="fa fa-arrow-right"></em>
                         </a>
                            <div className="panel-title">Equipo #3</div>
                         </div>
                         <div className="panel-body bt">
                           <div className="radial-bar radial-bar-40 radial-bar radial-bar-info m0">
                              <img src="img/user/04.jpg" alt="" />
                           </div>
                         </div>
                         <div className="panel-body bb text-center">
                            <div data-toggle="tooltip" data-title="Progress of asigned tasks">
                               <div className="progress m0">
                                  <div style={{width:"50%"}} className="progress-bar progress-bar-green">50%</div>
                               </div>
                            </div>
                         </div>
                         <div className="panel-body bb">
                            <Row className="text-center">
                               <Col xs={4}>
                                  <p className="text-bold">PXT</p>
                                  <div data-sparkline="" data-values="60,40" data-type="pie" data-height="24" data-slice-colors='["#edf1f2", "#ff902b"]' className="sparkline inline mr"></div>
                               </Col>
                               <Col xs={4}>
                                  <p className="text-bold">PXA</p>
                                  <div data-sparkline="" data-values="60,40" data-type="pie" data-height="24" data-slice-colors='["#edf1f2", "#ff902b"]' className="sparkline inline mr"></div>
                               </Col>
                               <Col xs={4}>
                                  <p className="text-bold">TPD</p>
                                  <div data-sparkline="" data-values="40,60" data-type="pie" data-height="24" data-slice-colors='["#edf1f2", "#27c24c"]' className="sparkline inline mr"></div>
                               </Col>
                            </Row>
                         </div>
                      </div>
                      { /*  end Team Panel */ }
                   </Col>
                   <Col lg={4} md={6}>
                      { /*  Team Panel */ }
                      <div className="panel panel-default">
                         <div className="panel-heading">
                         <a href="#" className="text-muted pull-right">
                         <em className="fa fa-arrow-right"></em>
                         </a>
                            <div className="panel-title">Equipo #4</div>
                         </div>
                         <div className="panel-body bt">
                         <div className="radial-bar radial-bar-40 radial-bar radial-bar-warning m0">
                            <img src="img/user/05.jpg" alt="" />
                         </div>
                         </div>
                         <div className="panel-body bb text-center">
                            <div data-toggle="tooltip" data-title="Progress of asigned tasks">
                               <div className="progress m0">
                                  <div style={{width:"25%"}} className="progress-bar progress-bar-green">25%</div>
                               </div>
                            </div>
                         </div>
                         <div className="panel-body bb">
                            <Row className="text-center">
                               <Col xs={4}>
                                  <p className="text-bold">PXT</p>
                                  <div data-sparkline="" data-values="60,40" data-type="pie" data-height="24" data-slice-colors='["#edf1f2", "#ff902b"]' className="sparkline inline mr"></div>
                               </Col>
                               <Col xs={4}>
                                  <p className="text-bold">PXA</p>
                                  <div data-sparkline="" data-values="60,40" data-type="pie" data-height="24" data-slice-colors='["#edf1f2", "#ff902b"]' className="sparkline inline mr"></div>
                               </Col>
                               <Col xs={4}>
                                  <p className="text-bold">TPD</p>
                                  <div data-sparkline="" data-values="40,60" data-type="pie" data-height="24" data-slice-colors='["#edf1f2", "#27c24c"]' className="sparkline inline mr"></div>
                               </Col>
                            </Row>
                         </div>
                      </div>
                      { /*  end Team Panel */ }
                   </Col>
                   <Col lg={4} md={6}>
                      { /*  Team Panel */ }
                      <div className="panel panel-default">
                         <div className="panel-heading">
                         <a href="#" className="text-muted pull-right">
                         <em className="fa fa-arrow-right"></em>
                         </a>
                            <div className="panel-title">Equipo #5</div>
                         </div>
                         <div className="panel-body bt">
                         <div className="radial-bar radial-bar-40 radial-bar radial-bar-danger m0">
                            <img src="img/user/06.jpg" alt="" />
                         </div>
                         </div>
                         <div className="panel-body bb text-center">
                            <div data-toggle="tooltip" data-title="Progress of asigned tasks">
                               <div className="progress m0">
                                  <div style={{width:"50%"}} className="progress-bar progress-bar-green">50%</div>
                               </div>
                            </div>
                         </div>
                         <div className="panel-body bb">
                            <Row className="text-center">
                               <Col xs={4}>
                                  <p className="text-bold">PXT</p>
                                  <div data-sparkline="" data-values="60,40" data-type="pie" data-height="24" data-slice-colors='["#edf1f2", "#ff902b"]' className="sparkline inline mr"></div>
                               </Col>
                               <Col xs={4}>
                                  <p className="text-bold">PXA</p>
                                  <div data-sparkline="" data-values="60,40" data-type="pie" data-height="24" data-slice-colors='["#edf1f2", "#ff902b"]' className="sparkline inline mr"></div>
                               </Col>
                               <Col xs={4}>
                                  <p className="text-bold">TPD</p>
                                  <div data-sparkline="" data-values="40,60" data-type="pie" data-height="24" data-slice-colors='["#edf1f2", "#27c24c"]' className="sparkline inline mr"></div>
                               </Col>
                            </Row>
                         </div>
                      </div>
                      { /*  end Team Panel */ }
                   </Col>
                   <Col lg={4} md={6}>
                      { /*  Team Panel */ }
                      <div className="panel panel-default">
                         <div className="panel-heading">
                         <a href="#" className="text-muted pull-right">
                         <em className="fa fa-arrow-right"></em>
                         </a>
                            <div className="panel-title">Equipo #6</div>
                         </div>
                         <div className="panel-body bt">
                         <div className="radial-bar radial-bar-40 radial-bar radial-bar-success m0">
                            <img src="img/user/07.jpg" alt="" />
                         </div>
                         </div>
                         <div className="panel-body bb text-center">
                            <div data-toggle="tooltip" data-title="Progress of asigned tasks">
                               <div className="progress m0">
                                  <div style={{width:"50%"}} className="progress-bar progress-bar-green">50%</div>
                               </div>
                            </div>
                         </div>
                         <div className="panel-body bb">
                            <Row className="text-center">
                               <Col xs={4}>
                                  <p className="text-bold">PXT</p>
                                  <div data-sparkline="" data-values="5,95" data-type="pie" data-height="24" data-slice-colors='["#edf1f2", "#f05050"]' className="sparkline inline mr"></div>
                               </Col>
                               <Col xs={4}>
                                  <p className="text-bold">PXA</p>
                                  <div data-sparkline="" data-values="60,40" data-type="pie" data-height="24" data-slice-colors='["#edf1f2", "#ff902b"]' className="sparkline inline mr"></div>
                               </Col>
                               <Col xs={4}>
                                  <p className="text-bold">TPD</p>
                                  <div data-sparkline="" data-values="70,30" data-type="pie" data-height="24" data-slice-colors='["#edf1f2", "#ff902b"]' className="sparkline inline mr"></div>
                               </Col>
                            </Row>
                         </div>
                      </div>
                      { /*  end Team Panel */ }
                   </Col>
                   <Col lg={4} md={6}>
                      { /*  Team Panel */ }
                      <div className="panel panel-default">
                         <div className="panel-heading">
                         <a href="#" className="text-muted pull-right">
                         <em className="fa fa-arrow-right"></em>
                         </a>
                            <div className="panel-title">Equipo #7</div>
                         </div>
                         <div className="panel-body bt">
                         <div className="radial-bar radial-bar-40 radial-bar radial-bar-info m0">
                            <img src="img/user/08.jpg" alt="" />
                         </div>
                         </div>
                         <div className="panel-body bb text-center">
                            <div data-toggle="tooltip" data-title="Progress of asigned tasks">
                               <div className="progress m0">
                                  <div style={{width:"50%"}} className="progress-bar progress-bar-green">50%</div>
                               </div>
                            </div>
                         </div>
                         <div className="panel-body bb">
                            <Row className="text-center">
                               <Col xs={4}>
                                  <p className="text-bold">PXT</p>
                                  <div data-sparkline="" data-values="5,95" data-type="pie" data-height="24" data-slice-colors='["#edf1f2", "#f05050"]' className="sparkline inline mr"></div>
                               </Col>
                               <Col xs={4}>
                                  <p className="text-bold">PXA</p>
                                  <div data-sparkline="" data-values="60,40" data-type="pie" data-height="24" data-slice-colors='["#edf1f2", "#ff902b"]' className="sparkline inline mr"></div>
                               </Col>
                               <Col xs={4}>
                                  <p className="text-bold">TPD</p>
                                  <div data-sparkline="" data-values="70,30" data-type="pie" data-height="24" data-slice-colors='["#edf1f2", "#ff902b"]' className="sparkline inline mr"></div>
                               </Col>
                            </Row>
                         </div>
                      </div>
                      { /*  end Team Panel */ }
                   </Col>
                   <Col lg={4} md={6}>
                      { /*  Team Panel */ }
                      <div className="panel panel-default">
                         <div className="panel-heading">
                         <a href="#" className="text-muted pull-right">
                         <em className="fa fa-arrow-right"></em>
                         </a>
                            <div className="panel-title">Equipo #8</div>
                         </div>
                         <div className="panel-body bt">
                         <div className="radial-bar radial-bar-40 radial-bar radial-bar-warning m0">
                            <img src="img/user/09.jpg" alt="" />
                         </div>
                         </div>
                         <div className="panel-body bb text-center">
                            <div data-toggle="tooltip" data-title="Progress of asigned tasks">
                               <div className="progress m0">
                                  <div style={{width:"50%"}} className="progress-bar progress-bar-green">50%</div>
                               </div>
                            </div>
                         </div>
                         <div className="panel-body bb">
                            <Row className="text-center">
                               <Col xs={4}>
                                  <p className="text-bold">PXT</p>
                                  <div data-sparkline="" data-values="5,95" data-type="pie" data-height="24" data-slice-colors='["#edf1f2", "#f05050"]' className="sparkline inline mr"></div>
                               </Col>
                               <Col xs={4}>
                                  <p className="text-bold">PXA</p>
                                  <div data-sparkline="" data-values="60,40" data-type="pie" data-height="24" data-slice-colors='["#edf1f2", "#ff902b"]' className="sparkline inline mr"></div>
                               </Col>
                               <Col xs={4}>
                                  <p className="text-bold">TPD</p>
                                  <div data-sparkline="" data-values="70,30" data-type="pie" data-height="24" data-slice-colors='["#edf1f2", "#ff902b"]' className="sparkline inline mr"></div>
                               </Col>
                            </Row>
                         </div>
                      </div>
                      { /*  end Team Panel */ }
                   </Col>
                   <Col lg={4} md={6}>
                      { /*  Team Panel */ }
                      <div className="panel panel-default">
                         <div className="panel-heading">
                         <a href="#" className="text-muted pull-right">
                         <em className="fa fa-arrow-right"></em>
                         </a>
                            <div className="panel-title">Equipo #9</div>
                         </div>
                         <div className="panel-body bt">
                         <div className="radial-bar radial-bar-40 radial-bar radial-bar-warning m0">
                            <img src="img/user/03.jpg" alt="" />
                         </div>
                         </div>
                         <div className="panel-body bb text-center">
                            <div data-toggle="tooltip" data-title="Progress of asigned tasks">
                               <div className="progress m0">
                                  <div style={{width:"50%"}} className="progress-bar progress-bar-green">50%</div>
                               </div>
                            </div>
                         </div>
                         <div className="panel-body bb">
                            <Row className="text-center">
                               <Col xs={4}>
                                  <p className="text-bold">PXT</p>
                                  <div data-sparkline="" data-values="5,95" data-type="pie" data-height="24" data-slice-colors='["#edf1f2", "#f05050"]' className="sparkline inline mr"></div>
                               </Col>
                               <Col xs={4}>
                                  <p className="text-bold">PXA</p>
                                  <div data-sparkline="" data-values="60,40" data-type="pie" data-height="24" data-slice-colors='["#edf1f2", "#ff902b"]' className="sparkline inline mr"></div>
                               </Col>
                               <Col xs={4}>
                                  <p className="text-bold">TPD</p>
                                  <div data-sparkline="" data-values="70,30" data-type="pie" data-height="24" data-slice-colors='["#edf1f2", "#ff902b"]' className="sparkline inline mr"></div>
                               </Col>
                            </Row>
                         </div>
                      </div>
                      { /*  end Team Panel */ }
                   </Col>
                </Row>
            </ContentWrapper>
            );
    }

}

export default TeamViewer;
