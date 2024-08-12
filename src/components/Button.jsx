import React from 'react'

const Button = ({content, disabled, children,func}) => {
  return (
    <div>
      <button disabled={disabled}  onClick={func} className={`text-white py-2 md:px-4 max-md:px-2 rounded-md ${disabled ? "bg-gray-400" : "bg-secondary"}`}>
        {content ?? children}
      </button>
    </div>
  )
}

export default Button