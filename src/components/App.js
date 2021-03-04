import React from 'react';
import unsplash from './API/Unsplash';
import SearchList from './SearchList';
import './App.css';
import ImageList from './ImageList';


class App extends React.Component{
    state={images:[]}
    onSearchSubmit=async (term)=>{
        const response = await unsplash.get('/search/photos',{
            params:{query:term},
        })
        //this.setState({term:e});
        console.log(term);
        this.setState({images:response.data.results});
        console.log(this.state.images);
    }
    render(){
        return (
            <div className="ui container">
        <SearchList childToParent={this.onSearchSubmit}/>
        <ImageList images={this.state.images}/>
        </div>
        );
    }
    
}

export default App;