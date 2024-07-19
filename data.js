import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Jeffrey",
      email: "Jeff@gmail.com",
      password: bcrypt.hashSync("345677"),
      isAdmin: false,
    },
    {
      name: "Cutie",
      email: "Cutie@gmail.com",
      password: bcrypt.hashSync("765432"),
      isAdmin: true,
    },
  ],
  products: [
    {
      name: "Adidas Yeezy Slides",
      slug: "adidas_yeezy_slides",
      category: "Shoes",
      image: "/Images/slides.jpg",
      price: 20,
      countInStock: 15,
      brand: "Adidas",
      rating: 4.5,
      numReviews: 10,
      description: "High quality,comfy adidas slides",
    },
    {
      name: "Nike Air J1",
      slug: "nike_air_jordans",
      category: "Shoes",
      image: "/Images/nikes.jpg",
      price: 25,
      countInStock: 2,
      brand: "Nike",
      rating: 4.4,
      numReviews: 14,
      description: "High quality rock Air Jordans",
    },
    {
      name: "Nike Matching Sweatpants",
      slug: "nike_matching_sweatpants",
      category: "Pants",
      image: "/Images/matching.jpg",
      brand: "Nike",
      price: 23,
      countInStock: 35,
      rating: 2,
      numReviews: 20,
      description: "High quality matching comfy outfit",
    },
  ],
};
export default data;
