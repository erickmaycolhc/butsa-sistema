import { Collapse } from 'antd'
//import useTranslation from 'next-translate/useTranslation'
import { CollapsableMessageAlert } from './CollapseErrorAlert'

const ErrorMessageBar = (props: {
  arrayBadHeaders: string[]
  arrayGoodHeaders: string[]
  arrayDuplicateManagerEmail: string[]
  arrayDuplicateEmails: string[]
  badRowFormat: string[]
}): JSX.Element => {
  //const { t } = useTranslation()
  const { Panel } = Collapse

  return (
    <Collapse>
      <Panel
        header='Encontramos algunos errores, haga clic aquí para mostrarlos/ocultarlos'
        key='1'>
        {props.arrayBadHeaders.length > 0 && (
          <CollapsableMessageAlert
            translationTitle={"Detectamos que los siguientes nombres de las columnas de tu archivo CSV son incorrectos:"}
            arrayErrorInfo={props.arrayBadHeaders}
            arrayGoodInfo={props.arrayGoodHeaders}
            useTitle='headerError'
          />
        )}
        {/* {props.arrayDuplicateManagerEmail.length > 0 && (
          <CollapsableMessageAlert
            translationTitle={"Un manager no puede ser manager de si mismo, verifica la fila de los siguientes correos:"}
            arrayErrorInfo={props.arrayDuplicateManagerEmail}
            useTitle='duplicateManagerEmailError'
          />
        )} */}
        {/* {props.arrayDuplicateEmails.length > 0 && (
          <CollapsableMessageAlert
            translationTitle={"Los emails deben ser unicos, verifica la fila de los siguientes correos:"}
            arrayErrorInfo={props.arrayDuplicateEmails}
            useTitle='duplicateEmailError'
          />
        )} */}
        {props.badRowFormat.length > 0 && (
          <CollapsableMessageAlert
            translationTitle={"Lo sentimos, hemos encontrado errores de formato en tus filas. Por favor revísalos en:"}
            arrayErrorInfo={props.badRowFormat}
            useTitle='rowFormatError'
          />
        )}
      </Panel>
    </Collapse>
  )
}

export default ErrorMessageBar
