import styled from "styled-components";


const List = styled.div`
  width: 100vw;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CardList = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  
`;

const Text = styled.div`
`;


const Container = (props) => {
    return (
      
      
        <List>
         <Text>
         <h2 className='container-title'>{props.title}</h2>
         </Text>
          <CardList>
            {props.children}
          </CardList>
        </List>
       
     )
  };
  export default  Container;