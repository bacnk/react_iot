import { useState } from "react";

function Switch () {
    const [isChecked,setIsChecked] = useState(false);
    function toggleCheckBox() {
 setIsChecked((preState) => !preState);
 const xhr = new XMLHttpRequest();
 const state = isChecked ? 0 : 1;
 xhr.open('GET',`update?relay=element.id&state=${state}`,true);
 xhr.send();

    }

return (
    <>
    <h2> ESP WWEV</h2>
    <div className="switch">
        <input  type="checkbox" checked={isChecked} onChange={toggleCheckBox}/>
        <span className="slider"></span>
    </div>
    </>
);
}
export default Switch;