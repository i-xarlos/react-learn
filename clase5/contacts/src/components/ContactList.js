import React from 'react'
import LoaderHOC from './HOC/LoaderHOC'

const ContacList = ({ contacts , filterText }) => {
    
    const filteredContacts = contacts.filter(contact => (
        contact.name.indexOf(filterText) !== -1
    ))

    return(
        <ul>
            {
                filteredContacts.map((contact) => (
                        <li key={contact.email}>
                            <img src={contact.picture} role="presentation"/>
                            <div className="contactData">
                                <strong>
                                    {contact.name}<br/>
                                    <small>{contact.email}</small>
                                </strong>
                            </div>
                        </li>
                    )

                )

            }
        </ul>
    )
}

export default LoaderHOC('contacts')(ContacList)