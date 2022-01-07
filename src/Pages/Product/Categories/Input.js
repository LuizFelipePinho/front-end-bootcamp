import Input from "../../../Components/Products/Input";
import Sidebar from "../../../Components/Shared/Sidebar/Sidebar";
import styled from "styled-components";

const Display = styled.main`
display: flex;
flex-wrap: wrap;
`;

export default function Acessories() {
    
  return (
    <Display>
       <Sidebar/>
       <Input/>
    </Display>
  );
}
