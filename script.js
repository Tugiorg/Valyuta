async function getCurrencies() {
    const url = "https://www.cbr-xml-daily.ru/daily_json.js";
    const response = await fetch(url);
    const data = await response.json();
  


    // Rate

      const usdRate = data.Valute.USD.Value.toFixed(2);
      const aznRate = data.Valute.AZN.Value.toFixed(2);
      const eurRate = data.Valute.EUR.Value.toFixed(2);
      const gbpRate = data.Valute.GBP.Value.toFixed(2);
      const tryRate = data.Valute.TRY.Value.toFixed(2);
      const yenRate = data.Valute.JPY.Value.toFixed(2);
      const uahRate = data.Valute.UAH.Value.toFixed(2);
      const aedRate = data.Valute.AED.Value.toFixed(2);
      const egpRate = data.Valute.EGP.Value.toFixed(2);
      const gelRate = data.Valute.GEL.Value.toFixed(2);
      const vndRate = data.Valute.VND.Value.toFixed(2);
      const inrRate = data.Valute.INR.Value.toFixed(2);

    //ID

    const usdElement = document.querySelector("#usd");
    const aznElement = document.querySelector("#azn");
    const eurElement = document.querySelector("#eur");
    const gbpElement = document.querySelector("#gbp");
    const tryElement = document.querySelector("#try");
    const yenElement = document.querySelector("#yen");
    const uahElement = document.querySelector("#uah");
    const aedElement = document.querySelector("#aed");
    const egpElement = document.querySelector("#egp");
    const gelElement = document.querySelector("#gel");
    const vndElement = document.querySelector("#vnd");
    const inrElement = document.querySelector("#inr");

     //innerHTML
   
    usdElement.innerHTML = usdRate;
    eurElement.innerHTML = eurRate;
    aznElement.innerHTML= aznRate;
    gbpElement.innerHTML= gbpRate;
    tryElement.innerHTML= tryRate;
    yenElement.innerHTML= yenRate;
    uahElement.innerHTML= uahRate;
    aedElement.innerHTML= aedRate;
    egpElement.innerHTML= egpRate;
    gelElement.innerHTML= gelRate;
    vndElement.innerHTML= vndRate;
    inrElement.innerHTML=inrRate;

}
  
  getCurrencies();