var React = require('react');
var createReactClass = require('create-react-class');
var ListItem = React.createReactClass({
		//render: function(){//Render function return JSX
		render(){
			return(
				<div>
				<li>
						<h4> {this.props.ingredient}</h4>
				</li>
			</div>
			)
		}
});

module.exports = ListItem;

https://www.udemy.com/react-flux/learn/v4/t/lecture/4019758?start=0 //Sec3- Lecture 19

https://www.tutorialspoint.com/reactjs/reactjs_flux_concept.htm
https://github.com/NayanaKolhe/react-skeleton/commit/f44a114209dd10913f79408ce9599ec7b4caf00d
