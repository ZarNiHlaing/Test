import React from "react"

function User({image, phone , cell}){
    return (
    <div className="card">
        <div className="row">
            <div className="col-3">
                <img src={image} width="50px" height="50px" />
            </div>
            <div className="col-5">
                <p>{phone}</p>
                <p>{cell}</p>
            </div>
            <div className="col-4">
                <button className="btn btn-danger btn-sm mt-4">
                   

                <i classNames="fa-solid fa-trash"></i>
                    
                </button>
            </div>
        </div>
    </div>
    )
}

export default User;