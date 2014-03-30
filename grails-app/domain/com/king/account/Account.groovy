package com.king.account

class Account {
	
	String name;
	Date dateOfBirth;
	String email;
	
    static constraints = {
		name blank: false, matches: /([a-zA-Z']+\s*)+/
		dateOfBirth blank: false, max: new Date()
		email email: true, blank: false
    }
}
