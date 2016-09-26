# Sharethat
Lightweight Social media sharer

if youre a freelancer I think you might be tired when creating function to share link into social media, So I decided to create this little library to handle that task.

## Installation

`npm install sharethat`

`bower install sharethat`

## Usage

`<script src="../build/sharethat.min.js"></script>`

*in HTML*
`<a href="[link to share]" data-toggle="sharethat" data-target="facebook"/>`

![screenshot](/screenshot.png?raw=true)

## Options

### HTML
data-toggle='sharethat' ~required

data-target='[ex: twitter]' ~optional, default: facebook

href='[link to share]' ~if not provided will share current url

data-message=[message or description] ~optional

data-image=[link to image] ~required, pinterest only

### API
When using module loader suck as `webpack`

```javascript
let sharethat = require('sharethat')
sharethat.openWindow(url, title, windowWidth, windowHeight)
```

It will launch new centered window.

## License

MIT