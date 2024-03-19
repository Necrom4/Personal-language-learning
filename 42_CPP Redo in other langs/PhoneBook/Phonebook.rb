require_relative "Contacts"

class PhoneBook
	attr_accessor :Contacts, :UsedSlots
	def initialize
		@Contacts = Array.new(8) { Contacts.new }
		@UsedSlots = 0
	end
	def Start
		puts "     _________________"
		puts " ___/Awesome PhoneBook\\___"
		puts "/_________________________\\"
		puts "|ADD	: Add a contact	  |"
		puts "|SEARCH	: Search a contact|"
		puts "|EXIT	: Close PhoneBook |"
		puts "\\_________________________/"
	end
	def AddContact
		@Contacts[@UsedSlots % 8] = Contacts.new
		@Contacts[@UsedSlots % 8].Init
		@UsedSlots += 1
	end
	def PrintContactsList
		return puts "-Your PhoneBook is empty" unless @Contacts.first&.has_data?
		i = -1
		@Contacts.each_with_index do |contact, index|
			next unless contact&.has_data?
			puts "| #{index + 1} | #{PrintCase(@Contacts[index].FirstName)} | #{PrintCase(@Contacts[index].LastName)} | #{PrintCase(@Contacts[index].NickName)}"
		end
	end
	def PrintContactInfo
		return unless @Contacts.first&.has_data?
		input = nil
		loop do
			print ">Display informatin about #"
			input = gets.chomp
			break unless !input.to_i || !(1...9).include?(input.to_i) || !@Contacts[input.to_i - 1]&.has_data?
			puts "-The Contact you chose does not exist"
		end
		@Contacts[input.to_i - 1].Display(input.to_i - 1)
	end
	def PrintCase(str)
		str.length > 10 ? str[0..8] + "." : str
	end
end
