import React from "react";

export default function Title({name,title}) {
    return(
        <div className="row">
            <div className="col-10 text-center mx-auto my-2 text-title">

                <h1 className="text-capitalize font-weight-bolt">
                    {name} {title}
                </h1>
                
            </div>

        </div>
    )
}