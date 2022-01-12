import styled from "styled-components";

export const Container = styled.div`
	height: 100%;
	display: flex;
	flex-wrap: wrap;
`;
export const Card = styled.div`
	width: 19rem;
	height: 29rem;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
	border-radius: 0.4rem;
	margin: 1rem;
`;
export const CardCover = styled.div`
	max-width: 100%;
	height: 13.5rem;
	border: 0 0 02rem 0;
	display: flex;
	justify-content: center;
	aling-item: center;
`;
export const Img = styled.img`
	width: 13.5rem;
	height: 12rem;
`;
export const CardContent = styled.div`
	flex: 1;
`;
export const NameProduct = styled.h3`
	text-align: center;
	font-family: arial;
	font-size: 1.4em;
`;
export const ItemText = styled.p`
	text-align: justify;
	padding-left: 0.8rem;
	font-family: arial;
	font-size: 1em;
`;
export const Price = styled.h3`
	text-align: left;
	padding-left: 0.8rem;
	font-family: arial;
	font-size: 1em;
`;
export const Btn = styled.button`
	width: 2.2rem;
	height: 2.2rem;
	margin: 0.9rem;
	background-color: #d10024;
	border: none;
	border-radius: 50%;
	&:hover {
		
		
		background-color: #e9f5f5;
		transform: scale(1.1);
	}
`;
export const ContainerBtn = styled.div`
  display: flex;
  justify-content:center;
  background-color: #D10024;
  margin-top: 1.2rem;
  border-radius 0 0 0.4rem 0.4rem ;
`;
