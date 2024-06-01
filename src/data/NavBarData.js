export const menuData = [
  { name: "Dashboard", href: "/", currMenu: true },
  { name: "About", href: "/About", currMenu: false },
  { name: "Contact", href: "/Contact", currMenu: false },
  { name: "Support", href: "/Support", currMenu: false },
];

export const profileData = [
  { name: "Your Profile", href: "#", currProject: true },
  { name: "Settings", href: "#", currProject: false },
  { name: "Sign out", href: "#", currProject: false },
];

export const menuProjectData = [
  {
    header: "API",
    subMenu: [
      { name: "Anime - Jikan", href: "API/Anime" },
      { name: "subDefault", href: "subDefault" },
    ],

    header: "Default",
    subMenu: [
      { name: "subDefault", href: "subDefault" },
      { name: "subDefault", href: "subDefault" },
    ],
  },
];
