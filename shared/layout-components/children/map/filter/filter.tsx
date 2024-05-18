import { Tienda } from "@/interfaces/map/map";
import Link from "next/link";
import { Button, Card, Col, Form, InputGroup, ListGroup, Nav, Row } from "react-bootstrap";


const arrayStoresTambo: Tienda[] = [
    {
        id: "1",
        name: "Colegio puruchuco",
        direction: "Colegio puruchuco direction",
        schedule: {
            open: "si",
            close: "no",
        },
        district: "ate",
        days_attention: "aaaa",
        coordinate: {
            lat: -12.048145725677461,
            lng: -76.92997049611327,
        },
    },
    {
        id: "2",
        name: "Josfel",
        direction: "Josfel direction",
        schedule: {
            open: "si",
            close: "no",
        },
        district: "ate",
        days_attention: "aaaa",
        coordinate: {
            lat: -12.04299666628209,
            lng: -76.93720795269172,
        },
    }
]

export default function FilterMap() {
    return (
        <Card className="custom-card">
            <Card.Body>
                <div>
                    {/* <Link href="/components/apps/mail/mail-compose"
                        id="btnCompose"
                        className="btn btn-main-primary btn-block btn-compose"
                    >
                        Compose
                    </Link> */}
                    <div className="input-group">
                        <InputGroup className="">
                            <Form.Control type="search" className="form-control rounded-0" placeholder="Search for anything..." onChange={(ele => { myfunction(ele.target.value); setInputValue(ele.target.value) })} onClick={() => { setShow1(true) }} />
                            <InputGroup.Text className="btn search-btn ms-auto d-flex">
                                {/* <i className="fe fe-search"></i> */}buscar
                            </InputGroup.Text>
                        </InputGroup>
                    </div>
                    {/* <div className="main-mail-menu pd-r-0 mg-t-20">
                        <div className="nav main-nav-column mg-b-20">
                            <div>
                                taylor
                            </div>
                        </div>
                    </div> */}
                    <ListGroup className="mg-t-20">
                        {
                            arrayStoresTambo.map(tienda => {
                                return (
                                    <ListGroup.Item action >

                                        <Row>
                                            <Col xs={12}>
                                                <div className="d-flex w-100 justify-content-between">
                                                    <h5 className="mb-1">{tienda.name}</h5>
                                                    {/* <small className="text-body-secondary">3 days ago</small> */}
                                                </div>
                                            </Col>
                                            <Col xs={12} md={12}>
                                                <div className="w-100">
                                                    <small className="mb-1 font-weight-bold">Nro de tienda:</small>
                                                    <small className="text-body-secondary">{tienda.id}</small>
                                                </div>
                                            </Col>
                                            <Col xs={12} md={12}>
                                                <div className="d-flex w-100 justify-content-between">
                                                    <div className="mb-1 font-weight-bold">Tienda:</div>
                                                    <small className="text-body-secondary">{tienda.name}</small>
                                                </div>
                                            </Col>
                                            <Col xs={12} md={12}>
                                                <div className="d-flex w-100 justify-content-between">
                                                    <div className="mb-1 font-weight-bold">Dirección:</div>
                                                    <small className="text-body-secondary">{tienda.direction}</small>
                                                </div>
                                            </Col>
                                            <Col xs={12} md={12}>
                                                <div className="btn-list">
                                                    <Button variant="primary" className="btn ripple">
                                                        <svg width="16px" height="16px" viewBox="0 0 510 510" fill="#fff">
                                                            <path d="M502.35,237.149l-229.5-229.5l0,0c-10.199-10.2-25.5-10.2-35.7,0l-229.5,229.5c-10.2,10.2-10.2,25.501,0,35.7l229.5,229.5
                                    l0,0c10.2,10.2,25.501,10.2,35.7,0l229.5-229.5C512.55,262.65,512.55,247.35,502.35,237.149z M306,318.75V255H204v76.5h-51v-102
                                         c0-15.3,10.2-25.5,25.5-25.5H306v-63.75l89.25,89.25L306,318.75z"></path>
                                                        </svg>
                                                        <span className="pd-l-10">Indicaciones</span>
                                                    </Button>
                                                    <Button variant="secondary">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-arrow-right">
                                                            <line x1="5" y1="12" x2="19" y2="12" />
                                                            <polyline points="12 5 19 12 12 19" />
                                                        </svg>
                                                        <span className="pd-l-5">Ir</span>
                                                    </Button>
                                                </div>
                                            </Col>
                                        </Row>
                                        {/* <ul>
                                            <li key={`id-${tienda?.name}`}>
                                                <span>Nro de tienda: </span>{" "}
                                                <strong>{tienda?.id}</strong>
                                            </li>
                                            <li>
                                                <span>Tienda: </span> <strong>{tienda?.name}</strong>
                                            </li>
                                            <li>
                                                <span>Dirección: </span>{" "}
                                                <strong>{tienda?.direction}</strong>
                                            </li>
                                            <li>
                                                <span>Horario de apertura: </span>{" "}
                                                <strong>{tienda?.schedule?.open}</strong>
                                            </li>
                                            <li>
                                                <span>Horario de cierre: </span>{" "}
                                                <strong>{tienda?.schedule?.close}</strong>
                                            </li>
                                            <li>
                                                <span>Distrito: </span>{" "}
                                                <strong>{tienda?.district}</strong>
                                            </li>
                                            <li>
                                                <span>Dias de atención: </span>{" "}
                                                <strong>{tienda?.days_attention}</strong>
                                            </li>
                                        </ul> */}
                                        {/* <p className="mb-1">Some placeholder content in a paragraph.</p>
                                        <small className="text-body-secondary">And some muted small print.</small> */}
                                    </ListGroup.Item>
                                )
                            })
                        }
                    </ListGroup>


                </div>
            </Card.Body>
        </Card>
    )
}