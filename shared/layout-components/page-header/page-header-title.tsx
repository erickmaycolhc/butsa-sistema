"use client"

import React from 'react'

interface Props {
  title: string;
  item: string;
  active_item: string;
}

const PageHeaderTitle = ({ title, item, active_item }: Props) => {
  return (
    <div className="page-header">
      <div>
        <h2 className="main-content-title tx-24 mg-b-5">{title}</h2>
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a>{item}</a></li>
          <li className="breadcrumb-item active" aria-current="page">{active_item}</li>
        </ol>
      </div>
      <div className="d-flex">
        <div className="justify-content-center">
          <button type="button" className="btn btn-white btn-icon-text my-2 me-2">
            <i className="fe fe-download me-2"></i> Import
          </button>
          <button type="button" className="btn btn-white btn-icon-text my-2 me-2">
            <i className="fe fe-filter me-2"></i> Filter
          </button>
          <button type="button" className="btn btn-primary my-2 btn-icon-text">
            <i className="fe fe-download-cloud me-2"></i> Download Report
          </button>
        </div>
      </div>
    </div>
  )
}

export default PageHeaderTitle