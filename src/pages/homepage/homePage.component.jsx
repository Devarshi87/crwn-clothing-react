import React from 'react'
import './homePage.styles.scss'
import Directory from '../../components/directory/directory.component'

export const HomePage = () => {
    return(
        <div className="homepage">
          <Directory/>
        </div>
    );
}