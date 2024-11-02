import React from 'react'

const PageHeader = ({PageTitle}) => {
  return (
    <div className='page-header-section set-section'>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12">
                    <div className="page-header">
                        {PageTitle}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PageHeader