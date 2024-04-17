# ARRAY MODIFS #
# b = []
# var = "_"
# b << "Brian" << 48 << 220
# print "B: ", b.join(var), "\n"
# # print "pop: ", b.pop(2).join(var), "\n"
# # print "B: ", b.join(var), "\n"
# print "shift: ", b.shift(2).join(var), "\n"
# print "B: ", b.join(var), "\n"

# PAIR SUM #
# sum = 0
# puts "Enter n:-"
# n = gets.chomp.to_i
# i = 1
# while (i <= n)
# 	if (i % 2 == 0)
# 		sum = sum + i
# 	end
# 	i = i + 1
# end
# # puts "The sum is #{sum}"
# puts "The sum is " + sum.to_s

# RUBY BASIC EXERICSES #
# 1 #
# puts "Ruby Version: " + RUBY_VERSION
# puts "Ruby Patch Level: " + RUBY_PATCHLEVEL.to_s

# 2 #
# require 'date'
# current_time = DateTime.now.strftime "%d/%m/%Y %H:%M"
# puts "Current Date and Time: " + current_time

# 3 #
# print "String: "
# string = gets.chomp
# print "Number of copies: "
# n_copies = gets.chomp.to_i

# i = 0
# for i in 0...n_copies
# 	print string
# end

# 4 #
# print "Input the radius of the circle: "
# radius = gets.chomp.to_f
# perimiter = 2 * 3.141592653 * radius
# area = 3.141592653 * radius**2
# puts "The perimiter is #{perimiter}"
# puts "The area is #{area}"

# 5 #
# print "String: "
# string = gets.chomp
# if string.start_with?("if")
# 	puts "true"
# else
# 	puts "false"
# end

# 7 #
# print "File: "
# file = gets.chomp
# puts "File name: " + (File.basename file)
# puts "Base name: " + (File.basename file, file[(file.rindex('.'))..-1])
# puts "Extension: " + (File.extname file)
# puts "Path name: " + (File.dirname file)

# 8 #
# print "First integer: "
# i1 = gets.chomp.to_i
# print "Second integer: "
# i2 = gets.chomp.to_i
# if (20..30).include?(i1)
# 	puts "true"
# else
# 	puts "false"
# end
# if (20..30).include?(i2)
# 	puts "true"
# else
# 	puts "false"
# end

# 9 #
# print "Three numbers: "
# numbers = gets.chomp.split.map(&:to_i)
# puts numbers.any? { |i| (1..10).include?(i) }

# 10 #
# print "Two numbers: "
# numbers = gets.chomp.split.map(&:to_i)
# puts (1..10) === numbers[0] && !(1..10).include?(numbers[1]) || (1..10) === numbers[1] && !(1..10).include?(numbers[0])

# 11 #
# puts(
# <<-del
# Sample string :
# a string that you "don't" have to escape
# This
# is a ....... multi-line
# heredoc string --------> example
# del
# )

# 12 #
# print "String: "
# string = gets.chomp
# if string[0, 2] == "if"
# 	puts string
# else
# 	puts "if #{string}"
# end
# # --------------
# print "String: "; puts "#{gets.chomp.start_with?("if") ? $_ : "if " + $_}"

# 13 #
# print "String & n times: "; puts "#{gets.chomp.length < 3 ? ($_.split)[0].to_s * ($_.split)[1].to_i : ($_.split)[0][0..2].to_s * ($_.split)[1].to_i}"
# print "#{gets.chomp[0..2] * gets.chomp.to_i}"

# 15 #
# print "String: "; puts gets.chomp[-1] << $_[1...-2] << $_[0]
# string = gets.chomp
# new_string = string[-1] << string[1...-1] << string[0]
# puts new_string

# 17 #
# print "N: "; puts gets.chomp.to_i > 33 ? (($_.to_i - 33) * 2).abs : ($_.to_i - 33).abs

# 40 #
# print "String: "; gets.chomp.each_char { |char| print char unless $_.index(char).odd? }; puts

# 41 #
# print "Array: "; puts gets.chomp.split.map(&:to_i).count { |i| i == 5 }

# 55 #
# print "Integers: "; puts (numbers = gets.chomp.split.map(&:to_i))[0] == numbers[1] ? 0 : numbers[0] % 5 == numbers[1] % 5 ? numbers.min : numbers.max

# RUBY ARRAY EXERICSES #

# 1 #
# original_array = ["Red", "Blue", "Green"]
# print "Color: "
# color = gets.chomp
# puts "Check if '#{color}' in color array!"
# puts original_array.map(&:downcase).include?(color.downcase)

# 48 #
# original_array = ["abcde", "abdf", "adeab", "abdgeee", "bdefa", "abc", "ab", "a", "bacdef"]
# puts "Original array: "
# print original_array
# puts
# puts "Sorted array of strings by length: "
# print original_array.sort_by(&:length)

# RUBY STRING EXERICSES #

# 1 #
# puts "<i> he </i>"
