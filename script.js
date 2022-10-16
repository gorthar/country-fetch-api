const container = document.getElementById("container");

const countries = fetch("https://restcountries.com/v3.1/all")
.then((response)=>response.json())
.then((data)=> {
    data.forEach(element => {
        container.
        insertAdjacentHTML("beforeend",
        `
        <div class="card">
              <img src="${element.flags.png}" alt="" />
              <h2>${element.name.common}</h2>
              <p>
                <i class="fa-solid fa-people-group"></i> Population:<span
                  class="population"
                  >${element.population}</span
                >
              </p>
              <p>
                <i class="fa-solid fa-location-dot"></i> Location:<span
                  class="location"
                  >${element.region}</span
                >
              </p>
            </div>
        `)
    });

});



