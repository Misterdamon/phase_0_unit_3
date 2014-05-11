# U3.W7: BONUS Using the SQLite Gem

# I worked on this challenge by myself.    

require 'sqlite3'


$db = SQLite3::Database.open "congress_poll_results.db"


def print_arizona_reps
  puts "AZ REPRESENTATIVES"
  az_reps = $db.execute("SELECT name FROM congress_members WHERE location = 'AZ'")
  az_reps.each { |rep| puts rep}
  
end

def print_longest_serving_reps(minimum_years)  #sorry guys, oracle needs me, i didn't finish this!
  puts "LONGEST SERVING REPRESENTATIVES"
  longest_serving = $db.prepare("SELECT name, years_in_congress FROM congress_members WHERE years_in_congress > ?") 
  longest_serving.execute(minimum_years).each{
   |row| puts "#{row[0]} - #{row[1]} years served." 	
  }

end

def print_lowest_grade_level_speakers(grade_level)
  puts "LOWEST GRADE LEVEL SPEAKERS (less than < 8th grade)"
  low_grades = $db.prepare("SELECT name FROM congress_members WHERE grade_current < ?")
  low_grades.execute(grade_level).each{|rep| puts rep}
  print_separator
end

def print_separator
  puts 
  puts "------------------------------------------------------------------------------"
  puts 
end

def print_state_reps(state)
	puts "#{state} Representatives"

	query_state_reps = $db.prepare "SELECT (name) FROM congress_members WHERE location = :state"
	query_state_reps.execute(state).each do |x| puts x end
	print_separator
end

def print_rep_votes
  rep_votes = $db.execute "select name,count(votes.politician_id) FROM congress_members JOIN votes ON congress_members.id=politician_id GROUP BY name"
  rep_votes.each do |x|
    puts "#{x[0]} - #{x[1]} votes"
  end
end
#I commented this function out because I could not get my SQL statement to select the right values

def print_rep_and_voters
  rep = $db.execute "SELECT name FROM congress_members JOIN votes ON votes.politician_id = congress_members.id"
  
  rep.each{ |rep| 
    puts rep
    voters = $db.prepare "SELECT first_name,last_name FROM voters JOIN votes ON votes.voter_id = voters.id JOIN congress_members ON congress_members.id = votes.politician_id WHERE congress_members.name = :rep"
    voters.execute(rep).each do |voter|
      puts "#{voter[0]} #{voter[1]}, "
    end
  }
end

print_arizona_reps

print_separator

print_longest_serving_reps(35)
# TODO - Print out the number of years served as well as the name of the longest running reps
# output should look like:  Rep. C. W. Bill Young - 41 years

print_separator
print_lowest_grade_level_speakers(8) 
# TODO - Need to be able to pass the grade level as an argument, look in schema for "grade_current" column

# TODO - Make a method to print the following states representatives as well:
# (New Jersey, New York, Maine, Florida, and Alaska)
print_state_reps('NJ')
print_state_reps('NY')
print_state_reps('ME')
print_state_reps('FL')
print_state_reps('AK')

##### BONUS #######
# TODO (bonus) - Stop SQL injection attacks!  Statmaster learned that interpolation of variables in SQL statements leaves some security vulnerabilities.  Use the google to figure out how to protect from this type of attack.
# I prevented SQL injection by parameterizing all of my queries so that the queries will only work with correct input.

# TODO (bonus)
# Create a listing of all of the Politicians and the number of votes they recieved
# output should look like:  Sen. John McCain - 7,323 votes (This is an example, yours will not return this value, it should just 
#    have a similar format)
print_rep_votes

# Create a listing of each Politician and the voter that voted for them
# output should include the senators name, then a long list of voters separated by a comma
#
# * you'll need to do some join statements to complete these last queries!
# I couldn't end up figuring out how to print each rep with the names of the voters after for some reason, I'll have to work on it further!
print_rep_and_voters

# REFLECTION- Include your reflection as a comment below.
# How does the sqlite3 gem work?  What is the variable `$db` holding?  
# Try to use your knowledge of ruby and OO to decipher this as well as h
# ow the `#execute` method works.  Take a stab at explaining the line 
# `$db.execute("SELECT name FROM congress_members WHERE years_in_congress 
#   > #{minimum_years}")`.  Try to explain this as clearly as possible for 
# your fellow students.  
# If you're having trouble, find someone to pair on this explanation with you.

#REFLECTION
=begin
  Basically the sqlite3 gem allows you to access database entries from within ruby code by using a series of methods that the gem has given us. The $db variable is a global variable that stores the database that we have passed to it.
  When we call prepare and execute on this $db, it allows us to access the data stored in the DB. Essentially the sqlite3 gem provides us with a class that we can use to access our databases. When we use the $db = SQLite3::Database.open "congress_poll_results.db" code, it 
  assigns calls the SQLITE3 class' open function. 
  This line:
      $db.execute("SELECT name FROM congress_members WHERE years_in_congress 
#   > #{minimum_years}")
  is basically using the class method 'execute' on the instance of the Database class, and passes in a string argument that contains the SQL statement we want to execute on the database. Execute will take our statement and return the values as an array which we can then output however we want to.
  Overall I feel pretty comfortable with SQL statements, but could definitely use some more practice with multiple joins and fine-tuning the way I would like my data to be outputted.
=end