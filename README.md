## A Sample Blog App Written in Mantra + Coffeescript

This is a port of the [Mantra sample blog app](https://github.com/mantrajs/mantra-sample-blog-app), but using CoffeeScript to write React components with Jade like syntax, providing about a 15% reduction in character count, and the possibility of stripping out the jsx pre-processor from the build process.

###Compare

```coffee
NewPost =  React.createClass
    render: ->
        {error} = @props
        form className:"new-post", onSubmit:@createPost,
            h2 "Add New Post"
            input ref:"titleRef", type:"Text", placeholder:"Enter your post title"
            cond error,
                p(style:{color:'red'}, error)
            br {}
            textarea ref:"contentRef", placeholder:"Enter your post content"
            br {}
            button type:"submit",
                "Add New Post"
    createPost: (event)->
        if event and event.preventDefault
            event.preventDefault()

        {create} = @props
        {titleRef, contentRef} = @refs

        create(titleRef.value, contentRef.value)
```

vs

```js
class NewPost extends React.Component {
  render() {
    const {error} = this.props;
    return (
      <form className="new-post" onSubmit={this.createPost.bind(this)}>
        <h2>Add New Post</h2>
        {error ? <p style={{color: 'red'}}>{error}</p> : null}

        <input ref="titleRef" type="Text" placeholder="Enter your post title." /> <br/>
        <textarea ref="contentRef" placeholder="Enter your post content." /> <br/>
        <button type="submit">Add New</button>
      </form>
    );
  }

  createPost(event) {
    if (event && event.preventDefault) {
      event.preventDefault();
    }

    const {create} = this.props;
    const {titleRef, contentRef} = this.refs;

    create(titleRef.value, contentRef.value);
  }
}
```
About 100 char / 20% savings (not including whitespace) 

I know it most probably goes against the Mantra spec, but Coffeescript remains more expressive than ES2015, and the syntactical efficiency adds up in the long run

### Setting Up

* Clone this repo
* Ensure you have npm > v3 installed 
* Do `npm install` to install dependencies (ensure you have npm v3 installed)
* Make sure you've installed Meteor locally

### Running The App

Simply start your app with `meteor -p 5005`. 
Then you can access the app on <http://localhost:5005>

### Running Tests

In this app, every part of the client side is fully tested using the familiar tools like Mocha, Chai and Sinon.

Run tests with:

```
npm test
```

**See package.json for more information about testing setup.**

### Running Storybook

This app is setup for [React Storybook](https://github.com/kadirahq/react-storybook). Run following command to start the React Storybook:

```
npm run storybook
```
