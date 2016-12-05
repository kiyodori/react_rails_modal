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
<ModalConponent
  isOpen={bool}
  onRequestClose={requestCloseFn}
  style={customStyle}
  contentLabel="Modal"
>
  <h1>Modal Component Content</h1>
  <p>Text</p>
</Modal>
```
