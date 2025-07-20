import { useParams } from "react-router-dom";

export const UserProfile = () => {

    const {id} = useParams();

    return(
        <div className="container">
            <h1>User Profile</h1>
            <h3>User ID : {id}</h3>
        </div>
    )
}