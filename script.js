function isValidEmail(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  }
  
  function calculateTotal() {
    const totalCost = Math.floor(calculateBikeCost() * calculateRentalDays() * calculateCyclonosicValue());
    const mujRozpocet = parseInt(document.querySelector('input[name="mujRozpocet"]').value);
  
    const resultElement = document.getElementById("result");
    resultElement.textContent = `Celková cena zápůjčky: ${totalCost} Kč. `;
  
    if (mujRozpocet >= totalCost) {
      resultElement.textContent += "Skvělé! Vejdeš se do svého rozpočtu.";
    } else {
      resultElement.textContent += "Bohužel se nevejdeš se do svého rozpočtu. Uprav svou objednávku nebo navyš rozpočet.";
    }
  }
  
  function calculateBikeCost() {
    const typKola = document.querySelectorAll('input[type="checkbox"][name="typKola"]');
    let totalCost = 0;
  
    typKola.forEach((checkbox) => {
      if (checkbox.checked) {
        const typKola = checkbox.value;
        const pocetKol = parseInt(document.querySelector(`input[name="${typKola}Pocet"]`).value);
        switch (typKola) {
          case "horske":
            totalCost += pocetKol * 500;
            break;
          case "detske":
            totalCost += pocetKol * 200;
            break;
          case "silnicni":
            totalCost += pocetKol * 1500;
            break;
          case "gravel":
            totalCost += pocetKol * 2500;
            break;
          default:
            break;
        }
      }
    });
  
    return totalCost;
  }
  
  function calculateRentalDays() {
    const pocetDnu = parseInt(document.querySelector('select[name="pocetDnu"]').value);
    return pocetDnu;
  }
  
  function calculateCyclonosicValue() {
    const cyclonosicOption = document.querySelector('input[type="radio"][name="cyclonosic"]:checked');
    const cyclonosicValue = parseInt(cyclonosicOption.value);
    return 1 + cyclonosicValue / 100;
  }
  
  function submitOrder() {
    const userEmail = document.querySelector('input[name="userEmail"]').value;
    const resultElement = document.getElementById("result");
    const emailMessageElement = document.getElementById("emailMessage");
  
    if (!isValidEmail(userEmail)) {
      emailMessageElement.textContent = "Zadej platný email!";
      resultElement.textContent = ""; 
      return;
    }
  
    emailMessageElement.textContent = "Objednávka byla úspěšně odeslána.";
    resultElement.textContent = ""; 
   
    resetForm();
  }
  
  function resetForm() {
    const form = document.getElementById("objednavka");
    form.reset();
  }
  
  