import React from "react"
import PropTypes from "prop-types"


import styles from '../styles/header.module.css'

const Header = ({ siteTitle }) => (
  <header className={styles.header}>
    <div className={styles.inner}>
      <h1 className={styles.topText}>
        Hi
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
