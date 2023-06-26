const users = [
  {
    name: "Angelien Stoter",
    username: "brownsnake874",
    email: "angelien.stoter@example.com",
    Gender: "F",
    profile: "https://randomuser.me/api/portraits/women/48.jpg",
    origin: "CA, US",
    postIMG: [
      "https://plus.unsplash.com/premium_photo-1670758941284-bc28b71aa134?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    ],
    postDesc:
      "Nature is a vast tapestry of beauty and wonder. It possesses a serene and tranquil aura that calms the soul. From the blossoming flowers to the majestic mountains, every aspect of nature is vibrant and breathtaking",
  },
  {
    name: "Sara Shelton",
    username: "orangemeercat379",
    email: "sara.shelton@example.com",
    Gender: "F",
    profile: "https://randomuser.me/api/portraits/women/28.jpg",
    origin: "TX, US",
    postIMG: [
      "https://images.unsplash.com/photo-1643914543607-7f755947dd70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80",
      "https://images.unsplash.com/photo-1641423914214-622b2a8dd3f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80",
    ],
    postDesc:
      "Immortality, a concept that has captivated human imagination for millennia. It represents the elusive quest for eternal life, a state beyond the grasp of mortality.",
  },
  {
    name: "Syed Haugen",
    username: "organicmeercat819",
    email: "syed.haugen@example.com",
    Gender: "M",
    profile: "https://randomuser.me/api/portraits/men/57.jpg",
    origin: "NY, US",
    postIMG: [
      "https://images.unsplash.com/photo-1686488695832-9f6afd57d0a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=397&q=80",
    ],
    postDesc: `The 1970s, a decade defined by its unique blend of cultural shifts and iconic trends. It was an era of vibrant expression and social change, characterized by the music, fashion, and political movements that shaped the collective consciousness.`,
  },
  {
    name: "Lionel Holler",
    username: "ticklishfrog543",
    email: "lionel.holler@example.com",
    Gender: "M",
    profile: "https://randomuser.me/api/portraits/men/21.jpg",
    origin: "FL, US",
    postIMG: [
      "https://images.unsplash.com/photo-1553344958-13076c10631d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1551871812-10ecc21ffa2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=381&q=80",
    ],
    postDesc:
      "SpaceX, the visionary aerospace company founded by Elon Musk, has revolutionized the space industry in the 21st century. With a relentless pursuit of innovation and reusability, SpaceX has made remarkable strides in advancing space exploration and commercial space travel",
  },
  {
    name: "Leslie Simmmons",
    username: "organicrabbit755",
    email: "leslie.simmmons@example.com",
    Gender: "F",
    profile: "https://randomuser.me/api/portraits/women/87.jpg",
    origin: "IL, US",
    postIMG: [
      "https://images.unsplash.com/photo-1666000645676-77bd8a180480?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    ],
    postDesc: `
    In the midst of our modern, bustling lives, we find ourselves caught in a whirlwind of constant activity and perpetual busyness. Our days are filled with a never-ending stream of responsibilities, deadlines, and commitments. `,
  },
  {
    name: "John Lee",
    username: "goldenladybug822",
    email: "john.lee@example.com",
    Gender: "M",
    profile: "https://randomuser.me/api/portraits/men/52.jpg",
    origin: "CO, US",
    postIMG: [
      "https://images.unsplash.com/photo-1668816143547-2cbecd644ac9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    ],
    postDesc:
      "Chess, the ancient game of strategy and intellect, has captivated minds for centuries. It is a battle of wits played out on a checkered board, where every move carries consequences and every decision shapes the outcome.",
  },
  {
    name: "Vildan Akg\u00fcl",
    username: "greengorilla956",
    email: "vildan.akgul@example.com",
    Gender: "F",
    profile: "https://randomuser.me/api/portraits/women/68.jpg",
    origin: "HI, US",
    postIMG: [
      "https://plus.unsplash.com/premium_photo-1682088220516-47f1a4f24d95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDg0fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1685338336480-a8475385be49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwM3x0b3dKWkZza3BHZ3x8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1683896690118-0b9f6f9ce29a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDExNHx0b3dKWkZza3BHZ3x8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
    ],
    postDesc:
      "Marital life, a journey embarked upon by two individuals who choose to share their lives, dreams, and challenges together. It is a union of love, commitment, and mutual support, with its own unique joys and complexities.",
  },
];

export default users;
