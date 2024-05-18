import React from 'react'
import {
    Button,
    Card,
    Col,
    Container,
    Form,
    Nav,
    Navbar,
    Row,
    Tab,
  } from "react-bootstrap";

const Landingpagecom = () => {
  return (
    <div><Nav
    className="justify-content-center"
    variant="pills"
  >
    <Nav.Item>
      <Nav.Link eventKey="Monthly">
        Monthly
      </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="Annual">Annual</Nav.Link>
    </Nav.Item>
  </Nav>
  <Tab.Content>
    <Tab.Pane eventKey="Monthly">
      <Row className="d-flex align-items-center justify-content-center">
        <Col lg={4} xl={4} md={8} sm={12}>
          <Card className=" p-3 pricing-card">
            <Card.Header className="d-block text-justified pt-2">
              <p className="fs-18 fw-semibold mb-1">
                Basic
              </p>
              <p className="text-justify fw-semibold mb-1">
                {" "}
                <span className="fs-30 me-2">
                  $
                </span>
                <span className="fs-30 me-1">
                  39
                </span>
                <span className="fs-25">
                  <span className="op-0-5 text-muted text-20">
                    /
                  </span>
                  month
                </span>
              </p>
              <p className="fs-13 mb-1">
                Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Iure
                quos debitis aliquam .
              </p>
              <p className="fs-13 mb-1 text-secondary">
                Billed monthly on regular basis!
              </p>
            </Card.Header>
            <Card.Body className="pt-2">
              <ul className="text-justify pricing-body ps-0">
                <li>
                  <i className="mdi mdi-checkbox-marked-circle-outline p-2 fs-16 text-secondary"></i>
                  <strong>2 Free</strong> Domain
                  Name
                </li>
                <li>
                  <i className="mdi mdi-checkbox-marked-circle-outline p-2 fs-16 text-secondary"></i>
                  <strong>3 </strong> One-Click Apps
                </li>
                <li className="text-muted">
                  <i className="mdi mdi-close-circle-outline p-2 fs-16 text-gray"></i>
                  <strong>1 </strong> Databases
                </li>
                <li className="text-muted">
                  <i className="mdi mdi-close-circle-outline p-2 fs-16 text-gray"></i>
                  <strong>Unlimited </strong> Cloud
                  Storage
                </li>
                <li className="text-muted">
                  <i className="mdi mdi-close-circle-outline p-2 fs-16 text-gray"></i>
                  <strong>Money </strong>{" "}
                  BackGuarantee
                </li>
                <li className="text-muted">
                  <i className="mdi mdi-close-circle-outline p-2 fs-16 text-gray"></i>
                  <strong>24/7</strong> support
                </li>
              </ul>
            </Card.Body>
            <div className="card-footer text-center border-top-0 pt-1">
              <button className="btn btn-lg btn-outline-secondary btn-block">
                <span className="ms-4 me-4">
                  Select
                </span>
              </button>
            </div>
          </Card>
        </Col>
        <Col lg={4} xl={4} md={8} sm={12}>
          <Card className=" p-3 border-primary pricing-card advanced">
            <Card.Header className="d-block text-justified pt-2">
              <p className="fs-18 fw-semibold mb-1 pe-0">
                Advanced
                <span className="tag bg-primary text-white float-sm-end">
                  Limited Deal
                </span>
              </p>
              <p className="text-justify fw-semibold mb-1">
                {" "}
                <span className="fs-30 me-2">
                  $
                </span>
                <span className="fs-30 me-1">
                  199
                </span>
                <span className="fs-25">
                  <span className="op-0-5 text-muted text-20">
                    /
                  </span>
                  month
                </span>
              </p>
              <p className="fs-13 mb-2">
                Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Iure
                quos debitis aliquam .
              </p>
              <p className="fs-13 mb-1 text-primary">
                Billed monthly on regular basis!
              </p>
            </Card.Header>
            <Card.Body className="pt-2">
              <ul className="text-justify pricing-body ps-0">
                <li>
                  <i className="mdi mdi-checkbox-marked-circle-outline text-primary p-2 fs-16"></i>
                  <strong> 5 Free</strong> Domain
                  Name
                </li>
                <li>
                  <i className="mdi mdi-checkbox-marked-circle-outline text-primary p-2 fs-16"></i>
                  <strong>5</strong> One-Click Apps
                </li>
                <li>
                  <i className="mdi mdi-checkbox-marked-circle-outline text-primary p-2 fs-16"></i>
                  <strong>3 </strong> Databases
                </li>
                <li>
                  <i className="mdi mdi-checkbox-marked-circle-outline text-primary p-2 fs-16"></i>
                  <strong>Unlimited </strong> Cloud
                  Storage
                </li>
                <li>
                  <i className="mdi mdi-checkbox-marked-circle-outline text-primary p-2 fs-16"></i>
                  <strong>Money </strong>{" "}
                  BackGuarantee
                </li>
                <li className="mb-5">
                  <i className="mdi mdi-checkbox-marked-circle-outline text-primary p-2 fs-16"></i>
                  <strong>24/7</strong> support
                </li>
              </ul>
            </Card.Body>
            <div className="card-footer text-center border-top-0 pt-1">
              <button className="btn btn-lg btn-primary-gradient text-white btn-block">
                <span className="ms-4 me-4">
                  Select
                </span>
              </button>
            </div>
          </Card>
        </Col>
        <Col lg={4} xl={4} md={8} sm={12}>
          <Card className=" p-3 pricing-card">
            <Card.Header className="d-block text-justified pt-2">
              <p className="fs-18 fw-semibold mb-1">
                Regular
              </p>
              <p className="text-justify fw-semibold mb-1">
                {" "}
                <span className="fs-30 me-2">
                  $
                </span>
                <span className="fs-30 me-1">
                  69
                </span>
                <span className="fs-25">
                  <span className="op-0-5 text-muted text-20">
                    /
                  </span>
                  month
                </span>
              </p>
              <p className="fs-13 mb-1">
                Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Iure
                quos debitis aliquam .
              </p>
              <p className="fs-13 mb-1  text-danger">
                Billed monthly on regular basis!
              </p>
            </Card.Header>
            <Card.Body className="pt-2">
              <ul className="text-justify pricing-body ps-0">
                <li>
                  <i className="mdi mdi-checkbox-marked-circle-outline text-danger p-2 fs-16"></i>
                  <strong>1 Free</strong> Domain
                  Name
                </li>
                <li>
                  <i className="mdi mdi-checkbox-marked-circle-outline text-danger p-2 fs-16"></i>
                  <strong>4</strong> One-Click Apps
                </li>
                <li>
                  <i className="mdi mdi-checkbox-marked-circle-outline text-danger p-2 fs-16"></i>
                  <strong>2 </strong> Databases
                </li>
                <li className="text-muted">
                  <i className="mdi mdi-close-circle-outline text-gray p-2 fs-16"></i>
                  <strong>Unlimited </strong> Cloud
                  Storage
                </li>
                <li className="text-muted">
                  <i className="mdi mdi-close-circle-outline text-gray p-2 fs-16"></i>
                  <strong>Money </strong>{" "}
                  BackGuarantee
                </li>
                <li className="text-muted">
                  <i className="mdi mdi-close-circle-outline text-gray p-2 fs-16"></i>
                  <strong>24/7</strong> support
                </li>
              </ul>
            </Card.Body>
            <div className="card-footer text-center border-top-0 pt-1">
              <button className="btn btn-lg btn-outline-danger btn-block">
                <span className="ms-4 me-4">
                  Select
                </span>
              </button>
            </div>
          </Card>
        </Col>
      </Row>
    </Tab.Pane>
    <Tab.Pane eventKey="Annual" className="pb-0">
      <div>
        <Row className="d-flex align-items-center justify-content-center">
          <Col lg={4} xl={4} md={8} sm={12}>
            <Card className=" p-3 pricing-card reveal revealrotate shadow border">
              <Card.Header className="d-block text-justified pt-2">
                <p className="fs-18 fw-semibold mb-1">
                  Basic
                </p>
                <p className="text-justify fw-semibold mb-1">
                  {" "}
                  <span className="fs-30 me-2">
                    $
                  </span>
                  <span className="fs-30 me-1">
                    399
                  </span>
                  <span className="fs-25">
                    <span className="op-0-5 text-muted text-20">
                      /
                    </span>
                    year
                  </span>
                </p>
                <p className="fs-13 mb-1">
                  Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Iure
                  quos debitis aliquam .
                </p>
                <p className="fs-13 mb-3 text-secondary">
                  Billed monthly on regular basis!
                </p>
              </Card.Header>
              <Card.Body className="py-2 px-0">
                <ul className="text-justify pricing-body ps-0 mb-0">
                  <li>
                    <i className="mdi mdi-checkbox-marked-circle-outline p-2 fs-16 text-secondary"></i>
                    <strong>2 Free</strong> Domain
                    Name
                  </li>
                  <li>
                    <i className="mdi mdi-checkbox-marked-circle-outline p-2 fs-16 text-secondary"></i>
                    <strong>3 </strong> One-Click
                    Apps
                  </li>
                  <li className="text-muted">
                    <i className="mdi mdi-close-circle-outline p-2 fs-16 text-gray"></i>
                    <strong>1 </strong> Databases
                  </li>
                  <li className="text-muted">
                    <i className="mdi mdi-close-circle-outline p-2 fs-16 text-gray"></i>
                    <strong>Unlimited </strong>{" "}
                    Cloud Storage
                  </li>
                  <li className="text-muted">
                    <i className="mdi mdi-close-circle-outline p-2 fs-16 text-gray"></i>
                    <strong>Money </strong>{" "}
                    BackGuarantee
                  </li>
                  <li className="text-muted">
                    <i className="mdi mdi-close-circle-outline p-2 fs-16 text-gray"></i>
                    <strong>24/7</strong> support
                  </li>
                </ul>
              </Card.Body>
              <div className="card-footer text-center border-top-0 pt-1">
                <button className="btn btn-lg btn-outline-secondary btn-block">
                  <span className="ms-4 me-4">
                    Select
                  </span>
                </button>
              </div>
            </Card>
          </Col>
          <Col lg={4} xl={4} md={8} sm={12}>
            <Card className="p-3 border bg-primary border-primary pricing-card advanced reveal revealrotate">
              <Card.Header className="d-block text-justified pt-2 bd-white-2">
                <p className="fs-18 fw-semibold mb-1 pe-0">
                  Advanced
                  <span className="badge bg-white text-primary float-end font-weight-normal">
                    Limited Deal
                  </span>
                </p>
                <p className="text-justify fw-semibold mb-1">
                  {" "}
                  <span className="fs-30 me-2">
                    $
                  </span>
                  <span className="fs-30 me-1">
                    1,299
                  </span>
                  <span className="fs-25">
                    <span className="op-0-5 text-muted text-20">
                      /
                    </span>
                    year
                  </span>
                </p>
                <p className="fs-13 mb-2">
                  Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Iure
                  quos debitis aliquam .
                </p>
                <p className="fs-13 mb-1 text-white">
                  Billed monthly on regular basis!
                </p>
              </Card.Header>
              <Card.Body className="py-2 px-0">
                <ul className="text-justify pricing-body ps-0 my-5">
                  <li>
                    <i className="mdi mdi-checkbox-marked-circle-outline text-white p-2 fs-16"></i>
                    <strong> 5 Free</strong> Domain
                    Name
                  </li>
                  <li>
                    <i className="mdi mdi-checkbox-marked-circle-outline text-white p-2 fs-16"></i>
                    <strong>5</strong> One-Click
                    Apps
                  </li>
                  <li>
                    <i className="mdi mdi-checkbox-marked-circle-outline text-white p-2 fs-16"></i>
                    <strong>3 </strong> Databases
                  </li>
                  <li>
                    <i className="mdi mdi-checkbox-marked-circle-outline text-white p-2 fs-16"></i>
                    <strong>Unlimited </strong>{" "}
                    Cloud Storage
                  </li>
                  <li>
                    <i className="mdi mdi-checkbox-marked-circle-outline text-white p-2 fs-16"></i>
                    <strong>Money </strong>{" "}
                    BackGuarantee
                  </li>
                  <li>
                    <i className="mdi mdi-checkbox-marked-circle-outline text-white p-2 fs-16"></i>
                    <strong>24/7</strong> support
                  </li>
                </ul>
              </Card.Body>
              <div className="card-footer text-center border-top-0 pt-1">
                <button className="btn btn-lg btn-white text-primary btn-block">
                  <span className="ms-4 me-4">
                    Select
                  </span>
                </button>
              </div>
            </Card>
          </Col>
          <Col lg={4} xl={4} md={8} sm={12}>
            <Card className=" p-3 pricing-card reveal revealrotate shadow border">
              <Card.Header className="d-block text-justified pt-2">
                <p className="fs-18 fw-semibold mb-1">
                  Regular
                </p>
                <p className="text-justify fw-semibold mb-1">
                  {" "}
                  <span className="fs-30 me-2">
                    $
                  </span>
                  <span className="fs-30 me-1">
                    899
                  </span>
                  <span className="fs-25">
                    <span className="op-0-5 text-muted text-20">
                      /
                    </span>
                    year
                  </span>
                </p>
                <p className="fs-13 mb-1">
                  Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Iure
                  quos debitis aliquam .
                </p>
                <p className="fs-13 mb-3  text-danger">
                  Billed monthly on regular basis!
                </p>
              </Card.Header>
              <Card.Body className="py-2 px-0">
                <ul className="text-justify pricing-body ps-0 mb-0">
                  <li>
                    <i className="mdi mdi-checkbox-marked-circle-outline text-danger p-2 fs-16"></i>
                    <strong>1 Free</strong> Domain
                    Name
                  </li>
                  <li>
                    <i className="mdi mdi-checkbox-marked-circle-outline text-danger p-2 fs-16"></i>
                    <strong>4</strong> One-Click
                    Apps
                  </li>
                  <li>
                    <i className="mdi mdi-checkbox-marked-circle-outline text-danger p-2 fs-16"></i>
                    <strong>2 </strong> Databases
                  </li>
                  <li className="text-muted">
                    <i className="mdi mdi-close-circle-outline text-gray p-2 fs-16"></i>
                    <strong>Unlimited </strong>{" "}
                    Cloud Storage
                  </li>
                  <li className="text-muted">
                    <i className="mdi mdi-close-circle-outline text-gray p-2 fs-16"></i>
                    <strong>Money </strong>{" "}
                    BackGuarantee
                  </li>
                  <li className="text-muted">
                    <i className="mdi mdi-close-circle-outline text-gray p-2 fs-16"></i>
                    <strong>24/7</strong> support
                  </li>
                </ul>
              </Card.Body>
              <div className="card-footer text-center border-top-0 pt-1">
                <button className="btn btn-lg btn-outline-danger btn-block">
                  <span className="ms-4 me-4">
                    Select
                  </span>
                </button>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </Tab.Pane>
  </Tab.Content></div>
  )
}

export default Landingpagecom