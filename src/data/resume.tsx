import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Öztürk Şirin",
  initials: "ÖŞ",
  url: "https://dillion.io",
  location: "Turkey, Bursa",
  locationLink: "",
  description:
    "Software Engineer. I love building things and helping people.Active on Twitter & LinkedIn & Medium.",
  summary: `I have been interested in software for more than three years and I have been trying to develop myself much more in this regard. Solution-producing applications by developing mobile applications
  I have experience in React, React Native and I am developing individually. By adapting to new generation technologies, applications
  I am extremely motivated and enthusiastic about this.`,
  avatarUrl: "/me.png",
  skills: [
    "React",
    "React Native",
    "Next.js",
    "Typescript",
    "Node.js",
    ".Net",
    "Mysql",
    "Postgres",
    "MongoDB",
    "Firebase",
    "Redux",
    "JavaScript",
    "GitHub-Git",
    "TailwindCSS",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "ozturksirininfo@gmail.com",
    tel: "+90",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/ozturksirin",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ozturk-sirin/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/Ozturksrnn",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "ozturksirininfo@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  work: [
    {
      company: "Bereket (Volunteer)",
      href: "",
      badges: [],
      location: "Hybrid",
      title: "Mobile Team Lead",
      logoUrl: "/bereket.png",
      start: "Jun 2024",
      end: "Continues",
      description: `I am making mobile-oriented developments in the bereket team that I joined as a volunteer.
      Development and optimisation of the mobile project, Management and guidance of mobile team members,
      Creating and following project calendars, Improving mobile application development processes.`,
    },
    {
      company: "ZcnTech (Contract)",
      href: "",
      badges: [],
      location: "Hybrid",
      title: "React Developer",
      logoUrl: "/zcn.jpg",
      start: "Nov 2023",
      end: "Oct 2024",
      description: `As a mobile developer, you can use React Native, TypeScript, Firebase, and Mobx
        I have experience working with technologies. In the mobile area of the artificial intelligence project
        I performed API connections and made enhancements to optimise, supporting best-case scenarios. Improving the user experience
        I have put forward ideas and, where necessary, on my own initiative
        I developed designs
      `,
    },
    {
      company: "Kodpilot",
      href: "",
      badges: [],
      location: "Turkey, Bursa",
      title: "Software Developer",
      logoUrl: "/kodpilot.png",
      start: "Jun 2023",
      end: "Feb 2024",
      description:
        "I performed frontend developments with React, React native. I provided support for bug fixes and teamwork.",
    },
    {
      company: "Kodpilot",
      href: "",
      badges: [],
      location: "Turkey, Bursa",
      title: "Intern Software Developer",
      logoUrl: "/kodpilot.png",
      start: "Feb 2023",
      end: "Jun 2023",
      description: `To realize a harmonious working experience within the team, I have gained experience and have been able to fulfill a great deal of important roles in real-life projects. These experiences have made me feel ready and motivated to work. During my study period, I engaged in various activities, such as designing a website using HTML and CSS, creating a web page with JavaScript, and developing games. I also participated in projects by working in a team with React and React Native, and developed the Kodapi template using React. Additionally, I actively contributed to the development of the Gaminvest website, focusing on providing a user-friendly experience. I was involved in the redesign and development process of the Kodpilot website and contributed significantly to the Bambu Games Mobile application development project, providing solutions to meet user needs and enhancing the user experience. Throughout these projects, I worked with Node.js and continuously sought to improve my skills.`,
    },
    {
      company: "Tat",
      href: "",
      badges: [],
      location: "Turkey, Mustafakemalpaşa",
      title: "Office Worker",
      logoUrl: "/tat.jpg",
      start: "Aug 2020",
      end: "Seasonal",
      description: `Experience of teamwork and working in an office environment using Sap and Excel
        I have acquired
        I gained experience in using the handle system interface, weighbridge data entry screen, (VL01no) sat
        I carried out delivery, MB1C and dispatch note transactions without light order.
        I worked 5 years intermittently during the seasonal periods, I worked for a total of 1 year`,
    },
  ],
  education: [
    {
      school: "Anadolu University",
      href: "https://www.anadolu.edu.tr/",
      degree: "Logistics",
      logoUrl: "/aof.png",
      start: "2024",
      end: "Continues",
    },
    {
      school: "Bandırma Onyedi Eylül University",
      href: "https://www.bandirma.edu.tr/",
      degree: "Computer Programmer 3,51/4",
      logoUrl: "/banu.png",
      start: "2022",
      end: "2023",
    },
    {
      school: "Tokat Gaziosmanpaşa University",
      href: "https://www.gop.edu.tr/",
      degree: "Computer Programmer 3,28/4",
      logoUrl: "/togu.png",
      start: "2021",
      end: "2022",
    },
  ],
  projects: [
    {
      title: "Sticker AI",
      href: "https://www.linkedin.com/feed/update/urn:li:activity:7211297254043754496/",
      dates: "Apr 2024 - May 2024",
      active: true,
      description:
        "A sticker creation application that works in harmony with artificial intelligence that I developed using React Native and Nodejs technologies.For detailed information and visuals, you can check the LinkedIn link",
      technologies: [
        "React Native Expo",
        "Typescript",
        "Node.js",
        "Sequelize",
        "MySQL",
        "Firebase",
      ],
      links: [
        {
          type: "LinkedIn",
          href: "https://www.linkedin.com/feed/update/urn:li:activity:7211297254043754496/",
          icon: <Icons.linkedin className="size-3" />,
        },
      ],
      image: "/sticker-ai-co.png",
      video: "",
    },
    {
      title: "CardX - Learn English Vocabulary",
      href: "https://www.linkedin.com/feed/update/urn:li:activity:7164900831941586944/",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Introducing a brand new English vocabulary learning app! 🚀CardX offers an effective and fun learning experience for language learners of all levels. Whether you are just starting to learn English or want to enrich your vocabulary, this app is ideal for you!",
      technologies: [
        "React Native",
        "Typescript",
        "Redux",
        "Revenuecat",
        "Firebase",
        "Admob",
      ],
      links: [
        {
          type: "Google Play",
          href: "https://play.google.com/store/apps/details?id=com.cardx",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/card-x.jpg",
      video: "",
    },
    {
      title: "NextJs-Dashboard-OpenSource",
      href: "https://next-js-dashboard-phi-livid.vercel.app/",
      dates: "july 2024 - Continues",
      active: true,
      description:
        "This is an open source dasboard project anyone can support.",
      technologies: ["NextJs", "Typescript", "TailwindCSS", "ShadcnUI"],
      links: [
        {
          type: "Source",
          href: "https://github.com/ozturksirin/NextJs-Dashboard",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/dash.jpg",
      video: "",
    },

    {
      title: "iWeather",
      href: "https://github.com/ozturksirin/iWeather",
      dates: "April 2024 - April 2024",
      active: true,
      description:
        "This project is a weather application developed using React Native and Expo. The application uses the OpenWeatherMap API It receives real-time weather information and presents it to the user.",
      technologies: ["React Native-Expo", "Typescript", "Zustand", "Axios"],
      links: [
        {
          type: "Source",
          href: "https://github.com/ozturksirin/iWeather",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Iweather.png",
      video: "",
    },

    {
      title: "Flower Watering System",
      href: "https://github.com/ozturksirin/Sirin-Dede-Sulama-Sistemleri",
      dates: "October 2023 - December 2023",
      active: true,
      description:
        "This project is developed to control a flower watering system via mobile devices using Arduino and Firebase. With this system, you can water your flowers remotely.",
      technologies: [
        "Esp8266",
        "Role module",
        "Board",
        "Humidity sensor",
        "Firebase",
        "Java",
        "Water motor",
        "Flower",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/ozturksirin/Sirin-Dede-Sulama-Sistemleri",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/test.mov",
    },
    {
      title: "Rick And Morty API",
      href: "https://github.com/ozturksirin/rick-and-morty",
      dates: "June 2024 - June 2024",
      active: true,
      description:
        "A mobile application developed using React Native Expo that integrates with ready-made APIs. This project involves connecting to APIs to fetch and process data, designing user interfaces, optimizing application performance, testing mobile applications, and debugging processes.",
      technologies: [
        "React Native Expo",
        "Typescript",
        "AsyncStorage",
        "Redux - AsynchThunk",
        "Axios",
        "React Navigation",
        "Lottie",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/ozturksirin/rick-and-morty",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/ss.png",
      video: "",
    },
  ],
  mediums: [
    {
      title:
        "[EN] Developing Safer and More Flexible React Native with TypeScript",
      dates: "Jun 30, 2024",
      description: `Combining TypeScript and React Native offers a powerful toolset for modern mobile app development. In this article, I will explain the advantages of TypeScript and how it can be used in React Native projects.✅`,
      image:
        "https://miro.medium.com/v2/resize:fit:3840/format:webp/1*7BrCgkMK7WPZPqfdHU_1kQ.jpeg",
      links: [
        {
          title: "Medium",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/@OzturkSirin/en-developing-safer-and-more-flexible-react-native-with-typescript-9c5e50f0b9e1",
        },
      ],
    },
    {
      title: "[TR] React Projemizi Firebase ile Nasıl Deploy Edebiliriz?",
      dates: "Jun 3, 2024",
      description: `Açılan sayfada bir “Proje oluştur” düğmesi olacaktır. Bu butona tıkladığınızda sizi proje detaylarınızı gireceğiniz sayfaya götürecektir.`,
      image:
        "https://miro.medium.com/v2/resize:fit:720/format:webp/1*Ku-k2tsCPUEn-GH-LUFSeg.jpeg",
      links: [
        {
          title: "Medium",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/bursa-bilişim-topluluğu/tr-react-projemizi-firebase-ile-nasıl-deploy-edebiliriz-70d172daefcc",
        },
      ],
    },
    {
      title: "[EN] What are Axios Interceptors?",
      dates: "May 13, 2024",
      description: `Interceptors are a design pattern used to extend or modify the functionality of a program. In Axios, interceptors are special functions used to handle HTTP requests and responses.`,
      image:
        "https://miro.medium.com/v2/resize:fit:720/format:webp/0*lm6R0IdgFHmBRPb0.jpg",
      links: [
        {
          title: "Medium",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/@OzturkSirin/en-what-are-axios-interceptors-b0f68c645965",
        },
      ],
    },
    {
      title: "[EN] ReactNative APK Creation",
      dates: "Apr 4, 2024",
      description: `An APK file (Android Package Kit file format) is the file format for applications used in the Android operating system (OS).`,
      image:
        "https://miro.medium.com/v2/resize:fit:1400/format:webp/0*4IUBrSXyyO5LDJLJ.png",
      links: [
        {
          title: "Medium",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/@OzturkSirin/en-reactnative-apk-creation-53be8a14bed3",
        },
      ],
    },
    {
      title: "[EN] React Native Flip Card Animation",
      dates: "March 29, 2024",
      description:
        "We will create a flip card design using React Native Expo and reanimated.",
      image:
        "https://miro.medium.com/v2/resize:fit:720/format:webp/0*2uKn1Wpr4Ju7_2Fx.png",
      links: [
        {
          title: "Medium",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/@OzturkSirin/en-react-native-flip-card-animation-85526de0a6c2",
        },
      ],
    },
    {
      title:
        "[TR] AsyncStorage React Native’de veri depolama ve yerel verilerin saklanması",
      dates: "March 20, 2024",
      description: `Async Storage, React Native uygulamanız için asenkron, şifrelenmemiş, kalıcı, key-valuedepolama çözümüdür.Telefonun hafızasını kullanarak bilgileri depolamamızı sağlar.`,
      image:
        "https://miro.medium.com/v2/resize:fit:1100/format:webp/0*1wyt34rEsI-kz8jv.png",
      links: [
        {
          title: "Medium",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/folksdev/tr-async-storage-react-nativede-veri-depolama-ve-yerel-verilerin-saklanması-0b995bc092f2",
        },
      ],
    },
    {
      title: "[TR] Cookies İnternet Deneyimini Şekillendiren Küçük Mucizeler",
      dates: "March 20, 2024",
      description: `HTTTP çerezleri 1994 yılında web tarayıcı programcısı Lou Montulli, bir çevrimiçi alışveriş mağazasının aşırı yüklenmiş sunucularını düzeltmesine yardımcı olurken`,
      image:
        "https://miro.medium.com/v2/resize:fit:1400/format:webp/0*jzCfpUIL3ULnlY47",
      links: [
        {
          title: "Medium",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/@OzturkSirin/tr-cookies-i̇nternet-deneyimini-şekillendiren-küçük-mucizeler-29536c35c5df",
        },
      ],
    },
    {
      title:
        "[TR] Lazy Loading Web Sayfalarında Performansı ve Kullanıcı Deneyimini Artıran Teknik",
      dates: "March 19, 2024",
      description: `Lazy loading, web geliştirme alanında sıkça kullanılan bir tekniktir ve kullanıcı deneyimini iyileştirmek için oldukça önemlidir.`,
      image:
        "https://miro.medium.com/v2/resize:fit:720/format:webp/0*R18wU_gTHuCltQZG",
      links: [
        {
          title: "Medium",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/@OzturkSirin/tr-lazy-loading-web-sayfalarında-performansı-ve-kullanıcı-deneyimini-artıran-teknik-93de38fde41d",
        },
      ],
    },
    {
      title:
        "[TR] React Native Uygulamasında API Verilerini Kullanma Temel Bilgiler",
      dates: "March 12, 2024",
      description: `Axios, node.js ve tarayıcı için promise tabanlı HTTP İstemcisidir. izomorfik (= tarayıcıda ve node.js'de aynı kod tabanıyla çalışabilir). Sunucu tarafında `,
      image:
        "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*11xcymj4kTjfipuTmO6Mjw.png",
      links: [
        {
          title: "Medium",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/turkiyeyayını/tr-react-native-uygulamasında-api-verilerini-kullanma-temel-bilgiler-ve-i̇puçları-87f33c05debe",
        },
      ],
    },
    {
      title: "Nedir Bu Props?",
      dates: "March 4, 2023",
      description:
        "Props’lar değiştirilemezler sadece okunurlar (read-only), componentler arasında veri transferi için kullanırız.",
      image:
        "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*XdcrYecW6uCLwJOOe5048Q.jpeg",
      links: [
        {
          title: "Medium",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/@OzturkSirin/nedir-bu-props-40073cfa4cb4",
        },
      ],
    },
  ],
} as const;
