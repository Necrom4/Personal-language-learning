if ARGV.length != 1
	puts "Error: Please provide one filename as an argument."
	exit 1
end

def parsing(file)
	numbers = []
	File.foreach(file) do |line|
		begin
			numbers += line.split.map { |nb| Integer(nb) }
		rescue ArgumentError
			puts "File contains non-Integer value."
			exit 1
		end
	end
	numbers
end

def partition(numbers, low, high)
	pivot = numbers[high]
	i = low - 1

	(low...high).each do |j|
		if numbers[j] <= pivot
			i += 1
			numbers[i], numbers[j] = numbers[j], numbers[i]
		end
	end
	numbers[i + 1], numbers[high] = numbers[high], numbers[i + 1]
	i + 1
end

def sorting(numbers, low, high)
	if low < high
		pi = partition(numbers, low, high)
		sorting(numbers, low, pi - 1)
		sorting(numbers, pi + 1, high)
	end
end

if File.exists?(ARGV[0])
	file = File.open(ARGV[0], "r")
	numbers = parsing(file)
	sorting(numbers, 0, numbers.size - 1)
	print "["
	numbers.each do |item|
		print "#{item}, "
	end
	print "\b\b]"
else
	puts "Error: \"#{ARGV[0]}\" not found."
end
