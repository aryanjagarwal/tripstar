export const SelectTravelerList = [
    {
        id: 1,
        title: 'Solo',
        disc: 'One man adventurer',
        icon: '✈️',
        people: '1 Person',
    },
    {
        id: 2,
        title: 'Couple',
        disc: 'Couple who loves to travel together',
        icon: '🥂',
        people: '2 people',
    },
    {
        id: 3,
        title: 'Family',
        disc: 'A family who loves adventures',
        icon: '🏠',
        people: '3 to 5 people',
    },
    {
        id: 4,
        title: 'Group',
        disc: 'A bunch of thrill-seekers',
        icon: '🤼‍♂️',
        people: '5 to 10 people',
    }
]


export const SelectBudgetOptions = [
    {
        id: 1,
        title: 'Economical',
        disc: 'Stay conscious of your costs',
        icon: '💵',
    },
    {
        id: 2,
        title: 'Moderate',
        disc: 'A little bit of luxury',
        icon: '💰',
    },
    {
        id: 3,
        title: 'Luxury',
        disc: 'Go all out with luxury',
        icon: '💎',
    }
]

export const AI_PROMPT = 'Generate Travel Plan for Location: {location}, for {totalDays} Days and {totalNights} Night for {travaler} with a {budget} budget with a Flight details, Flight Price with Booking url, Hotels options list with HotelNane, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and Places to visit nearby with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, Time t travel each of the location for {totalDays} days and {totalNights} night with each day plan with best time to visit in JSON'