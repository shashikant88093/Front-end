
import React from 'react';


const LoadingUI: React.FC<{ loader: boolean }> = ({ loader }) => {

    return(
        <div className='loading'>
            <div className='loading_spinner'>
                {
                    loader ?<p>Loading</p>: null
                }
            </div>
        </div>
    )

}


export default LoadingUI;