import React from 'react';
import NameBox from './nameBox';
import FilmTile from './filmTile';

class CharacterSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCharacter: '',
            errors: '',
            results: [],
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);    
    }

    handleChange(e) {
			e.preventDefault();
			const value = e.target.value;			
			this.setState({selectedCharacter: e.target.name, results: []});
			this.handleSubmit(value);
    }

    handleSubmit(person) {
			const BASE_URL = "https://swapi.co/api/people/";
			try {
				fetch(BASE_URL + person)
					.then(res => res.json())
					.then((data => {
						this.setState({ 
							results: data.films,
						});
				}));
			}
			catch(error) {
				this.setState({errors: error})
				console.log(error);
			}
		}

		render() {
			const { results, selectedCharacter, errors } = this.state;
			return(
				<div className='content'>
					<h3>Choose a character to retrieve their film list: </h3>
					<form className="btn-group">
						<NameBox handleClick={this.handleChange} name='Luke Skywalker' value='1' />
						<NameBox handleClick={this.handleChange} name='Darth Vader' value='4'/>
						<NameBox handleClick={this.handleChange} name='Obi-wan Kenobi'  value='10'/>
						<NameBox handleClick={this.handleChange} name='R2-D2' value='2'/>
					</form>
					<hr />
					<h4>Results for: {selectedCharacter}</h4>
					<div className="results-table">
						{!results ? <>{errors}</>
						: results.map((film) => <FilmTile film={film} key={film.id} />)}
					</div>
				</div>
			);
		}
}

export default CharacterSearch;