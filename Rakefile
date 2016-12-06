begin
  require 'bundler/setup'
rescue LoadError
  puts 'You must `gem install bundler` and `bundle install` to run rake tasks'
end

Bundler::GemHelper.install_tasks

namespace :react_rails_modal do
  desc "Build the JS bundles with Webpack"
  task :build do
    Dir.chdir("react_builds") do
      `yarn run build`
    end
  end
end
