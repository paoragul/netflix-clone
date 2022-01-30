import React from 'react';

function Title(props){
	const [opacity, setOpacity] = React.useState(0.8);
	const [hoover, setHoover] = React.useState(false);
	let image = `url(${props.title.img})`;
	const styles={
		styles:{
			display:'inline-block',
			width:'35vh',
			height:'20vh',
			marginRight:'1vw',
			transition:'transform 0.5s',
			position:'relative',
			backgroundImage:`url(${props.title.img})`,
			opacity:1,
			backgroundSize:'cover',
			zIndex:props.selected===props.id?'1':'0',
			transform:props.selected===props.id?'scale(2)':'scale(1)',
		},
	}

	const infoStylTitle={
		position: 'fixed',
		fontWeight:'bold',
		paddingLeft:'0.5vw',
		opacity:1,
		paddingTop: '2vw',
		backgroundColor:'rgba(0,0,0,0.30)',
	}

	const infoStyle={
		position: 'fixed',
		lineHeight: 0.3,
		left:'0',
		bottom:'0',
		textAlign:'left',
		paddingLeft:'1vw',
		paddingRight:'1vw',
		opacity:1,
		paddingBottom: '0.5vw'
	}


	let info=null;
		if(props.selected===props.id){
				info= 
				<div>
					{/* <div style={infoStylTitle}>
						<p>{props.title.name}</p>
					</div> */}
					<div style={infoStyle}>
						{props.title.tags.map((tag,index)=>{
							return <a key={index}>  </a>
						})}
					</div>
				</div>
				
			}

	return(
				<div onMouseOver={()=>{props.onSelect(props.id); }} 
		onMouseLeave={()=>{props.onSelect(null); }} onClick={() => props.onClicked(props.title)} style={styles.styles}>
			{info}
		</div>
		)
}

export default Title;