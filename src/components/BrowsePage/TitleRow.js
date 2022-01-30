import React, { Component } from 'react';
import Title from './Title';

function TitleRow(props){

	const styles={
		overflowX:'visable',
		padding:'6vh 10vw',
		position:'relative',
		zIndex:'0',
		textAlign:'left',
		fontSize:'1.5vw'
	}

	return (
		<div style={styles}>
			<p style={{marginBottom:'10px'}}>{props.header}</p>
			{ 
				props.titles.map((title,index)=>{
					return <Title
										title={title}
										key={props.header+index}
										id={props.header+index}
										onSelect={props.handleTitleSelect}
										selected={props.selected}
										onClicked={props.handleTitleClicked}
										onAddToList={props.onAddToList}
									/>
				})
			}
		</div>
	)
}

export default TitleRow;