const requestPath = 'json/data.json';
const directoryCards = document.querySelector('.directory-cards');

fetch(requestPath)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const companies = jsonObject['companies'];
    companies.forEach(displaycompanies);
  });



  function displaycompanies(company) {
    let card = document.createElement('section');
    let coNamePara = document.createElement('p');
    let logoForDirectory = document.createElement('img');
    let addressPara = document.createElement('p');
    let phonePara = document.createElement('p');
    let coWebsiteLink = document.createElement('a');
    let membershipPara = document.createElement('p');
  
    coNamePara.textContent = company.name;
    coNamePara.classList.add('member-name-p');
  
    logoForDirectory.setAttribute('src', company.logopath);
    logoForDirectory.setAttribute('alt', `${company.name} company logo.`);
    logoForDirectory.setAttribute('loading', 'lazy');

    addressPara.textContent = company.address;
    phonePara.textContent = company.phonenumber;

    
    coWebsiteLink.textContent = company.websiteurl;
    coWebsiteLink.setAttribute('href', company.websiteurl);
    
    membershipPara.textContent = `Membership: ${company.memblevel}`;
    membershipPara.classList.add('member-level-p');
  
    card.appendChild(logoForDirectory);
    card.appendChild(coNamePara);
    card.appendChild(addressPara);
    card.appendChild(phonePara);
    card.appendChild(membershipPara);
    card.appendChild(coWebsiteLink);
  
    document.querySelector('article.directory-cards').appendChild(card);
  };