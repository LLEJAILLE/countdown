import { useState } from 'react'
import './style.css'

export default function Popup() {

    const [isOpen, setIsOpen] = useState(false);
    const [contentPopUp, setContentPopUp] = useState("");

    const closeWindow = () => {
        setIsOpen(false);
    }

    const openPop = () => {
        setIsOpen(true);
        setContentPopUp(
            <div className="contentPopUpOpenBlack">
                <div className="contentPopUpOpen">
                    <button onClick={closeWindow} className='close'>X</button>
                    <h1 className='titlePopup'>Fenetre pop up</h1>
                </div>
            </div>
        )
    }

    return (
        <div>

            {isOpen ? 
            <div>
                {contentPopUp}
            </div>
            :
            ""
            }

            <h1 className="title">Create a Pop up window</h1>

            <div className="boxOpenWindow">
                <button onClick={() => openPop()}>Open my Pop up</button>
            </div>

        </div>
    )
}