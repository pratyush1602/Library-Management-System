import React from 'react'

const Book =(props)=>{
    let { title, description, count} = props;
    return (
        <div>
            <div className="card my-3 " style={{ width: '100%', height: 'auto' }}>
                <img src="https://www.shutterstock.com/shutterstock/photos/2406963053/display_1500/stock-photo-hardcover-book-mockup-standing-isolated-on-plain-background-perfect-for-overlaying-graphic-2406963053.jpg" className="card-img-top" alt="..."  style={{ maxHeight: '180px', objectFit: 'cover' }}/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p>count = {count}</p>
                    </div>
            </div>
        </div>
    )
}

export default Book


