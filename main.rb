require 'sinatra'
require 'sinatra/reloader'
require 'sinatra/activerecord'
require 'haml'

get "/" do
  haml :index, :format => :html5
end

get '/towersofhanoi' do
  haml :towersofhanoi, :format => :html5
end