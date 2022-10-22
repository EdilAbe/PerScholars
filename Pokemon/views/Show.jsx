const React = require('react') 

class Show extends React.Component { 
	render () { 
        const  pokemon = this.props.pokemon
		return ( 
            <div key={''}>
	            <a href={`/pokemon`}>Home</a>
               <h2 >{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
                <ul>
                    <li style={styles.li}> 
                     <br />
                        <img src={`${pokemon.img}.jpg`} width="250" />
                     
                    </li>
                </ul>
            </div>
			) 
		} 
	} 
	
module.exports = Show