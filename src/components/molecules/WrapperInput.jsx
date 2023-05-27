import Input from '../atoms/Input'
import Label from '../atoms/Label'
import styled from 'styled-components';
const StyledDiv = styled.div`
gap: 20px;
display: flex;
flex-direction: column;
`;
function WrapperInput({type, placeholder, msn, onChange, name,errors,CNH1, action}) {
  

  return (
    <StyledDiv>
        <Label msn={msn} />
        <Input type={type} onChange={onChange} placeholder={placeholder} name={name} action={action}/>
        <h1 className={CNH1}>{errors}</h1>
    </StyledDiv>
  )
}

export default WrapperInput;