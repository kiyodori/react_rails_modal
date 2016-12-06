module ReactRailsModal
  module Generators
    class InstallGenerator < ::Rails::Generators::Base
      desc 'Install react_rails_modal'

      def inject_react_rails_modal
        require_react_rails_modal = "//= require react_rails_modal\n"

        if manifest.exist?
          manifest_contents = File.read(manifest)

          if match = manifest_contents.match(/\/\/=\s+require_tree[^\n]*/)
            inject_into_file manifest, require_react_rails_modal, { before: match[0] }
          else
            append_file manifest, require_react_rails_modal
            inject_react_rails
          end
        else
          create_file manifest, require_react_rails_modal
          inject_react_rails
        end
      end

      private

      def manifest
        Pathname.new(destination_root).join('app/assets/javascripts', 'application.js')
      end

      def inject_react_rails
        inject_into_file manifest, "//= require react\n", {before: "//= require react_rails_modal\n"}
        inject_into_file manifest, "//= require components\n", {after: "//= require react\n"}
        inject_into_file manifest, "//= require react_ujs\n", {after: "//= require react\n"}
      end
    end
  end
end
