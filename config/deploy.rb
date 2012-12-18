# The name of your app
set :application, "depot"

# The directory on the EC2 node that will be deployed to
set :deploy_to, "/var/www/#{application}"

set :keep_releases, 3

# deploy with git
set :scm, :git
set :repository,  "https://github.com/SilverNightFall/hammock.git"
set :git_shallow_clone, 1
set :branch, "master"
set :use_sudo, true

# gets ssh info
# set :user, "ubuntu"
# ssh_options[:keys] = ["/Users/Victoria/Documents/ServerKeys/key.pem"]
# ssh_options[:forward_agent] = true
# default_run_options[:pty] = true
set :user, 'victoria'              #This is the user you have on the target machine. Capistrano try to login to the target machine using this account.
ssh_options[:keys] = %w(/Users/Victoria/.ssh/id_rsa)
set :use_sudo, true            #if you want to append all commands with sudo.
set :password, 'snooty'      #You can login using key (above) or with password. Use either key or password..not both.
default_run_options[:pty] = true #this is really helpful. If you dont have this you will struggle in runnig sudo tasks. I had lost some time searching around this.


# The address of the remote host on EC2 (the Public DNS address)

set :location, "71.43.157.220"

# setup some Capistrano roles
role :app, location
role :web, location
role :db,  location, :primary => true

after 'deploy:update_code', 'deploy:symlink_db'

namespace :deploy do

desc "Restart Application"
task :restart, :roles => :app do
  run "touch #{deploy_to}/#{shared_dir}/tmp/restart.txt"
end

desc "Symlinks the database.yml"
task :symlink_db, :roles => :app do
  run "ln -nfs #{deploy_to}/shared/config/database.yml
  #{release_path}/config/database.yml"
end

end