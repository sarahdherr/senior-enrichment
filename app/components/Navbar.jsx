import React from 'react';
import { Link } from 'react-router';

export default function Navbar () {
	return (
		
		<nav className="navbar navbar-fixed-top" role="navigation">
			<div className="navbar-header" id="brandname">
				<button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
					<span className="sr-only">Toggle nav</span>
					<span className="icon-bar"></span>
					<span className="icon-bar"></span>
					<span className="icon-bar"></span>
				</button>
				<a className="navbar-brand" href="#">
					<span> Hamilton Academy </span>
				</a>
			</div>

			<div className="collapse navbar-collapse" id="mainnav">
				<ul className="nav navbar-nav">
					<li>
						<Link to={`/`}>Home</Link>
					</li>
					<li>
						<Link to={`/campuses`}>Campuses</Link>
					</li>
					<li>
						<Link to={`/students`}>Students</Link>
					</li>
				</ul>
			</div>
		</nav>
	)
}