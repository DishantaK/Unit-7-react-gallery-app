import React from "react";
import Photo from "./Photo";
import apiKey from "../config";
import NotFound from "./NotFound";
import axios from "axios";


// click events from nav affect these results

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
    };
  }
  
  // Get data from Flickr's API
  getRequest = (query = "cats") => {
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
      )
      .then((res) => {
        this.setState({
          images: [...this.state.images, res.data.photos.photo],
        });
      })
      .catch((err) => console.log(err));
  };

  // Making get request when the component loads or updates
  componentDidMount() {
    this.getRequest(this.props.match.params.query);
  }
  

  // Commented out as the component itself never changes... so this never runs

    // componentDidUpdate(prevProps) {
    //     console.log( prevProps.location.pathname)
    //     if( this.props.location.pathname !== window.location.pathname ) {
    //         window.location.reload();
    //         this.getRequest(this.props.match.params.query);
      
    //     }
    // }


    // -----------------------------
  // if data -> return the Photo component, else NotFound

  render() {
    if (this.state.images.length === 0) {
        return (
            <NotFound />
          ); 
    } else {
        return (
            <div className="photo-container">
              <h2>Results</h2>
              <ul> 
               {this.state.images[0].map((photo) => <Photo key={photo.id} secret={photo.secret} server={photo.server} alt={photo.title} id={photo.id}/>  )}
              </ul>
            </div>
          
          
          )
   
    }

  
  }
}

export default Gallery;
