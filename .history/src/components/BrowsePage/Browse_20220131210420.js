import React, { Component } from 'react';
import './browse.css';
import Navbar from './Navbar';
import HeroTitle from './HeroTitle';
import BrowseDrop from './BrowseDrop';
import TitleRow from './TitleRow';
import SearchResults from './SearchResults';
import accueil from '../../img/login/image_accueil-1.png';

import titles from './mockData';


	class Browse extends Component{
	constructor(props){
		super(props);
		this.state={
			top:true,
			navSelected:null,
			myList:[],
			clicked:{
				"name": "Init",
				"img": accueil,
				"newRelease": true,
				"type": "Teoría de la forma - Clasificación de imagenes",
				"genre": "Children",
				"tags": [
					""
				]
			},
			selectedIndex:null,
			searchOpen:false,
			searchText:''
		}
		this.checkIfTop=this.checkIfTop.bind(this);
		this.hoverSelect=this.hoverSelect.bind(this);
		this.handleAddToList=this.handleAddToList.bind(this);
		this.searchTitleResults=this.searchTitleResults.bind(this);
		this.handleTitleSelect=this.handleTitleSelect.bind(this);
		this.handleSearchOpen=this.handleSearchOpen.bind(this);
		this.handleTitleClicked=this.handleTitleClicked.bind(this);
	}

	componentDidMount(){
		window.addEventListener('scroll', this.checkIfTop);
	}

	componentWillUnmount(){
		window.removeEventListener('scroll', this.checkIfTop);
	}

	checkIfTop(){
		if(window.scrollY === 0){
			this.setState({top:true})
		} else {
			this.setState({top:false})
		}
	}

	hoverSelect(name){
		this.setState({navSelected:name});
	}

	handleSearchOpen(){
		this.state.searchOpen ? this.setState({searchOpen:false}) : this.setState({searchOpen:true})
	}

	filterTitles(category,subCategory){
		return titles.filter(title=>title[category]===subCategory)
	}

	searchTitleResults(){
		return titles.filter(title=>
			title.name.toLowerCase().includes(this.state.searchText.toLowerCase())
		)
	}

	handleSearchChange=(event)=>{
		this.setState({searchText:event.target.value})
	}

	handleAddToList(title){
		let currentList=this.state.myList.slice();
		if(!this.state.myList.includes(title)){
			currentList.unshift(title);
		}
		this.setState({myList:currentList});
	}
	handleTitleSelect(id){
		this.setState({selectedIndex:id});
		window.scrollTo(0,0);
	}

	handleTitleClicked(title){
		
		console.log(title)
		this.setState({clicked:title});
	}

	render(){

	return(
		<div>
			<Navbar 
				top={this.state.top} 
				hoverSelect={this.hoverSelect} 
				searchOpen={this.state.searchOpen}
				onSearchOpen={this.handleSearchOpen}
				onSearchChange={this.handleSearchChange}
				clicked={this.state.clicked} />
			{
				this.state.navSelected==='browse'? <BrowseDrop hoverSelect={this.hoverSelect} /> : null
			}
			<HeroTitle showTitleText={this.state.selectedIndex} clicked={this.state.clicked} />
			{ this.state.searchText ? 
				<SearchResults 
					titles={this.searchTitleResults()} 
					selected={this.state.selectedIndex}
					handleTitleSelect={this.handleTitleSelect}  /> :
				<div>
{/* 					<TitleRow 
						header='kfjefhbkjhflk' 
						titles={this.state.myList}
						onAddToList={this.handleAddToList}
						selected={this.state.selectedIndex}
						handleTitleSelect={this.handleTitleSelect} /> */}
					<TitleRow 
						header='Monosemia/Polisemia' 
						titles={this.filterTitles('genre','Monosemia/Polisemia')}
						onAddToList={this.handleAddToList}
						selected={this.state.selectedIndex}
						clicked={this.state.clicked}
						handleTitleSelect={this.handleTitleSelect}
						handleTitleClicked={this.handleTitleClicked} />
					<TitleRow 
						header='Grado de iconicidad' 
						titles={this.filterTitles('genre','Grado de iconicidad')}
						onAddToList={this.handleAddToList}
						selected={this.state.selectedIndex}
						handleTitleSelect={this.handleTitleSelect} 
						handleTitleClicked={this.handleTitleClicked}/>
					<TitleRow 
						header='Complejidad cualitativa y cuantitativa' 
						titles={this.filterTitles('genre','Complejidad cualitativa y cuantitativa')}
						onAddToList={this.handleAddToList}
						selected={this.state.selectedIndex}
						handleTitleSelect={this.handleTitleSelect}
						handleTitleClicked={this.handleTitleClicked} />
					<TitleRow 
						header='Abstraccíon/Figuracíon' 
						titles={this.filterTitles('genre','Abstraccion/Figuracion')}
						onAddToList={this.handleAddToList}
						selected={this.state.selectedIndex}
						handleTitleSelect={this.handleTitleSelect}
						handleTitleClicked={this.handleTitleClicked}/>
				</div>
			} 
			
		</div>
	)
	}
}

export default Browse;