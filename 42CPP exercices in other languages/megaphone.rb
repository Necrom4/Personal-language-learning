if ARGV.length < 1
	puts "* LOUD AND UNBEARABLE FEEDBACK NOISE *"
	exit 0
end

ARGV.each do |i|
	i.each_char do |j|
		print j.upcase
	end
	print " "
end
puts ""
