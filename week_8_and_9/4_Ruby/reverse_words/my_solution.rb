# U3.W8-9: Reverse Words


# I worked on this challenge by myself.

# 2. Pseudocode
# define function reverse_words to take a string as parameter
# - if parameter = '', return ''
# 	-split parameter and iterate through each individual string in the array
#   -reverse each string in the array
# 	- rejoin array into single string and return it


# 3. Initial Solution
=begin
def reverse_words(words)
	return words if words == ''
	temp = words.split(' ').each {|x| x.reverse!}
	temp.join(' ')
end
=end

# 4. Refactored Solution
def reverse_words(words)
	return words if words == ''
	words.split(' ').each {|x| x.reverse!}.join(' ')
end





# 1. DRIVER TESTS/ASSERT STATEMENTS GO BELOW THIS LINE
def assert
	raise "Assertion Failed" unless yield
end

assert{reverse_words('') == ''}
assert{reverse_words('Ich bin ein Berliner') == 'hcI nib nie renilreB'}
assert{reverse_words('Hey there') == "yeH ereht"}
assert{reverse_words("Hi") == "iH"}



# 5. Reflection 
=begin
	When doing this challenge, I realized how much better at writing ruby code than I am at writing Javascript. I find that ruby is much easier to understand and work through without
	having to constantly go back and look up the syntax. I really enjoyed this challenge because I got some more practice working with ruby methods and dealing with arrays and such. My strategy
	was to start with the rspec code and then work through the pseudocode to make sure that every step ended up passing. Then I went through and did the coding for my initial solution, and then refactored a little
	just because my solution was a total of 2 lines of logic. Overall though, I feel comfortable with the learning objectives for this challenge and can't wait to start the on-site program!
=end
