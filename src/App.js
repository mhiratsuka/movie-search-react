import React, { Component } from 'react'
import './App.css';
import Movies from './Movies.js'
import { InputGroup, FormControl } from 'react-bootstrap';

const movielist = [
	{ "id": 1, "title": "aaa", "overview": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vestibulum et orci non pretium. Pellentesque sit amet enim sit amet justo viverra ullamcorper eu ac nisi. In malesuada elit nunc, cursus auctor felis cursus sit amet. Praesent quis faucibus est. Vivamus quis tempor enim. Pellentesque semper condimentum venenatis. Sed aliquam, massa in tincidunt tincidunt, dui purus malesuada leo, sollicitudin malesuada sem velit in elit. Praesent congue ante velit, ut porta mauris consectetur nec. Sed mattis ac justo vitae ornare. Quisque eu lacinia libero, et vehicula elit. Nam non aliquet elit. Morbi non magna mi. Integer finibus neque orci, in mattis massa facilisis quis. Morbi sed leo fringilla, feugiat tortor sed, feugiat leo. Fusce feugiat, dolor nec consectetur pulvinar, augue leo posuere tellus, non condimentum est enim eu arcu. Fusce lobortis elementum libero malesuada congue.", "poster_path": "https://image.tmdb.org/t/p/w185/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg" },
	{ "id": 2, "title": "bbb", "overview": "orem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vestibulum et orci non pretium. Pellentesque sit amet enim sit amet justo viverra ullamcorper eu ac nisi. In malesuada elit nunc, cursus auctor felis cursus sit amet. Praesent quis faucibus est. Vivamus quis tempor enim. Pellentesque semper condimentum venenatis. Sed aliquam, massa in tincidunt tincidunt, dui purus malesuada leo, sollicitudin malesuada sem velit in elit. Praesent congue ante velit, ut porta mauris consectetur nec. Sed mattis ac justo vitae ornare. Quisque eu lacinia libero, et vehicula elit. Nam non aliquet elit. Morbi non magna mi. Integer finibus neque orci, in mattis massa facilisis quis. Morbi sed leo fringilla, feugiat tortor sed, feugiat leo. Fusce feugiat, dolor nec consectetur pulvinar, augue leo posuere tellus, non condimentum est enim eu arcu. Fusce lobortis elementum libero malesuada congue.Quisque commodo mauris sit amet ultricies dictum. Nunc faucibus lectus non ante pharetra, vitae ornare ex malesuada. Maecenas orci quam, interdum sed placerat vitae, varius eget mauris. Sed pellentesque tortor vel turpis interdum luctus. Phasellus tincidunt nibh et lacus euismod, ac bibendum nunc maximus. In aliquet nec ligula eu pellentesque. Cras aliquam aliquam porta. Proin scelerisque, nunc in imperdiet pretium, arcu purus ullamcorper lectus, non consectetur sem elit id sapien. Curabitur elementum venenatis mauris, vitae ullamcorper sapien cursus vel. Etiam eu lobortis", "poster_path": "https://image.tmdb.org/t/p/w185/cezWGskPY5x7GaglTTRN4Fugfb8.jpg" },
	{ "id": 3, "title": "ccc", "overview": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam metus nunc, venenatis varius porttitor quis, dapibus id quam. Vivamus varius et neque a viverra. Integer luctus tellus ut tellus sodales dapibus sit amet at felis. Fusce sit amet quam nec leo iaculis lacinia in in ante. In ut nibh eget massa faucibus viverra. Suspendisse eros metus, sollicitudin id placerat vitae, euismod id nisi. Curabitur non enim sed nulla semper porta non a sapien. Cras quis nisl non justo tristique egestas. Nullam bibendum diam quis mi tincidunt consectetur.", "poster_path": "https://image.tmdb.org/t/p/w185/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg" },
	{ "id": 4, "title": "ddd", "overview": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam metus nunc, venenatis varius porttitor quis, dapibus id quam. Vivamus varius et neque a viverra. Integer luctus tellus ut tellus sodales dapibus sit amet at felis. Fusce sit amet quam nec leo iaculis lacinia in in ante. In ut nibh eget massa faucibus viverra. Suspendisse eros metus, sollicitudin id placerat vitae, euismod id nisi. Curabitur non enim sed nulla semper porta non a sapien. Cras quis nisl non justo tristique egestas. Nullam bibendum diam quis mi tincidunt consectetur.", "poster_path": "https://image.tmdb.org/t/p/w185/cezWGskPY5x7GaglTTRN4Fugfb8.jpg" },
]


console.log(`movielist ${movielist}`)


class App extends Component {
	state = {
		data: [],
		loading: false,
		firstloading: true
	}

	searchMovies(searchValue) {
		console.log(`searchMovies`)
		this.setState({ loading: true })
		fetch('API here')
			.then(data => data.json())
			.then(data => this.setState({ data, loading: false, firstloading: false }))
		// .then(data => console.log(data.result[0]))
	}


	searchChangeHandler(event) {
		// console.log(`event.target.value ${event.target.value}`)
		const searchValue = event.target.value
		this.searchMovies(searchValue)
	}


	render() {
		const moviedata = this.state.data.results
		console.log(moviedata)

		return (
			<div>
				<header className="header">
					<h1>Movie Search</h1>
					<InputGroup onChange={this.searchChangeHandler.bind(this)}>
						<FormControl
							placeholder="Search Movies"
							aria-label="Search Movies"
							aria-describedby="basic-addon2"
						/>
					</InputGroup>
				</header>
				{/* {this.state.loading
					? "loading..."
					: <div>
						{this.state.data.results}
					</div>
				} */}
				{/* {this.state.firstloading
					? "We are waiting for your search"
					: < Movies movies={moviedata} />
				} */}
				< Movies movies={movielist} />
			</div >
		);
	}
}

export default App;
