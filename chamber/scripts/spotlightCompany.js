const requestPath2 = 'json/dataSpotlight.json';
const spotlightCards = document.querySelector('.spotlight-container');

fetch(requestPath2)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const companies2 = jsonObject['companies'];

    let premiumMembers = companies2.filter(isPremium);

    let shuffledPremiums = premiumMembers.sort(shufflePremiums);


    for (let i = 0; i < 3; i++) {
      displaycompanies2(shuffledPremiums[i]);
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
    let cardContainer = document.createElement('div');
    let coNameH2 = document.createElement('h2');
    let logoForCard = document.createElement('img');
    let taglineH3 = document.createElement('h3');
    let hr = document.createElement('hr');
    let coContactInfo = document.createElement('p');
    let coWebsiteLink2 = document.createElement('a');
  
    coNameH2.textContent = company.name;
  
    logoForCard.setAttribute('src', company.logopath);
    logoForCard.setAttribute('alt', `${company.name} company logo.`);
    logoForCard.setAttribute('loading', 'lazy');

    taglineH3.textContent = company.tagline;
    
    coWebsiteLink2.textContent = 'Website';
    coWebsiteLink2.setAttribute('href', company.websiteurl);

    coContactInfo.textContent = `${company.email} | ${company.phonenumber} | `;

    cardContainer.appendChild(coNameH2);
    cardContainer.appendChild(logoForCard);
    cardContainer.appendChild(taglineH3);
    cardContainer.appendChild(hr);
    cardContainer.appendChild(coContactInfo);

    coContactInfo.appendChild(coWebsiteLink2);
  
    document.querySelector('div.spotlight-container').appendChild(cardContainer);
  };