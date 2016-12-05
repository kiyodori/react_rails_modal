require 'rails'

module ReactRailsModal
  class Railtie < ::Rails::Railtie
    config.react_rails_modal = ActiveSupport::OrderedOptions.new

    initializer 'react_rails_modal.set_variant' do |app|
      asset_variant = ReactRailsModal::AssetVariant.new
      app.config.assets.paths << asset_variant.react_rails_modal_directory if app.config.respond_to?(:assets)
    end
  end
end
