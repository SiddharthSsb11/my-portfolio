import * as chatProjectImages from "../assets/images/chatProjectImages";
import * as fintech from "../assets/images/fintech";
import * as crypto from "../assets/images/crypto";
import * as share from "../assets/images/share";
import * as eCommerce from "../assets/images/eCommerce";
import * as paws from "../assets/images/paws";
import * as budget from "../assets/images/budget";

const projects = [
  {
    name: "Text-A-Lot",
    title: "Text-A-Lot",
    platform: "web",
    briefDescription:
      "A Realtime Chat Application for both one-on-one chats and group chats, incorporates all the modern chat features.",
    description:
      "Text-A-Lot is a Application for both one-on-one chats and group chats, incorporates all the modern chat features. Create an account, set-up your profile, edit and upload your photo, send and recieve texts, add friends, chat and connect with people, and more through moby.",
    technologies: [
      "JavaScript",
      "React",
      "Redux",
      "Socket.io",
      "NodeJs",
      "ExpressJs",
      "MongoDB",
      "Chakra-UI",
      "Sass/Scss",
    ],
    type: "personal",
    features: [
      "Create and personalize your own profile",
      "All the user details, group chats and conversations: Realtime Database",
      "Realtime communication & notification is supported using Socket.io",
      "Realtime One on One chats and group chats, typing... animation",
      "Secured login sessions with httpOnly JWT implementation",
      "Search for chats, create a group, add or remove partricipants",
      "Encrypt sensitive data (bcryptJS)",
      "Online / Offline, Read / Unread status of conversation is supported",
      "Mobile Responsive UI",
    ],
    //url: "https://textalot.herokuapp.com/",
    url: "https://www.loom.com/share/339d7abfe1924bbd8cb53c0cc3fac551",
    githubUrl: "https://github.com/SiddharthSsb11/MERN-chat-app",
    images: [
      {
        url: chatProjectImages.authPage,
        name: "authPage",
        title: "Auth Page",
        description:
          "Allows users to sign in, register, or access the main secured app pages with test user credentials.",
      },
      {
        url: chatProjectImages.chatPage,
        name: "chatPage",
        title: "Chat Page",
        description:
          "Users can search for and select chats to start texting immediately, as well as edit their profiles and view received chat notifications.",
      },
      {
        url: chatProjectImages.groupChatPage,
        name: "groupChatPage",
        title: "Group Chat",
        description:
          "Users can create or leave group chats, while admins can add or remove participants, edit the group name, and promote other participants to admins.",
      },
    ],
    coverImage: {
      url: chatProjectImages.chatCover,
      name: "chatCover",
    },
    logo: {
      url: chatProjectImages.chatLogo,
      name: "chatLogo",
    },
    palette: {
      primary: "#050505",
      secondary: "#454ea1",
    },
  },
  {
    name: "fintech",
    title: "Fintech",
    platform: "mobile",
    briefDescription:
      "Fintech is a cutting-edge mobile application to seamlessly manage and track your financial activities.",
    description:
      "This cutting-edge mobile application, built using React Native and Clerk as a cloud backend, is designed to help you seamlessly manage and track your financial activities. Whether you're dealing with traditional transactions, transfers, or keeping up with the latest crypto trends, this app provides a comprehensive solution to meet all your financial tracking needs. Its an ongoing work with few feauters in piepline",
    technologies: ["React-Native", "React", "JavaScript", "Mobx", "Sass/Scss"],
    type: "personal",
    images: [
      {
        url: fintech.auth,
        name: "fintech",
        title: "Login/Signup",
        description: "Signup or Login using phone number or gmail",
      },
      {
        url: fintech.otp,
        name: "otp",
        title: "OTP Verify",
        description:
          "6-digit OTP code verification to access your secured app data",
      },
      {
        url: fintech.home,
        name: "home",
        title: "Home",
        description:
          "Home Screen gives you an overview of your activities on the app and every possible naviagtional screen",
      },
      {
        url: fintech.transactions,
        name: "transactions",
        title: "Transactions",
        description:
          "Track your all transactions and summaries. Download your statement",
      },
      {
        url: fintech.profile,
        name: "profile",
        title: "User Profile",
        description:
          "User can edit user details, logout, pick display picture from your phone",
      },
      {
        url: fintech.lock,
        name: "lock",
        title: "Lock Screen",
        description:
          "User-Incativity Lock Screen, Secure your data with biometrics (fingerprint and face ID), passcode entry, and inactivity lock screens.",
      },
      {
        url: fintech.onboarding,
        name: "onboarding",
        title: "Welcome Screen",
        description: "Starting screen, Onboarding video playback screen",
      },
      {
        url: fintech.biometrics,
        name: "biometrics",
        title: "Lock Screen",
        description:
          "Wrong passcode animation, unlocking through passcode, biometrics and faceId",
      },
      {
        url: fintech.graph,
        name: "graph",
        title: "Crypto Charts",
        description:
          "Tracking your favourite crypto through charts and specific date pricings",
      },
      {
        url: fintech.widget,
        name: "widget",
        title: "Widgets",
        description:
          " Enhance your home screen with customizable widgets for quick insights.",
      },
    ],
    coverImage: {
      url: fintech.cover,
      name: "cover",
    },
    features: [
      "Cross-Platform: Enjoy a consistent experience on both iOS and Android devices.",
      "Robust Authentication & Authorization System: Clerk for user authentication with OTP.",
      "Drag-&-Drop: With Reanimated and Gestures, App Widgets, Enhance your home screen with customizable widgets for quick insights.",
      "User-Incativity Lock Screen: Secure your data with biometrics (fingerprint and face ID), passcode entry, and inactivity lock screens.",
      "Transaction Management: Easily view and manage all your transactions in one place.",
      "Nested Navigation: Bottoms-Tabs & Native-Stack Navigation, Navigate between multiple screens.",
      "Crypto Trends: Stay updated with the latest cryptocurrency trends and data.",
      "User Profile Management: View account details and activity, Upload and edit your profile picture and user details",
      "Custom UI Components: Enjoy a sleek and intuitive interface with dropdown menus, custom screen headers, and more, all made from scratch using React Native components.",
      " Local Async Storage: Efficient and reliable local storage for your data using react-native-async-storage.",
      "State Management with Zustand",
      "Graphical Charts Tracking: Track your desired currency progress through charts with haptic feedbacks.",
    ],
    url: "https://drive.google.com/uc?export=download&id=1w7mqmIe4v-3tbXt2HfiOkowlGcqgjEdb",
    githubUrl: "https://github.com/SiddharthSsb11/rn-fintech",
    logo: {
      url: fintech.logo,
      name: "logo",
    },
    palette: {
      primary: "#050505",
      secondary: "#454ea1",
    },
  },
  {
    name: "crypto-world",
    title: "Crypto-World",
    platform: "web",
    briefDescription:
      "A platform to track all and everything about Cryptocurrencies, using Graphical information in one place.",
    description:
      "It is a platform where you can track all and remain up-to-date in regards to the cryptocurrency in one place. You will be able to see their price, latest news, compare, volume, market cap and past data represented by graphs.",
    technologies: [
      "JavaScript",
      "React",
      "Redux",
      "Firebase",
      "Sass/Scss",
      "Material-UI",
    ],
    type: "personal",
    images: [
      {
        url: crypto.auth,
        name: "auth",
        title: "Sign Up/Login",
        description:
          "Signup or login using email or gmail to access the protected routes.",
      },
      {
        url: crypto.profile,
        name: "profile",
        title: "User Acount",
        description:
          "User Profile section, interact with your wishlist and profile details, logout option",
      },
      {
        url: crypto.home,
        name: "home",
        title: "Home Page",
        description:
          "The home page shows a carousel of featured crypto currency on the header, search bar and the list of currencies an its details. User can also change type of currency",
      },
      {
        url: crypto.graph,
        name: "graph",
        title: "Graph & Details",
        description:
          "This page shows, graphical tracking as per the desired time frame option and cypto currency further details",
      },
    ],
    coverImage: {
      url: crypto.cover,
      name: "cover",
    },
    logo: {
      url: crypto.logo,
      name: "logo",
    },
    features: [
      "Created using the React and Javascript stack with context state management.",
      "Implements account authentication/validation using firebase auth and gmail",
      "Allows account creation or sign in with Google Login Api",
      "Crypto currency data is accurant and fetched by coin market APIs",
      "User profile section to access logout and fully featured wishlisht functionalities ",
      "All the data is stored in the firebase firestore database i.e. persistent",
      "Top crytpocurrency carousel, search and pagination available",
      "Styling is done using CSS library Material-UI",
      "Graphical data representation feature using ChartJS.",
      "Mobile Responsive UI",
    ],
    url: "https://crypto-world-ssb.netlify.app/",
    githubUrl: "https://github.com/SiddharthSsb11/project-crypto-world",
    palette: {
      primary: "#050505",
      secondary: "#454ea1",
    },
  },
  {
    name: "share",
    title: "Share",
    platform: "mobile",
    briefDescription:
      "A cutting edge smartphone app to Share AI generated stock videos from your device with world.",
    description:
      "A revolutionary mobile application that empowers you to share videos directly from your device with the world. Built using the power of React Native for a seamless cross-platform experience and leveraging Appwrite as a robust cloud backend, VideoShare is designed to make video sharing effortless and enjoyable.",
    technologies: ["React-Native", "React", "JavaScript", "Redux", "Sass/Scss"],
    type: "personal",
    images: [
      {
        url: share.auth,
        name: "auth",
        title: "Auth & Onboarding",
        description:
          "Signup/Signin using email to access authenticated screens & Onboarding Screen",
      },
      {
        url: share.home,
        name: "home",
        title: "Home Screen",
        description:
          "Dynamic Home Screen with Animated Flat List, search and interact with AI generated shared videos",
      },
      {
        url: share.profile,
        name: "profile",
        title: "User Profile",
        description:
          "View account details and activity, including uploaded videos and follower count, for a personalized experience.",
      },
      {
        url: share.upload,
        name: "upload",
        title: "Video Upload Screen",
        description:
          "Upload video and image posts directly from the app with integrated media selection.",
      },
      {
        url: share.trending,
        name: "trending",
        title: "Trending Videos, Pull to Refresh",
        description:
          "Shows an animated horizontal list of trending videos and pull to refresh and reload the data in app",
      },
      {
        url: share.video,
        name: "video",
        title: "Native Controls Video",
        description:
          "Shows a video playback example with all the native control options available",
      },
    ],
    coverImage: {
      url: share.cover,
      name: "cover",
    },
    features: [
      "Cross-Platform: Enjoy a consistent experience on both iOS and Android devices",
      "Onboarding Screen: Engaging graphics and clear instructions welcome users to the app.",
      "Robust Authentication & Authorization System: Secure email login safeguards user accounts.",
      "Dynamic Home Screen with Animated Flat List: Smoothly animated flat list showcases the latest videos for seamless browsing.",
      "Pull-to-Refresh Functionality: Users can refresh content with a simple pull gesture for up-to-date information",
      "Full-Text Search Capability: Efficiently search through videos with real-time suggestions and instant results.",
      "Nested Navigation: Tab & Native-Stack Navigation, Navigate between sections like Home, Search, and Profile with ease using tab navigation.",
      "Post Creation Screen for Uploading Media: Upload video and image posts directly from the app with integrated media selection.",
      "Profile Screen with Detailed Insights: View account details and activity, including uploaded videos and follower count, for a personalized experience.",
      "Cloud Backend:: Powered by Appwrite, ensuring secure and scalable storage and management of your videos and auth.",
    ],
    url: "https://drive.google.com/uc?export=download&id=1Xbs2NghHSHHKSo9gecxeGGpcJnEuHjC8", // "https://drive.google.com/file/d/1Xbs2NghHSHHKSo9gecxeGGpcJnEuHjC8/view?usp=sharing",
    githubUrl: "https://github.com/SiddharthSsb11/rn-share",
    logo: {
      url: share.logo,
      name: "logo",
    },
    palette: {
      primary: "#050505",
      secondary: "#454ea1",
    },
  },
  {
    name: "buil-&-buy",
    title: "Build-&-Buy",
    platform: "web",
    briefDescription:
      "A fully featured eCommerce application to build and buy or upgrade your gaming setup.",
    description:
      "An eCommerce platform where you can buy all the necessary components and peripherals to build your best gaming station or upgrade your current system to complete and unleash the  ultimate, efficient, powerful beast that your gaming setup aims to be.",
    technologies: [
      "JavaScript",
      "React",
      "Redux",
      "NodeJs",
      "ExpressJs",
      "MongoDB",
      "Chakra-UI",
      "Sass/Scss",
    ],
    type: "personal",
    images: [
      {
        url: eCommerce.home,
        name: "home",
        title: "Home Page",
        description:
          "The home page shows a carousel of featured products on the header and the list of latest products for sale, search and filter options",
      },
      {
        url: eCommerce.product,
        name: "product",
        title: "Product Page",
        description:
          "The page showcasing the product with all its description, images, features, and reviews",
      },
      {
        url: eCommerce.profile,
        name: "profile",
        title: "User Account",
        description:
          "User account details, edit user info, update password and view placed order",
      },
      {
        url: eCommerce.delivery,
        name: "delivery",
        title: "Order Placed Page",
        description:
          "Shows the placed order details like items in order, orderId, shipping address, payment method, delivery status, paid status, order summary",
      },
      {
        url: eCommerce.users,
        name: "users",
        title: "Users List Page [ADMIN]",
        description:
          "Shows a list of users within the app. Admin has the power to appoint a user as admin and to delete a user.",
      },
      {
        url: eCommerce.orders,
        name: "orders",
        title: "Orders List Page [ADMIN]",
        description:
          "Shows the list of orders and actions to change the status of the orders.",
      },
    ],
    coverImage: {
      url: eCommerce.cover,
      name: "cover",
    },
    features: [
      "Top products carousel, search & filter products, paginated list of products",
      "Complet User account: editable user details, password, adresses etc",
      "Fully featured Checkout process (cart, shipping, payment method, etc)",
      "Checkout and pay with debit/credit card securely through PayPal API",
      "All of the data user details, order details and product data: Realtime Database",
      "Included Admin feature for adding/editing products, viewing & managing list of users, and managing list of orders.",
      "Product with all its description, images, features, and reviews",
      "Secured login sessions with httpOnly JWT implementation",
      "Mobile Responsive UI",
    ],
    // url: "https://buildbuy.herokuapp.com/",
    url: "https://www.loom.com/share/ec84cd9c386842ee8ee933b85fa50657",
    githubUrl: "https://github.com/SiddharthSsb11/MERN-E-Commerce",
    logo: {
      url: eCommerce.logo,
      name: "logo",
    },
    palette: {
      primary: "#050505",
      secondary: "#454ea1",
    },
    isLightMode: false,
  },

  {
    name: "paws",
    title: "Paws",
    platform: "web",
    briefDescription:
      "Platform to Match up with local pets and pet lovers for friendship, play-dates or fun outdoor playing.",
    description:
      "A fully-feautred web platform for Dating or finding Playmates for your Pets. Match up with local pets and pet lovers for friendship, play-dates or fun outdoor playing. Basically a tinder for your pets to have fun and run around",
    technologies: [
      "JavaScript",
      "React",
      "Redux",
      "Socket.io",
      "NodeJs",
      "ExpressJs",
      "MongoDB",
      "Chakra-UI",
      "Sass/Scss",
    ],
    type: "personal",
    images: [
      {
        url: paws.matchChat,
        name: "matchChat",
        title: "Matches & Chats",
        description:
          "Shows the matches and the the selected chats between the pets",
      },
      {
        url: paws.home,
        name: "home",
        title: "Home Page",
        description:
          "Shows the possible other pets as per your preferences, swipe them left right to have a match and chat, logout functionality too",
      },
      {
        url: paws.auth,
        name: "auth",
        title: "Sign Up/Login",
        description:
          "Signup or login to access the protected routes, also can acces the onboarding from this page",
      },
      {
        url: paws.account,
        name: "account",
        title: "Create Account",
        description: "Enter your account details, picture and preferences",
      },
      {
        url: paws.onboarding,
        name: "onboarding",
        title: "Onboarding Page",
        description:
          "Shows the the overview and whats the platform is about with a grid hover animation",
      },
    ],
    coverImage: {
      url: paws.cover,
      name: "cover",
    },
    features: [
      "Swipe/drag left and right to have chance of a match, view information of desired pets and swipe accordingly.",
      "Choose your gender, species and who do you want to match with",
      "Option for you to choose between to show or not to show your gender on your profile.",
      "Realtime One on One chats with the selected match, typing... animations too",
      "Realtime communication & notification is supported using Socket.io",
      "If not sure about your decision, remove the matched up pets.",
      "All the conversation, matches and user preferences: Realtime Database System",
      "Secured login sessions with httpOnly JWT implementation",
      "Encrypt sensitive data (bcryptJS)",
      "Animated grid Sneak-peak Onboarding page provides a glipmse into the application",
      "Mobile Responsive UI",
    ],
    // url: "https://paws-mern-dating.herokuapp.com/",
    url: "https://www.loom.com/share/35d07a7c96ed4aa5954b99a05142eada",
    githubUrl: "https://github.com/SiddharthSsb11/mern-project-paws",
    logo: {
      url: paws.logo,
      name: "logo",
    },
    palette: {
      primary: "#050505",
      secondary: "#454ea1",
    },
  },
  {
    name: "budget-master",
    title: "Budget Master",
    platform: "web",
    briefDescription:
      "A platform helps to manage & compare your Incomes & Expenses in one place via detailed categorical charts information.",
    description:
      "Manage your budget and transactions. Add income & expense and compare your transactions throught their respective percentage contribution via easy & descriptive graphically represented data. Keep a record of your transactions and manage them to save down the road. Its simple, discriptive and easy to use application",
    technologies: [
      "JavaScript",
      "React",
      "Firebase",
      "Chakra-UI",
      "Sass/Scss",
      "Redux",
    ],
    type: "personal",
    images: [
      {
        url: budget.auth,
        name: "auth",
        title: "Sign Up/ Login",
        description:
          "Signup or login or use the guest user credentials to acess the authenticated routes",
      },
      {
        url: budget.home,
        name: "home",
        title: "Home Page",
        description:
          "Detailed and categorical analysis of your income and expenses via charts. Manage and acces the whole CRUD functionality feature for the transactions",
      },
      {
        url: budget.account,
        name: "account",
        title: "User Account",
        description:
          "Shows the user details, account summary and gives the logout option",
      },
    ],
    coverImage: {
      url: budget.cover,
      name: "cover",
    },
    features: [
      "Firebase is used as a backend as a cloud to implement Auth and storing data",
      "All the data is stored and saved i.e. persistent",
      "Manageable transactions list.",
      "Authenticated user can access the CRUD functionality.",
      "Detailed and categorical analysis of your income and expenses via charts made possible using ChartJS",
      "Mobile Responsive UI",
    ],
    url: "https://budget-master-12.web.app/",
    githubUrl: "https://github.com/SiddharthSsb11/project-budget-master",
    logo: {
      url: budget.logo,
      name: "logo",
    },
    palette: {
      primary: "#050505",
      secondary: "#454ea1",
    },
    isLightMode: false,
  },
];

export default projects;
