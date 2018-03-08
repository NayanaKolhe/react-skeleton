var React = require('react');
var createReactClass = require('create-react-class');
var ListItem = require('./ListItem');

var ingredients = [{"id":1, "text":"Apple"},{"id":2, "text":"Banana"},{"id":3, "text":"Mango"}];

var List = React.createReactClass({
  //render: function(){
  render(){
    var listItems = ingredients.map(function(item){
      return<ListItem key={item.id} ingredient={item.text} />;
    });
    return(<div><ul>{listItems}</ul></div>);
  }
});

module.exports = List;
