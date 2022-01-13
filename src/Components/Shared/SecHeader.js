import React, { useState, useEffect } from "react";
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import "./SecHeader.css";
import { Link } from "react-router-dom";
import logo from "./img/logo1.png";
import { useNavigate } from "react-router-dom";

 
function SecHeader() {
	const navigate = useNavigate();

	const [selectValue, setSelectValue] = useState('Input'); 

	const list = [
		{name: 'Input'},
		{name: 'Output'},
		{name: 'Processing'},
		{name: 'Storage'},
	  ];

	const handleCreate = (e) => {
		e.preventDefault()
		// alert(selectValue)
		
		if(selectValue === "Input") {
			navigate('/input')
		} else if (selectValue === "Output"){
			navigate('/output')

		}else if (selectValue === "Processing") {
			navigate('/processing')

		} else if (selectValue === "Storage") {
			navigate('/storage')

		}
		

	  }
	

	return (
		<nav class="navbar navbar-dark bg-dark">
			<div class="container-fluid">
				<Link to="/">
					<a class="navbar-brand" href="#">
						<img src={logo} className="logo_header" />
					</a>
				</Link>
			<form class="d-flex">
          <select
		  	value={selectValue}
			onChange={ event => setSelectValue(event.target.value)}
            class="form-select form-select-sm spacing"
            aria-label=".form-select-sm example">
            {
				list.map( item => (
					<option value={item.name}>{item.name}</option>
				))
			}
          </select>

          {/* <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          /> */}
          <button class="btn btn-danger" type="submit" onClick={handleCreate}>
            Search
          </button>
        </form>



		</div>

		</nav>

		
	);
}
export default SecHeader;
