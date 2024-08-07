import React from "react"

function User(){
    return (
    <div className="card">
        <div className="row">
            <div className="col-3">
                <img src="https://th.bing.com/th/id/OIP.Q50A1jwXSoOLSteU4QiVgwAAAA?w=256&h=256&rs=1&pid=ImgDetMain" width="50px" height="50px" />
            </div>
            <div className="col-5">
                <p>phone:09876543</p>
                <p>cell:888999213</p>
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