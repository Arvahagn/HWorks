// ...1 Create an Author class and a Book class.
// Author should have: name, email, gender.
// It should have appropriate getters and setters.
// It should have a toString method.
// Book should have: title, author(Author), price, quantity.
// It should have appropriate getters and setters.
// It should have a method: getProfit(), which calculates the profit from the book based on
// the price and quantity.
// It should have a toString method.

class Author{
    constructor(name, email, gender){
        this.name = name
        this.email = email
        this.gender = gender
    }
    get name() {
        return this._name;
      }
    
      set name(newName) {
        return this._name =newName; 
        }

    get email() {
        return this._email;
    }
        
    set email(newEmail) {
        return this._email =newEmail 
    }

    get gender() {
        return this._gender;
      }
    
    set gender(newGender) {
        return this._gender =newGender 
    }
    toString(name, email, gender){
        return ` ${name},   ${email}, ${gender}`
    }
}
let author = new Author()

class Book{
    constructor(title, author, price, quantity){
        this.title = title
        this.author = author
        this.price = price
        this.quantity = quantity
    }
    get price() {
        return this._price;
      }
    
      set price(newPrice) {
        return this._price =newPrice
        }

        get quantity() {
            return this._quantity;
          }
        
          set quantity(newQuantity) {
            return this._quantity =newQuantity
            }

        getProfit(){
            return this.quantity * this.price
        }
        toString(){
            return 'The profit is ' + this.getProfit() ;
        }
}
let tumanyan = new Author('Hov', 'ar@gmail.com', 'mal');
let heqiatner = new Book('Giqory', tumanyan, 1500, 2)

console.log(heqiatner.toString())



// ...2 Create an Account class. Account should have: id, name, balance.
// It should have setters for name and balance, and getters for all fields.
// It should have a method: credit(amount), which should add amount to balance and
// return the updated balance.
// It should have a method: debit(amount), which should subtract the amount from the
// balance, if amount is less than the balance, otherwise output “Amount exceeded
// balance.”
// It should have a method: transferTo(anotherAccount, amount): which should subtract the
// amount from the account balance and add it to the given anotherAccount and return the
// updated balance, if amount is less than the balance, otherwise output “Amount
// exceeded balance.”
// It should have a static method: identifyAccounts(accountFirst, accountSecond) which
// gets two accounts and identifies if they are the same or not comparing all fields.
// It should have toString method.

class Account{
    constructor(id, name, balance){
        this.id = id
        this.name = name
        this.balance = balance
    }

    static  identifyAccounts(accountFirst, accountSecond){
        if(accountFirst.id === accountSecond.id){
            console.log('The id are the same')
        } if(accountFirst.name === accountSecond.name){
            console.log('the names are the same')
        } if(accountFirst.balance === accountSecond.balance){
            console.log('the balances are the same')
        } else{
            console.log('accountFirst and accountSecond are not the same')
        }    
    }

    get name() {
        return this._name;
      }
    set name(newName) {
        return this._name =newName
    }

    get balance() {
        return this._balance;
      }
    set balance(newbalance) {
        return this._balance =newbalance
    }
        
    get id() {
        return this._id;
      }
    set id(newId){
        return this._id = newId
    }

    credit(amount){
        this.balance += amount
        return this.balance
    }
    debit(amount){
        if(this.balance>amount){
            this.balance -= amount
        } else{
            console.log('Amount exceeded balance.')
        }
    }
    transferTo(anotherAccount, amount){
        this.balance -= amount
        if(this.balance>amount){
            anotherAccount.balance = this.balance
        } else{
            console.log('Amount exceeded balance.')
        }
    }
    toString(){
        return 'some text'
}
}


let a = new Account('234', 'Vahagn', 1000)
let b = new Account('123', 'Arman', 2000)

console.log(Account.identifyAccounts(a, b))
