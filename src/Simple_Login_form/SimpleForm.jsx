import Form from 'react-bootstrap/Form';
import {useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {Button} from 'react-bootstrap';

export const SimpleForm = () => {

    const schema = yup.object().shape({
    email: yup.string().email("Invalid Email").required("Required"),
    password: yup.string().required("Required").min(6,"password should be in 6 characters"),
    confirmPassword: yup.string().oneOf([yup.ref("password")], "Passwords must Match").required("Required"),
});

const {register, handleSubmit, formState:{errors}} = useForm({resolver:yupResolver(schema)});

const onSubmit = (data) => {
    console.log(data);
}

    return(
        <div className='container m-4 w-50'>
            <h1 className='my-4'>Simple Login Form</h1>
             <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3">
        <Form.Label className='d-flex justify-content-start'>Email address : </Form.Label>
        <Form.Control placeholder="Enter email" {...register('email')}/>
        {errors.email && <p style={{color:"red",fontSize:"15px"}}>{errors.email.message}</p>}
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label className='d-flex justify-content-start'>Password : </Form.Label>
        <Form.Control placeholder="Password" {...register('password')} />
        {errors.password && <p style={{color:"red",fontSize:"15px"}}>{errors.password.message}</p>}
      </Form.Group>
       <Form.Group className="mb-3">
        <Form.Label className='d-flex justify-content-start'>Confirm Password : </Form.Label>
        <Form.Control placeholder="Password" {...register('confirmPassword')} />
        {errors.confirmPassword && <p style={{color:"red",fontSize:"15px"}}>{errors.confirmPassword.message}</p>}
      </Form.Group>

      <Button variant="primary" type="submit">Submit</Button>
    </Form>

    
        </div>
    )
}