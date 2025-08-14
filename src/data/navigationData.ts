import type { NavigationType } from "@/types";

export const navigationsData: NavigationType[] = [
  {
    title: "Dashboards",
    items: [
      {
        title: "Analytics",
        href: "/dashboards/analytics",
        iconName: "ChartPie",
      },
      {
        title: "CRM",
        href: "/dashboards/crm",
        iconName: "ChartBar",
      },
      {
        title: "eCommerce",
        href: "/dashboards/ecommerce",
        iconName: "ShoppingCart",
      },
    ],
  },
  {
    title: "Pages",
    items: [
      {
        title: "Landing",
        href: "/pages/landing",
        label: "New",
        iconName: "LayoutTemplate",
      },
      {
        title: "Pricing",
        href: "/pages/pricing",
        iconName: "CircleDollarSign",
      },
      {
        title: "Payment",
        href: "/pages/payment",
        iconName: "CreditCard",
      },
      {
        title: "Help Center",
        href: "#",
        label: "Soon",
        iconName: "Headset",
      },
      {
        title: "Settings",
        href: "/pages/account/settings",
        iconName: "UserCog",
      },
      {
        title: "Profile",
        href: "/pages/account/profile",
        iconName: "User",
      },
      {
        title: "Fallback",
        iconName: "Replace",
        items: [
          {
            title: "Coming Soon",
            href: "/pages/coming-soon",
          },
          {
            title: "Not Found 404",
            href: "/pages/not-found-404",
          },
          {
            title: "Unauthorized 401",
            href: "/pages/unauthorized-401",
          },
          {
            title: "Maintenance",
            href: "/pages/maintenance",
          },
        ],
      },
      {
        title: "Authentication",
        iconName: "LogIn",
        items: [
          {
            title: "Forgot Password",
            href: "/forgot-password",
          },
          {
            title: "New Password",
            href: "/new-password",
          },
          {
            title: "Verify Email",
            href: "/verify-email",
          },
          {
            title: "Register",
            href: "/register",
          },
          {
            title: "Sign In",
            href: "/sign-in",
          },
        ],
      },
      {
        title: "Products",
        iconName: "Package",
        items: [
          {
            title: "List",
            href: "/",
            label: "Soon",
          },
          {
            title: "Add",
            href: "/",
            label: "Soon",
          },
          {
            title: "Category",
            href: "/",
            label: "Soon",
          },
        ],
      },
      {
        title: "Orders",
        iconName: "ShoppingBasket",
        items: [
          {
            title: "List",
            href: "/",
            label: "Soon",
          },
          {
            title: "Details",
            href: "/",
            label: "Soon",
          },
        ],
      },
      {
        title: "Customers",
        iconName: "Users",
        items: [
          {
            title: "List",
            href: "/",
            label: "Soon",
          },
          {
            title: "Details",
            href: "/",
            label: "Soon",
          },
        ],
      },
    ],
  },
  {
    title: "Apps",
    items: [
      {
        title: "Email",
        href: "/apps/email",
        iconName: "AtSign",
      },
      {
        title: "Chat",
        href: "/apps/chat",
        iconName: "MessageCircle",
      },
      {
        title: "Calendar",
        href: "/apps/calendar",
        iconName: "Calendar",
      },
      {
        title: "Kanban",
        href: "/apps/kanban",
        iconName: "Grid2x2",
      },
      {
        title: "Todo",
        href: "#",
        label: "Soon",
        iconName: "ListTodo",
      },
    ],
  },
];
