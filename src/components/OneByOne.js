import React from 'react';

class OneByOne extends React.Component{
    constructor(props){
        super(props);
        this.state = {spans:0};
        this.myRef = React.createRef();
    }
    componentDidMount(){
        console.log(this.myRef);
        this.myRef.current.addEventListener('load',(e)=>{
            const height = this.myRef.current.clientHeight
            const spans = Math.ceil(height/10);
            this.setState({spans:spans});
        });
        
    }
    render(){
        return(
        <div style={{gridRowEnd: `span ${this.state.spans}` }}>
            <img ref={this.myRef}
            src={this.props.image.urls.regular}
            alt={this.props.image.alt_description}
            />
        </div>
        )
    }
}

export default OneByOne;