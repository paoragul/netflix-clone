import React, { Component } from 'react';
import profile from '../../img/login/profile.png';
import SearchBox from './SearchBox';


import { Link } from "react-router-dom";

function Navbar(props){
	const navStyle={
		display:'flex',
		justifyContent:'space-between',
		padding:'0 20px',
		backgroundColor: props.top ? 'transparent':'black',
		transition: 'background-color 1s',
		position: 'fixed',
		width:'100%',
		zIndex:'2'
	}

	const subNav={
		display:'flex',
		alignItems:'center',
		paddingRight:'20px'
	}

	return(
		<div style={navStyle}>
			<div style={subNav}>
					<Link className='logo' to='/'>
						<svg viewBox="0 0 111 30" focusable="true"><title></title><g id="netflix-logo"><image src={profile}  id="Fill-14"></image></g></svg>
					</Link>
				{/* <div onMouseEnter={()=>props.hoverSelect('browse')} onMouseLeave={()=>props.hoverSelect(null)}>
					<div className='nav-item'> 
						Browse <i className="fas fa-caret-down"></i>
					</div>
				</div> */}
			</div>
			<div style={subNav}>
				<div className='nav-item'>
					<SearchBox 
					searchOpen={props.searchOpen} 
					onSearchOpen={props.onSearchOpen}
					onSearchChange={props.onSearchChange}/>
				</div>
				{/* <div className='nav-item'>
					<a>DVD</a>
				</div>
				<div className='nav-item'>
					<i className="fas fa-bell"></i>
				</div> */}
				<div className='nav-item'>
					<img style={{height:'100%'}} src={profile}/>
				</div>
			</div>
		</div>
	)
}

export default Navbar;