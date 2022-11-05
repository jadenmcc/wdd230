const requestPath = 'json/data.json';
const directoryCards = document.querySelector('.directoryCards');

fetch(requestPath)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    // console.table(jsonObject);  // temporary checking for valid response and data parsing
    const companies = jsonObject['companies'];
    companies.forEach(displaycompanies);
  });

  function displaycompanies(company) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let coNamePara = document.createElement('p');
    let logoForDirectory = document.createElement('img');
    let addressPara = document.createElement('p');
    let phonePara = document.createElement('p');
    let coWebsiteLink = document.createElement('a');
    let membershipPara = document.createElement('p');
  
    // Change the textContent property of the coNamePara element to contain the company's full name
    // coNamePara.textContent = company.name + ' ' + company.lastname;
    coNamePara.textContent = company.name;
    coNamePara.classList.add('member-name-p');
  
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    logoForDirectory.setAttribute('src', company.logopath);
    // logoForDirectory.setAttribute('alt', 'Portait of ' + company.name + ' ' + company.lastname);
    logoForDirectory.setAttribute('alt', `${company.name} company logo.`);
    logoForDirectory.setAttribute('loading', 'lazy'); // COMMENT THIS SECTION OUT (SEE NEXT LINE)
    // Update code so that it will add [data-src] etc so will work with lazyLoader.js

    addressPara.textContent = company.address;
    phonePara.textContent = company.phonenumber;

    
    coWebsiteLink.textContent = company.websiteurl;
    coWebsiteLink.setAttribute('href', company.websiteurl);
    
    membershipPara.textContent = `Membership: ${company.memblevel}`;
    membershipPara.classList.add('member-level-p');
  
    // Add/append the section(card) with the coNamePara element
    card.appendChild(logoForDirectory);
    card.appendChild(coNamePara);
    card.appendChild(addressPara);
    card.appendChild(phonePara);
    card.appendChild(membershipPara);
    card.appendChild(coWebsiteLink);
  
    // Add/append the existing HTML div with the directoryCards class with the section(card)
    document.querySelector('article.directoryCards').appendChild(card);
  };