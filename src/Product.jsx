import React from 'react'

export default function Product(props) {
  return (
    <>
    <div className='product col-lg-6 p-5'>
                <h2>{props.title}</h2>
                <p>{props.desc}</p>
            </div>
    </>
  )
}
