# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
tasks = Task.create([
  {
    description: "Clean laundry",
    done: true
  },
  {
    description: "Make bed",
    done: false
  },
  {
    description: "Buy flowers",
    done: false
  },
])