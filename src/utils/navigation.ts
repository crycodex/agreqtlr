// An array of links for navigation bar
const navBarLinks = [
  { name: "Inicio", url: "/" },
  { name: "Productos", url: "/products" },
  { name: "Servicios", url: "/services" },
  { name: "Blog", url: "/blog" },
  { name: "Contacto", url: "/contact" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "Ecosistema",
    links: [
      { name: "Documentación", url: "/welcome-to-docs/" },
      { name: "Herramientas & Equipo", url: "/products" },
      { name: "Servicios", url: "/services" },
    ],
  },
  {
    section: "Empresa",
    links: [
      { name: "Acerca de nosotros", url: "#" },
      { name: "Blog", url: "/blog" },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  facebook: "https://www.facebook.com/",
  instagram: 'https://www.instagram.com/vinosequatorial/', 
  tiktok: 'https://www.tiktok.com/@vinosequatorial'
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};