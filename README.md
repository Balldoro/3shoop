# 3SHOOP

## General Info

3Shoop is an e-commerce website with 3D models. Every product contains its 3D model view with a wireframe and slider with photos.
In order to buy chosen products, user goes through the whole payment process on a client-side.
Website is fully responsive, built with mobile-first approach.

## Setup

Live version: [Live](https://balldoro.github.io/3shoop/#/)

### Prerequisites

To install this project locally you need to have

- Node >= v8.10
- npm >= v5.6

### Installation

1. Clone or download repository
2. Go to repository location
3. Install dependencies via npm `$ npm install`
4. Run it on your local server in the development mode [http://localhost:3000](http://localhost:3000) `$ npm start`<br />
   Or build the app in the production mode `$ npm run build`

## Features

- Different categories of products
- Filtering products in selected category
- Sorting products in selected category
- 3D model view for every product
- Fullscreen for 3D model viewer
- Possibility to turn on/off wireframe of 3D model
- Slider with images of product
- Adding/Removing each product to cart
- Cart containing chosen products in LocalStorage
- Multi-step (4 steps) payment form with full validation
  1. Personal data
  2. Card data
  3. Summary
- Prompt before the user leaves the page if payment transaction is not finished
- Denial of access to further steps without fulfilling the prior ones

## Technologies

- React v16.13.1
- Creat-React-App
- Styled Components v5.1.1
- Three.js v0.117.1
- Firebase v7.14.6
- React Hook Form v5.7.2
- react-icons v3.10.0
- react-router-dom v5.2.0
- react-slick v0.26.1
- rc-slider v9.3.0

## Author

Created with :heart: by Marek Miklaszewski
