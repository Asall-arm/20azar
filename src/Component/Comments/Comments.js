import React from 'react'
import ErrorBox from '../ErrorBox/Errorbox'
import DeleteModal from '../DeleteModal/DeleteModal'

export default function Comments() {
  return (
    <>
    <ErrorBox msg="هیچ کامنتی یافت نشد" />
      <DeleteModal />
    </>
  )
}
