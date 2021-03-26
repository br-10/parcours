
import React from 'react'
import GatsbyLink from 'gatsby-link'

const Link = ({ children, to, ...other }) => {
  const internal = /^\/(?!\/)/.test(to)
 console.log(other.color)
 console.log(to)
 const color = "red"
  if (internal) {
    return (
      <GatsbyLink style={{ color:`${color}`}} to={to} {...other}>
        {children}
      </GatsbyLink>
    )
  }

  return (
    <a style={{color:`${color}`}} href={to} {...other}>
      <span style={{color}}>{children}</span>
    </a>
  )
}

export default Link
  