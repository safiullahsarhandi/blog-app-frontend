import React from "react";
import Header from "./partials/HeaderPartial";
// import Footer from "./partials/FooterPartial";

/**
 * Method to create the footer
 * screen JSX
 *
 * @return {JSX.Element}
 * @constructor
 */
const MasterLayout = (props) => {
    return (
        <React.Fragment>
            <Header />
            <div>
                { props.children }
            </div>
            {/* <Footer /> */}
        </React.Fragment>
    )
}

//Exporting component
export default MasterLayout;