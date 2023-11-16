let celsiy=document.getElementById("celsiyid");
let country=document.getElementById("country");
let timee=document.getElementById("timee");
let icon_w=document.getElementById("icon-weather");
let input=document.getElementById("input");
let humadity=document.getElementById("humadity");
let wind=document.getElementById("wind");
let temp_max=document.getElementById("temp_max");
let temp_min=document.getElementById("temp_min");
let search_img=document.getElementById("search-img");




function getData(adress){
      const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${adress}`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4b4b6a1341msh0476cec4ba56533p1c701ajsnb4826c8b7919',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
    
};
fetch(url,options).then(el=>el.json()).then(data=>{
    console.log(data);
    celsiy.textContent=`${data.current.temp_c}°`;
    country.textContent=`${data.location.name}`;
    timee.textContent=`${data.location.localtime}`;
    icon_w.textContent=`${data.current.condition.icon}`;
    humadity.textContent=`${data.current.humidity}%`;
    wind.textContent=`${data.current.wind_degree}km/h`
    temp_max.textContent=`${+data.current.temp_c+5}°`
    console.log(temp_max);
    temp_min.textContent=`${+data.current.temp_c-5}°`


});





}

input.addEventListener("keyup",(event)=>{
    if(event.key=="Enter"){
        getData(input.value);
        input.value="";
    }
    
    search_img.addEventListener("click",getData(input.value))
});









