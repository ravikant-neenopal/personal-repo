import React from 'react'

function Post({id,quote}) {
  return (
      <div className='quote-main'>
          
          <h3>{quote}</h3>
      </div>
  )
}

export default Post