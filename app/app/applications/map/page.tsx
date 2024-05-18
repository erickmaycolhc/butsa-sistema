"use client"

import React from 'react'
import PageHeader from '@/shared/layout-components/page-header/page-header-controls'
import Seo from '@/shared/layout-components/seo/seo'
import { Card, Col, Nav, Row } from 'react-bootstrap'
import Link from 'next/link'
import MapTamboGlobal from '@/shared/layout-components/children/map/map-tambo-global'
import FilterMap from '@/shared/layout-components/children/map/filter/filter'

export default function Map() {
    return (
        <div>
            <Seo title="Mapa" />

            <PageHeader title="Mapa" item="Aplicaciones" active_item="Mapa" />

            <Row className="row-sm">
                <Col lg={4} xl={3} md={12}>
                    <FilterMap />
                </Col>
                <Col lg={8} xl={9} md={12}>
                    <Card className="custom-card">
                        <Card.Body>
                            <div>
                                <h6 className="main-content-label mb-1">MAPA CON MARCADOR DE LUGAR</h6>
                                <p className="text-muted card-sub-title">Facilite la busqueda de los lugares a donde quiere llegar</p>
                            </div>
                            <div className="mapcontainer4">
                                <MapTamboGlobal />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}