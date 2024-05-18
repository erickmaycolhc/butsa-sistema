"use client"

import React from 'react'
import PageHeader from '@/shared/layout-components/page-header/page-header-controls'
import Seo from '@/shared/layout-components/seo/seo'
import { Card, Col, Row } from 'react-bootstrap'

export default function ReportServicesDay() {
    return (
        <div>
            <Seo title="Reporte de servicios del día" />

            <PageHeader title="Reporte de servicios del día" item="Reportes" active_item="Reporte de servicios del día" />

            {/* <!-- Row --> */}
            <Row className=" sidemenu-height">
                <Col lg={12}>
                    <Card className="custom-card">
                        <Card.Body>Typing Some text here....</Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End Row --> */}
        </div>
    )
}