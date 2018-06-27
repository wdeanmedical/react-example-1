# React Example One 


### Getting Started

```
> git clone https://github.com/wdeanmedical/react-example-1
> cd react-example-1
> npm install
> npm start
```

### Running Application
```
1) Go to http://localhost:8008/
2) Enter ingredient names in the search box
```

### Features

#### 1) Redux is used with ReduxPromise
ReduxPromise is used for async axios call that is in the action handler.

<br>

#### 2) CORS is handled with a proxy in webpack.config.js
In webpack.config.js the devServer is configured as follows
```
  devServer: {
    proxy: {
      "/recipe-puppy-api": {
        target: 'http://www.recipepuppy.com',
        pathRewrite: { '^/recipe-puppy-api': '/api' },
        changeOrigin: true,
        secure: false
      }
    },
    ...
  }
  ```
  <br>
  
#### 3) Lodash debounce() wrapped around nextwork search call
In serach_bar.js:
````
  onInputChange(term) {
    const debouncedFetchRecipes = _.debounce(term => { this.props.fetchRecipes(term) }, 300)
    this.setState({ term })
    debouncedFetchRecipes(term)
  }
  ````
  <br>
  
#### 4) Placeholder image is presented when thumbnail not available
In recipe_list_item.js:
````
          <img className="media-object" src={thumbnail || '../assets/images/no-image-available.jpg'} />
```` 
<br>

#### 5)  Navigation to Recipe HTML page upon click on recipe list item

<br>

#### Application in action:

![alt text](http://g.recordit.co/22uIRb1YSz.gif "Application in action")


