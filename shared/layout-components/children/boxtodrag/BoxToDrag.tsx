"use client"

import { useEffect, useState } from 'react'
import { MdFileUpload } from 'react-icons/md'
import useTranslation from 'next-translate/useTranslation'
import { Upload, UploadFile } from 'antd'
import { UploadChangeParam } from 'antd/lib/upload'
import DownloadTemplate from './downloadtemplate/DownloadTemplate'
import ModalInfo from '../modals/ModalInfo'
import { setUploadFileToArray } from '@/utils/data-utils/fileToArray'
import { useGlobalContextStores } from '@/interfaces/reducer/stores-context'
import { dataUrls } from '@/config/url'

const { Dragger } = Upload

type PropsBoxToDrag = {
  onUploadComplete?: () => void
}

export default function BoxToDrag({ onUploadComplete = () => { } }: PropsBoxToDrag) {
  const { t } = useTranslation()
  const { arrayStores, setArrayStores } = useGlobalContextStores()
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false)


  const handleFileUpload = ({ file, fileList, event }: UploadChangeParam<UploadFile<any>>) => {
    const { status } = file

    if (status === 'done') {
      onUploadComplete()
      // This show a pop up when the user upload a file
      // message.success(`${file.name} file uploaded successfully.`)
      setUploadFileToArray(file, setArrayStores, setIsModalVisible)
    }
  }

  const dummyRequest = async ({ file, onSuccess }: any) => {
    setTimeout(() => {
      onSuccess("ok");
    }, 0);
  }
  return (
    <>
      <div className='s-box-v2'>
        <Dragger
          name='file'
          multiple={false}
          maxCount={1}
          data-testid='input-file-data-csv'
          accept='.csv,.xlsx'
          customRequest={dummyRequest}
          onChange={handleFileUpload}>
          <div className='s-clickhere'>
            <div className='s-iconUpload'>
              <MdFileUpload data-testid='file-image' />
            </div>
            <div className='s-textclickhere'>
              {t('uploadstores:click-here')}
              <br></br>
              {t('uploadstores:upload')}
            </div>
            {isModalVisible ? (
              <ModalInfo
                isModalVisible={isModalVisible}
                setIsModalVisible={setIsModalVisible}
              />
            ) : null}
          </div>
        </Dragger>
      </div>

      <div className='s-box-footer'>
        <DownloadTemplate />
        <div className='s-textclickherrtod'>
          <a target='_blank' href={dataUrls.URLs.guide} rel='noreferrer'>
            <p>{"Cómo llenar mi archivo csv.?"}</p>
          </a>
        </div>
      </div>
    </>
  )
}

