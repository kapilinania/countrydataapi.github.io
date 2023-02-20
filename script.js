


const getdata = (country)=>{
    // table_data.innerHTML = city

        // Fetch data from an API
          fetch('https://restcountries.com/v3.1/name/'+country)
            .then(response => response.json())
            .then(data => {
                // Do something with the data
                console.log(data);
                ihtml="";
                for(let i in data){
                   console.log(data[i])
                    console.table(data[i])
                   ihtml += `
                   <div class="row mt-5 ">
                    <div class="col-md-4  border border-dark shadow p-3 mb-5 bg-white rounded">
                        <div class="row w-75 mx-auto mt-5">
                            <div class="col-md-12 mb-5"><img src="${data[i].flags.svg}" alt="" class="img-fluid"></div>
                            <div class="col-md-12 text-center pt-2 pb-2">
                                <h2>${data[i].name.common}</h2>
                            </div>
                            <div class="col-md-12 text-center pt-2 pb-2 text-warning">
                                <h4>${data[i].region}</h4>
                            </div>
                            <div class="row text-center">
                                <div class="col-md-12 pt-2 pb-2 text-info">
                                    <h5>Population</h5>
                                </div>
                                <div class="col-md-12 pt-2 pb-2 text-danger">
                                    <h5>${data[i].population}
                                    </h5>
                                </div>
                            </div>
                            <div class="row text-center">
                                <div class="col-md-12 pt-2 pb-2 text-warning">
                                    <h5>Area</h5>
                                </div>
                                <div class="col-md-12 pt-2 pb-2 text-danger">
                                    <h5>${data[i].area}</h5>
                                </div>
                            </div>
                            <div class="row text-center">
                                <div class="col-md-12 pt-2 pb-2 text-warning">
                                    <h5>Army Sign</h5>
                                </div>
                                <div class="col-md-12 mb-5"><img src="${data[i].coatOfArms.svg}" alt="" class="img-fluid" width="100" height="50"></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-8 border border-dark shadow  mb-5 bg-white rounded">
                        <div class="row w-75 mx-auto pt-3">
                            <div class="col-md-6"><h5>Official Name</h5></div>
                            <div class="col-md-6"><h5>${data[i].name.official}</h5></div> 
                        </div>
                        <hr>
                        <div class="row w-75 mx-auto pt-3">
                            <div class="col-md-6"><h5>Alternet Spellings</h5></div>
                            <div class="col-md-6"><h5>${data[i].altSpellings}</h5></div> 
                        </div>
                        <hr>
                        <div class="row w-75 mx-auto pt-3">
                            <div class="col-md-6"><h5>Capital</h5></div>
                            <div class="col-md-6"><h5>${data[i].capital}</h5></div> 
                        </div>
                        <hr>
                        <div class="row w-75 mx-auto pt-3">
                            <div class="col-md-6"><h5>Subregion</h5></div>
                            <div class="col-md-6"><h5> ${data[i].subregion}
                            </h5></div> 
                        </div>
                        <hr>
                        <div class="row w-75 mx-auto pt-3">
                            <div class="col-md-6"><h5>Languages</h5></div>
                            <div class="col-md-6"><h5>${data[i].languages.eng}</h5></div> 
                        </div>
                        <hr>
                        <div class="row w-75 mx-auto pt-3">
                            <div class="col-md-6"><h5>Status</h5></div>
                            <div class="col-md-6"><h5>${data[i].status}</h5></div> 
                        </div>
                        <hr>
                        <div class="row w-75 mx-auto pt-3">
                            <div class="col-md-6"><h5>Start of week</h5></div>
                            <div class="col-md-6"><h5>${data[i].startOfWeek}</h5></div> 
                        </div>
                        <hr>
                        <div class="row w-75 mx-auto pt-3">
                            <div class="col-md-6"><h5>Bordering Countries</h5></div>
                            <div class="col-md-6"><h5>${data[i].borders}</h5></div> 
                        </div>
                        <hr>
                        <div class="row w-75 mx-auto pt-3">
                        <div class="col-md-6"><h5>Sign</h5></div>
                        <div class="col-md-6"><h5>${data[i].tld}</h5></div>
                        </div>
                        <hr> 
                        <div class="row w-75 mx-auto pt-3">
                        <div class="col-md-6"><h5>Google Map Link is here</h5></div>
                        <div class="col-md-6"><h5><a id="link" href="${data[i].maps.googleMaps} " target="_blank">Map Link</a></h5></div> 
                    </div>
                    <hr>
                        
                    
                        
                      
                    </div>
                </div>
                   `
                  
                }
                table_data.innerHTML += ihtml;
            })
            .catch(error => {
                // Handle any errors
                console.error(error);
            });
        }

        submit.addEventListener("click", ()=>{
            event.preventDefault();
            getdata(country.value)
        })
        getdata("country Name is Here")
      
        
        