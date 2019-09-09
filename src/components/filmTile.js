import React from 'react';

class FilmTile extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			filmData: {},
		}
	}

	componentDidMount() {
		try {
			fetch(this.props.film)
				.then(res => res.json())
				.then((data => {
				this.setState({ 
						filmData: data,
				});
			}));
		}
		catch(error) {
			console.log(error);
		}
	}

	formatDate(date) {
		let d = new Date(date);
		const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
		return d.toLocaleString('en-US', options);
	}

	render() {
		const { filmData } = this.state;
		return (
			<div className="column">
				<div className='filmTile'>
					<h3>{filmData.title} : Episode {filmData.episode_id}</h3>
					<div className="filmDetails">
						<p>Directed by:</p><h4>{filmData.director}</h4>
						<p>Released on:</p><h4>{!filmData.release_date ? '-' 
							: this.formatDate(filmData.release_date)}</h4>
					</div>
				</div>
			</div>
		)}
}
export default FilmTile;