const cityname=document.getElementById("cityname")


async function fetchData(city) {
  const url =
    `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${city}&days=3`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "5993f902b8mshc12c46803594a66p12c663jsncc7d851ba210",
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    cityname.innerHTML=result.location.name;
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

const city=document.getElementById("city");

// adding event listener to search bar
let submit =document.getElementById("submit");
submit.addEventListener("click",(e)=>{
    e.preventDefault();
    fetchData(city.value);


})

// Call the fetchData function to execute the asynchronous code
fetchData("mumbai");
