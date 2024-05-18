import { Fragment, useEffect, useState } from "react";
import ErrorMessageBar from "./ErrorMessageBar";
import { Table } from "antd";
import ModalConfirm from "../modals/ModalConfirm";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/navigation";
import { useGlobalContextStores } from "@/interfaces/reducer/stores-context";
import { validateHeaders, validateRows } from "@/utils/data-utils/validateTable";
import { columns, onChangeData } from "@/utils/component-utils/table-columns";
import TableStoresControls from "./TableStoresControls";
import { uploadStores } from "@/utils/data-utils/submitData";
import { useUserInfoGlobalContent } from "@/interfaces/userInfo-context";
import { Alert } from "react-bootstrap";
import ModalInfo from "../modals/ModalInfo";



export default function TableStores() {

    const { t } = useTranslation()
    const router = useRouter()
    const { arrayStores, setArrayStores } = useGlobalContextStores()
    const [isPopUpVisible, setIsPopUpVisible] = useState(false)
    const [arrayBadHeaders, setArrayBadHeaders] = useState<string[]>([])
    const [arrayGoodHeaders, setArrayGoodHeaders] = useState<string[]>([])
    const [arrayDuplicateEmails, setArrayDuplicateEmails] = useState<string[]>([])
    const [badRowFormat, setBadRowFormat] = useState<string[]>([])
    const [arrayDuplicateManagerEmail, setArrayDuplicateManagerEmail] = useState<
        string[]
    >([])
    // User Info
    const { userDataSession } = useUserInfoGlobalContent()
    const showModal = () => setIsPopUpVisible(true)

    useEffect(() => {
        validateHeaders(arrayStores, setArrayBadHeaders, setArrayGoodHeaders)
        validateRows(arrayStores, setBadRowFormat)
        //validateDuplicateManagerEmail(arrayStores, setArrayDuplicateManagerEmail)
        //validateDuplicateEmails(arrayStores, setArrayDuplicateEmails)
    }, [arrayStores])

    async function submitStores() {
        console.log("======= submitStores =======")
        showModal()
        // await uploadStores(userDataSession, arrayStores, "asPath")
        // setIsPopUpVisible(false)
        // router.push(`/app/applications/services-day/new`)
    }

    function goBackBox() {
        router.refresh()
    }

    function cleanStores() {
        setArrayStores({ newData: [], filename: '' })
    }


    const isThereAnError = (): Boolean => {
        return (
            badRowFormat.length > 0 ||
            arrayBadHeaders.length > 0
            //arrayDuplicateManagerEmail.length > 0 ||
            //arrayDuplicateEmails.length > 0
        )
    }

    return (
        <Fragment>
            <div className='s-box-table'>
                {!isThereAnError() && (
                    <>
                        {/* <article className='s-message-preview'>
                            <p>Esta es una tabla de datos del contenido de tu archivo, haz click en 'Continuar' si todo está bien.</p>
                        </article> */}
                        <Alert variant="alert alert-info" role="alert">
                            <span className="alert-inner--icon">
                                <i className="fe fe-bell me-2"></i>
                            </span>
                            <span className="alert-inner--text">
                                <strong>¡Éxito!</strong> Esta es una tabla de datos del contenido de tu archivo, haz click en <strong>'Continuar'</strong> si todo está bien.
                            </span>
                        </Alert>
                    </>
                )}
                {isThereAnError() && (
                    <ErrorMessageBar
                        arrayBadHeaders={arrayBadHeaders}
                        arrayGoodHeaders={arrayGoodHeaders}
                        arrayDuplicateManagerEmail={arrayDuplicateManagerEmail}
                        arrayDuplicateEmails={arrayDuplicateEmails}
                        badRowFormat={badRowFormat}
                    />
                )}
                <Table
                    showHeader={true}
                    scroll={{ x: 600 }}
                    pagination={{ pageSizeOptions: [10, 20, 50] }}
                    dataSource={arrayStores.newData}
                    columns={columns}
                    onChange={onChangeData}
                    footer={() => (
                        <TableStoresControls
                            validateError={isThereAnError}
                            submitStores={submitStores}
                            cleanStores={cleanStores}
                            tryAgain={goBackBox}
                        />
                    )}
                />
            </div>

            <ModalConfirm
                isModalVisible={isPopUpVisible}
                setIsModalVisible={setIsPopUpVisible}
            />

            {/* <ModalInfo
                isModalVisible={isModalVisible}
                setIsModalVisible={setIsModalVisible}
            /> */}
        </Fragment>
    )
}