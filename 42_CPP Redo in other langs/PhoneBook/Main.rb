require_relative "PhoneBook"

pb = PhoneBook.new
pb.Start
loop do
	print "> "
	input = gets.chomp.upcase
	break if input == "EXIT"
	case input
	when "ADD"
		pb.AddContact
	when "SEARCH"
		pb.PrintContactsList
		pb.PrintContactInfo
	else
		puts "Invalid input"
	end
end
