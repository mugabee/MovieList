import React, {useEffect} from "react";
import IPage from "../interface/page";
import logging from "../config/logging";


const AboutPage: React.FunctionComponent<IPage> = props => {

    useEffect(() => {
          logging.info(`loading ${props.name}`);    
    }, [])

    return <p>Welcome About Richard</p>
}
export default AboutPage;