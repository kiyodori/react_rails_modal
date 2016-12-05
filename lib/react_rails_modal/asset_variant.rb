module ReactRailsModal
  # This class add react_rails_modal path to the sprockets environment.
  class AssetVariant
    GEM_ROOT = Pathname.new('../../../').expand_path(__FILE__)

    attr_reader :react_rails_modal_directory

    def initialize
      @react_rails_modal_directory = GEM_ROOT.join('lib/assets/javascripts/').to_s
    end
  end
end
