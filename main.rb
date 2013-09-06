require 'sinatra'
require 'sinatra/reloader'
require 'sinatra/activerecord'
require 'haml'

get "/" do
  haml :min, :format => :html5
end

get '/towersofhanoi' do
  haml :towersofhanoi, :format => :html5
end

get "/japanese" do
  haml :japanese, :format => :html5
end

get "/clouds" do
  haml :index, :format => :html5
end