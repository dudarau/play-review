# CSS-IN-JS

[9 libraries](https://blog.bitsrc.io/9-css-in-js-libraries-you-should-know-in-2018-25afb4025b9b)
[Awesome CSS in JS](https://github.com/tuchk4/awesome-css-in-js)
[React: CSS in JS techniques comparison.](https://github.com/MicheleBertoli/css-in-js)
[Aphrodite vs Radium](https://medium.com/@himrc/why-i-love-css-in-js-aphrodite-vs-radium-b2c9bea9a182)
[Initial idea: React: CSS in JS](https://speakerdeck.com/vjeux/react-css-in-js)

All libraries support SSR.

## Styled-components

[Github repo](https://github.com/styled-components/styled-components)
[Author explanation](https://www.youtube.com/watch?v=Bi5MqqgxKVo)
[For React-native](https://github.com/styled-components/css-to-react-native)

[Example](styled-components/index.html)
[Boilerplate Example with structuring code](https://github.com/react-boilerplate/react-boilerplate)

#### Pros

- support css names of properties `border-color`
- support [theming](https://github.com/styled-components/styled-theming)
- support Flow and Typescript
- support for Atom, Visual Studio Code, WebStorm, and soon Sublime Text

#### Concerns

- if we keep styledComponents in the same file as React component then it's difficult to distinguish between styled and external components
- if we use React-Boilerplate approach and keep each styled component in separate file then we get a lot of small files in one components folder
   

## Emotion

Looks pretty similar to styled-components but a little bit more flexible. Can use functions to create styled-components.

[Github](https://github.com/emotion-js/emotion)
[Demo Sandbox](https://codesandbox.io/s/pk1qjqpw67)
[Emotion site](https://github.com/emotion-js/emotion/tree/master/site)

```jsx harmony
import styled from 'react-emotion'

const Button = styled('button')`
  color: ${props =>
    props.primary ? 'hotpink' : 'turquoise'};
`

const Container = styled('div')(props => ({
  display: 'flex',
  flexDirection: props.column && 'column'
}))

render(
  <Container column>
    <Button>This is a regular button.</Button>
    <Button primary>This is a primary button.</Button>
  </Container>
)
```

## JSS

[documentation](http://cssinjs.org)
[JSS Github](https://github.com/cssinjs/jss)
[React-JSS Github](https://github.com/cssinjs/react-jss) - looks natural with React
[Playground](https://codesandbox.io/s/z21lpmvv33)
[Material UI consumes JSS](https://material-ui.com/)

#### Example 

```jsx harmony
import jss from 'jss'
import preset from 'jss-preset-default'
import color from 'color'

// One time setup with default plugins and settings.
jss.setup(preset())

const styles = {
  button: {
    fontSize: 12,
    '&:hover': {
      background: 'blue'
    }
  },
  ctaButton: {
    extend: 'button',
    '&:hover': {
      background: color('blue')
        .darken(0.3)
        .hex()
    }
  },
  '@media (min-width: 1024px)': {
    button: {
      width: 200
    }
  }
}

const {classes} = jss.createStyleSheet(styles).attach()

document.body.innerHTML = `
  <button class="${classes.button}">Button</button>
  <button class="${classes.ctaButton}">CTA Button</button>`
```

#### Pros

- has a lot of plugins and supports different approaches for css-in-js
- used by material-ui
- more flexible

#### Cons


## Aphrodite

[Github](https://github.com/Khan/aphrodite)

```jsx harmony
import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

class App extends Component {
    render() {
        return <div>
            <span className={css(styles.red)}>
                This is red.
            </span>
            <span className={css(styles.hover)}>
                This turns red on hover.
            </span>
            <span className={css(styles.small)}>
                This turns red when the browser is less than 600px width.
            </span>
            <span className={css(styles.red, styles.blue)}>
                This is blue.
            </span>
            <span className={css(styles.blue, styles.small)}>
                This is blue and turns red when the browser is less than
                600px width.
            </span>
        </div>;
    }
}

const styles = StyleSheet.create({
    red: {
        backgroundColor: 'red'
    },

    blue: {
        backgroundColor: 'blue'
    },

    hover: {
        ':hover': {
            backgroundColor: 'red'
        }
    },

    small: {
        '@media (max-width: 600px)': {
            backgroundColor: 'red',
        }
    }
});
```

## Radium

It creates `styles` in props based on js-object which developer can use it for `style` of element(not classname).

```jsx harmony
<button
    style={[
      styles.base,
      styles[this.props.kind]
    ]}>
    {this.props.children}
</button>
```

[Github](https://github.com/FormidableLabs/radium)

## Other libraries

- [Glamor](https://github.com/threepointone/glamor)- closer to css
- [Bit](https://docs.bitsrc.io/) - a little bit complicated stylebook
- [Stylable](https://github.com/wix/stylable) - looks similar to CSS modules
```jsx harmony
import style from './app.st.css';

render = () => {
  return <div {...style('root')}>
    <div {...style('backdrop', { in: this.state.backdrop })} />
    </div>;
}
```