export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 12,
  MAX_PAGE_SIZE: 50,
} as const;

export const CURRENCY = {
  SYMBOL: "تومان",
  CODE: "IRR",
  EXCHANGE_RATE: 50000,
} as const;

export const CONTACT_INFO = {
  PHONE: "۰۲۱-۱۲۳۴۵۶۷۸",
  EMAIL: "info@torbshop.com",
  ADDRESS: "تهران، خیابان ولیعصر، پلاک ۱۲۳",
  SUPPORT_EMAIL: "support@torbshop.com",
} as const;

export const SOCIAL_MEDIA = {
  INSTAGRAM: "https://instagram.com/torbshop",
  TELEGRAM: "https://t.me/torbshop",
  WHATSAPP: "https://wa.me/989123456789",
} as const;

export const ORDER_STATUS = {
  PENDING: "pending",
  PROCESSING: "processing",
  SHIPPED: "shipped",
  DELIVERED: "delivered",
  CANCELLED: "cancelled",
} as const;

export const USER_ROLES = {
  ADMIN: "admin",
  CUSTOMER: "customer",
  MODERATOR: "moderator",
} as const;
