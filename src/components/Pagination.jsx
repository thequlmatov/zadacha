import React from 'react'

const Pagination = ({ id, page }) => {
  return (
    <div>
      <div className="pagination">
        <a class="active" href={page}>{id}</a>
      </div>

    </div>



  )
}

export default Pagination