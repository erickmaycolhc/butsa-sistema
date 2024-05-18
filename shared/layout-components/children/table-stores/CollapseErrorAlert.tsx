import { useCallback } from 'react'
import { AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/ai'

export const CollapsableMessageAlert = (props: {
    translationTitle: string
    arrayErrorInfo: string[]
    arrayGoodInfo?: string[]
    useTitle: string
}): JSX.Element => {
    const renderContent = useCallback(() => {
        switch (props.useTitle) {
            case 'headerError':
                return (
                    <article
                        className='s-message-warning-header'
                        style={{ display: 'block' }}>
                        {props.translationTitle}
                        <p className='s-space'></p>
                        {props.arrayErrorInfo.map((wrongHeader, index) => (
                            <li key={index}>
                                {`Replace '${wrongHeader}' `} <AiFillCloseCircle />
                                {` for '${props.arrayGoodInfo![index]}' `}
                                <AiFillCheckCircle />{' '}
                            </li>
                        ))}
                    </article>
                )

            case 'duplicateManagerEmailError':
                return (
                    <article
                        className='s-message-warning-header'
                        style={{ display: 'block' }}>
                        {props.translationTitle}
                        <p className='s-space'></p>
                        {props.arrayErrorInfo.map((rowDuplicateEmail, index) => (
                            <li key={index}>{rowDuplicateEmail}</li>
                        ))}
                    </article>
                )

            case 'duplicateEmailError':
                return (
                    <article
                        className='s-message-warning-header'
                        style={{ display: 'block' }}>
                        {props.translationTitle}
                        <p className='s-space'></p>

                        {props.arrayErrorInfo.map((rowDuplicateEmail, index) => (
                            <li key={index}>{rowDuplicateEmail}</li>
                        ))}
                    </article>
                )

            case 'rowFormatError':
                return (
                    <article className='s-message-warning' style={{ display: 'block' }}>
                        <p>{props.translationTitle} </p>
                        {Array.from(new Set(props.arrayErrorInfo)).map((row, index) => (
                            <li key={index}>{row}</li>
                        ))}
                    </article>
                )

            default:
                return <></>
        }
    }, [
        props.arrayErrorInfo,
        props.arrayGoodInfo,
        props.translationTitle,
        props.useTitle
    ])

    return <>{renderContent()}</>
}
