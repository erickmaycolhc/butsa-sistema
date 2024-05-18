"use client"

import React from 'react'
import Seo from '../../../shared/layout-components/seo/seo';

import { CircularProgress } from '@mui/material';
// const ReactApexChart = dynamic(()=>import('react-apexcharts'), { ssr: false })
import { Card, Col, Container, Dropdown, Row, Table, ProgressBar } from 'react-bootstrap';
import * as dashboardmain from "../../../shared/data/dashboard/dashboardmain"

//Images
import user1 from "../../../public/assets/img/users/1.jpg";
import user2 from "../../../public/assets/img/users/2.jpg";
import user3 from "../../../public/assets/img/users/3.jpg";
import user4 from "../../../public/assets/img/users/4.jpg";
import user5 from "../../../public/assets/img/users/5.jpg";
import user6 from "../../../public/assets/img/users/6.jpg";
import user7 from "../../../public/assets/img/users/7.jpg";
import user8 from "../../../public/assets/img/users/8.jpg";
import user10 from "../../../public/assets/img/users/10.jpg";
import user11 from "../../../public/assets/img/users/11.jpg";
import user12 from "../../../public/assets/img/users/12.jpg";
import work3 from "../../../public/assets/img/pngs/work3.be25d722.png";
import work from "../../../public/assets/img/pngs/work.png";
import projectlogo from "../../../public/assets/img/media/project-logo.png"


import dynamic from 'next/dynamic';
import ProjectBudget from '../../../shared/data/dashboard/project-budget';
import WebsiteDesign from '../../../shared/data/dashboard/website-design';
import PageHeaderControls from '../../../shared/layout-components/page-header/page-header-controls';
const TodayTask = dynamic(() => import('../../../shared/data/dashboard/today-task'), { ssr: false })


