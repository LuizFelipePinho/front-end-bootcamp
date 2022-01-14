import React, { useEffect, useState } from "react";
import Gallery from "./Gallery/Gallery";
import HotDeal from "./HotDeal/HotDeal";
import axios from "axios";
import Product from "./Gallery/Card/Card";
import Navbar from "../Components/Navbar/Navbar";
import Title from '../Components/title/title'
export default function Pages() {
	const [produtos, setProdutos] = useState([]);
	const [getApi, setgetApi] = useState(false);

	const getData = async () => {
		await axios.get("/product").then((response) => {
			setProdutos(response.data);
			setgetApi(true);
		});
	};

  
  useEffect(() => {
    if(!getApi) {
      getData()
    }

  }, [getApi])

  return (
    <div>
       {/* <Navbar  /> */}
      <HotDeal />
      <Title />            
      <Gallery >
      
      {
               produtos.map(product => (
                 <Product
                   id={product.id}
                   image={product.productPhotosHard}
                   title={product.modelHard}
                   type={product.typeHard}
                   preco={product.priceHard}
                   seller={product.Vendedor.name}
                   key={product.id}
                 />
               ))
             }
      </Gallery>
      
      
      {/* <HotDeal /> */}
      {/* <Input /> */}
     
    </div>
  );
}
