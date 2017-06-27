// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Link,
  CodePane
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#FFA02F",
    quartenary: "#CECECE"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            ReactJS & React Native
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            CLUB TECH BY EURATECHNOLOGIES
          </Text>
        </Slide>
        <Slide transition={["fade"]}>
          <Heading size={5} textColor="secondary">
            Simon Degraeve @colisweb
          </Heading>
          <br />
          <Text textColor="secondary">
            Full Stack NodeJS developer since 2011
            ReactJS early adopter (2013)
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={4} textColor="secondary">
            Once upon a time... <br />
            ...in the world of "<span style={{ color: "#fff" }}>fronteux</span>"
          </Heading>
        </Slide>
        <Slide transition={["fade"]}>
          <Text textColor="tertiary">
            jQuery 2006
          </Text>
          <CodePane
            lang="html"
            source={`
<html>
  <head>
    <script type="text/javascript">
      $(document).ready(function(){
       $("#root").html("Hello World");
      });
    </script>
  </head>
  <body>
    <div id="root">
      // Hello World
    </div>
  </body>
</html>
            `}
            margin="20px auto"
          />
          <Text textColor="secondary" textAlign="left">
            + cross-browsers compatibility
          </Text>
          <Text textColor="secondary" textAlign="left">
            + helpers and plugins
          </Text>
          <Text textColor="secondary" textAlign="left">
            - spaghetti
          </Text>
        </Slide>
        <Slide transition={["fade"]}>
          <Text textColor="tertiary">
            Backbone 2010
          </Text>
          <CodePane
            lang="js"
            source={`
var Article = Backbone.Model.extend({
  defaults: {
      title: new Date().toLocaleTimeString()
  }
});

var Articles = Backbone.Collection.extend({
  url: 'http://godu.ippon.jit.su/articles',
  model: Article
});

var Item = Backbone.View.extend({
  tagName: 'li',
  template: _.template('<%= article.title %> <span class="delete">[X]</span>'),
  render: function() {
    $(this.el).html(this.template({ article: this.model.toJSON() }));
    return $(this.el);
  }
});
            `}
            margin="20px auto"
          />
          <Text textColor="secondary" textAlign="left">
            + Model/View
          </Text>
          <Text textColor="secondary" textAlign="left">
            + View agnostic
          </Text>
          <Text textColor="secondary" textAlign="left">
            - Object-oriented programming
          </Text>
          <Text textColor="secondary" textAlign="left">
            - No template engine
          </Text>
        </Slide>
        <Slide transition={["fade"]}>
          <Text textColor="tertiary">
            Angular 2010
          </Text>
          <CodePane
            lang="html"
            source={`
<!DOCTYPE html>
<html ng-app>
  <head>
  	<script type="text/javascript"
  		src="//ajax.googleapis.com/ajax/libs/angularjs/1.0.7/angular.min.js"></script>
  </head>
<body>
	<input type="text" ng-model="sometext" />
	<h1 ng-show="sometext">Hello {{ sometext }}</h1>
</body>
</html>
            `}
            margin="20px auto"
          />
          <Text textColor="secondary" textAlign="left">
            + Two-way data-binding
          </Text>
          <Text textColor="secondary" textAlign="left">
            + Templating
          </Text>
          <Text textColor="secondary" textAlign="left">
            - Complicated
          </Text>
          <Text textColor="secondary" textAlign="left">
            - Slow
          </Text>
        </Slide>
        <Slide transition={["fade"]}>
          <Text textColor="tertiary">
            Ember 2013
          </Text>
          <CodePane
            lang="html"
            source={`
<!DOCTYPE html>
<html ng-app>
  <head>
    <script type="text/javascript"
      src="//ajax.googleapis.com/ajax/libs/angularjs/1.0.7/angular.min.js"></script>
  </head>
<body>
  <input type="text" ng-model="sometext" />
  <h1 ng-show="sometext">Hello {{ sometext }}</h1>
</body>
</html>
            `}
            margin="20px auto"
          />
          <Text textColor="secondary" textAlign="left">
            + Convention over Configuration
          </Text>
          <Text textColor="secondary" textAlign="left">
            + CLI and Ecosystem (Data library, etc)
          </Text>
          <Text textColor="secondary" textAlign="left">
            - Hard to customize
          </Text>
          <Text textColor="secondary" textAlign="left">
            - Complicated
          </Text>
        </Slide>
        <Slide transition={["fade"]}>
          <Text textColor="tertiary">
            React 2013
          </Text>
          <CodePane
            lang="html"
            source={`
<html>
  <head>
    <script type="text/javascript">
      const HelloMessage = (props) => {
        return (
          <div>Hello {this.props.name}</div>
        );
      }

      ReactDOM.render(<HelloMessage name="World" />, mountNode);
    </script>
  </head>
  <body>
    <div id='root'>
      // Hello World
    </div>
  </body>
</html>
            `}
            margin="20px auto"
          />
          <Text textColor="secondary" textAlign="left">
            + Declarative and Component-based
          </Text>
          <Text textColor="secondary" textAlign="left">
            + Learn Once, Write Anywhere
          </Text>
          <Text textColor="secondary" textAlign="left">
            +/- Small API surface
          </Text>
          <Text textColor="secondary" textAlign="left">
            - Just a library
          </Text>
          <Text textColor="secondary" textAlign="left">
            - Paradigm Shift
          </Text>
        </Slide>
        <Slide bgColor="tertiary">
          <Heading size="3" textColor="primary">
            React
          </Heading>
          <Heading size="4" textColor="primary">
            What's all the fuss about?
          </Heading>
        </Slide>
        <Slide>
          <p>
            React is a UI library developed at Facebook to facilitate the
            creation
            of interactive, stateful & reusable UI components.
          </p>
          <BlockQuote>
            <Quote textColor="secondary">view = f(data)</Quote>
          </BlockQuote>
        </Slide>
        <Slide>
          <Heading size={5} textColor="tertiary">
            JSX
          </Heading>
          <CodePane
            lang="jsx"
            source={`
import React from 'react'

class ShoppingList extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Tomatoes</li>
          <li>Bananas</li>
          <li>Beans</li>
        </ul>
      </div>
    );
  }
}

// Example usage: <ShoppingList name="Jean-Pierre" />
            `}
            margin="20px auto"
          />
          Will be transpiled into
          <CodePane
            lang="js"
            source={`
return React.createElement('div', {className: 'shopping-list'},
  React.createElement('h1', /* ... h1 children ... */),
  React.createElement('ul', /* ... ul children ... */)
);
            `}
            margin="20px auto"
          />
        </Slide>
        <Slide>
          <Heading size={5} textColor="tertiary">
            Functionnal
          </Heading>
          <CodePane
            lang="jsx"
            source={`
const Hello = (props) =>
  <Block>
    <h1>
      Hello <UserName user={{ firstname: 'Jean-Pierre', lastname: 'Dupont' }}/>
    </h1>
  </Block>


const UserName = (props) =>
  <span>{props.user.firstname} {props.user.lastname}</span>


const Block = (props) =>
  <div style={{ fontSize: '14px' }}>{props.children}</div>


// Mount component
React.render(<MyComponent name="Jean-Pierre" />, document.getElementById('myDiv'));
            `}
            margin="20px auto"
          />
        </Slide>
        <Slide>
          <Heading size={5} textColor="tertiary">
            Lifecycle
          </Heading>
          <List>
            <ListItem>componentWillMount</ListItem>
            <ListItem>componentDidMount</ListItem>
            <ListItem>shouldComponentUpdate</ListItem>
            <ListItem>componentWillUnmount</ListItem>
          </List>

          <Heading size={5} textColor="tertiary">
            Specs
          </Heading>
          <List>
            <ListItem>getInitialState</ListItem>
            <ListItem>getDefaultProps</ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={5} textColor="tertiary">
            setState
          </Heading>
          <CodePane
            lang="jsx"
            source={`
class Counter extends React.Component {

  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  incrementCount = () => {
    this.setState(state => ({ count: state.count + 1 }));
  };

  componentWillMount() {
    console.log('Counter will mount')
  }

  render() {
    return (
      <button onClick={ this.incrementCount }>
        Clicks: { this.state.count }
      </button>
    );
  }
});

React.render(<Counter/>, document.getElementById('myDiv'));
            `}
            margin="20px auto"
          />
        </Slide>
        <Slide>
          <Heading size={5} textColor="tertiary">
            Unidirectional Data Flow
          </Heading>
          <CodePane
            lang="jsx"
            source={`
class FilteredList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { initialItems: ["Apples", "Broccoli", "Chicken", "Eggs", "Fish"], items: [] };
  }
  componentWillMount() {
    this.setState({items: this.state.initialItems})
  }
  filterList = (event) => {
    this.setState(state => ({
      items: state.initialItems.filter(item => item.search(event.target.value) !== -1)
    }));
  }
  render() {
    return (
      <div className="filter-list">
        <input type="text" placeholder="Search" onChange={this.filterList}/>
        <List items={this.state.items}/>
      </div>
    );
  }
}

class List extends React.Component {
  render() {
    return (
      <ul>{this.props.items.map(item => <li key={item}>{item}</li>)}</ul>
    );
  }
});

React.render(<Counter/>, document.getElementById('myDiv'));
            `}
            margin="10px auto"
          />
        </Slide>
        <Slide>
          <Heading size={5} textColor="tertiary">
            Patterns
          </Heading>
          Components everywhere
          <CodePane
            lang="jsx"
            source={`
class Log extends React.Component {
  componentDidMount() {
    console.log('Log about component lifecycle')
  }

  render() {
    return null
  }
});

const MyComponent = (props) =>
  <div>
    <Log/>
    My Component
  </div>
            `}
            margin="20px auto"
          />
          High order component
          <CodePane
            lang="jsx"
            source={`
const enhance = (Component) => class extends React.Component {
  render() {
    const user = 'bob'
    return <Component user={user}/>
  }
});
const MyComponent = (props) => <span>{props.user}</span>
const MyEnhancedComponent = enhance(MyComponent)
            `}
            margin="20px auto"
          />
        </Slide>
        <Slide>
          <Heading size={5} textColor="tertiary">
            Server Side Rendering
          </Heading>
          <CodePane
            lang="jsx"
            source={`
              const MyComponent = props => <div>Hello World</div>

              ReactDOMServer.renderToString(<MyComponent/>)

              // String "<div>Hello World</div>"
            `}
            margin="20px auto"
          />
        </Slide>
        <Slide>
          <Heading size={5} textColor="tertiary">
            Render everywhere
          </Heading>
          <CodePane
            lang="jsx"
            source={`
import React, { Component } from 'react';
import { Text, View } from 'react-native';

class MyComponent extends Component {
  render() {
    return (
      <View>
        <Text>
          If you like React on the web, you'll like React Native.
        </Text>
        <Text>
          You just use native components like 'View' and 'Text',
          instead of web components like 'div' and 'span'.
        </Text>
      </View>
    );
  }
}
            `}
            margin="20px auto"
          />
          IOS, Android, Ubuntu, Web,...
        </Slide>
        <Slide>
          <Heading size={5} textColor="tertiary">
            Ecosystem
          </Heading>
          <List>
            <ListItem>Flowtype</ListItem>
            <ListItem>Redux</ListItem>
            <ListItem>Router</ListItem>
            <ListItem>GraphQL</ListItem>
          </List>
        </Slide>
        {/* <Slide>
          <Heading size={5} textColor="tertiary">
            Flowtype
          </Heading>
        </Slide>
        <Slide>
          <Heading size={5} textColor="tertiary">
            Redux
          </Heading>
        </Slide>
        <Slide>
          <Heading size={5} textColor="tertiary">
            Router
          </Heading>
        </Slide>
        <Slide>
          <Heading size={5} textColor="tertiary">
            GraphQL
          </Heading>
        </Slide> */}
        <Slide transition={["fade"]}>
          <Heading size={6} textColor="tertiary" caps>Made with</Heading>
          <br />
          <br />
          <Text>Spectacle</Text>
          <Link href="http://formidable.com/open-source/spectacle">
            http://formidable.com/open-source/spectacle
          </Link>
        </Slide>
      </Deck>
    );
  }
}
