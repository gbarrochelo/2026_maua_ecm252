// rafce
import React from 'react'
const Feedback = ({ textoOK, textoNOK, funcaoOK, funcaoNOK }) => {
    return(
        <div
        className="d-flex justify-content-evenly m-2">
        {/* button[type=button].btn.btn-*2 */ }
            <button
            type="button"
            className="btn btn-primary">

            </button>

            <button
            onClick={funcaoNOK}
                type="button"
                classname="btn btn-danger">
                {textoNOK}
            </button>

        </div>
    )}