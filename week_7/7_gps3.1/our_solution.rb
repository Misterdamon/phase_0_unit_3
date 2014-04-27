# U3.W7: Build an Electronic Grocery List!
 
# Your full names:
# 1.Samuel Davis
# 2. Jake Persing
 
# User Stories (As many as you want. Delete the statements you don't need)
# As a user, I want to add and remove an item from the grocery
# As a user, I want to view all of the contents of the list
# As a user, I want to add together the total price of all the items


# Pseudocode
# --define class GroceryList
#   -define initialize to take an empty array as default value
#     - @list to array in parameter
#   -define add_item to take a single instance of GroceryItem class as parameter
#     - push item into @list
#   -define remove_item to take single instance of GroceryItem class as paramter 
#     - use delete method to delete from @list array
#   -define show_list to take no parameters
#     - iterate (.each) through @list and output to console name and price
#     - add price of each item to total, and print to console
# -- define class GroceryItem
#   - attr_reader price
#   - attr_reader item_name
#   -define initialize to take item name and price as params
#     - set @item to item name parameter
#     - set @price to price parameter    


# Your fabulous code goes here....

class GroceryList
  
  def initialize(*items)
    @list = []
    items.each { |item| @list << item }
  end

  def add_item(item)
    @list << item
  end
  
  def remove_item(item)
    @list.delete(item)
  end
  
  def show_list
    total = 0
    @list.each do |item| 
      puts "#{item.name}: #{item.price}"
      total += item.price
    end
    puts "#{total.round(2)} is the total cost of the items thus far."
  end
  
end

class GroceryItem
  attr_reader :name, :price
  def initialize(name, price)
    @name = name
    
    raise ArgumentError.new("Please enter a valid price!") if price < 0
    @price = price 
  end
  
end

butter = GroceryItem.new('butter', 2.79)
milk = GroceryItem.new('milk', 2.79)
cereal = GroceryItem.new('cereal', 2.79)

list = GroceryList.new(cereal)

list.add_item(butter)
list.add_item(milk)
list.add_item(cereal)
list.show_list
pop = GroceryItem.new('Coca Cola', 1.59)
list.add_item(pop)
list.show_list
list.remove_item(butter)
list.show_list


# DRIVER CODE GOES HERE. 
def assert
  raise "Assertion failed!" unless yield
end

begin
GroceryItem.new('bread', -3.54)
rescue ArgumentError
puts $!
end

assert { GroceryItem.instance_method(:initialize).arity == 2 }

#assert { GroceryList.instance_method(:initialize).arity == 1 }

assert { GroceryList.is_a? Class }

assert { GroceryItem.is_a? Class }

assert { butter.is_a? GroceryItem }

#assert { GroceryList.instance_method(:add_item).arity.instance_of? GroceryItem }

assert{ butter.instance_of?(GroceryItem) }

assert{ milk.instance_of?(GroceryItem) }
 
#Reflection:
=begin
	For this challenge, it was great to get some more practice working with someone else toward a common solution. Our strategy was to start by creating our user stories 
	and then converting those	stories to pseudocode. After that, we went right into creating the initial solution. We ended up doing our driver tests last, which was probably not the way to do
		it but our code ended up working just fine. We created methods to add/remove/show the grocery list, and then checked to make sure our parameters were correct in our driver code. My pair showed me how to
		test the parameters in the function, which I previously didn't know how to do, so I was grateful for that. Overall, I feel comfortable with creating classes/class methods, using instance variables, attr_readers etc...
		I didn't find any part of the challenge to be tedious because my pair and I were working well throughout the challenge, and we switched off driving and navigating quite often.
=end