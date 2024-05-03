Ready to keep track of your tasks in an easy way? Follow along to get started!

## Get started
We will be using Ruby 2.7.0 so make sure you have that downloaded. You can use the Homebrew command `brew install 'ruby@2.7'`
or if you use RVM, `rvm install 2.7.0`. These are general instructions. Keep in mind you may have other requirements based on your environment.

### Configurations
* Ruby 2.7.0
* Bundler version 2.1.1
* PostgreSQL 14.2
* Yarn 1.22.17
* Webpacker 5.4.4

Run `bundle install` and install any missing gems.

### Database setup
Create, migrate, and seed the database.
* `rails db:setup`
* `rails db:seed`

### Start the server and database
In one terminal tab, run `rails s`. In another, run `brew services start postgresql`.

Open a browser window to localhost:3000 and enjoy!