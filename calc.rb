def add(x, y)
    return x + y
end

def substract(x, y)
    return x - y
end

def multiply(x, y)
    return x * y
end

def divide(x, y)
    return x / y
end

puts "Select operation."
puts "1.Add"
puts "1.Substract"
puts "1.Multiply"
puts "1.Divide"

loop do
    print "Enter choice(1/2/3/4): "
    choice = gets.chomp

    if %w(1 2 3 4).include?(choice)
        begin
            print "Enter first number: "
            num1 = Float(gets.chomp)
            print "Enter second number: "
            num2 = Float(gets.chomp)
        rescue ArgumentError
            puts "Invalid input, Please enter a number."
            next
        end

        case choice
        when '1'
            puts "#{num1} + #{num2} = #{add(num1, num2)}"
        when '2'
            puts "#{num1} - #{num2} = #{substract(num1, num2)}"
        when '3'
            puts "#{num1} * #{num2} = #{multiply(num1, num2)}"
        when '4'
            puts "#{num1} / #{num2} = #{divide(num1, num2)}"
        end

        print "Let's do next calculation? (yes/no): "
        break if gets.chomp == "no"
    else
        puts "Invalid Input"
    end
end
