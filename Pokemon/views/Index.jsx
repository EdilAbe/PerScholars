const React = require("react");

class Index extends React.Component {
  render() {
    const {pokemon} = this.props
    return (
        <div>
           <a href='/pokemon/new'>Add Pokemon</a>
           <h1>Pokemon</h1>
           <ul>
            {pokemon.map((pokemon_, idx) => (
                <li  key={idx}>
                      <a > {pokemon_.name.charAt(0).toUpperCase() + pokemon_.name.slice(1)}</a>
                </li>
            ))
            }
        </ul>
        
      </div>
    );
  }
}


module.exports = Index