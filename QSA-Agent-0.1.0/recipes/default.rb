#
# Cookbook Name:: QSA-Agent
# Recipe:: QSA-Agent
#
# Copyright 2015, Interface Infosoft Solutions Pvt Ltd
#
# All rights reserved - Do Not Redistribute
#


remote_directory 'D:/QSA-Agent' do
  rights :read, 'Administrator'
  rights :full_control, 'Administrator'
end

execute "run install.bat in directory" do
  command "install.bat"
  cwd "D:/QSA-Agent"
  action :run
end
 

execute "run run.bat in directory" do
  command "run.bat"
  cwd "D:/QSA-Agent"
  action :run
end
 