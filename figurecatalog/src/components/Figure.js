import React from 'react'

const Figure = () => {
    return (
        <div  className="border mb-3 p-2">
            <div className="d-flex justify-content-between align-items-center">
                <div>
                    <div className="name" >Name</div>
                    <div className="series" >Series</div>
                </div>
                <div>
                    <i className="fas fa-box"></i>
                    <i className="fas fa-trash"></i>
                </div>
            </div>
        </div>
    )
}

export default Figure
