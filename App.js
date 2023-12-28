      import React from "react";
      import ReactDOM from "react-dom/client";

      const Header = () => {
        return (
         <div className="header">
         <img className="logo" alt="logo" src="https://i.pinimg.com/originals/e6/17/f1/e617f1bfb9af4d9cf132cd3dec0da072.jpg" />
         <div className="nav-items">
            <ul >
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>Cart</li>
            </ul>
         </div>
         </div>
        );
      };
      const restaurants=[
        {
          "info": {
            "id": "24636",
            "name": "Domino's Pizza",
            "cloudinaryImageId": "b83109tnsxh0tn9b3e3h",
            "locality": "SR Nagar",
            "areaName": "Sanjeeva Reddy Nagar",
            "costForTwo": "₹400 for two",
            "cuisines": [
              "Pizzas",
              "Italian",
              "Pastas",
              "Desserts"
            ],
            "avgRating": 4.4,
            "parentId": "2456",
            "avgRatingString": "4.4",
            "totalRatingsString": "10K+",
            "sla": {
              "deliveryTime": 25,
              "serviceability": "SERVICEABLE",
              "slaString": "25 mins",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-12-29 02:59:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "40% OFF",
              "subHeader": "UPTO ₹80"
            },
            "orderabilityCommunication": {
              "title": {
                
              },
              "subTitle": {
                
              },
              "message": {
                
              },
              "customIcon": {
                
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            "context": "seo-data-34409899-8d54-402a-8c07-7689e2fa2ea3"
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/dominos-pizza-sr-nagar-sanjeeva-reddy-nagar-hyderabad-24636",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
          "info": {
            "id": "376914",
            "name": "Theobroma",
            "cloudinaryImageId": "b033728dcb0101ceb19bff0e1e1f6474",
            "locality": "Central Zone",
            "areaName": "Somajiguda & Khairtabad",
            "costForTwo": "₹400 for two",
            "cuisines": [
              "Desserts"
            ],
            "avgRating": 4.6,
            "parentId": "1040",
            "avgRatingString": "4.6",
            "totalRatingsString": "1K+",
            "sla": {
              "deliveryTime": 27,
              "lastMileTravel": 4.9,
              "serviceability": "SERVICEABLE",
              "slaString": "27 mins",
              "lastMileTravelString": "4.9 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-12-28 23:00:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "newg.png",
                  "description": "Gourmet"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "Gourmet",
                        "imageId": "newg.png"
                      }
                    }
                  ]
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "40% OFF",
              "subHeader": "ABOVE ₹179",
              "discountTag": "FLAT DEAL"
            },
            "orderabilityCommunication": {
              "title": {
                
              },
              "subTitle": {
                
              },
              "message": {
                
              },
              "customIcon": {
                
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            "context": "seo-data-34409899-8d54-402a-8c07-7689e2fa2ea3"
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/theobroma-central-zone-somajiguda-and-khairtabad-hyderabad-376914",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
          "info": {
            "id": "427059",
            "name": "KFC",
            "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
            "locality": "Ameerpet Metro station",
            "areaName": "Concourse Level",
            "costForTwo": "₹400 for two",
            "cuisines": [
              "Burgers",
              "Biryani",
              "American",
              "Snacks",
              "Fast Food"
            ],
            "avgRating": 3.8,
            "parentId": "547",
            "avgRatingString": "3.8",
            "totalRatingsString": "1K+",
            "sla": {
              "deliveryTime": 24,
              "lastMileTravel": 1.7,
              "serviceability": "SERVICEABLE",
              "slaString": "24 mins",
              "lastMileTravelString": "1.7 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-12-28 23:00:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "EVERY ITEM",
              "subHeader": "@ ₹179"
            },
            "orderabilityCommunication": {
              "title": {
                
              },
              "subTitle": {
                
              },
              "message": {
                
              },
              "customIcon": {
                
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            "context": "seo-data-34409899-8d54-402a-8c07-7689e2fa2ea3"
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/kfc-ameerpet-metro-station-concourse-level-hyderabad-427059",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
          "info": {
            "id": "23698",
            "name": "McDonald's",
            "cloudinaryImageId": "bb7ae131544c7d37e10fc5faf76f09d6",
            "locality": "City center mall",
            "areaName": "Banjara hills",
            "costForTwo": "₹400 for two",
            "cuisines": [
              "Burgers",
              "Beverages",
              "Cafe",
              "Desserts"
            ],
            "avgRating": 4.3,
            "parentId": "630",
            "avgRatingString": "4.3",
            "totalRatingsString": "10K+",
            "sla": {
              "deliveryTime": 34,
              "lastMileTravel": 4.6,
              "serviceability": "SERVICEABLE",
              "slaString": "34 mins",
              "lastMileTravelString": "4.6 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-12-28 23:45:00",
              "opened": true
            },
            "badges": {
              "textExtendedBadges": [
                {
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available",
                  "fontColor": "#7E808C"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "",
                        "fontColor": "#7E808C",
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available"
                      }
                    }
                  ]
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "40% OFF",
              "subHeader": "UPTO ₹80"
            },
            "orderabilityCommunication": {
              "title": {
                
              },
              "subTitle": {
                
              },
              "message": {
                
              },
              "customIcon": {
                
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            "context": "seo-data-34409899-8d54-402a-8c07-7689e2fa2ea3"
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/mcdonalds-city-center-mall-banjara-hills-hyderabad-23698",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
          "info": {
            "id": "767186",
            "name": "Burger King",
            "cloudinaryImageId": "aa77cb6fce4d94f3ad4b4e7fb42782db",
            "locality": "Ameerpet",
            "areaName": "Asian Satyam Mall",
            "costForTwo": "₹350 for two",
            "cuisines": [
              "Burgers",
              "American"
            ],
            "avgRating": 4.1,
            "parentId": "166",
            "avgRatingString": "4.1",
            "totalRatingsString": "500+",
            "sla": {
              "deliveryTime": 17,
              "lastMileTravel": 1,
              "serviceability": "SERVICEABLE",
              "slaString": "17 mins",
              "lastMileTravelString": "1.0 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-12-29 03:30:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "60% OFF",
              "subHeader": "UPTO ₹120"
            },
            "orderabilityCommunication": {
              "title": {
                
              },
              "subTitle": {
                
              },
              "message": {
                
              },
              "customIcon": {
                
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "isNewlyOnboarded": true,
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            "context": "seo-data-34409899-8d54-402a-8c07-7689e2fa2ea3"
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/burger-king-ameerpet-asian-satyam-mall-hyderabad-767186",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
          "info": {
            "id": "734888",
            "name": "Chaayos Chai+Snacks=Relax",
            "cloudinaryImageId": "cace805a6ba74137571d0f7ac92302b1",
            "locality": "Khairatabad Circle No.17",
            "areaName": "BANJARA HILLS",
            "costForTwo": "₹250 for two",
            "cuisines": [
              "Bakery",
              "Beverages",
              "Chaat",
              "Desserts",
              "Home Food",
              "Italian",
              "Maharashtrian",
              "Snacks",
              "Street Food",
              "Sweets"
            ],
            "avgRating": 4.4,
            "parentId": "281782",
            "avgRatingString": "4.4",
            "totalRatingsString": "100+",
            "sla": {
              "deliveryTime": 30,
              "lastMileTravel": 4.7,
              "serviceability": "SERVICEABLE",
              "slaString": "30 mins",
              "lastMileTravelString": "4.7 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-12-28 23:30:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "60% OFF",
              "subHeader": "UPTO ₹120"
            },
            "orderabilityCommunication": {
              "title": {
                
              },
              "subTitle": {
                
              },
              "message": {
                
              },
              "customIcon": {
                
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "isNewlyOnboarded": true,
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            "context": "seo-data-34409899-8d54-402a-8c07-7689e2fa2ea3"
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/chaayos-chai-snacks-relax-khairatabad-circle-no-17-banjara-hills-hyderabad-734888",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
          "info": {
            "id": "81962",
            "name": "Pizza Hut",
            "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
            "locality": "SR Nagar",
            "areaName": "SR Nagar",
            "costForTwo": "₹350 for two",
            "cuisines": [
              "Pizzas"
            ],
            "avgRating": 3.9,
            "parentId": "721",
            "avgRatingString": "3.9",
            "totalRatingsString": "10K+",
            "sla": {
              "deliveryTime": 18,
              "lastMileTravel": 0.3,
              "serviceability": "SERVICEABLE",
              "slaString": "18 mins",
              "lastMileTravelString": "0.3 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-12-29 03:00:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "ITEMS",
              "subHeader": "AT ₹179"
            },
            "orderabilityCommunication": {
              "title": {
                
              },
              "subTitle": {
                
              },
              "message": {
                
              },
              "customIcon": {
                
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            "context": "seo-data-34409899-8d54-402a-8c07-7689e2fa2ea3"
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/pizza-hut-sr-nagar-hyderabad-81962",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
          "info": {
            "id": "2794",
            "name": "Minerva Coffee Shop",
            "cloudinaryImageId": "bd0fa568e5047d9f547af030f6fb0dc8",
            "locality": "Srinath Nagar",
            "areaName": "Ameerpet",
            "costForTwo": "₹500 for two",
            "cuisines": [
              "South Indian",
              "North Indian",
              "Chinese"
            ],
            "avgRating": 4.3,
            "veg": true,
            "parentId": "136393",
            "avgRatingString": "4.3",
            "totalRatingsString": "10K+",
            "sla": {
              "deliveryTime": 25,
              "lastMileTravel": 0.9,
              "serviceability": "SERVICEABLE",
              "slaString": "25 mins",
              "lastMileTravelString": "0.9 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-12-28 22:45:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                  "description": "pureveg"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "pureveg",
                        "imageId": "v1695133679/badges/Pure_Veg111.png"
                      }
                    }
                  ]
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "₹100 OFF",
              "subHeader": "ABOVE ₹199",
              "discountTag": "FLAT DEAL"
            },
            "orderabilityCommunication": {
              "title": {
                
              },
              "subTitle": {
                
              },
              "message": {
                
              },
              "customIcon": {
                
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            "context": "seo-data-34409899-8d54-402a-8c07-7689e2fa2ea3"
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/minerva-coffee-shop-srinath-nagar-ameerpet-hyderabad-2794",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
          "info": {
            "id": "569957",
            "name": "Wow! Momo",
            "cloudinaryImageId": "0984acc0ed7b914206dbbcb90297becc",
            "locality": "Yellareeddyguda",
            "areaName": "Ameerpet",
            "costForTwo": "₹300 for two",
            "cuisines": [
              "Tibetan",
              "Healthy Food",
              "Asian",
              "Chinese",
              "Snacks",
              "Continental",
              "Desserts",
              "Beverages"
            ],
            "avgRating": 4.2,
            "parentId": "1776",
            "avgRatingString": "4.2",
            "totalRatingsString": "1K+",
            "sla": {
              "deliveryTime": 22,
              "lastMileTravel": 1.9,
              "serviceability": "SERVICEABLE",
              "slaString": "22 mins",
              "lastMileTravelString": "1.9 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-12-28 23:00:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "ITEMS",
              "subHeader": "AT ₹99"
            },
            "orderabilityCommunication": {
              "title": {
                
              },
              "subTitle": {
                
              },
              "message": {
                
              },
              "customIcon": {
                
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            "context": "seo-data-34409899-8d54-402a-8c07-7689e2fa2ea3"
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/wow-momo-yellareeddyguda-ameerpet-hyderabad-569957",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        }
      ]



      const RestaurantCard=({restaurant})=>{
        return(
          <div className="card">
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+restaurant.info?.cloudinaryImageId} alt="restaurant" />
              <h2>{ restaurant.info?.name}</h2>
              <h3>{ restaurant.info?.avgRating} star</h3>
              <h4>{restaurant.info?.cuisines.join(", ")}</h4>
              <p>{restaurant.info?.locality}</p>
          </div>
        )
      }

      const Body=()=>{
        return (
          <div className="restaurant-list">
          <RestaurantCard restaurant={restaurants[0]} />
          <RestaurantCard restaurant={restaurants[1]} />
          <RestaurantCard restaurant={restaurants[2]} />
          <RestaurantCard restaurant={restaurants[3]} />
          <RestaurantCard restaurant={restaurants[4]} />
          <RestaurantCard restaurant={restaurants[5]} />
          <RestaurantCard restaurant={restaurants[6]} />
          <RestaurantCard restaurant={restaurants[7]} />
          <RestaurantCard restaurant={restaurants[8]} />
          </div>
        )
      }
      const Footer = () =>{
        return (
          
          <footer>copyright</footer>
        
        );
      }

      const AppLayout=()=>{
        return (
          <React.Fragment>
          <Header/>
          <Body/>
          <Footer/>
          </React.Fragment>

        );
      }
      
      const root=ReactDOM.createRoot(document.getElementById("root"));
      root.render(<AppLayout/>);
