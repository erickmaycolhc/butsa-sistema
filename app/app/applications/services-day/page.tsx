"use client"

import React, { useEffect, useState } from 'react'
import PageHeader from '@/shared/layout-components/page-header/page-header-controls'
import Seo from '@/shared/layout-components/seo/seo'
import { Card, Col, Row } from 'react-bootstrap'
import TableServicesDay from '@/shared/layout-components/children/table-services-day/table-services-day'
import { MyGlobalContextServicesDay } from '@/interfaces/reducer/services-day-context'
import { BasicInfoServicesDay, InfoTableServicesDay } from '@/interfaces/services-day-interface'


export default function ServicesDay() {
    const [arrayServicesDay, setArrayServicesDay] = useState<BasicInfoServicesDay>({
        newData: [],
        filename: ''
    })


    useEffect(() => {
        const info: InfoTableServicesDay[] = Array.from(Array(200).keys()).map((num) => {
            return {
                "id": num.toString(),
                "fecha_registro": "13 de Oct, 2023 9:45 am",
                "rutas": "10",
                "jabas": "1989",
                "estado_servicio": "in-progress",
                // "cargo_seco": "img",
                "fecha_finalizacion_servicio": "13 de Oct, 2023 4:20 pm",
                "usuario": "Taylor Swift"
            }
        })
        setArrayServicesDay({
            newData: info,
            filename: ''
        })
    }, [])

    return (
        <div>
            <Seo title="Servicios del día" />

            <PageHeader title="Servicios del día" item="Aplicaciones" active_item="Servicios del día" />

            {/* <!-- Row --> */}
            <Row className=" sidemenu-height">
                <Col lg={12}>
                    <Card className="custom-card">
                        <Card.Body>
                            <MyGlobalContextServicesDay.Provider value={{ arrayServicesDay, setArrayServicesDay }}>
                                <TableServicesDay />
                            </MyGlobalContextServicesDay.Provider>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End Row --> */}
        </div>
    )
}