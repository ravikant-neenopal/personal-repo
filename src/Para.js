import React, { useState } from 'react'

function Para() {
const [visibility, setVisibility] = useState(true);
  return (
      <>
        <button onClick={()=>  setVisibility(!visibility)}>{visibility ? 'Hide' : 'show'}</button>
        <p className={`${visibility? 'd-block' : 'd-none'}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna eu tincidunt consectetur, nisi nisl aliquam enim, vitae facilisis erat urna nec erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        </p>
      </>
  )
}

export default Para