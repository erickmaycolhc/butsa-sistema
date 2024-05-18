import React from 'react'
import { IoCloseSharp } from 'react-icons/io5'
import useTranslation from 'next-translate/useTranslation'

interface TypeState {
  isModalVisible: boolean
  setIsModalVisible: (c: boolean) => void
}

const ModalInfo = ({
  isModalVisible,
  setIsModalVisible
}: TypeState): JSX.Element => {
  const { t } = useTranslation()

  return (
    <>
      {isModalVisible ? (
        <section className='s-modal-warning'>
          <div className='s-modal-close'>
            <IoCloseSharp onClick={() => setIsModalVisible(false)} />
          </div>
          <p>{t('uploadstores:modal-warning-1')}</p>
          <p>{t('uploadstores:modal-warning-2')}</p>
          <p>{t('uploadstores:modal-warning-3')}</p>
        </section>
      ) : null}
    </>
  )
}

export default ModalInfo
