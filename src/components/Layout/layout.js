import React from "react"
import Header from "../Header/header"
import Footer from "../footer/footer"
import PropTypes from "prop-types"
const Layout = ({children}) => {
    return(
    <div>
        <header/>
        {children}
        <footer/>
    </div>
    )


}
Layout.propTypes = {
    children: PropTypes.node.isRequired,
}
export default Layout