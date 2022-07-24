import { Routes, Route } from 'react-router-dom';
import web from './web';
import ResourceNotFoundScreen from "../views/web/screens/default/ResourceNotFoundScreen";

/**
 * Method to create router links
 *
 * @return {JSX.Element}
 * @constructor
 */
const Router = () => {
    //Return JSX
    return (
        <Routes>
            {
                Object.values(web).map(
                    (route, index) => <Route key={index + 1} path={route.path} element={<route.screen />} />
                )
            }
            <Route component={ResourceNotFoundScreen} />
        </Routes>
    )
}

//Exporting default component
export default Router;