export default function Dashboard() {
  const TASKS = [
    {
      Task: "Evaluating the design",
      TeamMember1: user1,
      TeamMember2: user2,
      TeamMember3: user3,
      TeamMember4: user4,
      OpenTask: "37",
      TaskProfit: "High",
      Profittext: "primary",
      Status: "Completed",
      Statustext: "primary",
    },
    {
      Task: "Generate ideas for design",
      TeamMember1: user2,
      TeamMember2: user10,
      TeamMember3: user11,
      TeamMember4: user12,
      OpenTask: "37",
      TaskProfit: "Normal",
      Profittext: "secondary",
      Status: "pending",
      Statustext: "warning",
    },
    {
      Task: "Define the problem",
      TeamMember1: user3,
      TeamMember2: user6,
      TeamMember3: user7,
      TeamMember4: user4,
      OpenTask: "37",
      TaskProfit: "Low",
      Profittext: "warning",
      Status: "Completed",
      Statustext: "primary",
    },
    {
      Task: "Empathize with users",
      TeamMember1: user4,
      TeamMember2: user5,
      TeamMember3: user6,
      TeamMember4: user3,
      OpenTask: "37",
      TaskProfit: "high",
      Profittext: "primary",
      Status: "Rejected",
      Statustext: "danger",
    },
  ];
  return (
    <>
      <Seo title="Dashboard" />

      <PageHeaderControls title="Bienvenido al Dashboard" item="Home" active_item="Dashboard" />

      <div className="row row-sm">
        <div className="col-sm-12 col-lg-12 col-xl-8">

          {/* <!--Row--> */}
          <div className="row row-sm  mt-lg-4">
            <div className="col-sm-12 col-lg-12 col-xl-12">
              <div className="card bg-primary custom-card card-box">
                <div className="card-body p-4">
                  <div className="row align-items-center">
                    <div className="offset-xl-3 offset-sm-6 col-xl-8 col-sm-6 col-12 img-bg ">
                      <h4 className="d-flex  mb-3">
                        <span className="font-weight-bold text-white ">Taylor Swift!</span>
                      </h4>
                      <p className="tx-white-7 mb-1">
                        <b className="text-warning">Bienvenido</b> a nuestra
                        plataforma en línea. Estamos encantados de que hayas
                        decidido visitarnos. Aquí encontrarás una amplia
                        variedad de herramientas y recursos para ayudarte a
                        alcanzar tus metas y mejorar tu día a día.</p>
                    </div>
                    <img src={work3.src} alt="user-img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!--Row --> */}

          {/* <!--Row--> */}
          <div className="row row-sm">
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4">
              <div className="card custom-card">
                <div className="card-body">
                  <div className="card-item">
                    <div className="card-item-icon card-icon">
                      <svg className="text-primary" xmlns="http://www.w3.org/2000/svg"
                        enableBackground="new 0 0 24 24" height="24"
                        viewBox="0 0 24 24" width="24">
                        <g>
                          <rect height="14" opacity=".3" width="14" x="5" y="5" />
                          <g>
                            <rect fill="none" height="24" width="24" />
                            <g>
                              <path
                                d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,19H5V5h14V19z" />
                              <rect height="5" width="2" x="7" y="12" />
                              <rect height="10" width="2" x="15" y="7" />
                              <rect height="3" width="2" x="11" y="14" />
                              <rect height="2" width="2" x="11" y="10" />
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                    <div className="card-item-title mb-2">
                      <label className="main-content-label tx-13 font-weight-bold mb-1">Total
                        Revenue</label>
                      <span className="d-block tx-12 mb-0 text-muted">Previous month vs this
                        months</span>
                    </div>
                    <div className="card-item-body">
                      <div className="card-item-stat">
                        <h4 className="font-weight-bold">$5,900.00</h4>
                        <small><b className="text-success">55%</b> higher</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4">
              <div className="card custom-card">
                <div className="card-body">
                  <div className="card-item">
                    <div className="card-item-icon card-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" height="24"
                        viewBox="0 0 24 24" width="24">
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path
                          d="M12 4c-4.41 0-8 3.59-8 8 0 1.82.62 3.49 1.64 4.83 1.43-1.74 4.9-2.33 6.36-2.33s4.93.59 6.36 2.33C19.38 15.49 20 13.82 20 12c0-4.41-3.59-8-8-8zm0 9c-1.94 0-3.5-1.56-3.5-3.5S10.06 6 12 6s3.5 1.56 3.5 3.5S13.94 13 12 13z"
                          opacity=".3" />
                        <path
                          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z" />
                      </svg>
                    </div>
                    <div className="card-item-title mb-2">
                      <label className="main-content-label tx-13 font-weight-bold mb-1">New
                        Employees</label>
                      <span className="d-block tx-12 mb-0 text-muted">Employees joined this
                        month</span>
                    </div>
                    <div className="card-item-body">
                      <div className="card-item-stat">
                        <h4 className="font-weight-bold">15</h4>
                        <small><b className="text-success">5%</b> Increased</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-4">
              <div className="card custom-card">
                <div className="card-body">
                  <div className="card-item">
                    <div className="card-item-icon card-icon">
                      <svg className="text-primary" xmlns="http://www.w3.org/2000/svg"
                        height="24" viewBox="0 0 24 24" width="24">
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path
                          d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm1.23 13.33V19H10.9v-1.69c-1.5-.31-2.77-1.28-2.86-2.97h1.71c.09.92.72 1.64 2.32 1.64 1.71 0 2.1-.86 2.1-1.39 0-.73-.39-1.41-2.34-1.87-2.17-.53-3.66-1.42-3.66-3.21 0-1.51 1.22-2.48 2.72-2.81V5h2.34v1.71c1.63.39 2.44 1.63 2.49 2.97h-1.71c-.04-.97-.56-1.64-1.94-1.64-1.31 0-2.1.59-2.1 1.43 0 .73.57 1.22 2.34 1.67 1.77.46 3.66 1.22 3.66 3.42-.01 1.6-1.21 2.48-2.74 2.77z"
                          opacity=".3" />
                        <path
                          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z" />
                      </svg>
                    </div>
                    <div className="card-item-title  mb-2">
                      <label className="main-content-label tx-13 font-weight-bold mb-1">Total
                        Expenses</label>
                      <span className="d-block tx-12 mb-0 text-muted">Previous month vs this
                        months</span>
                    </div>
                    <div className="card-item-body">
                      <div className="card-item-stat">
                        <h4 className="font-weight-bold">$8,500</h4>
                        <small><b className="text-danger">12%</b> decrease</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!--End row--> */}

          {/* <!--row--> */}
          <Row className="row-sm">
            <Col sm={12} lg={12} xl={12}>
              <Card className="custom-card overflow-hidden">
                <Card.Header className="border-bottom-0">
                  <div>
                    <label className="main-content-label mb-2">
                      Project Budget
                    </label>
                    <span className="d-block tx-12 mb-0 text-muted">
                      The Project Budget is a tool used by project managers to
                      estimate the total cost of a project
                    </span>
                  </div>
                </Card.Header>
                <Card.Body className="ps-12">
                  <div>
                    <Container>
                      <div className="chart-dropshadow2 ht-300">
                        <ProjectBudget />
                      </div>
                    </Container>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            {/* <!-- col end --> */}
            <Col sm={12} md={6} lg={6} xl={6}>
              <Card className="custom-card overflow-hidden">
                <Card.Header className="border-bottom-0 pb-0">
                  <div>
                    <div className="d-md-flex">
                      <label className="main-content-label my-auto pt-2">
                        Today tasks
                      </label>
                      <div className="ms-auto mt-3 d-flex">
                        <div className="me-3 d-flex text-muted tx-13">
                          <span className="legend bg-primary rounded-circle"></span>
                          Project
                        </div>
                        <div className="d-flex text-muted tx-13">
                          <span className="legend bg-light rounded-circle"></span>
                          Inprogress
                        </div>
                      </div>
                    </div>
                    <span className="d-block tx-12 mt-2 mb-0 text-muted">
                      UX UI & Backend Developement.
                    </span>
                  </div>
                </Card.Header>
                <Card.Body className="py-0">
                  <Row>
                    <Col sm={6} className="my-auto">
                      <h6 className="mb-3 font-weight-normal">
                        Project-Budget
                      </h6>
                      <div className="text-start">
                        <h3 className="font-weight-bold me-3 mb-2 text-primary">
                          $5,240
                        </h3>
                        <p className="tx-13 my-auto text-muted">
                          May 28 - June 01 (2018)
                        </p>
                      </div>
                    </Col>
                    <Col md={6} className="my-auto">
                      <div className="forth circle">
                        <div>
                          <TodayTask />
                          <div className="chart-circle-value circle-style radialbar">
                            <div className="tx-16 font-weight-bold"></div>75%
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            {/* <!-- col end --> */}
            <Col sm={12} md={6} lg={6} xl={6}>
              <Card className="custom-card top-inquiries">
                <Card.Header className="border-bottom-0 pb-0">
                  <div>
                    <div className="d-flex">
                      <label className="main-content-label my-auto pt-2">
                        Top Inquiries
                      </label>
                    </div>
                    <span className="d-block tx-12 mt-2 mb-0 text-muted">
                      project work involves a group of students investigating .
                    </span>
                  </div>
                </Card.Header>
                <Card.Body>
                  <Row className="mt-1">
                    <Col sm={5} className="col-4">
                      <span>Brand identity</span>
                    </Col>
                    <Col sm={4} className="col-4 my-auto">
                      <ProgressBar
                        className="progress ht-6 my-auto"
                        now={90}
                      ></ProgressBar>
                    </Col>
                    <Col sm={3} className="col-4">
                      <div className="d-flex">
                        <span className="tx-13">
                          <i className="text-success fe fe-arrow-up"></i>
                          <b>24.75%</b>
                        </span>
                      </div>
                    </Col>
                  </Row>
                  <Row className="mt-3">
                    <Col sm={5} className="col-4">
                      <span className="">UI & UX design</span>
                    </Col>
                    <Col sm={4} className="col-4 my-auto">
                      <ProgressBar
                        className=" ht-6 my-auto"
                        now={80}
                      ></ProgressBar>
                    </Col>
                    <Col sm={3} className="col-4">
                      <div className="d-flex">
                        <span className="tx-13">
                          <i className="text-danger fe fe-arrow-down"></i>
                          <b>12.34%</b>
                        </span>
                      </div>
                    </Col>
                  </Row>
                  <Row className=" mt-3">
                    <Col sm={5} className="col-4">
                      <span className="">Product design</span>
                    </Col>
                    <Col sm={4} className="col-4 my-auto">
                      <ProgressBar
                        className=" ht-6 my-auto"
                        now={50}
                      ></ProgressBar>
                    </Col>
                    <Col sm={3} className="col-4">
                      <div className="d-flex">
                        <span className="tx-13">
                          <i className="text-success  fe fe-arrow-up"></i>
                          <b>13.75%</b>
                        </span>
                      </div>
                    </Col>
                  </Row>

                  <Row className=" mt-3">
                    <Col sm={5} className="col-4">
                      <span className=""> React design</span>
                    </Col>
                    <Col sm={4} className="col-4 my-auto">
                      <ProgressBar
                        className=" ht-6 my-auto"
                        now={50}
                      ></ProgressBar>
                    </Col>
                    <Col sm={3} className="col-4">
                      <div className="d-flex">
                        <span className="tx-13">
                          <i className="text-danger  fe fe-arrow-down"></i>
                          <b>20.41%</b>
                        </span>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            {/* <!-- col end --> */}
            <Col lg={12}>
              <Card className="custom-card mg-b-20">
                <Card.Body>
                  <Card.Header className="card-header border-bottom-0 pt-0 ps-0 pe-0 d-flex">
                    <div>
                      <label className="main-content-label mb-2">Tasks</label>
                      <span className="d-block tx-12 mb-3 text-muted">
                        A task is accomplished by a set deadline, and must
                        contribute toward work-related objectives.
                      </span>
                    </div>
                    <Dropdown className="ms-auto">
                      <Dropdown.Toggle variant="default" className="option-dots" >
                        <i className="fe fe-more-vertical"></i>
                      </Dropdown.Toggle>
                      <Dropdown.Menu style={{ margin: "0px" }}>
                        <Dropdown.Item href="#!">Task</Dropdown.Item>
                        <Dropdown.Item href="#!">Team</Dropdown.Item>
                        <Dropdown.Item href="#!">Status</Dropdown.Item>
                        {/* <DropdownDivider  /> */}
                        <Dropdown.Item href="#!">
                          <i className="fa fa-cog me-2"></i> Settings
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Card.Header>
                  <div className=" tasks">
                    <Table responsive hover
                      className="card-table table-vcenter text-nowrap mb-0 border hover"  >
                      <thead>
                        <tr>
                          <th className="wd-lg-10p">Task</th>
                          <th className="wd-lg-20p">Team</th>
                          <th className="wd-lg-20p text-center">Open task</th>
                          <th className="wd-lg-20p">Prority</th>
                          <th className="wd-lg-20p">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {TASKS.map((items, index) => (
                          <tr key={index} data-index={index}>
                            <td className="font-weight-semibold">
                              <div className="d-flex">
                                <label className="ckbox my-auto me-4">
                                  <input readOnly="" type="checkbox" />
                                  <span></span>
                                </label>
                                <span className="mt-1">{items.Task}</span>
                              </div>
                            </td>
                            <td className="text-nowrap">
                              <div className="demo-avatar-group my-auto">
                                <div className="main-img-user avatar-sm">
                                  <img
                                    alt="avatar"
                                    className="rounded-circle"
                                    src={items.TeamMember1.src}
                                  />
                                </div>
                                <div className="main-img-user avatar-sm">
                                  <img
                                    alt="avatar"
                                    className="rounded-circle"
                                    src={items.TeamMember2.src}
                                  />
                                </div>
                                <div className="main-img-user avatar-sm">
                                  <img
                                    alt="avatar"
                                    className="rounded-circle"
                                    src={items.TeamMember3.src}
                                  />
                                </div>
                                <div className="main-img-user avatar-sm">
                                  <img
                                    alt="avatar"
                                    className="rounded-circle"
                                    src={items.TeamMember4.src}
                                  />
                                </div>
                              </div>
                            </td>
                            <td className="text-center">
                              37<i className=""></i>
                            </td>
                            <td className={`text-${items.Profittext}`}>
                              {items.TaskProfit}
                            </td>
                            <td>
                              <span
                                className={`badge bg-pill bg-${items.Statustext}-light`}
                              >
                                {items.Status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            {/* <!-- col end --> */}
          </Row>
          {/* <!-- Row end --> */}
        </div>
        {/* <!-- col end --> */}
        <div className="col-sm-12 col-lg-12 col-xl-4 mt-xl-4">
          <div className="card custom-card card-dashboard-calendar pb-0">
            <label className="main-content-label mb-2 pt-1">Recent transcations</label>
            <span className="d-block tx-12 mb-2 text-muted">Projects where development work is on
              completion</span>
            <table className="table table-hover m-b-0 transcations mt-2">
              <tbody>
                <tr>
                  <td className="wd-5p">
                    <div className="main-img-user avatar-md">
                      <img alt="avatar" className="rounded-circle me-3"
                        src={user5.src} />
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-middle ms-3">
                      <div className="d-inline-block">
                        <h6 className="mb-1">Flicker</h6>
                        <p className="mb-0 tx-13 text-muted">App improvement</p>
                      </div>
                    </div>
                  </td>
                  <td className="text-end">
                    <div className="d-inline-block">
                      <h6 className="mb-2 tx-15 font-weight-semibold">$45.234<i
                        className="fas fa-level-up-alt ms-2 text-success m-l-10"></i>
                      </h6>
                      <p className="mb-0 tx-11 text-muted">12 Jan 2020</p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="wd-5p">
                    <div className="main-img-user avatar-md">
                      <img alt="avatar" className="rounded-circle me-3"
                        src={user6.src} />
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-middle ms-3">
                      <div className="d-inline-block">
                        <h6 className="mb-1">Intoxica</h6>
                        <p className="mb-0 tx-13 text-muted">Milestone</p>
                      </div>
                    </div>
                  </td>
                  <td className="text-end">
                    <div className="d-inline-block">
                      <h6 className="mb-2 tx-15 font-weight-semibold">$23.452<i
                        className="fas fa-level-down-alt ms-2 text-danger m-l-10"></i>
                      </h6>
                      <p className="mb-0 tx-11 text-muted">23 Jan 2020</p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="wd-5p">
                    <div className="main-img-user avatar-md">
                      <img alt="avatar" className="rounded-circle me-3"
                        src={user7.src} />
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-middle ms-3">
                      <div className="d-inline-block">
                        <h6 className="mb-1">Digiwatt</h6>
                        <p className="mb-0 tx-13 text-muted">Sales executive</p>
                      </div>
                    </div>
                  </td>
                  <td className="text-end">
                    <div className="d-inline-block">
                      <h6 className="mb-2 tx-15 font-weight-semibold">$78.001<i
                        className="fas fa-level-down-alt ms-2 text-danger m-l-10"></i>
                      </h6>
                      <p className="mb-0 tx-11 text-muted">4 Apr 2020</p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="wd-5p">
                    <div className="main-img-user avatar-md">
                      <img alt="avatar" className="rounded-circle me-3"
                        src={user8.src} />
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-middle ms-3">
                      <div className="d-inline-block">
                        <h6 className="mb-1">Flicker</h6>
                        <p className="mb-0 tx-13 text-muted">Milestone2</p>
                      </div>
                    </div>
                  </td>
                  <td className="text-end">
                    <div className="d-inline-block">
                      <h6 className="mb-2 tx-15 font-weight-semibold">$37.285<i
                        className="fas fa-level-up-alt ms-2 text-success m-l-10"></i>
                      </h6>
                      <p className="mb-0 tx-11 text-muted">4 Apr 2020</p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="wd-5p pb-0">
                    <div className="main-img-user avatar-md">
                      <img alt="avatar" className="rounded-circle me-3"
                        src={user4.src} />
                    </div>
                  </td>
                  <td className="pb-0">
                    <div className="d-flex align-middle ms-3">
                      <div className="d-inline-block">
                        <h6 className="mb-1">Flicker</h6>
                        <p className="mb-0 tx-13 text-muted">App improvement</p>
                      </div>
                    </div>
                  </td>
                  <td className="text-end pb-0">
                    <div className="d-inline-block">
                      <h6 className="mb-2 tx-15 font-weight-semibold">$25.341<i
                        className="fas fa-level-down-alt ms-2 text-danger m-l-10"></i>
                      </h6>
                      <p className="mb-0 tx-11 text-muted">4 Apr 2020</p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="card custom-card">
            <div className="card-body">
              <div className="row row-sm">
                <div className="col-6">
                  <div className="card-item-title">
                    <label className="main-content-label tx-13 font-weight-bold mb-2">Project
                      Launch</label>
                    <span className="d-block tx-12 mb-0 text-muted">the project is going to
                      launch</span>
                  </div>
                  <p className="mb-0 tx-24 mt-2"><b className="text-primary">145 days</b></p>
                  <a href="#!" className="text-muted">12 Monday, Oct 2020 </a>
                </div>
                <div className="col-6">
                  <img src={work.src} alt="image" className="best-emp" />
                </div>
              </div>
            </div>
          </div>
          <Card className=" custom-card">
            <Card.Header className="border-bottom-0 pb-0 d-flex ps-3 ms-1">
              <div>
                <label className="main-content-label mb-2 pt-2">
                  On goiong projects
                </label>
                <span className="d-block tx-12 mb-2 text-muted">
                  Projects where development work is on completion
                </span>
              </div>
            </Card.Header>
            <Card.Body className="pt-2 mt-0">
              <div className="list-card">
                <div className="d-flex">
                  <div className="demo-avatar-group my-auto">
                    <div className="main-img-user avatar-xs">
                      <img
                        alt="avatar"
                        className="rounded-circle"
                        src={user1.src}
                      />
                    </div>
                    <div className="main-img-user avatar-xs">
                      <img
                        alt="avatar"
                        className="rounded-circle"
                        src={user2.src}
                      />
                    </div>
                    <div className="main-img-user avatar-xs">
                      <img
                        alt="avatar"
                        className="rounded-circle"
                        src={user3.src}
                      />
                    </div>
                    <div className="main-img-user avatar-xs">
                      <img
                        alt="avatar"
                        className="rounded-circle"
                        src={user4.src}
                      />
                    </div>
                    <div className="ms-2">Design team</div>
                  </div>
                  <div className="ms-auto float-end">
                    <Dropdown className="GOIONGPROJECTS">
                      <Dropdown.Toggle variant="default" className="option-dots">
                        <i className="fe fe-more-horizontal"></i>
                      </Dropdown.Toggle>
                      <Dropdown.Menu
                        className=" dropdown-menu-end"
                        style={{ margin: "0px" }}
                      >
                        <Dropdown.Item href="#!">Today</Dropdown.Item>
                        <Dropdown.Item href="#!">Last Week</Dropdown.Item>
                        <Dropdown.Item href="#!">Last Month</Dropdown.Item>
                        <Dropdown.Item href="#!">Last Year</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>
                <div className="card-item mt-4">
                  <div className="card-item-icon bg-transparent card-icon">
                    <CircularProgress
                      variant="determinate"
                      value={85}
                      className="peity-donut"
                      data-peity='{ "fill": ["#6259ca", "rgba(204, 204, 204,0.3)"], "innerRadius": 15, "radius": 20}'
                      style={{ color: "#6259ca" }}
                    />
                  </div>
                  <div className="card-item-body">
                    <div className="card-item-stat">
                      <small className="tx-10 text-primary font-weight-semibold">
                        25 August 2020
                      </small>
                      <h6 className=" mt-2">Mobile app design</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="list-card mb-0">
                <div className="d-flex">
                  <div className="demo-avatar-group my-auto">
                    <div className="main-img-user avatar-xs">
                      <img
                        alt="avatar"
                        className="rounded-circle"
                        src={user5.src}
                      />
                    </div>
                    <div className="main-img-user avatar-xs">
                      <img
                        alt="avatar"
                        className="rounded-circle"
                        src={user6.src}
                      />
                    </div>
                    <div className="main-img-user avatar-xs">
                      <img
                        alt="avatar"
                        className="rounded-circle"
                        src={user7.src}
                      />
                    </div>
                    <div className="main-img-user avatar-xs">
                      <img
                        alt="avatar"
                        className="rounded-circle"
                        src={user8.src}
                      />
                    </div>
                    <div className="ms-2">Design team</div>
                  </div>
                  <div className="ms-auto float-end">
                    <Dropdown className="Designteam">
                      <Dropdown.Toggle variant="default" className="option-dots">
                        <i className="fe fe-more-horizontal"></i>
                      </Dropdown.Toggle>
                      <Dropdown.Menu
                        className=" dropdown-menu-end"
                        style={{ margin: "0px" }}
                      >
                        <Dropdown.Item href="#!">Today</Dropdown.Item>
                        <Dropdown.Item href="#!">Last Week</Dropdown.Item>
                        <Dropdown.Item href="#!">Last Month</Dropdown.Item>
                        <Dropdown.Item href="#!">Last Year</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>
                <div className="card-item mt-4">
                  <div className="card-item-icon bg-transparent card-icon">
                    <CircularProgress
                      variant="determinate"
                      value={75}
                      className="peity-donut"
                      data-peity='{ "fill": ["#6259ca", "rgba(204, 204, 204,0.3)"], "innerRadius": 15, "radius": 20}'
                      style={{ color: "#6259ca" }}
                    />
                  </div>
                  <div className="card-item-body">
                    <div className="card-item-stat">
                      <small className="tx-10 text-primary font-weight-semibold">
                        12 JUNE 2020
                      </small>
                      <h6 className=" mt-2">Website Redesign</h6>
                    </div>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
          <Card className="custom-card">
            <Card.Body>
              <div className="d-flex">
                <label className="main-content-label my-auto">
                  Website Design
                </label>
                <div className="ms-auto  d-flex">
                  <div className="me-3 d-flex text-muted tx-13">Running</div>
                </div>
              </div>
              <div className="mt-2">
                <div>
                  <span className="tx-15 text-muted">
                    Task completed : 7/10
                  </span>
                </div>
                <div className="container mt-2 mb-2">
                  <WebsiteDesign />
                </div>
              </div>
              <Row className="row">
                <Col className="col">
                  <div className="mt-4">
                    <div className="d-flex mb-2">
                      <h5 className="tx-15 my-auto text-muted font-weight-normal">
                        Client :
                      </h5>
                      <h5 className="tx-15 my-auto ms-3">John Deo</h5>
                    </div>
                    <div className="d-flex mb-0">
                      <h5 className="tx-13 my-auto text-muted font-weight-normal">
                        Deadline :
                      </h5>
                      <h5 className="tx-13 my-auto text-muted ms-2">
                        25 Dec 2020
                      </h5>
                    </div>
                  </div>
                </Col>
                <Col className=" col-auto">
                  <div className="mt-3">
                    <div>
                      <img alt="logo" className="ht-50" src={projectlogo.src} />
                    </div>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </div>
        {/* <!-- col end --> */}
      </div>

    </>
  )
}
