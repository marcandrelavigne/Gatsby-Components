import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Button = ({ title, link, appearance }) => (
    <Link
    	className={appearance}
    	to={link}
    	style={{
            padding: '10px 20px',
            borderRadius: '5px',
            color: '#FFF',
            textDecoration: 'none',
            marginRight: '20px'
        }}
    >
      {title}
    </Link>
)

export default Button
