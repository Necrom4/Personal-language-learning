# b = []
# var = "_"
# b << "Brian" << 48 << 220
# print "B: ", b.join(var), "\n"
# # print "pop: ", b.pop(2).join(var), "\n"
# # print "B: ", b.join(var), "\n"
# print "shift: ", b.shift(2).join(var), "\n"
# print "B: ", b.join(var), "\n"
sum = 0
puts "Enter n:-"
n = gets.chomp.to_i
i = 1
while (i <= n)
	if (i % 2 == 0)
		sum = sum + i
	end
	i = i + 1
end
# puts "The sum is #{sum}"
puts "The sum is " + sum.to_s
