import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'you-tube',
  styleUrl: 'you-tube.css',
  shadow: false,
})

export class YouTube {

  // Properties
  @Prop() width: string;
  @Prop() height: string;
  @Prop() video_id: string;
  @Prop() autoplay: string;
  @Prop() controls: string;

  // Event handlers as properties
  @Prop() playerReady: Function;
  @Prop() playerStateChange: Function;
  @Prop() playbackQualityChange: Function;
  @Prop() playbackRateChange: Function;
  @Prop() playerApiChange: Function;
  @Prop() playerError: Function;

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
        'onReady': event => this.onReady(event),
        'onStateChange': event => this.onStateChange(event),
        'onPlaybackQualityChange': event => this.onPlaybackQualityChange(event),
        'onApiChange': event => this.onApiChange(event),
        'onPlaybackRateChange': event => this.onPlaybackRateChange(event),
        'onError': event => this.onError(event),
      }
    });
  }

  // Event Handlers
  onReady(event){
    if(this.playerReady){this.playerReady(event)};
  }

  onStateChange(event) {
    if(this.playerStateChange){this.playerStateChange(event)};
  }

  onError(event){
    if(this.playerError){this.playerError(event)};
  }

  onApiChange(event){
    if(this.playerApiChange){this.playerApiChange(event)};
  }

  onPlaybackQualityChange(event){
    if(this.playbackQualityChange){this.playbackQualityChange(event)};
  }

  onPlaybackRateChange(event){
    if(this.playbackRateChange){this.playbackRateChange(event)};
  }

  // Load the API
  loadApi(){
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
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
