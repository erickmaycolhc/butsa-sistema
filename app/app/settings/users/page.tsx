"use client"

import React, { useEffect, useState } from 'react'
import Seo from '@/shared/layout-components/seo/seo'
import { Card, Col, Row } from 'react-bootstrap'
import { InfoUser } from '@/interfaces/user-context-interface'
import { GlobalContextUser } from '@/interfaces/reducer/users-context'
import TableUsers from '@/shared/layout-components/children/table-users/table-user'
import PageHeaderNew from '@/shared/layout-components/page-header/page-header-new'

export default function Users() {
    const [arrayUsers, setArrayUsers] = useState<InfoUser[]>([])


    useEffect(() => {
        const info: InfoUser[] = Array.from(Array(200).keys()).map((num) => {
            return {
                "id": num.toString(),
                "first_name": "Taylor " + num,
                "last_name": "Alisson",
                "father_last_name": "Swift",
                "mother_last_name": "Finlay",
                "dni": "76543218",
                "phone": "987654321",
                "direction": "Nashville",
                "birthdate": "13/10/1989",
                "gender": "female",
                "nationality": "Perú",
                "civil_status": "single woman",
                "photo": (num === 2) ? "": "/assets/img/users/taylor-photo.jpg",
                "user_name": "taylor" + num,
                "status": (num === 2) ? "inactive": "active",
                "register_date": "02/09/2023",
                "update_date": "02/09/2023",
                "rol": "ADMIN"
            }
        })
        setArrayUsers(info)
    }, [])


    return (
        <div>
            <Seo title="Usuarios" />

            <PageHeaderNew title="Usuarios" item="Configuraciones" active_item="Usuarios" />

            <Row className=" sidemenu-height">
                <Col lg={12}>
                    <Card className="custom-card">
                        <Card.Body>
                            <GlobalContextUser.Provider value={{ arrayUsers, setArrayUsers }}>
                                <TableUsers />
                            </GlobalContextUser.Provider>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}