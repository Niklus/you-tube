import { Component, Prop} from '@stencil/core';

@Component({
  tag: 'you-tube',
  styleUrl: 'you-tube.scss'
})

export class YouTube {
  
  // Properties 
  @Prop() width: string;
  @Prop() height: string;
  @Prop() video_id: string;
  @Prop() autoplay: string; 
  @Prop() controls: string;
  
  // Event handlers as properties
  @Prop() onPlayerReady: Function;
  @Prop() onPlayerStateChange: Function;
  @Prop() onPlaybackQualityChange: Function;
  @Prop() onPlaybackRateChange: Function;
  @Prop() onApiChange: Function;
  @Prop() onError: Function;
 
  componentDidLoad(){
    if('YT' in window){
      this.constructPlayer(window['YT']);
    }else{
      // load API then construct player
      this.loadApi().then( YT => this.constructPlayer(YT)); 
    }
  }
  
  // Player Constructor
  constructPlayer(YT) {
    new YT.Player('player', { 
      height: this.height,
      width: this.width,
      videoId: this.video_id,
      playerVars: { 'autoplay': this.autoplay, 'controls': this.controls },
      events: {
        'onReady': event => this.ready(event),
        'onStateChange': event => this.stateChange(event),
        'onPlaybackQualityChange': event => this.playbackQualityChange(event),
        'onApiChange': event => this.apiChange(event),
        'onPlaybackRateChange': event => this.playbackRateChange(event),
        'onError': event => this.error(event),
      }
    });
  }
  
  // Event Handlers
  ready(event){
    if(this.onPlayerReady){this.onPlayerReady(event)};
  }

  stateChange(event) {
    if(this.onPlayerStateChange){this.onPlayerStateChange(event)};
  }

  error(event){
    if(this.onError){this.onError(event)};
  }

  apiChange(event){
    if(this.onApiChange){this.onApiChange(event)};
  }

  playbackQualityChange(event){
    if(this.onPlaybackQualityChange){this.onPlaybackQualityChange(event)};
  }

  playbackRateChange(event){
    if(this.onPlaybackRateChange){this.onPlaybackRateChange(event)};
  }
 
  // Load the API
  loadApi(){
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // return a promise that resolves to YT when the iframe is ready
    return new Promise( resolve => {
      window['onYouTubeIframeAPIReady'] = () => {
        resolve(window['YT']);
      }  
    });
  }
  
  render() {
    return <div id="player"></div>
  }
}