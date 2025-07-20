import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProfile } from "./UserProfile";
import { UserDetail } from "./UserDetail";

export const RoutingLink = () => {

    return(
        <div>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<UserDetail/>}></Route>
                <Route path="/user/:id" element={<UserProfile/>}></Route>
            </Routes>
            </BrowserRouter>
        </div>
    )
}