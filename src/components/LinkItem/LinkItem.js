import React from 'react'
import { Link } from 'react-router-dom'
import './LinkItem.css'

function LinkItem({ link }) {
    return (
        <>
            <div className='serviceflooritem'>
                <div>
                    <p>{link.name}</p>
                    {/* <p>{link.exchange}</p> */}
                </div>
                <div className='serviceflooritem-detail-link'>
                    <Link 
                        to={{
                            pathname: '/linkdetail',
                            state: { link }
                        }}
                    > details
                    </Link>
                </div>
            </div>
        </>
    )
}

export default LinkItem