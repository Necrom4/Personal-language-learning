import sys

def parsing(f):
	numbers = []
	for line in f:
		try:
			numbers.extend([int(word) for word in line.split()])
		except ValueError:
			print("File contains non-Integer value.")
			exit(1)
	return numbers

def partition(numbers, low, high):
	pivot = numbers[high]
	i = low - 1

	for j in range(low, high):
		if numbers[j] <= pivot:
			i = i + 1
			(numbers[i], numbers[j]) = (numbers[j], numbers[i])
	(numbers[i + 1], numbers[high]) = (numbers[high], numbers[i + 1])
	return i + 1

def sorting(numbers, low, high):
	if low < high:
		pi = partition(numbers, low, high)
		sorting(numbers, low, pi - 1)
		sorting(numbers, pi + 1, high)

if len(sys.argv) != 2:
	print("Error: Please provide one filename as an argument.")
	exit(1)

file = sys.argv[1]

try:
	with open(file, "r") as f:
		numbers = parsing(f)
		sorting(numbers, 0, (len(numbers) - 1))
		print(numbers)
except FileNotFoundError:
	print(f"Error: \"{file}\" not found.")
