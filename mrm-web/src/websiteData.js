let data = {
  companyDetails: {
    name: "MRM",
    phone: "012345678",
  },
  navbarItems: [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Services",
      link: "/services",
      subMenu: [
        { name: "HandyMan", link: "/handyman" },
        { name: "Electrics", link: "/electrics" },
        { name: "Home Makeover", link: "/home-Makeover" },
        { name: "Carpentry", link: "/carpentry" },
        { name: "Plumbing", link: "/plumbing" },
        { name: "Moving Services", link: "/moving-services" },
        { name: "Decorating", link: "/decorating" },
        { name: "Jet Washing", link: "/jet-washing" },
        { name: "Locksmith", link: "/locksmith" },
      ],
    },
    {
      name: "Prices",
      link: "/prices",
    },
    {
      name: "About Us",
      link: "/aboutUs",
    },
  ],
  landingPage: {
    banner: [
      {
        image: {
          src: "images/banner1.jpg",
          alt: "handy man",
        },
        heading: "one stop home services",
        text: "let us do it for you.",
      },
      {
        image: {
          src: "images/banner2.jpg",
          alt: "handy man",
        },
        heading: "one click repair service",
        text: "repair. improve. maintain",
      },
      {
        image: {
          src: "images/banner3.jpg",
          alt: "handy man",
        },
        heading: "Property Maintenance Services",
        text: "one call does it all.",
      },
    ],
    hero: {
      heroLarge:
        "MRM, property maintenance experts in Soho, Marylbone, Mayafair",
      heroMobile: "MRM, property maintenance experts",
    },
    bannerForm: {
      heading: "Looking for a Handyman?",
      subHeading: "We solve your Home repair needs!",
      image: {
        src: "images/f1.png",
        alt: "handy man",
      },
      form: {
        inputs: [
          { name: "Name", placeHolder: "your name", type: "text" },
          { name: "Email", placeHolder: "email@example.com", type: "email" },
          { name: "Mobile", placeHolder: "07123456789", type: "text" },
          { name: "Address", placeHolder: "your address", type: "text" },
        ],
        services: [
          "---- SELECT ----",
          "Electrical Service",
          "Plumbing Service",
          "Painting",
          "Carpentry",
          "Gardening",
          "Other",
        ],
      },
    },
    servicePanel: {
      firstCol: [
        {
          heading: "maintenance",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit estibulum nibh urna scing.",
          icon: "fa fa-cog",
          link: "/about",
        },
        {
          heading: "cleaning",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit estibulum nibh urna scing.",
          icon: "fa fa-check-square-o",
          link: "/about",
        },
      ],
      secondCol: [
        {
          heading: "repair",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit estibulum nibh urna scing.",
          icon: "fa fa-yelp",
          link: "/about",
        },
        {
          heading: "improvement",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit estibulum nibh urna scing.",
          icon: "fa fa-gg",
          link: "/about",
        },
      ],
    },
    info: {
      heading: "Why Choose Us",
      info: {
        subHeading: "One Stop Solution for your Complete Home Maintenance",
        list: [
          {
            heading: "Affordable",
            text: "Trusted team  with affordable prices",
            icon: "fas fa-money-bill-alt",
          },
          {
            heading: "High Quality",
            text: "Providing highest quality services",
            icon: "fas fa-tasks",
          },
          {
            heading: "Peace of mind",
            text: "Minimal disruption to ensure your peace of mind",
            icon: "fa fa-coffee",
          },
          {
            heading: "24*7 Support",
            text: "Available 365 days of year 24*7",
            icon: "fa fa-life-ring",
          },
        ],
      },
      image: {
        src: "/images/info.jpg",
        alt: "handy man",
      },
    },
    about: {
      heading: "service you can trust",
      subHeading: "protect all your home appliances & systems.",
      link: "/services",
      image: {
        src: "/images/bg1.jpg",
        alt: "handy man",
      },
    },
    services: [
      {
        name: "HandyMan",
        link: "/handyMan",
        mainPhotos: "/images/services/handyman.png",
      },
      {
        name: "Electrics",
        link: "/electrics",
        mainPhotos: "/images/services/electrics.png",
      },
      {
        name: "Home Makeover",
        link: "/homeMakeover",
        mainPhotos: "/images/services/home_makeover.png",
      },
      {
        name: "Carpentry",
        link: "/carpentry",
        mainPhotos: "/images/services/carpentry.png",
      },
      {
        name: "Plumbing",
        link: "/plumbing",
        mainPhotos: "/images/services/plumbing.png",
      },
      {
        name: "Moving Services",
        link: "/movingServices",
        mainPhotos: "/images/services/moving_services.png",
      },
      {
        name: "Decorating",
        link: "/decorating",
        mainPhotos: "/images/services/decorating.png",
      },
      {
        name: "Cleaning",
        link: "/cleaning",
        mainPhotos: "/images/services/cleaning.png",
      },
      {
        name: "Locksmith",
        link: "/locksmith",
        mainPhotos: "/images/services/locksmith.png",
      },
    ],
  },
  servicesSection: {
    heading: "Our Services",
    subHeading: "services that you need we will provide at your door step",
    hero: {
      heading: "one click repair service",
      subHeading: "repair. improve. maintain",
      banner: {
        src: "images/g6.jpg",
        alt: "Services Page",
      },
    },
    category: [
      {
        name: "HandyMan",
        link: "handyman",
        banner: "",
        describtion:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        image: {
          src: "images/t8.png",
          alt: "",
        },
        services: [
          {
            name: "Flat pack assembly",
            text: "text for subservice1",
            image: {
              src:
                "https://cdn.pixabay.com/photo/2013/12/13/21/13/plumber-228010_1280.jpg",
              alt: "",
            },
            link: "",
            subServices: [
              {
                name: "subservice1",
                text: "text for subservice1",
                image: {
                  src:
                    "https://cdn.pixabay.com/photo/2013/12/13/21/13/plumber-228010_1280.jpg",
                  alt: "",
                },
                link: "",
              },
            ],
          },
          {
            name: "Hanging things up",
            text: "text for subservice1",
            image: {
              src:
                "https://cdn.pixabay.com/photo/2013/12/13/21/13/plumber-228010_1280.jpg",
              alt: "",
            },
            link: "",
            subServices: [
              {
                name: "subservice1",
                text: "text for subservice1",
                image: {
                  src:
                    "https://cdn.pixabay.com/photo/2013/12/13/21/13/plumber-228010_1280.jpg",
                  alt: "",
                },
                link: "",
              },
            ],
          },
          {
            name: "Tiling",
            text: "text for subservice1",
            image: {
              src:
                "https://cdn.pixabay.com/photo/2013/12/13/21/13/plumber-228010_1280.jpg",
              alt: "",
            },
            link: "",
            subServices: [
              {
                name: "subservice1",
                text: "text for subservice1",
                image: {
                  src:
                    "https://cdn.pixabay.com/photo/2013/12/13/21/13/plumber-228010_1280.jpg",
                  alt: "",
                },
                link: "",
              },
            ],
          },
        ],
      },
      {
        name: "Electrics",
        link: "electrics",
        banner: "",
        describtion:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        image: {
          src: "images/t5.png",
          alt: "",
        },
        services: [
          {
            name: "Finding Faults and Repairs",
            text: "Finding Faults and Repairs",
            image: {
              src:
                "https://cdn.pixabay.com/photo/2013/12/13/21/13/plumber-228010_1280.jpg",
              alt: "",
            },
            link: "",
          },
          {
            name: "Lights",
            text: "Lights",
            image: {
              src:
                "https://cdn.pixabay.com/photo/2013/12/13/21/13/plumber-228010_1280.jpg",
              alt: "",
            },
            link: "",
          },
          {
            name: "Replacements",
            text: "Replacements",
            image: {
              src:
                "https://cdn.pixabay.com/photo/2013/12/13/21/13/plumber-228010_1280.jpg",
              alt: "",
            },
            link: "",
          },
          {
            name: "Installations",
            text: "Installationss",
            image: {
              src:
                "https://cdn.pixabay.com/photo/2013/12/13/21/13/plumber-228010_1280.jpg",
              alt: "",
            },
            link: "",
          },
          {
            name: "Reports",
            text: "Reportss",
            image: {
              src:
                "https://cdn.pixabay.com/photo/2013/12/13/21/13/plumber-228010_1280.jpg",
              alt: "",
            },
            link: "",
          },
        ],
      },
      {
        name: "HomeMakeover",
        link: "home-makeover",
        banner: "",
        describtion:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        image: {
          src: "images/t3.jpg",
          alt: "",
        },
        services: [],
      },
      {
        name: "Carpentry",
        link: "carpentry",
        banner: "",
        describtion:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        image: {
          src: "images/t6.png",
          alt: "",
        },
        services: [
          {
            name: "Sash windows",
            text: "Sash windows",
            image: {
              src:
                "https://cdn.pixabay.com/photo/2013/12/13/21/13/plumber-228010_1280.jpg",
              alt: "",
            },
            link: "",
          },
          {
            name: "Cupboard doors",
            text: "Cupboard doors",
            image: {
              src:
                "https://cdn.pixabay.com/photo/2013/12/13/21/13/plumber-228010_1280.jpg",
              alt: "",
            },
            link: "",
          },
          {
            name: "Hanging doors",
            text: "Hanging doors",
            image: {
              src:
                "https://cdn.pixabay.com/photo/2013/12/13/21/13/plumber-228010_1280.jpg",
              alt: "",
            },
            link: "",
          },
          {
            name: "Flooring",
            text: "Flooring",
            image: {
              src:
                "https://cdn.pixabay.com/photo/2013/12/13/21/13/plumber-228010_1280.jpg",
              alt: "",
            },
            link: "",
          },
          {
            name: "Kitchen units",
            text: "Kitchen units",
            image: {
              src:
                "https://cdn.pixabay.com/photo/2013/12/13/21/13/plumber-228010_1280.jpg",
              alt: "",
            },
            link: "",
          },
          {
            name: "Shelves",
            text: "Shelves",
            image: {
              src:
                "https://cdn.pixabay.com/photo/2013/12/13/21/13/plumber-228010_1280.jpg",
              alt: "",
            },
            link: "",
          },
          {
            name: "Partition walls",
            text: "Partition walls",
            image: {
              src:
                "https://cdn.pixabay.com/photo/2013/12/13/21/13/plumber-228010_1280.jpg",
              alt: "",
            },
            link: "",
          },
        ],
      },
      {
        name: "Plumbing",
        link: "plumbing",
        banner: "",
        describtion:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        image: {
          src: "images/t7.png",
          alt: "",
        },
        services: [
          {
            name: "Replacements",
            text: "Replacements",
            image: {
              src:
                "https://cdn.pixabay.com/photo/2013/12/13/21/13/plumber-228010_1280.jpg",
              alt: "",
            },
            link: "",
          },
          {
            name: "Unblocking",
            text: "Unblocking",
            image: {
              src:
                "https://cdn.pixabay.com/photo/2013/12/13/21/13/plumber-228010_1280.jpg",
              alt: "",
            },
            link: "",
          },
          {
            name: "Installations",
            text: "Installations",
            image: {
              src:
                "https://cdn.pixabay.com/photo/2013/12/13/21/13/plumber-228010_1280.jpg",
              alt: "",
            },
            link: "",
          },
          {
            name: "Repairs",
            text: "Repairs",
            image: {
              src:
                "https://cdn.pixabay.com/photo/2013/12/13/21/13/plumber-228010_1280.jpg",
              alt: "",
            },
            link: "",
          },
        ],
      },
      {
        name: "Moving Services",
        link: "moving-services",
        banner: "",
        describtion:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        image: {
          src: "images/t2.jpg",
          alt: "",
        },
        services: [
          {
            name: "Lifting & Shifting",
            text: "Lifting & Shifting",
            image: {
              src:
                "https://cdn.pixabay.com/photo/2013/12/13/21/13/plumber-228010_1280.jpg",
              alt: "",
            },
            link: "",
          },
          {
            name: "Specialist Lifting",
            text: "Specialist Lifting",
            image: {
              src:
                "https://cdn.pixabay.com/photo/2013/12/13/21/13/plumber-228010_1280.jpg",
              alt: "",
            },
            link: "",
          },
          {
            name: "Mini Moving",
            text: "Mini Moving",
            image: {
              src:
                "https://cdn.pixabay.com/photo/2013/12/13/21/13/plumber-228010_1280.jpg",
              alt: "",
            },
            link: "",
          },
        ],
      },
      {
        name: "Decorating",
        link: "decorating",
        banner: "",
        describtion:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        image: {
          src: "images/t2.jpg",
          alt: "",
        },
        services: [
          {
            name: "Filling cracks in walls",
            text: "Filling cracks in walls",
            image: {
              src:
                "https://cdn.pixabay.com/photo/2013/12/13/21/13/plumber-228010_1280.jpg",
              alt: "",
            },
            link: "",
          },
          {
            name: "Siliconing",
            text: "Siliconing",
            image: {
              src:
                "https://cdn.pixabay.com/photo/2013/12/13/21/13/plumber-228010_1280.jpg",
              alt: "",
            },
            link: "",
          },
          {
            name: "Plaster patch repair",
            text: "Plaster patch repair",
            image: {
              src:
                "https://cdn.pixabay.com/photo/2013/12/13/21/13/plumber-228010_1280.jpg",
              alt: "",
            },
            link: "",
          },
          {
            name: "Painting",
            text: "Painting",
            image: {
              src:
                "https://cdn.pixabay.com/photo/2013/12/13/21/13/plumber-228010_1280.jpg",
              alt: "",
            },
            link: "",
          },
          {
            name: "Wallpaper hanging",
            text: "Wallpaper hanging",
            image: {
              src:
                "https://cdn.pixabay.com/photo/2013/12/13/21/13/plumber-228010_1280.jpg",
              alt: "",
            },
            link: "",
          },
          {
            name: "Fixing ceiling cracks",
            text: "Fixing ceiling cracks",
            image: {
              src:
                "https://cdn.pixabay.com/photo/2013/12/13/21/13/plumber-228010_1280.jpg",
              alt: "",
            },
            link: "",
          },
          {
            name: "Repairing holes in walls",
            text: "Repairing holes in walls",
            image: {
              src:
                "https://cdn.pixabay.com/photo/2013/12/13/21/13/plumber-228010_1280.jpg",
              alt: "",
            },
            link: "",
          },
        ],
      },
      {
        name: "Jet Washing",
        link: "jet-washing",
        banner: "",
        describtion:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        image: {
          src: "images/t2.jpg",
          alt: "",
        },
        services: [
          {
            name: "Jet Wash Paving Stones",
            text: "Jet Wash Paving Stones",
            image: {
              src:
                "https://cdn.pixabay.com/photo/2013/12/13/21/13/plumber-228010_1280.jpg",
              alt: "",
            },
            link: "",
          },
          {
            name: "Jet Wash Garden Furniture",
            text: "Jet Wash Garden Furniture",
            image: {
              src:
                "https://cdn.pixabay.com/photo/2013/12/13/21/13/plumber-228010_1280.jpg",
              alt: "",
            },
            link: "",
          },
          {
            name: "Jet Wash Stone Steps",
            text: "Jet Wash Stone Steps",
            image: {
              src:
                "https://cdn.pixabay.com/photo/2013/12/13/21/13/plumber-228010_1280.jpg",
              alt: "",
            },
            link: "",
          },
        ],
      },
      {
        name: "Locksmith",
        link: "locksmith",
        banner: "",
        describtion:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        image: {
          src: "images/t2.jpg",
          alt: "",
        },
        services: [
          {
            name: "Burglary Repairs",
            text: "Burglary Repairs",
            image: {
              src:
                "https://cdn.pixabay.com/photo/2013/12/13/21/13/plumber-228010_1280.jpg",
              alt: "",
            },
            link: "",
          },
          {
            name: "Emergency Locksmith",
            text: "Emergency Locksmith",
            image: {
              src:
                "https://cdn.pixabay.com/photo/2013/12/13/21/13/plumber-228010_1280.jpg",
              alt: "",
            },
            link: "",
          },
          {
            name: "Repairing Locks",
            text: "Repairing Locks",
            image: {
              src:
                "https://cdn.pixabay.com/photo/2013/12/13/21/13/plumber-228010_1280.jpg",
              alt: "",
            },
            link: "",
          },
          {
            name: "Fitting locks",
            text: "Fitting locks",
            image: {
              src:
                "https://cdn.pixabay.com/photo/2013/12/13/21/13/plumber-228010_1280.jpg",
              alt: "",
            },
            link: "",
          },
        ],
      },
    ],
    homeServices: {
      title: "complete home services",
      left: {
        heading: "Customer satisfaction is our first priority",
        subHeading1:
          "MRM is a top notch building support organization situated in Central London offering total upkeep arrangements and top notch repairs. Our experinced group of property maintenance experts focus on quality, client care and reliability.",
        subHeading2:
          "Having served private and business customers for years, we are accessible 24 hours per day 7 days per week to help with the entirety of your property upkeep needs, including fixing flood damage, painting, plumbing, moving or general carpentry we are glad to help.",
        image: {
          src: "images/g6.jpg",
          alt: "",
        },
      },
      right: [
        {
          heading: "plumbing services",
          text:
            "Our exceptionally qualified plumbers have long stretches of experience working in both private and business properties and are available 24*7",
          link: "/#servicePanel",
        },
        {
          heading: "Electrical Services",
          text:
            "Our electricians can discover issues in your electric frameworks and complete repairs, carry out new installationss, issue electrical certificates  or any other electrical jobs.",
          link: "/#servicePanel",
        },
        {
          heading: "painting services",
          text:
            "We have a group of painting and improving pros, who can help you with any of your inside or outside fixes or activities. It iss a complete inside redesign, or fixing and painting a recolored roof, our pros will complete the activity to a high standard.",
          link: "/#servicePanel",
        },
      ],
    },
  },
  prices: {
    title: "Our Rates",
    subHeader: "We like to be 100% transparent with our rates.",
    text:
      "You can see what we charge for handyman & specialist services below. We also provide free quotes for larger jobs. In order to give you flexibility and value for money, our minimum handyman booking is just 1/2 hour and we charge by the 1/2 hour after that.",
    tableStandard: {
      name: "Standard Rate",
      subHeader: "(8am-6pm weekdays)",
      rates: [
        {
          time: "1st half hour",
          handyMan: 40,
          others: 50,
        },
        {
          time: "1st hour",
          handyMan: 40,
          others: 50,
        },
        {
          time: "Each further half hour",
          handyMan: 40,
          others: 50,
        },
        {
          time: "Half day (up to 4 hours)",
          handyMan: 40,
          others: 50,
        },
        {
          time: "Full day (up to 8 hours)",
          handyMan: 40,
          others: 50,
        },
      ],
    },
    tableOutOfHours: {
      name: "Out Of Hours rate",
      subHeader: "(7-8am, 6-8pm weekdays, all day Saturdays)",
      rates: [
        {
          time: "1st half hour",
          handyMan: 40,
          others: 50,
        },
        {
          time: "1st hour",
          handyMan: 40,
          others: 50,
        },
        {
          time: "Each further half hour",
          handyMan: 40,
          others: 50,
        },
        {
          time: "Half day (up to 4 hours)",
          handyMan: 40,
          others: 50,
        },
        {
          time: "Full day (up to 8 hours)",
          handyMan: 40,
          others: 50,
        },
      ],
    },
  },
  footer: {
    col1: {
      name: "Menu",
      items: [
        { name: "Home", link: "/" },
        { name: "Home", link: "/" },
        { name: "Home", link: "/" },
        { name: "Home", link: "/" },
        { name: "Home", link: "/" },
      ],
    },
    col2: {
      name: "Useful Links",
      items: [
        { name: "Home", link: "/" },
        { name: "Home", link: "/" },
        { name: "Home", link: "/" },
        { name: "Home", link: "/" },
        { name: "Home", link: "/" },
      ],
    },
    col3: {
      name: "About Us",
      items: [
        { name: "Home", link: "/" },
        { name: "Home", link: "/" },
        { name: "Home", link: "/" },
        { name: "Home", link: "/" },
        { name: "Home", link: "/" },
      ],
    },
    colContact: {
      name: "Contact Info",
      items: [
        { name: "1234k Avenue,block-4,New York City", link: "/" },
        { name: "+1234 567 892", link: "/" },
        { name: "+1234 567 892", link: "/" },
        { name: "info@example.com", link: "mailto:info@example.com" },
      ],
    },
    socialMedia: {
      comapnyName: "MRM",
      youtube: "https://www.youtube.com/",
      instagram: "https://www.youtube.com/",
      google: "https://www.youtube.com/",
    },
  },
};

export default data;
