require 'rails'

module ReactRailsModal
  class Railtie < ::Rails::Railtie
    GEM_ROOT = Pathname.new('../../../').expand_path(__FILE__)

    config.react_rails_modal = ActiveSupport::OrderedOptions.new

    initializer 'react_rails_modal.set_variant' do |app|
      app.config.assets.paths << GEM_ROOT.join('lib/assets/javascripts/').to_s if app.config.respond_to?(:assets)
    end
  end
end
