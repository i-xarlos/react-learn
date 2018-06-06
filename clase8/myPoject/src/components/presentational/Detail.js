import React from 'react';

const Detail = ( {  name ,  email , username , address , company  } ) => {
  return (
    <div className="box">
      
    <article className="media">
      <div className="media-left">
        <figure className="image is-64x64">
          <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image"/>
        </figure>
      </div>

      <div className="media-content">
        <div className="content">
          <p>
            <strong>{name}</strong> <small>{email}</small> <small>{username}</small>
            <br/>
              <small>{address.city}</small>
            <br/>
              <small>Company Name:{company.name}</small>
              </p>
        </div>   
      </div>
    </article>
    
  </div>
  )
}

export default Detail