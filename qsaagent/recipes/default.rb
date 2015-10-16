#
# Cookbook Name:: qsaagent2
# Recipe:: qsaagent2
#
# Copyright 2015, Interface Infosoft Solutions Pvt Ltd
#
# All rights reserved - Do Not Redistribute
#


remote_directory 'C:/QSprectrum/QSAgent-DesktopWeb' do
  rights :read, 'Administrator'
  rights :full_control, 'Administrator'
end

execute "run install.bat in directory" do
  command "install.bat"
 cwd "C:/QSprectrum/QSAgent-DesktopWeb"
  action :run
end
 

execute "run run.bat in directory" do
  command "run.bat"
  cwd "C:/QSprectrum/QSAgent-DesktopWeb"
  action :run
end
 
