"use client";

import React from "react";

interface ActivityItem {
  id: string;
  type: string;
  description: string;
  timestamp: string;
}

interface AdminDashboardProps {
  data: {
    stats: {
      users: number;
      posts: number;
      comments: number;
    };
    recentActivity: ActivityItem[];
  };
}

export function AdminDashboard({ data }: AdminDashboardProps) {
  return (
    <div className="p-6 bg-slate-900 rounded-xl border border-white/10">
      <h1 className="text-2xl font-bold text-white mb-6">Admin Dashboard</h1>
      
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-slate-800 p-4 rounded-lg border border-white/10">
          <p className="text-slate-400 text-sm">Users</p>
          <p className="text-2xl font-bold text-white">{data.stats.users}</p>
        </div>
        <div className="bg-slate-800 p-4 rounded-lg border border-white/10">
          <p className="text-slate-400 text-sm">Posts</p>
          <p className="text-2xl font-bold text-white">{data.stats.posts}</p>
        </div>
        <div className="bg-slate-800 p-4 rounded-lg border border-white/10">
          <p className="text-slate-400 text-sm">Comments</p>
          <p className="text-2xl font-bold text-white">{data.stats.comments}</p>
        </div>
      </div>

      <div className="bg-slate-800 p-4 rounded-lg border border-white/10">
        <h2 className="text-lg font-semibold text-white mb-3">Recent Activity</h2>
        {data.recentActivity.length > 0 ? (
          <ul className="space-y-2">
            {data.recentActivity.map((activity) => (
              <li key={activity.id} className="text-slate-400 text-sm">
                {activity.description}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-slate-500 text-sm">No recent activity</p>
        )}
      </div>
    </div>
  );
}
