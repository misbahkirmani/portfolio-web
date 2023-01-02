import Mock from "../mock";

const database = {
  information: {
    name: 'Misbah kirmani',
    aboutContent: "I am a ui/ux designer and a frontend web developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.",
    age: 29,
    phone: '0521604869',
    //nationality: 'INDIAN',
    language: 'English, kashmiri, hindi',
    email: 'kirmanimisbah71@gmail.com',
    address: "Water's Edge Yas Island ,Abu Dhabi",
    //freelanceStatus: 'Available',
    socialLinks: {
      //facebook: 'https://facebook.com',
      //twitter: 'https://twitter.com',
      //pinterest: '',
      //behance: '',
      linkedin: 'https://www.linkedin.com/feed/',
      //dribbble: '',
      github: 'https://github.com'
    },
    brandImage: '/images/brand-image.jpg',
    aboutImage: '/images/about-image.jpg',
    aboutImageLg: '/images/about-image-lg.jpg',
    cvfile: '/files/empty.pdf'
  },
  services: [
    {
      title: "Web Design",
      icon: 'brush-alt',
      details: "There are three responses to a piece of design – yes, no, and WOW! Wow is the one to aim for.."
    },
    {
      title: "Web Development",
      icon: 'code',
      details: "Being first in the search result organically in Google is the dream of all website owners."
    },
    {
      title: "UX/UI",
      icon: 'mobile',
      details: "Making things as simple as possible from lo-fi wireframes to hi-fi products."
    }
  ],
  reviews: [
    {
      id: 1,
      content: "Very great job and amazing result,so convenient and I highly recommend them,straight forward and so accurate , I'm extremely happy with the job that they have done.Thank you Web Artisans for the great job and I will definitely hire you for the future projects.",
      author: {
        name: 'Aasia Solutions',
        designation: 'client'
      }
    },
    {
      id: 2,
      content: "It was wonderful to work with Web Artisans,it was my second project with them.They are fast,reliable and very professional.Will surely hire them again in future",
      author: {
        name: 'Rohit Redhu',
        designation: 'Client'
      }
    },
    {
      id: 3,
      content: "Web Artisans are a delight to work with.Understood the project from start to finish and even went an extra mile in comming up with an extra feature that would make the app more appealing to my visitors.Any future projects I would go straight to these guys.",
      author: {
        name: 'Don Alm',
        designation: 'Client'
      }
    }
  ],
  skills: [
    {
      title: "HTML5",
      value: 95
    },
    {
      title: "CSS3",
      value: 90
    },
    {
      title: "Javascript",
      value: 70
    },
    {
      title: "jQuery",
      value: 85
    },
    {
      title: "ReactJS",
      value: 80
    },
    {
      title: "Photoshop",
      value: 65
    },
    {
      title: "Figma",
      value: 95
    },
    {
      title: "MySql",
      value: 95
    },
    {
      title: "WordPress",
      value: 95
    },
    {
      title: "Shopify",
      value: 90
    },
    {
      title: "Tailwind CSS",
      value: 90
    },
    {
      title: "Material UI",
      value: 90
    }


  ],
  portfolios: [
    {
      id: 1,
      title: "Kids'O Clock",
      subtitle: "Kids O' Clock is a platform created for parents to sell/buy kids clothes and accesories or books, toys etc.",
      imageUrl: "https://res.cloudinary.com/dugd1qi5v/image/upload/v1671611762/Screen_Shot_2022-12-21_at_12.26.16_PM_yfagic.png",
      largeImageUrl: [
        "https://res.cloudinary.com/dugd1qi5v/image/upload/v1671611762/Screen_Shot_2022-12-21_at_12.26.16_PM_yfagic.png",
        "https://res.cloudinary.com/dugd1qi5v/image/upload/v1671611756/Screen_Shot_2022-12-21_at_12.29.22_PM_qvqwiw.png",
        "https://res.cloudinary.com/dugd1qi5v/image/upload/v1671611750/Screen_Shot_2022-12-21_at_12.29.53_PM_yfok57.png",
        "https://res.cloudinary.com/dugd1qi5v/image/upload/v1671611752/Screen_Shot_2022-12-21_at_12.29.57_PM_dyh8zc.png"
      ],
      url: 'https://kidsoclock.com/'
    },
    {
      id: 2,
      title: "Bulletin",
      subtitle: "Discover and register for golf events.",
      imageUrl: "https://res.cloudinary.com/dugd1qi5v/image/upload/v1671615169/Screen_Shot_2022-12-21_at_1.13.20_PM_k4dnrq.png",
      largeImageUrl: [

        "https://res.cloudinary.com/dugd1qi5v/image/upload/v1671615169/Screen_Shot_2022-12-21_at_1.13.20_PM_k4dnrq.png",
        "https://res.cloudinary.com/dugd1qi5v/image/upload/v1671615184/Screen_Shot_2022-12-21_at_1.13.28_PM_oxjhc0.png",
        "https://res.cloudinary.com/dugd1qi5v/image/upload/v1671615178/Screen_Shot_2022-12-21_at_1.13.33_PM_mfvqja.png",
        "https://res.cloudinary.com/dugd1qi5v/image/upload/v1671615176/Screen_Shot_2022-12-21_at_1.13.39_PM_kq3xww.png"
      ],
      url: 'https://bulletingolf.com/'
    },
    {
      id: 3,
      title: "Officeable",
      subtitle: "Short-term rental marketplace for offices, meeting rooms, and more! Find a quiet professional setting for an important Zoom call, or turn your underutilized office space into income in 5 minutes.",
      imageUrl: "https://res.cloudinary.com/dugd1qi5v/image/upload/v1671615603/Screen_Shot_2022-12-21_at_1.35.40_PM_vgrqak.png",
      largeImageUrl: [

        "https://res.cloudinary.com/dugd1qi5v/image/upload/v1671615603/Screen_Shot_2022-12-21_at_1.35.40_PM_vgrqak.png",
        "https://res.cloudinary.com/dugd1qi5v/image/upload/v1671615610/Screen_Shot_2022-12-21_at_1.35.49_PM_t79fdh.png",
        "https://res.cloudinary.com/dugd1qi5v/image/upload/v1671615619/Screen_Shot_2022-12-21_at_1.35.56_PM_mx7ph1.png",
        "https://res.cloudinary.com/dugd1qi5v/image/upload/v1671615578/Screen_Shot_2022-12-21_at_1.36.24_PM_l6aafz.png"
      ],
      url: 'https://officeable.com/'
    },
    {
      id: 4,
      title: "Vulpilist",
      subtitle: "Buy & Sell classical menswear and accessories, new or pre-owned.",
      imageUrl: "https://res.cloudinary.com/dugd1qi5v/image/upload/v1671615974/Screen_Shot_2022-12-21_at_1.43.02_PM_oklnoo.png",
      largeImageUrl: [
        "https://res.cloudinary.com/dugd1qi5v/image/upload/v1671615974/Screen_Shot_2022-12-21_at_1.43.02_PM_oklnoo.png",
        "https://res.cloudinary.com/dugd1qi5v/image/upload/v1671615975/Screen_Shot_2022-12-21_at_1.43.23_PM_w0mk6j.png",
        "https://res.cloudinary.com/dugd1qi5v/image/upload/v1671615965/Screen_Shot_2022-12-21_at_1.43.39_PM_cqakl4.png",
        "https://res.cloudinary.com/dugd1qi5v/image/upload/v1671615960/Screen_Shot_2022-12-21_at_1.43.32_PM_q4bf7r.png"
      ],
      url: 'https://vulpilist.com/'
    },
    // {
    //   id: 5,
    //   title: "Wild dog",
    //   subtitle: "Radhu's Logo and Menu",
    //   imageUrl: "/images/portfolio-image-5.jpg",
    //   largeImageUrl: ["/images/portfolio-image-5-lg.jpg"]
    // },
    {
      id: 6,
      title: "Attractr",
      subtitle: "Place where an indivisual or a group can list the events which they are organizing, schedules,pictures and other datails etc. People can go to the listing and book a place in the event. We are still working on this project.",
      imageUrl: "https://res.cloudinary.com/dugd1qi5v/image/upload/v1671614684/Screen_Shot_2022-12-21_at_1.07.44_PM_qimmvs.png",
      largeImageUrl: [
        "https://res.cloudinary.com/dugd1qi5v/image/upload/v1671614684/Screen_Shot_2022-12-21_at_1.07.44_PM_qimmvs.png",
        "https://res.cloudinary.com/dugd1qi5v/image/upload/v1671614677/Screen_Shot_2022-12-21_at_1.07.25_PM_yt9wxt.png",
        "https://res.cloudinary.com/dugd1qi5v/image/upload/v1671614687/Screen_Shot_2022-12-21_at_1.07.35_PM_d9bzpn.png"
        
      ]
    },
    // {
    //   id: 7,
    //   title: "General Motors/Cadillac Mockup for HaulerAds",
    //   subtitle: "Truck side advertisement.",
    //   imageUrl: "/images/portfolio-image-7.jpg",
    //   largeImageUrl: ["/images/portfolio-image-7-lg.jpg"],
    //   url: 'https://movia.media/'
    // },
    {
      id: 8,
      title: "Adepty",
      subtitle: "Adepty is a place where indivisuals can list their skills or services. People can go to the website, and buy the services.",
      imageUrl: "https://res.cloudinary.com/dugd1qi5v/image/upload/v1671631265/Screen_Shot_2022-12-21_at_5.52.51_PM_udldkp.png",
      largeImageUrl: [
        "https://res.cloudinary.com/dugd1qi5v/image/upload/v1671631265/Screen_Shot_2022-12-21_at_5.52.51_PM_udldkp.png",
        "https://res.cloudinary.com/dugd1qi5v/image/upload/v1671630935/Screen_Shot_2022-12-21_at_5.53.05_PM_ahtjfx.png",
        "https://res.cloudinary.com/dugd1qi5v/image/upload/v1671630920/Screen_Shot_2022-12-21_at_5.53.17_PM_zrifam.png"
      ]
    },
    // {
    //   id: 9,
    //   title: "Stag & Maple T-shirts",
    //   subtitle: "BA mockup of Stag & Maple on T-shirts",
    //   imageUrl: "/images/portfolio-image-9.jpg",
    //   largeImageUrl: ["/images/portfolio-image-9-lg.jpg"]
    // },
    {
      id: 10,
      title: "Business Card",
      subtitle: "Card for Kaawish.",
      imageUrl: "/images/portfolio-image-3.jpg",
      largeImageUrl: ["/images/portfolio-image-3-lg.jpg"],
      //url: '#'
    },
    {
      id: 11,
      title: "Brouchure",
      subtitle: "Brochure for Kaawish.",
      imageUrl: "/images/portfolio-image-4.jpg",
      largeImageUrl: [
        "/images/portfolio-image-4-lg.jpg",
        "/images/portfolio-image-4-lg2.jpg"
      ],
      //url: 'https://facebook.com'
    },
    {
      id: 12,
      title: "TDSLR Finder",
      subtitle: "Website Design.",
      imageUrl: "https://res.cloudinary.com/dugd1qi5v/image/upload/v1671616649/Screen_Shot_2022-12-21_at_1.16.56_PM_p1z4sx.png",
      largeImageUrl: ["https://res.cloudinary.com/dugd1qi5v/image/upload/v1671616649/Screen_Shot_2022-12-21_at_1.16.56_PM_p1z4sx.png"],
      //url: 'https://pinterest.com'
    },
    {
      id: 13,
      title: "Kamada Park",
      subtitle: "Website Design.",
      imageUrl: "/images/portfolio-image-1.jpg",
      largeImageUrl: ["/images/portfolio-image-1-lg.jpg"],
      url: 'https://dribbble.com'
    },
    {
      id: 14,
      title: "Houston Job's",
      subtitle: "Website Design.",
      imageUrl: "/images/portfolio-image-5.jpg",
      largeImageUrl: ["/images/portfolio-image-5-lg.jpg"]
    },
    /*{
      id: 15,
      title: "Pendrive",
      subtitle: "Free pendrive mockup design.",
      imageUrl: "/images/portfolio-image-6.jpg",
      largeImageUrl: ["/images/portfolio-image-6-lg.jpg"]
    },
    {
      id: 16,
      title: "Beautiful Pendrive",
      subtitle: "Pendrive with great design & flexible.",
      imageUrl: "/images/portfolio-image-7.jpg",
      largeImageUrl: ["/images/portfolio-image-7-lg.jpg"],
      url: 'https://twitter.com'
    },
    {
      id: 17,
      title: "Sticker",
      subtitle: "Clip sticker mockup design.",
      imageUrl: "/images/portfolio-image-8.jpg",
      largeImageUrl: ["/images/portfolio-image-8-lg.jpg"]
    },
    {
      id: 18,
      title: "Packet",
      subtitle: "Beautiful packet & product design.",
      imageUrl: "/images/portfolio-image-9.jpg",
      largeImageUrl: ["/images/portfolio-image-9-lg.jpg"]
    },
    {
      id: 19,
      title: "T-shirt Mockup",
      subtitle: "A beautiful t-shirt mockup.",
      imageUrl: "/images/portfolio-image-1.jpg",
      largeImageUrl: ["/images/portfolio-image-1-lg.jpg"],
      url: 'https://dribbble.com'
    },
    {
      id: 20,
      title: "Coffee Mug",
      subtitle: "Awesome coffee mug design.",
      imageUrl: "/images/portfolio-image-4.jpg",
      largeImageUrl: [
        "/images/portfolio-image-4-lg.jpg",
        "/images/portfolio-image-4-lg2.jpg"
      ],
      url: 'https://facebook.com'
    },
    {
      id: 21,
      title: "Tea & Coffee Mug",
      subtitle: "Beautiful mug with logo.",
      imageUrl: "/images/portfolio-image-2.jpg",
      url: 'https://pinterest.com'
    },
    {
      id: 22,
      title: "Pen Holder",
      subtitle: "A pen holder with beautiful design.",
      imageUrl: "/images/portfolio-image-3.jpg",
      largeImageUrl: ["/images/portfolio-image-3-lg.jpg"],
      url: '#'
    },
    {
      id: 23,
      title: "Mug",
      subtitle: "Mug with awesome style",
      imageUrl: "/images/portfolio-image-5.jpg",
      largeImageUrl: ["/images/portfolio-image-5-lg.jpg"]
    }*/
  ],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: "2020 - 2022",
        position: "UI designer",
        company: "web artisans",
        details: "•	Gather and evaluate user requirements in collaboration with the internal software development team.<br/• Design graphic user interface elements like menus, tabs and widgets.<br/>• Build other page components viz. navigation buttons and search fields. .<br/>• Develop UI mock-ups and prototypes that clearly illustrate how the website functions and looks like.<br/>• Responsible for gathering original graphic designs (images, sketches and tables) from graphic designers.<br/>• Prepare and present rough drafts for the internal team.<br/>• Identify and troubleshoot UX problems (responsiveness).<br/>• Make layout adjustments based on internal team’s feedback and feedback from the clients.<br/>• Adhere to style standard on fonts, colours and images.<br/>• Developed UI/UX strategies that include wireframes and mock-ups for small and medium sized enterprises.<br/>•Used e-commerce platform Wordpress to create a store for a local business owner.<br/>"
      },
      {
        id: 2,
        year: "2016-2019",
        position: "Deputy manager",
        company: "Design 360",
        details: "•	Prepare well-structured drafts using content management systems .<br/>•	Prepare well-structured drafts using content management systems .<br/>•	Proofread and edit blogs for input and approval.<br/>• Submit work to editors for input and approval.<br/>•	Coordinate with marketing and design teams to illustrate articles.<br/>• simple keyword research and use SEO guidelines to increase web traffic.<br/>• Promote and control on social media.<br/>•	Ensure all round consistency (style, fonts, Images and tones).<br/>"
      },
      
    ],
    educationExperience: [
      {
        id: 1,
        year: "2011-2015",
        graduation: "B.TECH , computer science",
        university: "Kashmir university",
        //details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro."
      }
      
    ]
  },
 blogs: [
    {
      id: 1,
      title: 'Markdown & Html supported blog.',
      featuredImage: '/images/blog-image-1.jpg',
      filesource: '../../blog/markdown-html-supported-blog.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 2,
      title: 'Installing NodeJS on your device.',
      featuredImage: '/images/blog-image-2.jpg',
      filesource: '../../blog/installing-nodejs-on-your-device.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 3,
      title: 'UI/UX design starter with Adobe XD.',
      featuredImage: '/images/blog-image-3.jpg',
      filesource: '../../blog/uiux-design-starter-with-adobe-xd.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 4,
      title: 'Boost your post for increasing sales.',
      featuredImage: '/images/blog-image-4.jpg',
      filesource: '../../blog/boost-your-post-for-increasing-sales.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 5,
      title: 'Difference between GatsbyJS & NextJS.',
      featuredImage: '/images/blog-image-5.jpg',
      filesource: '../../blog/difference-between-gatsbyjs-and-nextjs.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 6,
      title: 'How to choose javascript framework for project.',
      featuredImage: '/images/blog-image-6.jpg',
      filesource: '../../blog/how-to-choose-javascript-framework-for-project.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 7,
      title: 'Web automation with python language.',
      featuredImage: '/images/blog-image-7.jpg',
      filesource: '../../blog/web-automation-with-python-language.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 8,
      title: 'Time to use latest technology for creating a website.',
      featuredImage: '/images/blog-image-8.jpg',
      filesource: '../../blog/time-to-use-latest-technology-for-creating-a-website.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 9,
      title: 'Think out of the box.',
      featuredImage: '/images/blog-image-9.jpg',
      filesource: '../../blog/think-out-of-the-box.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 10,
      title: 'Trending designs in 2020.',
      featuredImage: '/images/blog-image-1.jpg',
      filesource: '../../blog/trending-designs-in-2020.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 11,
      title: 'How to get 10k instagram followers?',
      featuredImage: '/images/blog-image-2.jpg',
      filesource: '../../blog/how-to-get-10k-instagram-followers.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 12,
      title: 'What NodeJS can do?',
      featuredImage: '/images/blog-image-3.jpg',
      filesource: '../../blog/what-nodejs-can-do.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 13,
      title: 'Futures of javascript.',
      featuredImage: '/images/blog-image-4.jpg',
      filesource: '../../blog/future-of-javascript.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 14,
      title: 'Popular javascript library in 2020.',
      featuredImage: '/images/blog-image-5.jpg',
      filesource: '../../blog/popular-javascript-library-in-2020.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 15,
      title: 'Promrammers must read books.',
      featuredImage: '/images/blog-image-6.jpg',
      filesource: '../../blog/programmers-must-read-books.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    }
  ],
  contactInfo: {
    phoneNumbers: ['0521604869'],
    emailAddress: ['kirmanimisbah71@gmail.com', 'misbahkirmani@icloud.com'],
    address: "Building 10, 829 water's edge, YAS ISLAND, ABU DHABI"
  }
}


Mock.onGet("/api/information").reply(config => {
  const response = database.information;
  return [200, response];
});

Mock.onGet("/api/services").reply(config => {
  const response = database.services;
  return [200, response];
});

Mock.onGet("/api/reviews").reply(config => {
  const response = database.reviews;
  return [200, response];
});

Mock.onGet("/api/skills").reply(config => {
  const response = database.skills;
  return [200, response];
});

Mock.onGet("/api/portfolios").reply(config => {
  const response = database.portfolios;
  return [200, response];
});

Mock.onGet("/api/experience").reply(config => {
  const response = database.experience;
  return [200, response];
});

Mock.onGet("/api/blog").reply(config => {
  const response = database.blogs;
  return [200, response];
});

Mock.onGet("/api/contactinfo").reply(config => {
  const response = database.contactInfo;
  return [200, response];
});