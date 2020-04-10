

# Monochroma
Dark-Mode made Simple in React Apps.

## Technologies Used - 
- **ReactJS**
- **NodeJs**

## Installation
```
yarn add monochroma
```

## Usage
- Import Monochroma
```
 import Monochroma from 'monochroma';
```
- Wrap Your Component inside Monochroma
```
<Monochroma>
    <App />
</Monochroma>
```

## Props
```
position : "top-right" /* Can be top-right, top-left,*/`
type:"default" /* inky, starless, default */
customPosition:{ right: "50px", left: "30px", top: "405px" }
/* Since Switch position is absolute with relatively larger zIndex. Provide css position styles with (right, left, bottom, top) */
Note: Need not to be sent when using position other than custom.
```

*More Features coming soon. Stay Tuned*
