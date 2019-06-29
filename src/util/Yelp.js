

const apiKey = "QrUzVn9yyYgwsCMXVsAFeAjKgnqXxgv0Y8BgihdfUfblU6NujVm3weyjhKzugAX8oujcrnr3Jo0PfOKCwtbt9lfdXWrr7YkxzSCWFQhZkrmyjDlA64TYxjsMy2gPXXYx";

const Yelp = {
  searchYelp(term, location, sortBy){
    console.log("Before return!!!!!!");
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      }).then((response) => {
        console.log(response);
        return response.json();
      }).then((jsonResponse) => {
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map((business) => {
            console.log(business);
            return {
              id: business.id,
              imageSrc: business.image_url,
              name: business.name,
              address: business.location.address1,
              city: business.location.city,
              state: business.location.state,
              zipCode: business.location.zip_code,
              category: business.categories[0].title,
              rating: business.rating,
              reviewCount: business.review_count,

            }
        });
      } else {
        console.log("Fucking bad");
        console.log(jsonResponse.business);
      }
    })
  }
};

export default Yelp;
