import React from 'react'
import { Link } from 'react-router-dom'
import './LinkFloorItem.css'

function LinkFloorItem({ link }) {
    return (
        <>
            <Link
                to={{
                    pathname: '/linkdetail',
                    state: { link }
                }}
            >
                <div className='link-item'>
                    <div>
                        <div className='linkflooritem-detail-pronouns'>
                            <p className="pronouns">{link.pronouns}</p>
                        </div>
                        <br></br>
                        <div className='link-item-detail-name'>
                            <p className='link-name'>{link.name}</p>
                        </div>
                        <br></br>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default LinkFloorItem