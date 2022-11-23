const requestPath2 = 'json/dataSpotlight.json';
const spotlightCards = document.querySelector('.spotlight-container');

fetch(requestPath2)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    // console.table(jsonObject);  // temporary checking for valid response and data parsing
    const companies2 = jsonObject['companies'];

    let premiumMembers = companies2.filter(isPremium);

    let shuffledPremiums = premiumMembers.sort(shufflePremiums);

    // shuffledPremiums.forEach(displaycompanies2);

    for (let i = 0; i < 3; i++) {
      displaycompanies2(shuffledPremiums[i]);
      // console.log(shuffledPremiums[i]);
    };
  });

  function isPremium(company) {
    if (company["memblevel"] == "Gold" | company["memblevel"] == "Silver") {
      return company;
    } else {
      return false;
    };
  };

  function shufflePremiums(companyA, companyB) {
    return 0.5 - Math.random();
  };

  function displaycompanies2(company) {
    // Create elements to add to the document
    let cardContainer = document.createElement('div');
    let coNameH2 = document.createElement('h2');
    let logoForCard = document.createElement('img');
    let taglineH3 = document.createElement('h3');
    let hr = document.createElement('hr');
    let coContactInfo = document.createElement('p');
    let coWebsiteLink2 = document.createElement('a');
  
    coNameH2.textContent = company.name;
  
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values.
    logoForCard.setAttribute('src', company.logopath);
    logoForCard.setAttribute('alt', `${company.name} company logo.`);
    logoForCard.setAttribute('loading', 'lazy');

    taglineH3.textContent = company.tagline;
    
    coWebsiteLink2.textContent = 'Website';
    coWebsiteLink2.setAttribute('href', company.websiteurl);

    coContactInfo.textContent = `${company.email} | ${company.phonenumber} | `;

    // Add/append the section(cardContainer) with the coNameH2 element
    cardContainer.appendChild(coNameH2);
    cardContainer.appendChild(logoForCard);
    cardContainer.appendChild(taglineH3);
    cardContainer.appendChild(hr);
    cardContainer.appendChild(coContactInfo);

    coContactInfo.appendChild(coWebsiteLink2);
  
    // Add/append the existing HTML div with the directoryCards class with the section(card)
    document.querySelector('div.spotlight-container').appendChild(cardContainer);
  };