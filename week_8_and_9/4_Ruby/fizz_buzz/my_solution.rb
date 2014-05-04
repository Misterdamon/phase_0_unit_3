# U3.W8-9: 


# I worked on this challenge by myself.

# 2. Pseudocode
#define super_fizzbuzz  to take array as parameter
# - iterate through each value in the array
# - if value is divisible by 3, replace with Fizz
# - if value divisible by replace with Buzz
# - if value divisible by 3 and by 5, replace with FizzBuzz
# - return altered array 


# 3. Initial Solution
=begin 
array1 = [1,2,3,4,5,6,7,8,9,10,12,15, 45, 60]
def super_fizzbuzz(array)
	array.map! do |x| 
		if x % 15 == 0
			x = "FizzBuzz"
		elsif x % 5 == 0
			x = "Buzz"
		elsif x % 3 == 0
			x = "Fizz"
		else
			x = x
		end
	end
	array

end
puts super_fizzbuzz(array1)
=end

# 4. Refactored Solution
# I refactored my solution to include a shortened conditional statement
def super_fizzbuzz(array)
	array.map! do |x| 
			x = "FizzBuzz" if x % 15 == 0
			x = "Buzz" if x % 5 == 0
	  	x = "Fizz" if x % 3 == 0
	  	x = x 
	end
	array
end




# 1. DRIVER TESTS/ASSERT STATEMENTS GO BELOW THIS LINE
def assert
	raise "Assertion Failed" unless yield
end

assert {super_fizzbuzz([1,2,3]) == [1,2,"Fizz"]}
assert {super_fizzbuzz([1,2,5]) == [1,2,"Buzz"]}
assert {super_fizzbuzz([15,5,3]) == ["FizzBuzz","Buzz","Fizz"]}
assert {super_fizzbuzz([15, 5, 3, 1]) == ['FizzBuzz', 'Buzz', 'Fizz', 1]}




# 5. Reflection 
=begin
	Once again, I'm realizing how much easier it is for me to write ruby code than it is for me to write javascript, so I guess I'm going to be practicing a lot of JS in the next week or so :D
	Overall my strategy was to go through each rspec test and translate the requirements into pseudocode, which then laid the groundwork for my initial solution. I found it very easy to go from my 
	pseudocode into an initial solution because it was a pretty clear process to get the solution working. I then translated the rspec tests into assert statements so that I could test my solution. 
	In general I feel very comfortable with ruby so far, and can't wait to get into the other libraries and frameworks that we will be using for it. Now... just to brush up on my javascript.
=end