import React from 'react';

class SearchList extends React.Component{
    state = {
        term:''
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        console.log(this.state.term);
        this.props.childToParent(this.state.term);
    }
    render(){
        return(
        <div className="ui segment">
        <form className="ui form" onSubmit={this.handleSubmit} >
          <div className="field">
            <label>Image Search</label>
            <input
              type="text" name="search" placeholder="search" value={this.state.term} onChange={(e)=>{this.setState({term:e.target.value})}}
            />
          </div>
        </form>
      </div>
        );
    }
}

export default SearchList;