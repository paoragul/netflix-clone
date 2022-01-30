import React from 'react';

function HeroTitle(props){
	const background={
		position:'relative',
		backgroundImage:`url(${props.clicked.img})`,
		backgroundSize:'cover',
		height:'50vw',
		fontSize:'1.25vw'
	}
	const info={
		width:'30%',
		position:'absolute',
		left:'20px',
		bottom:'20px',
	}
	const synopsis={
		backgroundColor:'rgba(0,0,0,0.90)',
		padding:'10px',
		textAlign: 'left',
	}
	console.log(props)
	return (
		<div style={background}>
			<div style={info}>
				<img style={{width:'100%'}} src={props.handleTitleClicked}/>
				{/* <div style={{display:'flex'}}>
					<div className='hover-icon'>
						<i className="fas fa-play"></i> Play
					</div>
					<div className='hover-icon' >
						<i className="fas fa-plus"></i> My List
					</div>
				</div> */}
				<div style={synopsis}>
					<p style={{fontWeight:'bold'}}>{props.clicked.type}</p>
					<p>{props.clicked.tags[0]}</p>
				</div>
			</div>
		</div>
		)
}

export default HeroTitle;