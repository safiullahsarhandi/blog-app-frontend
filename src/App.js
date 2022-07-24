
import MasterLayout from "views/web/layouts/MasterLayout";
import Router from 'routes/Router';

import 'assets/scss/App.scss';

/**
 * Method to create the root App component
 *
 * @return {JSX.Element}
 * @constructor
 */
function App() {

    //Return JSX
    return (
        <MasterLayout>
            <Router />
        </MasterLayout>
    )
}

export default App;
