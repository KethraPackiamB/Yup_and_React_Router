import Form from 'react-bootstrap/Form';
import {useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {Button} from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import {useState} from "react";


export const CustomerDataForm = () =>{

    const schema = yup.object().shape({
        fullName: yup.string().required("Required"),
        email: yup.string().email("Invalid Email").required("Required"),
        phone: yup.string().required("Required").matches(/^\d{10}$/,"Invalid Number"),
        country:yup.string().required("required").notOneOf([""],"Please Select a Country"),
        userMessage: yup.string().required("Required")
})

    const {register, handleSubmit, reset, formState:{errors}} = useForm({resolver:yupResolver(schema)});

    const [successMessage, setSuccessMessage] = useState("");


    const onSubmit = (data) => {
       
        console.log(data);
        setSuccessMessage("Submitted Successfully");
        reset();
        setTimeout(()=>setSuccessMessage(""),5000);
    };

  
   return(
        <div className='container w-50 my-4'>
            <h2  className='container my-3'>User Contact Form</h2>
            <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3">
        <Form.Label className='d-flex justify-content-start'>Full Name: </Form.Label>
        <Form.Control placeholder="Enter your Name" {...register('fullName')}/>
        {errors.fullName && <p style={{color:"red",fontSize:"13px"}}>{errors.fullName.message}</p>}
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label className='d-flex justify-content-start'>Email : </Form.Label>
        <Form.Control placeholder="Enter Email" {...register('email')} />
        {errors.email && <p style={{color:"red",fontSize:"13px"}}>{errors.email.message}</p>}
      </Form.Group>
         <Form.Group className="mb-3">
        <Form.Label className='d-flex justify-content-start'>Phone : </Form.Label>
        <Form.Control placeholder="Enter Phone Number" {...register('phone')} />
        {errors.phone && <p style={{color:"red",fontSize:"13px"}}>{errors.phone.message}</p>}
      </Form.Group>
      <Form.Group as={Col} controlId="formGridState" className="mb-3">
          <Form.Label className='d-flex justify-content-start'>Country</Form.Label>
          <Form.Select defaultValue="Choose..."  {...register('country')} >
            <option value="">Choose...</option>
            <option value="United States">United States</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="India">India</option>
            <option value="Russia">Russia</option>
            <option value="France">France</option>
            <option value="China">China</option>
            <option value="Australia">Australia</option>
            <option value="Brazil">Brazil</option>
            <option value="Iran">Iran</option>
            <option value="Pakistan">Pakistan</option>
          </Form.Select>
          {errors.country && <p style={{color:"red",fontSize:"13px"}}>{errors.country.message}</p>}
        </Form.Group>
       <Form.Group className="mb-3">
        <Form.Label className='d-flex justify-content-start'>Message : </Form.Label>
        <Form.Control as="textarea"{...register('userMessage')} />
        {errors.userMessage && <p style={{color:"red",fontSize:"13px"}}>{errors.userMessage.message}</p>}
      </Form.Group>

      <div>
        {successMessage && <p style={{color:"green",fontSize:"15px"}}>{successMessage}</p>}
      </div>

      <Button variant="primary" type="submit">Submit</Button>
    </Form>

        </div>
    )
}