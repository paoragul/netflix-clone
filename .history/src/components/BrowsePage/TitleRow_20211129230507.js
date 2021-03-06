import React, { Component } from 'react';
import Title from './Title';

function TitleRow(props){

	const styles={
		overflowX:'visable',
		padding:'5vh 10vw',
		position:'relative',
		zIndex:'0',
		textAlign:'left'
	}

	return (
		<div style={styles}>
			<p>{props.header}</p>
			{ 
				props.titles.map((title,index)=>{
					return <Title
										title={title}
										key={props.header+index}
										id={props.header+index}
										onSelect={props.handleTitleSelect}
										selected={props.selected}
										clicked={props.clicked}
										onAddToList={props.onAddToList}
									/>
				})
			}
		</div>
	)
}

export default TitleRow;