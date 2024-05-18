"use client"

import React from 'react'
import PageHeader from '@/shared/layout-components/page-header/page-header-controls'
import Seo from '@/shared/layout-components/seo/seo'
import { Card, Col, Row } from 'react-bootstrap'

export default function Users() {



    return (
        <div>
            <Seo title="Usuarios" />

            <PageHeader title="Usuarios" item="Configuraciones" active_item="Usuarios" />

            <Row className=" sidemenu-height">
                <Col lg={12}>
                    <Card className="custom-card">
                        <Card.Body>
                            <p>taylor</p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}