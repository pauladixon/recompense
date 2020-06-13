import React from 'react'
import { Link } from 'react-router-dom'
import '../../utils/userService'
import './ServiceCard.css'

function ServiceCard({ service, handleDeleteService, user }) {
    user = user === null ? user = NaN : user
    const categories = service.categories.map((category, idx) =>
        <span key={category.value}>{idx !== 0 ? ', ' : ''}{category.label}</span>)
    return (
        <>
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h2 className="panel-title">{service.name}</h2>
                </div>
                <div className="panel-body">
                    <dl>
                        <dt>Exchange: </dt> <dd>{service.exchange}</dd>
                    </dl>
                    <dl>
                        <dt>City, State: </dt> <dd>{service.city}</dd>
                    </dl>
                    <dl>
                        <dt>Categories: </dt> <dd>{categories}</dd>
                    </dl>
                    <dl>
                        <dt>Description: </dt> <dd>{service.description}</dd>
                    </dl>
                    {user._id &&
                        <dl>
                            <dt>Contact: </dt> <dd>{service.creator} at {service.contactEmail}</dd>
                        </dl>
                    }
                </div>
                <div className="panel-footer">
                    {user._id === service.user &&
                        <Link to={{
                            pathname: '/edit',
                            state: { service },
                        }}>Edit</Link>
                    } {user._id === service.user &&
                        <button className="btn-delete"
                            onClick={() => handleDeleteService(service._id)}
                        >
                            Delete
                        </button>
                    }
                </div>
            </div>
        </>
    )
}

export default ServiceCard