import React from 'react'
import propTypes from 'prop-types'

function Button({children,version,type,isDisabled}) {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
      {children}
    </button >
  )
}
Button.defaultProps ={
    version: 'primary',
    isDisabled: 'button',
    type: 'button'

}
Button.propTypes ={
    children: propTypes.node.isRequired,
   
}
export default Button
