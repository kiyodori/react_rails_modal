[![Gem Version](https://badge.fury.io/rb/react_rails_modal.svg)](https://badge.fury.io/rb/react_rails_modal)

# ReactRailsModal

Accessible modal dialog component on react-rails.

## Pre Installation

Before using react_rails_modal, install `react-rails`.

Add `react-rails` to your gemfile:

```ruby
gem 'react-rails'
```

And install:

    $ bundle install

Next, run the installation script:

    $ rails g react:install

## Installation

Add `react_rails_modal` to your gemfile:

```ruby
gem 'react_rails_modal'
```

And install:

    $ bundle install

Next, run the installation script:

    $ rails g react_rails_modal:install

This will place the following in your `application.js`:

```js
//= require react_rails_modal
```

## Usage

```xml
<ModalComponent
  isOpen={bool}
  onCloseRequest={requestCloseFunction}
  style={customStyle}
>
  <h1>Modal Component Content</h1>
  <p>Text</p>
</ModalComponent>
```

## Examples
### Use styles to style

In app/controller/views/:

```html
<%= react_component('Hello') %>
```

Styles are passed as an object with 2 keys, 'overlay' and 'modal'.

In app/assets/javascripts/components/:

```jsx
class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.state = { isModalOpen: false };
  }

  closeModal() {
    this.setState({ isModalOpen: false });
  }

  openModal() {
    this.setState({ isModalOpen: true });
  }

  render () {
    return (
      <div>
        <button onClick={this.openModal}>Open Modal</button>
        <ModalComponent
          isOpen={this.state.isModalOpen}
          onCloseRequest={this.closeModal}
          style={Hello.styles}
        >
          <h1>Hello world!</h1>
          <button onClick={this.closeModal}>Close</button>
        </ModalComponent>
      </div>
    );
  }
}

Hello.styles = {
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.75)',
    bottom: '0',
    height: '100%',
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    width: '100%',
    zIndex: '1',
  },
  modal: {
    background: '#fff',
    left: '5%',
    padding: '15px 30px',
    position: 'relative',
    top: '10%',
    width: '80%',
    zIndex: '2',
  }
}
```

### Use css classes to style

If you want to use css classes, you can pass overlayClass and modalClass props to the Modal.

```jsx
class HelloTwo extends React.Component {
  constructor(props) {
    super(props);
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.state = { isModalOpen: false };
  }

  closeModal() {
    this.setState({ isModalOpen: false });
  }

  openModal() {
    this.setState({ isModalOpen: true });
  }

  render () {
    return (
      <div>
        <button onClick={this.openModal}>Open Modal</button>
        <ModalComponent
          isOpen={this.state.isModalOpen}
          onCloseRequest={this.closeModal}
          overlayClass='overlayClass'
          modalClass='modalClass'
        >
          <h1>Hello world!!</h1>
          <button onClick={this.closeModal}>Close</button>
        </ModalComponent>
      </div>
    );
  }
}
```

In app/assets/stylesheets/:

```css
.overlayClass {
  background-color: rgba(0,0,0,0.7);
  bottom: 0;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 1;
}

.modalClass {
  background: #fff;
  left: 5%;
  padding: 15px;
  position: fixed;
  top: 10%;
  width: 90%;
  z-index: 2;
}
```

## Development
* Update React assets with `rake react_rails_modal:build`
* Run tests with `rake spec`
