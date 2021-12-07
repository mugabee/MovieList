import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../config/firebase';
import IPageProps from '../interface/page';

const HomePage: React.FunctionComponent<IPageProps> = props => {
    
    return (
        <div>
            <div>
                
                <div>
                    <p>
                        Welcome to this page that is protected by Friebase auth!<br />
                        Change your password <Link to="/change">here</Link>.
                    </p>
                    <p>
                        User: {auth.currentUser?.displayName}<br />
                        Click <Link to="/logout">here</Link> to logout.
                    </p>
                </div>
            </div>
        
        </div>
    );
}

export default HomePage;