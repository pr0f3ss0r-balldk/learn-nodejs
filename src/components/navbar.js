const React = require("react");

class Navbar extends React.Component {
	render() {
		return (
			<nav class="navbar navbar-expand-sm navbar-dark bg-primary mb-3">
				<div class="container">
					<a class="navbar-brand" href="#">
						My App
					</a>
					<button
						class="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span class="navbar-toggler-icon" />
					</button>
					<div class="collapse navbar-collapse" id="navbarNav">
						<ul class="navbar-nav">
							<li class="nav-item active">
								<a class="nav-link" href="/">
									Home
									<span class="sr-only">(current)</span>
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="/about">
									About
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link disabled" href="#">
									Comming soon
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}

module.exports = Navbar;
