# ReactRailsModal

Accessible modal dialog component in react-rails.

## Installation

Add `react-rails` and `react_rails_modal` to your gemfile:

```ruby
gem 'react-rails'
gem 'react_rails_modal'
```

And install:

    $ bundle install

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
