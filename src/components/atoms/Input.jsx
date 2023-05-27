import styled from 'styled-components';
const StyleInput = styled.input`
    outline: none;
    border: 1px solid #ddd;
    border-radius: 10px;
    background-color: #fff;
    padding-left: 20px;
    width: 385px;
    height: 66px;
    margin-top: 5px;
    border: 2.5px solid hsl(244deg 4% 36%);
    font-size: 15px;
    font-weight: bold;
`;

function Input({ type,name, onChange, placeholder,id, action}) {
    if(action == "disabled"){
        return(
            <StyleInput type={type} placeholder={placeholder} onChange={onChange} name={name} ClassName={id} disabled/>
        )
    }else{
        return(
            <StyleInput type={type} placeholder={placeholder} onChange={onChange} name={name} ClassName={id} />
        )
    }
  
}

export default Input;
