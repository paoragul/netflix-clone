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
						<svg viewBox="0 0 111 30" focusable="true"><title></title><g id="netflix-logo"><path 
						d="M1540 3010 c0 -1383 2 -1560 15 -1560 8 0 59 7 113 15 53 8 239 32
						412 55 173 22 353 50 399 61 237 59 397 171 484 337 65 125 78 184 89 422 15
						321 -8 481 -88 617 -42 73 -125 148 -204 185 l-69 32 52 30 c117 67 197 179
						239 335 19 66 21 103 21 291 0 190 -2 224 -21 295 -77 283 -243 403 -599 434
						-65 6 -281 11 -480 11 l-363 0 0 -1560z m857 1099 c48 -23 75 -56 100 -121 14
						-35 17 -80 17 -238 0 -180 -1 -199 -22 -252 -43 -108 -128 -156 -292 -164 -52
						-3 -112 -6 -132 -8 l-38 -4 0 404 0 404 162 0 c143 0 167 -2 205 -21z m8
						-1220 c60 -17 119 -82 140 -152 14 -48 16 -98 13 -320 -3 -247 -4 -264 -25
						-303 -50 -94 -118 -125 -313 -144 -63 -6 -132 -13 -152 -16 l-38 -6 0 471 0
						470 53 4 c120 8 285 6 322 -4z" id="Fill-14"></path>
						<path d="M3885 4558 c-2 -7 -101 -573 -220 -1258 -119 -685 -232 -1338 -252
-1453 -20 -114 -34 -209 -32 -211 6 -5 442 14 448 20 4 3 90 532 91 557 0 4
126 7 280 7 l280 0 5 -22 c2 -13 22 -139 44 -281 22 -142 41 -260 43 -262 4
-4 482 -23 486 -20 1 1 -54 328 -123 726 -211 1217 -375 2153 -381 2182 l-6
27 -329 0 c-255 0 -331 -3 -334 -12z m425 -1203 c55 -368 103 -685 107 -702
l5 -33 -222 0 -222 0 5 28 c3 15 52 339 108 720 62 413 106 686 111 675 4 -10
53 -319 108 -688z"/>
<path d="M5437 4563 c-9 -9 -7 -1515 3 -2023 7 -369 9 -412 29 -485 27 -100
80 -214 132 -281 113 -147 322 -245 585 -275 358 -40 597 104 674 408 37 143
41 295 38 1498 l-3 1160 -235 0 -235 0 -5 -1245 c-6 -1375 -1 -1285 -68 -1342
-45 -38 -95 -51 -169 -45 -124 10 -215 79 -243 187 -5 19 -12 578 -16 1243
l-7 1207 -237 0 c-130 0 -240 -3 -243 -7z"/>
</g></svg>
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