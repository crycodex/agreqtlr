import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import compressor from "astro-compressor";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://agroindustriasequatorial.com/",
  image: {
    domains: ["images.unsplash.com"],
  },
  prefetch: true,
  integrations: [
    tailwind(),
    sitemap({
      i18n: {
        defaultLocale: "es", // Todas las URLs que no contengan `fr` después de `https://agroindustriasequatorial.com/` serán tratadas como idioma predeterminado, es decir, `es`
        locales: {
          es: "es", // El valor `defaultLocale` debe estar presente en las claves `locales`
          en: "en",
        },
      },
    }),
    starlight({
      title: "Agroindustrias Equatorial",
      defaultLocale: "es",
      // https://github.com/withastro/starlight/blob/main/packages/starlight/CHANGELOG.md
      // Si no se proporcionan configuraciones i18n de Astro y Starlight, se utiliza el idioma predeterminado incorporado en Starlight y se genera/utiliza una configuración i18n de Astro coincidente.
      // Si solo se proporciona una configuración i18n de Starlight, se genera/utiliza una configuración i18n de Astro equivalente.
      // Si solo se proporciona una configuración i18n de Astro, la configuración i18n de Starlight se actualiza para que coincida.
      // Si se proporcionan configuraciones i18n tanto de Astro como de Starlight, se genera un error.
      locales: {
        es: {
          label: "Español",
          lang: "es",
        },
        en: { label: "English", lang: "en" },
        de: { label: "Deutsch", lang: "de" },
        fa: { label: "Persian", lang: "fa", dir: "rtl" },
        fr: { label: "Français", lang: "fr" },
        ja: { label: "日本語", lang: "ja" },
        "zh-cn": { label: "简体中文", lang: "zh-CN" },
      },
      // https://starlight.astro.build/guides/sidebar/
      sidebar: [
        {
          label: "Guías de Inicio Rápido",
          translations: {
            en: "Quick Start Guides",
            de: "Schnellstartanleitungen",
            fa: "راهنمای شروع سریع",
            fr: "Guides de Démarrage Rapide",
            ja: "クイックスタートガイド",
            "zh-cn": "快速入门指南",
          },
          autogenerate: { directory: "guides" },
        },
        {
          label: "Herramientas y Equipos",
          items: [
            { label: "Guías de Herramientas", link: "tools/tool-guides/" },
            { label: "Cuidado del Equipo", link: "tools/equipment-care/" },
          ],
        },
        {
          label: "Servicios de Construcción",
          autogenerate: { directory: "construction" },
        },
        {
          label: "Temas Avanzados",
          autogenerate: { directory: "advanced" },
        },
      ],
      social: {
        github: "https://github.com/mearashadowfax/ScrewFast",
      },
      disable404Route: true,
      customCss: ["./src/assets/styles/starlight.css"],
      favicon: "/favicon.ico",
      components: {
        SiteTitle: "./src/components/ui/starlight/SiteTitle.astro",
        Head: "./src/components/ui/starlight/Head.astro",
        MobileMenuFooter: "./src/components/ui/starlight/MobileMenuFooter.astro",
        ThemeSelect: "./src/components/ui/starlight/ThemeSelect.astro",
      },
      head: [
        {
          tag: "meta",
          attrs: {
            property: "og:image",
            content: "https://agroindustriasequatorial.com" + "/social.webp",
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "twitter:image",
            content: "https://agroindustriasequatorial.com" + "/social.webp",
          },
        },
      ],
    }),
    compressor({
      gzip: false,
      brotli: true,
    }),
  ],
  experimental: {
    clientPrerender: true,
    directRenderScript: true,
  },
});
