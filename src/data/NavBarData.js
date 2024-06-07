export const menuData = [
  { name: "Home", href: "/", currMenu: true },
  { name: "About", href: "/About", currMenu: false },
  { name: "Contact", href: "/Contact", currMenu: false },
  { name: "Support", href: "/Support", currMenu: false },
];

export const profileData = [
  {
    isLogin: true,
    body: [
      { name: "Your Profile", href: "/" },
      { name: "Settings", href: "/" },
      { name: "Logout", href: "/" },
    ],
  },
  {
    isLogin: false,
    body: [
      { name: "Login", href: "/" },
      { name: "Sign Up", href: "/" },
    ],
  },
];

export const menuProjectData = [
  {
    header: "API",
    subMenu: [
      { name: "Anime - Jikan", href: "API/Anime" },
      { name: "subDefault1", href: "subDefault1" },
    ],
  },
  {
    header: "Default1",
    subMenu: [
      { name: "subDefault2", href: "subDefault2" },
      { name: "subDefault3", href: "subDefault3" },
    ],
  },
  {
    header: "Default2",
    subMenu: [
      { name: "subDefault4", href: "subDefault4" },
      { name: "subDefault5", href: "subDefault5" },
    ],
  },
];
