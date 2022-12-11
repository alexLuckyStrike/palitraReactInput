import React from 'react';

class Card extends React.Component{

    render(){
        let CardStyle = {
            width:'300px',
            height:'250px',
            boxShadow:'0  0 5px 1px black',
            backgroundColor:this.props.color
        }

        return(
            <div style={CardStyle}></div>
        )
    }
}

export default Card;