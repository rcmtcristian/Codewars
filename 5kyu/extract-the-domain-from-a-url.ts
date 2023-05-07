// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

//Main Solution 
function domainName(url){
  let domainName = url;

  domainName = domainName.replace(/^(https?|ftp):\/\//i, '');

  domainName = domainName.replace(/^www\./i, '');

  domainName = domainName.split('/')[0];

  domainName = domainName.split('.')[0];
// 
  return domainName;
}

// Refactored Solution
function domainName(url: string): string{
  let domainName: string = url;

  domainName = domainName.replace(/^(https?|ftp):\/\//i, '');

  domainName = domainName.replace(/^www\./i, '');

  domainName = domainName.split('/')[0];

  domainName = domainName.split('.')[0];
// 
  return domainName;
}
//Other Solutions
function domainName(url){
  url = url.replace("https://", '');
  url = url.replace("http://", '');
  url = url.replace("www.", '');
  return url.split('.')[0];
};