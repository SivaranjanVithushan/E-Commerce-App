import { Helmet } from 'react-helmet';
import React from 'react'

const meta = (props) => {
  return (
    <Helmet>
        <meta charSet="utf-8" />
        <title>{props.title}</title>
    </Helmet>
  )
}

export default meta