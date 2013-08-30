require 'sinatra'
require 'sinatra/reloader'
require 'sinatra/activerecord'
require 'haml'

# ActiveRecord::Base.establish_connection(
#   :adapter => 'postgresql',
#   :host => 'localhost',
#   :username => 'Gabriel',
#   :password => '',
#   :encoding => 'utf8'
#   )

get "/" do
  haml :index, :format => :html5
end

get '/towersofhanoi' do
  haml :towersofhanoi, :format => :html5
end