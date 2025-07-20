import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export const NotFound = () => {

    const navigate = useNavigate();

    const homePage = () => {
        navigate('/')
    }

    return(
        <div className='container'>
            <h1>Oops! Page not Found</h1>
            <p>The page you're looking for is not found</p>
         
            
            <Button variant="warning" onClick={homePage}>Go to Home Page</Button> 
        </div>
    )
}