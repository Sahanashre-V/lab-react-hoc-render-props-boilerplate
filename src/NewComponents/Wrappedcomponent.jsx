import React, { useState } from "react";

const WrappedComponent = (OriginalComponent) => {
    function NewComponent() {
        const [state,setState] = useState(0)

      const handleChange = () => {
            setState(state + 1)
        }
            return(
                <div>
                    <OriginalComponent state={state} handleChange={handleChange}/>
                </div>
            )       
    }
    return NewComponent

}

export default WrappedComponent;