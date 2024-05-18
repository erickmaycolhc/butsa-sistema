"use client"

import React, { useEffect, useState } from 'react'
import PageHeader from '@/shared/layout-components/page-header/page-header-controls'
import Seo from '@/shared/layout-components/seo/seo'
import { Card, Col, Row } from 'react-bootstrap'
import { MyGlobalContextStores } from '@/interfaces/reducer/stores-context'
import { BasicInfoFile, InfoTableStores } from '@/interfaces/stores-interface'
import TableStores from '@/shared/layout-components/children/table-stores/TableStores'
import BoxToDrag from '@/shared/layout-components/children/boxtodrag/BoxToDrag'

export default function ServicesDay() {
    const [arrayStores, setArrayStores] = useState<BasicInfoFile>({
        newData: [],
        filename: ''
    })

    useEffect(() => {
        // const info: InfoTableStores[] = Array.from(Array(100).keys()).map(()=> {
        //     return {
        //         "FECHA_DESPACHO": "aaa",
        //         "TIENDA": "bbb",
        //         "ID_TIENDA": "ccc",
        //         "RUTA": "ddd",
        //         "GUIA": "eee",
        //         "VALOR": "fff",
        //         "PROVEEDOR": "ggg",
        //         "PLACA": "hhh",
        //         "CONDUCTOR": "iiiii",
        //         "AUXILIAR": "jjj",
        //         "ESTADO": "kkkk",
        //         "FECHA_DE_ENTREGA": "lll",
        //         "OBSERVACION": "mmm",
        //         "ENTREGAS_CONFORME": "nnnn"
        //     }
        // })
        // setArrayStores({
        //     newData: info,
        //     filename: ''
        // })

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
                            <MyGlobalContextStores.Provider value={{ arrayStores, setArrayStores }}>
                                {arrayStores.newData.length !== 0 ? <TableStores /> : <BoxToDrag />}
                            </MyGlobalContextStores.Provider>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End Row --> */}
        </div>
    )
}