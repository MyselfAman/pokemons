import React from 'react'

export default function pokenmon({gotoNextPage , gotoPrevPage}) {
  return (
    <div>
       {gotoPrevPage && <button onClick={gotoPrevPage}>Prev</button>}
        <br/>
        {gotoNextPage && <button onClick={gotoNextPage}>Next</button>}
    </div>
  )
}
