#
# Cookbook Name:: qsaagent
# Recipe:: qsaagent
#
# Copyright 2015, Interface Infosoft Solutions Pvt Ltd
#
# All rights reserved - Do Not Redistribute
#

execute "run install.bat in directory" do
  command "install.bat"
  cwd "D:/qsaagent"
  action :run
end

remote_directory 'C:/qsaagent' do
  rights :read, 'Administrator'
  rights :full_control, 'Administrator'
end

execute "run run.bat in directory" do
  command "run.bat"
  cwd "C:/qsaagent"
  action :run
end
 
