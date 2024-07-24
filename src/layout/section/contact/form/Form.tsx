import styled from "styled-components"; 
import { Button } from "../../../../components/button/Button";


export const Form = ()=> {
    return(
        <StyledForm>

            <Field placeholder={"name"}/>
            <Field placeholder={"aim"}/>
            <Field placeholder= {"message"} as ={"textarea"}/>
            <Button type={"submit"}>Send Message</Button>
        </StyledForm>
    );
};

const StyledForm = styled.form`
  max-width: 400px;
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Field = styled.input`
width:400px;
height:20px;
`;


