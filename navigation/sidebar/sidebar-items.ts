import {
  Banknote,
  Calendar,
  ChartBar,
  CheckSquare,
  Fingerprint,
  FolderOpen,
  Forklift,
  Gauge,
  GraduationCap,
  HeartPulse,
  Kanban,
  LayoutDashboard,
  ListTodo,
  Lock,
  type LucideIcon,
  Mail,
  MessageSquare,
  ReceiptText,
  Server,
  ShoppingBag,
  SquareArrowUpRight,
  Store,
  UserRound,
  Users,
} from "lucide-react";

export type NavBadge = "new" | "soon";

export interface NavSubItem {
  id: string;
  title: string;
  url: string;
  icon?: LucideIcon;
  badge?: NavBadge;
  disabled?: boolean;
  newTab?: boolean;
}

interface NavItemBase {
  id: string;
  title: string;
  icon?: LucideIcon;
  badge?: NavBadge;
  disabled?: boolean;
  newTab?: boolean;
}

export interface NavMainLinkItem extends NavItemBase {
  url: string;
  subItems?: never;
}

export interface NavMainParentItem extends NavItemBase {
  subItems: NavSubItem[];
}

export type NavMainItem = NavMainLinkItem | NavMainParentItem;

export interface NavGroup {
  id: number;
  label?: string;
  items: NavMainItem[];
}

export const sidebarItems: NavGroup[] = [
  {
    id: 1,
    label: "Dashboards",
    items: [
      {
        id: "ecommerce",
        title: "E-commerce",
        url: "/admin/dashboard/ecommerce",
        icon: ShoppingBag,
      },
      {
        id: "storefront",
        title: "View Storefront",
        url: "/",
        icon: Store,
        newTab: true,
      },
      {
        id: "default",
        title: "Default",
        url: "/admin/dashboard/default",
        icon: LayoutDashboard,
      },
      {
        id: "crm",
        title: "CRM",
        url: "/admin/dashboard/crm",
        icon: ChartBar,
      },
      {
        id: "finance",
        title: "Finance",
        url: "/admin/dashboard/finance",
        icon: Banknote,
      },
      {
        id: "analytics",
        title: "Analytics",
        url: "/admin/dashboard/analytics",
        icon: Gauge,
      },
      {
        id: "productivity",
        title: "Productivity",
        url: "/admin/dashboard/productivity",
        icon: ListTodo,
      },
      {
        id: "academy",
        title: "Academy",
        url: "/admin/dashboard/academy",
        icon: GraduationCap,
      },
      {
        id: "logistics",
        title: "Logistics",
        url: "/admin/dashboard/logistics",
        icon: Forklift,
      },
      {
        id: "infrastructure",
        title: "Infrastructure",
        url: "/admin/dashboard/infrastructure",
        icon: Server,
      },
      {
        id: "file-manager",
        title: "File Manager",
        url: "/admin/dashboard/file-manager",
        icon: FolderOpen,
      },
      {
        id: "patient-monitoring",
        title: "Patient Monitoring",
        url: "/admin/dashboard/patient-monitoring",
        icon: HeartPulse,
      },
    ],
  },
  {
    id: 2,
    label: "Pages",
    items: [
      {
        id: "email",
        title: "Email",
        url: "/admin/dashboard/mail",
        icon: Mail,
      },
      {
        id: "chat",
        title: "Chat",
        url: "/admin/dashboard/chat",
        icon: MessageSquare,
      },
      {
        id: "calendar",
        title: "Calendar",
        url: "/admin/dashboard/calendar",
        icon: Calendar,
      },
      {
        id: "kanban",
        title: "Kanban",
        url: "/admin/dashboard/kanban",
        icon: Kanban,
      },
      {
        id: "tasks",
        title: "Tasks",
        url: "/admin/dashboard/tasks",
        icon: CheckSquare,
      },
      {
        id: "invoice",
        title: "Invoice",
        url: "/admin/dashboard/invoice",
        icon: ReceiptText,
      },
      {
        id: "profile",
        title: "Profile",
        url: "/admin/dashboard/profile",
        icon: UserRound,
      },
      {
        id: "users",
        title: "Users",
        url: "/admin/dashboard/users",
        icon: Users,
      },
      {
        id: "roles",
        title: "Roles",
        url: "/admin/dashboard/roles",
        icon: Lock,
      },
      {
        id: "authentication",
        title: "Authentication",
        icon: Fingerprint,
        subItems: [
          {
            id: "auth-login-v1",
            title: "Login v1",
            url: "/admin/auth/v1/login",
            newTab: true,
          },
          {
            id: "auth-login-v2",
            title: "Login v2",
            url: "/admin/auth/v2/login",
            newTab: true,
          },
          {
            id: "auth-register-v1",
            title: "Register v1",
            url: "/admin/auth/v1/register",
            newTab: true,
          },
          {
            id: "auth-register-v2",
            title: "Register v2",
            url: "/admin/auth/v2/register",
            newTab: true,
          },
        ],
      },
    ],
  },
  {
    id: 3,
    label: "Legacy",
    items: [
      {
        id: "legacy-dashboards",
        title: "Dashboards",
        subItems: [
          {
            id: "legacy-default",
            title: "Default V1",
            url: "/admin/dashboard/default-v1",
          },
          { id: "legacy-crm", title: "CRM V1", url: "/admin/dashboard/crm-v1" },
          {
            id: "legacy-finance",
            title: "Finance V1",
            url: "/admin/dashboard/finance-v1",
          },
          {
            id: "legacy-analytics",
            title: "Analytics V1",
            url: "/admin/dashboard/analytics-v1",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    label: "Misc",
    items: [
      {
        id: "others",
        title: "Others",
        url: "/admin/dashboard/coming-soon",
        icon: SquareArrowUpRight,
        badge: "soon",
        disabled: true,
      },
    ],
  },
];
