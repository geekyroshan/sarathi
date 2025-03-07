
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Cell,
} from "recharts";
import { ThumbsUp, ThumbsDown } from "lucide-react";

// Replace with actual data for charts
const conversionData = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 500 },
  { name: "Apr", value: 280 },
  { name: "May", value: 590 },
  { name: "Jun", value: 690 },
  { name: "Jul", value: 490 },
];

const channelData = [
  { name: "Chat", value: 40 },
  { name: "Email", value: 30 },
  { name: "Voice", value: 20 },
  { name: "Social", value: 10 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const sentimentData = [
  { name: "Positive", value: 65, color: "#10B981" },
  { name: "Neutral", value: 25, color: "#6B7280" },
  { name: "Negative", value: 10, color: "#EF4444" },
];

const recentTickets = [
  {
    id: "T-1001",
    customer: "John Doe",
    subject: "Login issue with mobile app",
    status: "Open",
    priority: "High",
    created: "2 hours ago",
  },
  {
    id: "T-1002",
    customer: "Jane Smith",
    subject: "Billing discrepancy in last invoice",
    status: "In Progress",
    priority: "Medium",
    created: "5 hours ago",
  },
  {
    id: "T-1003",
    customer: "Robert Johnson",
    subject: "Feature request: Dark mode",
    status: "Open",
    priority: "Low",
    created: "1 day ago",
  },
  {
    id: "T-1004",
    customer: "Emily Williams",
    subject: "Cannot reset password",
    status: "Closed",
    priority: "High",
    created: "2 days ago",
  },
];

const performanceData = [
  {
    agent: "Alex Thompson",
    avatar: "/assets/avatar-1.png",
    position: "Senior Agent",
    tickets: 145,
    resolved: 130,
    satisfaction: 4.8,
  },
  {
    agent: "Sarah Parker",
    avatar: "/assets/avatar-2.png",
    position: "Support Specialist",
    tickets: 127,
    resolved: 119,
    satisfaction: 4.9,
  },
  {
    agent: "Michael Rodriguez",
    avatar: "/assets/avatar-3.png",
    position: "Technical Support",
    tickets: 98,
    resolved: 85,
    satisfaction: 4.5,
  },
  {
    agent: "Lisa Chen",
    avatar: "/assets/avatar-4.png",
    position: "Customer Success",
    tickets: 112,
    resolved: 104,
    satisfaction: 4.7,
  },
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="container py-10 max-w-7xl">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <div className="flex space-x-2">
          <select className="bg-white border border-gray-300 rounded-md px-3 py-2 text-sm">
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 90 days</option>
            <option>This year</option>
          </select>
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-8" onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4 lg:w-auto">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="tickets">Tickets</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Top Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <Card className="p-5 shadow-md hover:shadow-lg transition-shadow border-l-4 border-primary">
              <h3 className="text-sm font-medium text-gray-500">Conversations</h3>
              <p className="text-3xl font-bold mt-1">2,856</p>
              <p className="text-sm text-green-600 mt-2 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 10l7-7m0 0l7 7m-7-7v18"
                  />
                </svg>
                8.2% from last month
              </p>
            </Card>
            <Card className="p-5 shadow-md hover:shadow-lg transition-shadow border-l-4 border-blue-500">
              <h3 className="text-sm font-medium text-gray-500">Resolution Rate</h3>
              <p className="text-3xl font-bold mt-1">92.4%</p>
              <p className="text-sm text-green-600 mt-2 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 10l7-7m0 0l7 7m-7-7v18"
                  />
                </svg>
                2.1% from last month
              </p>
            </Card>
            <Card className="p-5 shadow-md hover:shadow-lg transition-shadow border-l-4 border-yellow-500">
              <h3 className="text-sm font-medium text-gray-500">Avg. Response Time</h3>
              <p className="text-3xl font-bold mt-1">4m 35s</p>
              <p className="text-sm text-red-600 mt-2 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
                0.5% from last month
              </p>
            </Card>
            <Card className="p-5 shadow-md hover:shadow-lg transition-shadow border-l-4 border-green-500">
              <h3 className="text-sm font-medium text-gray-500">CSAT Score</h3>
              <p className="text-3xl font-bold mt-1">4.8/5</p>
              <p className="text-sm text-green-600 mt-2 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 10l7-7m0 0l7 7m-7-7v18"
                  />
                </svg>
                0.3% from last month
              </p>
            </Card>
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="p-5 shadow-md">
              <h3 className="text-lg font-medium mb-4">Conversation Volume</h3>
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={conversionData}
                    margin={{
                      top: 10,
                      right: 30,
                      left: 0,
                      bottom: 0,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#8884d8"
                      strokeWidth={2}
                      activeDot={{ r: 8 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </Card>

            <Card className="p-5 shadow-md">
              <h3 className="text-lg font-medium mb-4">Support Channels</h3>
              <div className="h-72 flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={channelData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) =>
                        `${name}: ${(percent * 100).toFixed(0)}%`
                      }
                    >
                      {channelData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </div>

          {/* Sentiment and Recent Tickets */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="p-5 shadow-md lg:col-span-1">
              <h3 className="text-lg font-medium mb-4">Customer Sentiment</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={sentimentData}
                    layout="vertical"
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                    <XAxis type="number" />
                    <YAxis type="category" dataKey="name" />
                    <Tooltip />
                    <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                      {sentimentData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="flex justify-center mt-4">
                <div className="flex items-center mx-2">
                  <span className="h-3 w-3 rounded-full bg-green-500 mr-1"></span>
                  <span className="text-xs">Positive</span>
                </div>
                <div className="flex items-center mx-2">
                  <span className="h-3 w-3 rounded-full bg-gray-500 mr-1"></span>
                  <span className="text-xs">Neutral</span>
                </div>
                <div className="flex items-center mx-2">
                  <span className="h-3 w-3 rounded-full bg-red-500 mr-1"></span>
                  <span className="text-xs">Negative</span>
                </div>
              </div>
            </Card>

            <Card className="p-5 shadow-md lg:col-span-2">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium">Recent Tickets</h3>
                <button className="text-primary text-sm hover:underline">
                  View all tickets
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        ID
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Customer
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Subject
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Created
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {recentTickets.map((ticket) => (
                      <tr key={ticket.id} className="hover:bg-gray-50">
                        <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                          {ticket.id}
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                          {ticket.customer}
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                          {ticket.subject}
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm">
                          <span
                            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              ticket.status === "Open"
                                ? "bg-yellow-100 text-yellow-800"
                                : ticket.status === "In Progress"
                                ? "bg-blue-100 text-blue-800"
                                : "bg-green-100 text-green-800"
                            }`}
                          >
                            {ticket.status}
                          </span>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                          {ticket.created}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>

          {/* Feedback Section */}
          <div className="mt-8 bg-primary-purple/10 rounded-lg p-6 shadow-inner">
            <h3 className="text-lg font-medium mb-2">Help us improve Sarathi!</h3>
            <p className="text-sm text-gray-600 mb-4">
              We're constantly working to make Sarathi better. How has your experience been?
            </p>
            <div className="flex space-x-4">
              <button className="flex items-center justify-center space-x-2 px-4 py-2 bg-white rounded-full shadow-sm hover:bg-gray-50 transition-colors">
                <ThumbsUp size={18} className="text-green-600" />
                <span>Loving it!</span>
              </button>
              <button className="flex items-center justify-center space-x-2 px-4 py-2 bg-white rounded-full shadow-sm hover:bg-gray-50 transition-colors">
                <ThumbsDown size={18} className="text-red-600" />
                <span>Needs improvement</span>
              </button>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="tickets" className="space-y-6">
          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4">Ticket Management</h2>
            <p className="text-muted-foreground">
              This section allows you to manage all customer tickets. You can view, assign, and
              update tickets from here.
            </p>
          </Card>
        </TabsContent>

        <TabsContent value="performance" className="space-y-6">
          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4">Agent Performance</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Agent
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Tickets Handled
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Resolved
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Satisfaction
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {performanceData.map((data, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="h-10 w-10 flex-shrink-0">
                            <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                              <span className="text-sm font-medium">
                                {data.agent.charAt(0)}
                              </span>
                            </div>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {data.agent}
                            </div>
                            <div className="text-sm text-gray-500">{data.position}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{data.tickets}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {data.resolved}{" "}
                          <span className="text-green-600">
                            ({Math.round((data.resolved / data.tickets) * 100)}%)
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="text-sm text-gray-900 mr-2">
                            {data.satisfaction}
                          </div>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <svg
                                key={i}
                                className={`h-4 w-4 ${
                                  i < Math.floor(data.satisfaction)
                                    ? "text-yellow-400"
                                    : "text-gray-300"
                                }`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-6">
          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4">Dashboard Settings</h2>
            <p className="text-muted-foreground">
              Customize your dashboard experience. Change appearance, notification settings, and
              more.
            </p>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
