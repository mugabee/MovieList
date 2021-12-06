import React, {useEffect} from "react";
import IPage from "../interface/page";
import logging from "../config/logging";


const HomePage: React.FunctionComponent<IPage> = props => {

    useEffect(() => {
          logging.info(`loading ${props.name}`);    
    }, [])

    return <p>Welcome Home Richard</p>
}
export default HomePage;