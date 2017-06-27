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
