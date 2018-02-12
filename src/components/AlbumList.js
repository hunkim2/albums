import React, {Component} from 'react';
import axios from 'axios';
import { ScrollView } from 'react-native';
import AlbumDetails from './AlbumDetails';
class AlbumList extends Component{
  constructor(props){
    super(props);
    this.state = {
      album: [],
    };
  }
  componentDidMount(){
    this.fetchInfo()
  }
  async fetchInfo(){
    try {
      const response = await fetch('https://rallycoding.herokuapp.com/api/music_albums');
      const json = await response.json();
      this.setState({
        album: json
      });
    }
    catch(e) {
      console.log('e: ', e);
    }
  }
  renderAlbums(){
    return this.state.album.map((album)=>
      <AlbumDetails key={album.title} album={album}/>
    );
  }
  render(){
    return(
      <ScrollView>
          {this.renderAlbums()}
      </ScrollView>
    );
  }
};

export default AlbumList;
