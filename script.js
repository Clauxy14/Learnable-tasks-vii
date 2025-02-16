/* 

Every Details of how this whole code works in the README file

*/

// Subject - Telephone class
class Telephone {
    constructor() {
      this.phoneNumbers = new Set(); // Set to store phone numbers
      this.observers = []; // List of observers
    }
  
    // Method to add a new phone number
    addPhoneNumber(phoneNumber) {
      if (!this.phoneNumbers.has(phoneNumber)) {
        this.phoneNumbers.add(phoneNumber);
      }
    }
  
    // Method to remove a phone number
    removePhoneNumber(phoneNumber) {
      if (this.phoneNumbers.has(phoneNumber)) {
        this.phoneNumbers.delete(phoneNumber);
      } else {
        console.log('Phone number not found:', phoneNumber);
      }
    }
  
    // Method to dial a phone number
    dialPhoneNumber(phoneNumber) {
      if (this.phoneNumbers.has(phoneNumber)) {
        // Notify observers
        this.notifyObservers(phoneNumber);
      } else {
        console.log('Phone number not found:', phoneNumber);
      }
    }
  
    // Method to register observers
    addObserver(observer) {
      if (!this.observers.includes(observer)) {
        this.observers.push(observer);
        console.log('Observer added:', observer);
      } else {
        console.log('Observer already exists:', observer);
      }
    }
  
    // Method to remove observers
    removeObserver(observer) {
      if (this.observers.includes(observer)) {
        this.observers = this.observers.filter(obs => obs !== observer);
      }
    }
  
    // Method to notify all observers about a phone number being dialed
    notifyObservers(phoneNumber) {
      if (this.observers.length > 0) {
        this.observers.forEach(observer => observer.update(phoneNumber));
      }
    }
  }
  
  // Observer class
  class PhoneObserver {
    update(phoneNumber) {
      console.log('Phone number dialed:', phoneNumber);
    }
  }
  
  class DialingObserver {
    update(phoneNumber) {
      console.log('Now Dialing', phoneNumber);
    }
  }
  
  // Example usage
  const telephone = new Telephone();
  const phoneObserver = new PhoneObserver();
  const dialingObserver = new DialingObserver();
  
  // Add observers to the telephone
  telephone.addObserver(phoneObserver);
  telephone.addObserver(dialingObserver);
  
  // Add phone numbers
  telephone.addPhoneNumber('1234567890');
  telephone.addPhoneNumber('2345678901');
  
  // Dial a phone number
  telephone.dialPhoneNumber('1234567890');
  telephone.dialPhoneNumber('2345678901');
  telephone.dialPhoneNumber('9999999999'); // Not added, so it will not dial
  
  // Output:
  // Phone number dialed: 1234567890
  // Now Dialing 1234567890
  // Phone number dialed: 2345678901
  // Now Dialing 2345678901
  // Phone number not found: 9999999999