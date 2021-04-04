![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

# you-tube web component

you-tube is a web component built on top of the [YouTube Iframe API](https://developers.google.com/youtube/iframe_api_reference)

## API

### Properties
 - width (string) 
 - height (string) 
 - video_id (string) 
 - autoplay (string) : "1" to auto play & "0" to not
 - controls (string) : "1" to show & "0" to hide

### Event handler Properties
 - playerReady (Function) 
 - playerStateChange (Function) 
 - playbackQualityChange (Function)
 - playbackRateChange: (Function) 
 - playerApiChange (Function)
 - playerError: (Function)
 
## Using this component

### Usage example

#### html
```html
 <you-tube  
    height='390' 
    width='640'
    video_id='YBwgkr_Sbx0'
    controls="0"
    autoplay="1"></you-tube>
```

#### jsx
```jsx
 <you-tube  
    height='390' 
    width='640'
    video_id='YBwgkr_Sbx0'
    playerReady={evt => evt.target.playVideo()}></you-tube>
```

### The player
- The player object can be accessed through evt.target on the event handlers 
- [A List  of operations avilable on the player object can be found here](https://developers.google.com/youtube/iframe_api_reference#Operations)

### Script tag

- Put a script tag similar to this `<script type="module" src="https://unpkg.com/you-tube@0.1.0/dist/you-tube/you-tube.esm.js"></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc
- Remember to add type="module" on your script tag as shown above

### Node Modules

- Run `npm install you-tube --save`
- Put a script tag similar to this `<script type="module" src="node_modules/you-tube/dist/you-tube/you-tube.esm.js"></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc
- Remember to add type="module" on your script tag as shown above
