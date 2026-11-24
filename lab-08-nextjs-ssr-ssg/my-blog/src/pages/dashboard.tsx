import type { GetServerSideProps } from "next";
import { getCurrentUser, getUserAnalytics, getUserNotifications } from "@/lib/api";
import type { Notification, User } from "@/types";

interface DashboardProps {
  user: User;
  notifications: Notification[];
  analytics: {
    pageViews: number;
    sessions: number;
    bounceRate: number;
  };
  currentTime: string;
}

export default function Dashboard({
  user,
  notifications,
  analytics,
  currentTime,
}: DashboardProps) {
  const unreadCount = notifications.filter((notification) => !notification.read).length;

  return (
    <main>
      <h1>Dashboard (SSR)</h1>
      <section className="card">
        <h2>Welcome, {user.name}</h2>
        <p>Role: {user.role}</p>
        <p>Email: {user.email}</p>
      </section>

      <section className="card">
        <h2>Analytics</h2>
        <p>Page Views: {analytics.pageViews.toLocaleString()}</p>
        <p>Sessions: {analytics.sessions.toLocaleString()}</p>
        <p>Bounce Rate: {analytics.bounceRate.toFixed(1)}%</p>
      </section>

      <section className="card">
        <h2>Notifications ({unreadCount} unread)</h2>
        <ul>
          {notifications.map((notification) => (
            <li key={notification.id}>
              [{notification.type.toUpperCase()}] {notification.message}
            </li>
          ))}
        </ul>
      </section>

      <p>Last updated at request time: {currentTime}</p>
    </main>
  );
}

export const getServerSideProps: GetServerSideProps<DashboardProps> = async () => {
  const user = getCurrentUser();
  const [notifications, analytics] = await Promise.all([
    getUserNotifications(user.id),
    getUserAnalytics(user.id),
  ]);

  return {
    props: {
      user,
      notifications,
      analytics,
      currentTime: new Date().toISOString(),
    },
  };
};
