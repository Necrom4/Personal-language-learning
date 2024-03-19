class Contacts
	attr_accessor :FirstName, :LastName, :NickName, :PhoneNumber, :DarkestSecret
	def initialize
		@FirstName = ""
		@LastName = ""
		@NickName = ""
		@PhoneNumber = ""
		@DarkestSecret = ""
	end
	def has_data?
		!(@FirstName.empty? || @LastName.empty? || @NickName.empty? || @PhoneNumber.empty? || @DarkestSecret.empty?)
	end
	def Init
		# contact Contacts.new
		print "Please enter your contact's first name: "
		@FirstName = gets.chomp
		print "Please enter your contact's last name: "
		@LastName = gets.chomp
		print "Please enter your contact's nickname: "
		@NickName = gets.chomp
		print "Please enter your contact's phone number: "
		@PhoneNumber = gets.chomp
		print "Please enter your contact's darkest secret: "
		@DarkestSecret = gets.chomp
		puts ""
		puts "Successfully added #{@FirstName} to your PhoneBook"
	end
	def Display(index)
		return unless has_data?
		puts "	      __________"
		puts " ____________/Contact #" << index << "\\____________"
		puts "/____________________________________\\"
		puts "|First Name	  ||	#{@FirstName}"
		puts "|Last Name	  ||	#{@LastName}"
		puts "|Nickname	  ||	#{@NickName}"
		puts "|Phone Number	  ||	#{@PhoneNumber}"
		puts "|Darkest Secret	  ||	#{@DarkestSecret}"
		puts "\\_________________/\\_________________/"
	end
	def FirstName
		@FirstName
	end
	def LastName
		@LastName
	end
	def NickName
		@NickName
	end
	def PhoneNumber
		@PhoneNumber
	end
	def DarkestSecret
		@DarkestSecret
	end
end
