import React from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from '../../config/firebase';
import logging from '../../config/logging';
import IPageProps from '../../interface/page';

const LogoutPage: React.FunctionComponent<IPageProps> = props => {
    const history = useHistory();

    const Logout = () => {
        auth.signOut()
        .then(() => history.push('/login'))
        .catch(error => logging.error(error));
    }

    return (
  <>
            <p className='text-center font-normal text-3xl'>Are you sure you want to logout?</p>
            <div className='text-center'>
                
                <button className="mx-10 bg-indigo-600 hover:bg-blue-700 text-white font-light py-2 px-6 rounded focus:outline-none focus:shadow-outline" onClick={() => history.goBack()}>Cancel</button>
                <button className="mx-10 bg-indigo-600 hover:bg-blue-700 text-white font-light py-2 px-6 rounded focus:outline-none focus:shadow-outline" onClick={() => Logout()}>Logout</button>
            </div>
            </>
       
    );
}

export default LogoutPage;