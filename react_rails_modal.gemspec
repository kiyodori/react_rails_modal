# coding: utf-8
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'react_rails_modal/version'

Gem::Specification.new do |spec|
  spec.name          = 'react_rails_modal'
  spec.version       = ReactRailsModal::VERSION
  spec.summary       = 'Accessible modal dialog component on react-rails'
  spec.description   = 'React_rails_modal creates modal dialog easily on react-rails'
  spec.homepage      = 'https://github.com/kiyodori/react_rails_modal'
  spec.license       = 'MIT'

  spec.authors       = ['kiyodori']
  spec.email         = ['kiyodori@yahoo.co.jp']

  spec.add_development_dependency 'bundler', '>= 1.13'
  spec.add_development_dependency 'rspec', '>= 3.0'
  spec.add_development_dependency 'rails', '>= 3.2'
  spec.add_development_dependency 'react-rails', '>= 1.7.0'

  spec.files         = Dir[
    'lib/**/*',
    'README.md',
    'LICENSE.txt'
  ]

  spec.require_paths = ['lib']
end
