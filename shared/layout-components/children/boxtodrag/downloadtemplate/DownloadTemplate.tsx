import { Fragment } from 'react'
import { IoMdDownload } from 'react-icons/io'
import useTranslation from 'next-translate/useTranslation'
import { downloadS3File } from '@/utils/download-utils/downloadCSV'

const DownloadTemplate = (): JSX.Element => {
  const { t } = useTranslation()

  return (
    <Fragment>
      <div
        className='s-textclickherrtod'
        onClick={() => downloadS3File('Template.xlsx')}>
        <p className='s-icondownload'>
          {' '}
          <IoMdDownload />
          {"Click aquí para descargar el formato en excel"}
        </p>
      </div>
    </Fragment>
  )
}

export default DownloadTemplate
