import { LoggedInState } from "./LoggedInState";
import { LoggingInState } from "./LoggingInState";


export const ConditionState = (e) => {
    const isLoggedIn = e.isLoggedIn;
    

    return(
        <div>
            {isLoggedIn? <LoggedInState/> : <LoggingInState/>}
        </div>
    )
}