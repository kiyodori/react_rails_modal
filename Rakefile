begin
  require 'bundler/setup'
rescue LoadError
  puts 'You must `gem install bundler` and `bundle install` to run rake tasks'
end

Bundler::GemHelper.install_tasks

namespace :react_rails_modal do
  desc 'Build the JS bundles with Webpack'
  task :build do
    Dir.chdir("react_builds") do
      `yarn run build`
    end
  end
end

require 'rspec/core/rake_task'

desc 'Run the spec'
task spec: 'spec:all'

namespace :spec do
  task all: 'react_rails_modal'

  def spec_task(name)
    desc "Run #{name} specs"
    RSpec::Core::RakeTask.new(name) do |t|
      t.pattern = "spec/#{name}/*_spec.rb"
    end
  end

  spec_task 'react_rails_modal'
end
