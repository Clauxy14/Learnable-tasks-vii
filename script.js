
const telephone = (() => {
    const phoneNumbers = new Set();
    const observers = [];
  
    return {
      addPhoneNumber(phoneNumber) {
        phoneNumbers.add(phoneNumber);
      },
      removePhoneNumber(phoneNumber) {
        phoneNumbers.delete(phoneNumber);
      },
      dialPhoneNumber(phoneNumber) {
        if (phoneNumbers.has(phoneNumber)) {
          observers.forEach((observer) => observer.update(phoneNumber));
        }
      },
      addObserver(observer) {
        observers.push(observer);
      },
      removeObserver(observer) {
        const index = observers.indexOf(observer);
        if (index !== -1) {
          observers.splice(index, 1);
        }
      },
    };
  })();
  
  const printPhoneNumber = (phoneNumber) => {
    document.getElementById("output").innerHTML += `Phone Number: ${phoneNumber}`;
  };
  
  const printDiallingMessage = (phoneNumber) => {
    document.getElementById("output").innerHTML += `Now Dialling ${phoneNumber}`;
  };
  
  telephone.addObserver({ update: printPhoneNumber });
  telephone.addObserver({ update: printDiallingMessage });
  
  document.getElementById("add-phone-number").addEventListener("click", () => {
    const phoneNumber = document.getElementById("phone-number").value;
    telephone.addPhoneNumber(phoneNumber);
    document.getElementById("output").innerHTML += `Added phone number: ${phoneNumber}`;
  });
  
  document.getElementById("remove-phone-number").addEventListener("click", () => {
    const phoneNumber = document.getElementById("phone-number").value;
    telephone.removePhoneNumber(phoneNumber);
    document.getElementById("output").innerHTML += `Removed phone number: ${phoneNumber}`;
  });
  
  document.getElementById("dial-phone-number").addEventListener("click", () => {
    const phoneNumber = document.getElementById("phone-number").value;
    telephone.dialPhoneNumber(phoneNumber);
  });