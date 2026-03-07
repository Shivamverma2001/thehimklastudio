/**
 * Site-wide contact, founder, and social config from environment variables.
 * Use NEXT_PUBLIC_ prefix so values are available in both server and client.
 */

const get = (key: string, fallback = "") => (typeof process !== "undefined" ? process.env[key] : "") ?? fallback;

export const siteConfig = {
  contact: {
    address: get("NEXT_PUBLIC_CONTACT_ADDRESS", "address"),
    phone: get("NEXT_PUBLIC_CONTACT_PHONE", "phone"),
    email: get("NEXT_PUBLIC_CONTACT_EMAIL", "email"),
    city: get("NEXT_PUBLIC_CONTACT_CITY", "city"),
    region: get("NEXT_PUBLIC_CONTACT_ADDRESS_REGION", "region"),
    mapLink: get("NEXT_PUBLIC_CONTACT_MAP_LINK", "map link"),
    mapEmbedSrc: get("NEXT_PUBLIC_CONTACT_MAP_EMBED_SRC", ""),
  },
  founder: {
    name: get("NEXT_PUBLIC_FOUNDER_NAME", "name"),
    bio: get(
      "NEXT_PUBLIC_FOUNDER_BIO",
      "bio"
    ),
    vision: get(
      "NEXT_PUBLIC_FOUNDER_VISION",
      "vision"
    ),
    instagramUrl: get("NEXT_PUBLIC_FOUNDER_INSTAGRAM_URL", "instagram url"),
    facebookUrl: get("NEXT_PUBLIC_FOUNDER_FACEBOOK_URL", "facebook url"),
    youtubeUrl: get("NEXT_PUBLIC_FOUNDER_YOUTUBE_URL", "youtube url"),
    websiteUrl: get("NEXT_PUBLIC_FOUNDER_WEBSITE_URL", "website url"),
  },
  social: {
    instagramUrl: get("NEXT_PUBLIC_SOCIAL_INSTAGRAM_URL", "instagram url"),
    facebookUrl: get("NEXT_PUBLIC_SOCIAL_FACEBOOK_URL", "facebook url"),
    youtubeUrl: get("NEXT_PUBLIC_SOCIAL_YOUTUBE_URL", "youtube url"),
  },
} as const;
