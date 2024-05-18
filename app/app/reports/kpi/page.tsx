"use client"

import React from 'react'
import PageHeader from '@/shared/layout-components/page-header/page-header-controls'
import Seo from '@/shared/layout-components/seo/seo'
import { Card, Col, Row } from 'react-bootstrap'


import RadialBarChart from '@/shared/layout-components/children/chart/radial-bar-chart'
import BarChart from '@/shared/layout-components/children/chart/bar-chart'



export default function ReportKpi() {

    return (
        <div>
            <Seo title="Reporte de KPI" />

            <PageHeader title="Reporte de KPI" item="Reportes" active_item="Reporte de KPI" />

            <Row className="row-sm">
                <Col md={12} lg={4}>
                    <Card className="custom-card">
                        <Card.Body>
                            <div className="card-order ">
                                <label className="main-content-label mb-3 pt-1">
                                    Valor de carga
                                </label>
                                <h3 className="text-end card-item-icon card-icon">
                                    <i className="mdi mdi-cart icon-size float-start text-primary"></i>
                                    <span className="font-weight-bold">S/ 276,260.74</span>
                                </h3>
                                <p className="mb-0 mt-4 text-muted">
                                    Valor diario <span className="float-end">100%</span>
                                </p>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={12} lg={4}>
                    <Card className="custom-card">
                        <Card.Body>
                            <div className="card-order ">
                                <label className="main-content-label mb-3 pt-1">
                                    Cantidad de tiendas
                                </label>
                                <h3 className="text-end card-item-icon card-icon">
                                    <i className="mdi mdi-cube icon-size float-start text-primary"></i>
                                    <span className="font-weight-bold">126</span>
                                </h3>
                                <p className="mb-0 mt-4 text-muted">
                                    Tiendas diarias <span className="float-end">100%</span>
                                </p>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={12} lg={4}>
                    <Card className="custom-card">
                        <Card.Body>
                            <div className="card-order ">
                                <label className="main-content-label mb-3 pt-1">
                                    Cantidad de rutas
                                </label>
                                <h3 className="text-end card-item-icon card-icon">
                                    <i className="mdi mdi-account-multiple icon-size float-start text-primary"></i>
                                    <span className="font-weight-bold">9</span>
                                </h3>
                                <p className="mb-0 mt-4 text-muted">
                                    Rutas diarias <span className="float-end">100%</span>
                                </p>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            
            <Row className="row-sm">
                <Col md={12} lg={3}>
                    <RadialBarChart />
                </Col>

                <Col md={12} lg={9}>
                    <BarChart />
                </Col>
            </Row>
        </div>
    )
}