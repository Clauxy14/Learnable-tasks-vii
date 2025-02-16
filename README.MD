# TELEPHONE PACKAGE

The goal is to create a telephone package. The telephone class should expose 3 different methods.

1. AddPhoneNumber - For adding a new phone number
2. RemovePhoneNumber - For removing a phone number
3. DialPhoneNumber - For dialling a phone number (only phone numbers that have been added can be dialled)

The telephone class should also maintain a list of observers and notify them whenever a phone number is dialled. 

## Classes

### Telephone
- `constructor()`: Initializes the Telephone object with an empty set for storing phone numbers and an empty array for observers.
- `addPhoneNumber(phoneNumber)`: Adds a new phone number to the set if it doesn't already exist.
- `removePhoneNumber(phoneNumber)`: Removes a phone number from the set if it exists.
- `dialPhoneNumber(phoneNumber)`: Dials a phone number if it exists in the set, notifying all observers.
- `addObserver(observer)`: Registers a new observer if it's not already registered.
- `removeObserver(observer)`: Removes an observer from the list of observers.
- `notifyObservers(phoneNumber)`: Notifies all registered observers when a phone number is dialed.

### PhoneObserver
- `update(phoneNumber)`: Implements the update method to log when a phone number is dialed.

### DialingObserver
- `update(phoneNumber)`: Implements the update method to log when a phone number is being dialed.


## Requirements
1. Create a telephone class. It should expose 3 public methods - AddPhoneNumber, RemovePhoneNumber, and DialPhoneNumber.
2. Update the telephone class, so it uses the observer pattern (have methods to add, remove and notify observers)
3. Create a class for the observer, it should have a method that can be called by the telephone class to notify it. 
4. Have the telephone class notify the observers any time a phone number is dialed. 
5. Add two observers to the telephone class


## Inputs
- The phone numbers to be added or dialed.

## Flow
1. The Telephone class has a constructor that initializes an empty set to store phone numbers and an empty array to store observers.
2. The addPhoneNumber() method adds a phone number to the set of phone numbers.
3. The removePhoneNumber() method removes a phone number from the set of phone numbers.
4. The dialPhoneNumber() method checks if the given phone number is in the set of phone numbers. If it is, it notifies all observers by calling the notifyObservers() method. If it is not, it logs a message indicating that the phone number was not found.
5. The addObserver() method adds an observer to the array of observers.
6. The removeObserver() method removes an observer from the array of observers.
7. The notifyObservers() method calls the update() method of each observer in the array, passing the dialed phone number as an argument.


## Outputs
The code snippet logs messages indicating the phone numbers that were dialed and the observers that were added.

## Usage Example
    const telephone = new Telephone();
    const phoneObserver = new PhoneObserver();
    const dialingObserver = new DialingObserver();

    telephone.addObserver(phoneObserver);
    telephone.addObserver(dialingObserver);

    telephone.addPhoneNumber('1234567890');
    telephone.addPhoneNumber('2345678901');

    telephone.dialPhoneNumber('1234567890');
    telephone.dialPhoneNumber('2345678901');
    telephone.dialPhoneNumber('9999999999');
