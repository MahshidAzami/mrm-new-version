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
        { name: "Home Makeover", link: "/home-makeover" },
        { name: "Carpentry", link: "/carpentry" },
        { name: "Plumbing", link: "/plumbing" },
        { name: "Moving Services", link: "/moving-services" },
        { name: "Painting and Decorating", link: "/decorating" },
        { name: "Cleaning", link: "/cleaning" },
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
          src: "images/banner1.png",
          alt: "handy man",
        },
        heading: "one stop home services",
        text: "let us do it for you.",
      },
      {
        image: {
          src: "images/banner2.png",
          alt: "handy man",
        },
        heading: "one click repair service",
        text: "repair. improve. maintain",
      },
      {
        image: {
          src: "images/banner3.png",
          alt: "handy man",
        },
        heading: "Property Maintenance Services",
        text: "one call does it all.",
      },
    ],
    hero: {
      heroLarge:
        "<p>Here at MRM, we aim to bring you an outstanding service, at the best possible price, whilst delivering above and beyond results.</p><p>MRM are a hardworking, trustworthy and dedicated team of both Home and Commercial property maintenance experts. Use us as a one stop shop for any repair job, whether big or small.</p><p>We pride ourselves on being affordable and available at all hours of the day - 24/7, ensuring you peace of mind when you call us. We are available for both commercial and residential properties in predominantly Mayfair, Soho, Marylebone and the West End of London.</p><p>We are available for refurbishment and emergency jobs, including; plumbing, electrics, carpentry, as well as general handyman repairs.</p><p>At MRM our workforce is committed to ensuring you get work of outstanding quality at the best price.</p><p>Having many years experience dealing with landlords and owners in both, residential and commercial, from large refurbishments to small leaks, we are confident in what we do and understand what it means to help every step of the way and to deliver.</p>",
      heroMobile:
        "<p>Here at MRM, we aim to bring you an outstanding service, at the best possible price, whilst delivering above and beyond results.</p><p>MRM are a hardworking, trustworthy and dedicated team of both Home and Commercial property maintenance experts. Use us as a one stop shop for any repair job, whether big or small.</p><p>We pride ourselves on being affordable and available at all hours of the day - 24/7, ensuring you peace of mind when you call us. We are available for both commercial and residential properties in predominantly Mayfair, Soho, Marylebone and the West End of London.</p><p>We are available for refurbishment and emergency jobs, including; plumbing, electrics, carpentry, as well as general handyman repairs.</p><p>At MRM our workforce is committed to ensuring you get work of outstanding quality at the best price.</p><p>Having many years experience dealing with landlords and owners in both, residential and commercial, from large refurbishments to small leaks, we are confident in what we do and understand what it means to help every step of the way and to deliver.</p>",
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
        subHeading:
          "One Stop Solution For Your Complete Home or Commercial Maintenance",
        list: [
          {
            heading: "Affordable",
            text: "Trusted team with affordable prices ",
            icon: "fas fa-money-bill-alt",
          },
          {
            heading: "Service",
            text:
              "All experts within the team are respectable, polite and highly experienced",
            icon: "fas fa-tasks",
          },
          {
            heading: "Peace of mind",
            text: "Minimal disruption to ensure your peace of mind",
            icon: "fa fa-coffee",
          },
          {
            heading: "24*7 Support",
            text: "Available 365 days of the year - 24/7",
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
      heading: "Service You Can Trust",
      subHeading: "Protect all your home appliances & systems",
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
        link: "/home-makeover",
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
        link: "/moving-services",
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
        src: "images/services.png",
        alt: "Services Page",
      },
    },
    category: [
      {
        name: "Handyman",
        link: "handyman",
        banner: "",
        describtion:
          "<p>Looking for a handyman in Soho, Marylebone, Mayfair or anywhere in the West End of London? We have a whole team of experienced handymen ready to give assistance to anyone who requires it. Our handymen can baby proof homes, assemble flat pack furniture, wall mount TV units, hang shelves, tiling, install shower screens and tidy cables amongst many other services. We are here to make your life easier, ensuring only the best, work no matter how big or small.</p><p>We understand home repairs can be very disruptive, so we aim to get our work done quickly and efficiently. With MRM you can be assured that any work space will be left clean and tidy afterwards, and we are available for evening work to ensure you minimal disruption.</p>",
        image: {
          src: "images/t8.png",
          alt: "",
        },
        services: [
          {
            name: "Flat pack assembly",
            text: "text for subservice1",
            image: {
              src: "/images/services/flatpack.png",
              alt: "Flat pack assembly",
            },
            link: "",
          },
          {
            name: "Hanging things up",
            text: "text for subservice1",
            image: {
              src: "/images/services/hangup.png",
              alt: "Hanging things up",
            },
            link: "",
          },
          {
            name: "Tiling",
            text: "text for subservice1",
            image: {
              src: "/images/services/tiling.png",
              alt: "tiling",
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
          "<p>Our qualified electricians are available 24/7 to help with office or home repairs. We are available for emergency work or for longer term refurbishment. Our services include finding faults and repairs, lights, replacements, issue electrical certificates, installation and reports. MRMs trained team aims to ensure as little disruption as possible, and we will always leave your home or business tidy when we leave.</p><p>Our electricians aim to give you the best possible price, and we always ensure any disruption is kept to a minimum. </p>",
        image: {
          src: "images/t5.png",
          alt: "",
        },
        services: [
          {
            name: "Finding Faults and Repairs",
            text: "Finding Faults and Repairs",
            image: {
              src: "/images/services/finding-faults.png",
              alt: "Finding Faults and Repairs",
            },
            link: "",
          },
          {
            name: "Lights",
            text: "Lights",
            image: {
              src: "/images/services/lights.png",
              alt: "Lights",
            },
            link: "",
          },
          {
            name: "Replacements",
            text: "Replacements",
            image: {
              src: "/images/services/replacement.png",
              alt: "Replacements",
            },
            link: "Replacements",
          },
          {
            name: "Installations",
            text: "Installations",
            image: {
              src: "/images/services/installation.png",
              alt: "Installations",
            },
            link: "",
          },
          {
            name: "Reports",
            text: "Reportss",
            image: {
              src: "/images/services/report.png",
              alt: "Reportss",
            },
            link: "",
          },
        ],
      },
      {
        name: "Home Makeover",
        link: "home-makeover",
        banner: "",
        describtion:
          "<p>Are you hoping to put your property on the market? Do you want your home to attract potential buyers? Have you recently moved into a property and think it could do with an update? A home makeover no longer needs to use up all your resources. Our professional team will ensure your property looks appealing to potential buyers without breaking the bank. Our services include decorating, fixing broken tiles, ensuring all electrics are working correctly and jet washing a dirty patio or step - anything. Our dedicated team will make your home look brand new.</p><p>At MRM we understand how important it is for your home to be ready quickly. Our trained team can install new lighting, change windows and doors, install fixtures, and decorate and room. We pride ourselves on getting your home to look its best.</p>",
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
          "<p>Whether at home or at work, MRM can help with all your carpentry needs. Looking for a makeover? Our team are experts at installing sash windows, hanging doors and flooring. Your whole space can be transformed with smaller jobs too; we also fix, repair and replace cupboard doors, kitchen units and shelves. If you have recently moved into a new business space (or need to create new space) we also install partition walls. </p><p>We appreciate that some carpentry work can be a big job, so at MRM we always endeavour to work efficiently and get you into your home as quickly as possible! Find out how we can help you totally transform your space with our MRM team today. </p>",
        image: {
          src: "images/t6.png",
          alt: "",
        },
        services: [
          {
            name: "Sash windows",
            text: "Sash windows",
            image: {
              src: "/images/services/sash-windows.png",
              alt: "",
            },
            link: "",
          },
          {
            name: "Cupboard doors",
            text: "Cupboard doors",
            image: {
              src: "/images/services/cupboard.png",
              alt: "",
            },
            link: "",
          },
          {
            name: "Hanging doors",
            text: "Hanging doors",
            image: {
              src: "/images/services/hanging-door.png",
              alt: "",
            },
            link: "",
          },
          {
            name: "Flooring",
            text: "Flooring",
            image: {
              src: "/images/services/flooring.png",
              alt: "",
            },
            link: "",
          },
          {
            name: "Kitchen units",
            text: "Kitchen units",
            image: {
              src: "/images/services/kitchen-unit.png",
              alt: "",
            },
            link: "",
          },
          {
            name: "Shelves",
            text: "Shelves",
            image: {
              src: "/images/services/shelves.png",
              alt: "",
            },
            link: "",
          },
          {
            name: "Partition walls",
            text: "Partition walls",
            image: {
              src: "/images/services/partitions.jpg",
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
          "<p>Plumbing emergency? No worries! Our reliable plumbers are available 24/7 for emergency call outs, and non-emergency jobs. Our services include replacements, unblocking, fixing flood damage, installations and repairs. At MRM we understand how stressful an emergency plumbing situation can be, and we guarantee a fast response to ensure a quick resolution. Our trained plumbers are on hand day or night for any unexpected situations, providing you peace of mind.</p><p>If you’re looking to transform your bathroom or kitchen, then allow us to help! New fixtures in both rooms can make any space look brand new and our trained team is on hand to advise you how your house can be remodelled.</p>",
        image: {
          src: "images/t7.png",
          alt: "",
        },
        services: [
          {
            name: "Replacements",
            text: "Replacements",
            image: {
              src: "/images/services/replace.png",
              alt: "",
            },
            link: "",
          },
          {
            name: "Unblocking",
            text: "Unblocking",
            image: {
              src: "/images/services/unblock.png",
              alt: "",
            },
            link: "",
          },
          {
            name: "Installations",
            text: "Installations",
            image: {
              src: "/images/services/install.png",

              alt: "",
            },
            link: "",
          },
          {
            name: "Repairs",
            text: "Repairs",
            image: {
              src: "/images/services/repair.png",

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
          "<p>The most stressful part of moving house just got a lot easier! MRM movers are dedicated to ensuring you have the most relaxing experience possible, making sure nothing gets lost or left behind.  Our services include help packing, lifting and shifting boxes and we also provide mini moving. When moving your possessions, we always take the upmost care and we will always pay special attention to fragile or delicate ornaments. Choose MRM to ensure you have the best move possible.</p>",
        image: {
          src: "images/t2.jpg",
          alt: "",
        },
        services: [
          {
            name: "Lifting & Shifting",
            text: "Lifting & Shifting",
            image: {
              src: "/images/services/moving.png",
              alt: "",
            },
            link: "",
          },
          {
            name: "Mini Moving",
            text: "Mini Moving",
            image: {
              src: "/images/services/mini-moving.png",

              alt: "",
            },
            link: "",
          },
        ],
      },
      {
        name: "Painting and Decorating",
        link: "decorating",
        banner: "",
        describtion:
          "<p>Our professional painters and decorators at MRM are here to make your home look as good as new! We provide repairs, such as filling cracks in walls, patch repair, fixing ceiling cracks and repairing holes in walls, as well as providing painting and wallpaper hanging. We are also available for outdoor jobs such as house painting, roofing and anything else required. Our experienced decorators are dedicated to making your home or office look how you vision it.</p><p>MRM are on hand to help, and we know how eager you are for your house to be finished on time and to the finest standard. Our trained team will ensure any work gets done as quickly as possible, whilst delivering only the best standards.</p>",
        image: {
          src: "images/t2.jpg",
          alt: "",
        },
        services: [
          {
            name: "Filling cracks in walls",
            text: "Filling cracks in walls",
            image: {
              src: "/images/services/crack-walls.png",
              alt: "",
            },
            link: "",
          },
          {
            name: "Plaster patch repair",
            text: "Plaster patch repair",
            image: {
              src: "/images/services/plaster-patch.png",
              alt: "",
            },
            link: "",
          },
          {
            name: "Painting",
            text: "Painting",
            image: {
              src: "/images/services/painting.png",
              alt: "",
            },
            link: "",
          },
          {
            name: "Wallpaper hanging",
            text: "Wallpaper hanging",
            image: {
              src: "/images/services/wallpaper.png",
              alt: "",
            },
            link: "",
          },
          {
            name: "Fixing ceiling cracks",
            text: "Fixing ceiling cracks",
            image: {
              src: "/images/services/ceiling-crack.png",
              alt: "",
            },
            link: "",
          },
          {
            name: "Repairing holes in walls",
            text: "Repairing holes in walls",
            image: {
              src: "/images/services/hole-wall.png",
              alt: "",
            },
            link: "",
          },
        ],
      },
      {
        name: "Cleaning",
        link: "cleaning",
        banner: "",
        describtion:
          "<p>Whether you are looking to sell or rent your home, office or commercial building, or even looking for ongoing cleaning services - we are here to help.</p><p>We have experienced and exceptional cleaners who pride themselves not leaving until the job is done. </p><p>With years of experience looking after commercial office buildings, we know how to clean spaces, whether big or small.</p>",
        image: {
          src: "images/t2.jpg",
          alt: "",
        },
        services: [
          {
            name: "Jet Wash Paving Stones",
            text: "Jet Wash Paving Stones",
            image: {
              src: "/images/services/jetwash-paving.png",
              alt: "",
            },
            link: "",
          },
          {
            name: "Jet Wash Garden Furniture",
            text: "Jet Wash Garden Furniture",
            image: {
              src: "/images/services/jetwash-garden.png",
              alt: "",
            },
            link: "",
          },
          {
            name: "Jet Wash Stone Steps",
            text: "Jet Wash Stone Steps",
            image: {
              src: "/images/services/jetwash-steps.png",
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
          "<p>Getting locked out of your house can be one of the most stressful situations to occur. Our team is available day or night to deal with any emergencies, and will respond rapidly to anyone accidently locked out! We also deal with burglary repairs, and we repair locks and can fit new locks to ensure you feel safe and relaxed in your home.</p><p>At MRM we understand how important it is to feel comfortable at home, and any burglary repairs or replacing locks can be done as soon as possible to give you peace of mind. In an already stressful situation, we will always ensure that our team leaves everything tidy to let you get back to normal like as quickly as possible.</p>",
        image: {
          src: "images/t2.jpg",
          alt: "",
        },
        services: [
          {
            name: "Burglary Repairs",
            text: "Burglary Repairs",
            image: {
              src: "/images/services/burglary-repairs.png",
              alt: "",
            },
            link: "",
          },
          {
            name: "Emergency Locksmith",
            text: "Emergency Locksmith",
            image: {
              src: "/images/services/emergency-locksmith.png",
              alt: "",
            },
            link: "",
          },
          {
            name: "Repairing Locks",
            text: "Repairing Locks",
            image: {
              src: "/images/services/repairing-locks.png",
              alt: "",
            },
            link: "",
          },
          {
            name: "Fitting locks",
            text: "Fitting locks",
            image: {
              src: "/images/services/fitting-locks.png",
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
          "MRM is a building support team situated in the Marylebone, Soho and Mayfair area of London.  We offer total upkeep and repairs. Our experienced group of property maintenance experts focus on quality, client care and reliability.",
        subHeading2:
          "Having served both businesses and private customers for years, we understand the importance of being available whenever you need us. We are on hand 24 hours a day, seven days a week to help with the entirety of your property upkeep needs, including fixing flood damage, painting, plumbing moving or general carpentry.",
        image: {
          src: "images/plumbing.png",
          alt: "",
        },
      },
      right: [
        {
          heading: "Handyman",
          text:
            "Odd jobs around the house that need doing? Look no further then MRM! We can help with hanging, tiling or general flat pack assembly.",
          link: "/services/handyman",
        },
        {
          heading: "Electrical Services",
          text:
            "Our electricians can discover issues in your electric frameworks and complete repairs, carry out new installationss, issue electrical certificates  or any other electrical jobs.",
          link: "/services/electrics",
        },
        {
          heading: "Home Makeover",
          text:
            "Looking to transform your home? Take a look at how we can help you with a revamp.",
          link: "/services/home-makeover",
        },
        {
          heading: "Carpentry Services",
          text:
            "If your office or home needs any carpentry work, MRM can help. From big jobs like replacing flooring to putting up shelves, we can help transform your home or business.",
          link: "/services/carpentry",
        },
        {
          heading: "Plumbing Services",
          text:
            "Our exceptionally qualified plumbers have lots of experience working in both private and business properties and are available 24/7.",
          link: "/services/plumbing",
        },
        {
          heading: "Moving Services",
          text:
            "Need reliable movers? We can help packing and transporting goods for your home or business.",
          link: "/services/moving-services",
        },
        {
          heading: "Painting and Decorating ",
          text:
            "Our trained team can help you with any of your inside or outside repair jobs. Whether it’s a complete inside redesign or an outdoor job that requires fixing and painting, our pros will complete the job to a high standard. ",
          link: "/services/decorating",
        },
        {
          heading: "Cleaning Services",
          text:
            "Make your garden or outdoor area look brand new with our Jet Washing services.",
          link: "/services/cleaning",
        },
        {
          heading: "Locksmith",
          text:
            "Locked out? MRM is available as an emergency locksmith, or we can help with burglary repairs or fitting new locks.",
          link: "/services/locksmith",
        },
      ],
    },
  },
  prices: {
    title: "Our Rates",
    subHeader: "We like to be 100% transparent with our rates.",
    banner: "/images/handshake.png",
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
        { name: "Services", link: "/services" },
        { name: "Prices", link: "/prices" },
        { name: "About Us", link: "/aboutUs" },
      ],
    },
    col2: {
      name: "Services",
      items: [
        { name: "Handyman", link: "/services/handyMan" },
        { name: "Electrics", link: "/services/electrics" },
        { name: "Home Makeover", link: "/services/home-makeover" },
        { name: "Carpentry", link: "/services/carpentry" },
        { name: "Plumbing", link: "/services/plumbing" },
      ],
    },
    col3: {
      name: "Services",
      items: [
        { name: "Moving Services", link: "/services/moving-services" },
        { name: "Decorating", link: "/services/decorating" },
        { name: "Cleaning", link: "/services/cleaning" },
        { name: "Locksmith", link: "/services/locksmith" },
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
