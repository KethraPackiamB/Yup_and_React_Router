import { Form } from 'react-bootstrap';

export const LoggingInState = () => {

    return(
        <div className="container">
           <h1>Log in</h1>

           <Form>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Email ID</Form.Label>
        <Form.Control type="email" placeholder="Enter Email ID" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="password"/>
      </Form.Group>
    </Form>
           
        </div>
    )
}