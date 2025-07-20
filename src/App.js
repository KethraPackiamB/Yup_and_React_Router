import logo from './logo.svg';
import './App.css';
import {Routing} from './Multi-Page_App/Routing';
import { RoutingLink } from './User_Profile_Page/RoutingLink';
import { ConditionState } from './Protected_Route/ConditionState';
import { SimpleForm } from './Simple_Login_form/SimpleForm';
import { CustomerDataForm} from './Contact_Form/userContactForm';


function App() {
  return (
    <div className="App">
     {/* <Routing/> */}
     {/* <RoutingLink/> */}
     {/* <ConditionState isLoggedIn={false}/> */}
     {/* <SimpleForm/> */}
     <CustomerDataForm/>
    </div>
  );
}

export default App;
