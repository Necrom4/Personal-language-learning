print "Your string: "
my_str = gets.chomp
words = my_str.split


words.each { |word| word.downcase! }
words.sort!
puts "The sorted sequence is: "
puts words
