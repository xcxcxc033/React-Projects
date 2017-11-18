import React, {Component} from 'react';
import ReactDom from 'react-dom';
import {SearchBar} from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import _ from 'lodash';
import './style/style0.css';


const API_KEY = 'AIzaSyDMV2Zr3-CDVNJ6i1rr7Ip2cvZFVliPkZ4';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      videos : [],
      selectedVideo : null
    }
    this.videoSearch('surfboad');
  }

  videoSearch(term){
    YTSearch({ key:API_KEY, term: term},
              (oranges) =>{
                this.setState({
                  videos: oranges,
                  selectedVideo: oranges[0]
                })
              }
    );

  }


 //(term) => this.videoSearch(term)
  render(){
    const videoSearch = _.debounce((term) => {this.videoSearch(term), 300});
    return (
      <div>
        <SearchBar onSearchTermChange = {videoSearch}/>
        <div className="main-body">
          <VideoDetail video = {this.state.selectedVideo}/>
          <VideoList
            onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
            videos = {this.state.videos}/>
        </div>
      </div>
    );
  }
}

ReactDom.render(<App />, document.querySelector('.container'));
