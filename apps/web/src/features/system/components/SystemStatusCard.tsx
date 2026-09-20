import React from "react";
import { CheckCircle2, AlertTriangle, XCircle, Clock, Database, Server, Laptop, RefreshCw } from "lucide-react";
import { useSystemHealth, useSystemReadiness } from "../api/useSystemStatus.js";

export const SystemStatusCard: React.FC = () => {
  const healthQuery = useSystemHealth();
  const readinessQuery = useSystemReadiness();

  const isRefreshing = healthQuery.isFetching || readinessQuery.isFetching;

  const handleRefresh = () => {
    healthQuery.refetch();
    readinessQuery.refetch();
  };

  return (
    <div className="w-full max-w-4xl mx-auto glass-panel rounded-2xl p-6 sm:p-8 glow-purple shadow-2xl relative overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-border/60">
        <div>
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-semibold tracking-wider text-primary uppercase">
              Slice 0 • Walking Skeleton
            </span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-white mt-1">
            Kiểm tra trạng thái kết nối hệ thống
          </h2>
          <p className="text-sm text-muted-foreground mt-0.5">
            Xác minh luồng xuyên suốt: Web Storefront → Fastify API → PostgreSQL Database
          </p>
        </div>

        <button
          id="btn-refresh-status"
          onClick={handleRefresh}
          disabled={isRefreshing}
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-primary hover:bg-primary/90 active:scale-95 rounded-xl transition-all duration-200 disabled:opacity-50 cursor-pointer shadow-lg shadow-primary/25"
        >
          <RefreshCw className={`w-4 h-4 ${isRefreshing ? "animate-spin" : ""}`} />
          <span>Làm mới trạng thái</span>
        </button>
      </div>

      {/* Nodes visual flow */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        {/* Node 1: Web Frontend */}
        <div className="p-5 rounded-xl bg-secondary/40 border border-border/60 flex flex-col justify-between hover:border-primary/50 transition-colors">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2.5 rounded-lg bg-indigo-500/10 text-indigo-400">
              <Laptop className="w-6 h-6" />
            </div>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Sẵn sàng
            </span>
          </div>
          <div>
            <h3 className="font-semibold text-white">Frontend Web</h3>
            <p className="text-xs text-muted-foreground mt-1">
              React 19 • Vite • Tailwind • shadcn/ui
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-border/40 text-xs text-slate-400 flex items-center justify-between">
            <span>Client State</span>
            <span className="text-emerald-400 font-medium">Hoạt động bình thường</span>
          </div>
        </div>

        {/* Node 2: Backend API */}
        <div className="p-5 rounded-xl bg-secondary/40 border border-border/60 flex flex-col justify-between hover:border-primary/50 transition-colors">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2.5 rounded-lg bg-purple-500/10 text-purple-400">
              <Server className="w-6 h-6" />
            </div>
            {healthQuery.isSuccess ? (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Hoạt động
              </span>
            ) : healthQuery.isLoading ? (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20">
                <Clock className="w-3.5 h-3.5 animate-spin" />
                Đang kết nối...
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-rose-500/10 text-rose-400 border border-rose-500/20">
                <XCircle className="w-3.5 h-3.5" />
                Không phản hồi
              </span>
            )}
          </div>
          <div>
            <h3 className="font-semibold text-white">Backend Fastify API</h3>
            <p className="text-xs text-muted-foreground mt-1">
              Node.js 24 • Fastify 5 • Zod
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-border/40 text-xs text-slate-400 flex items-center justify-between">
            <span>Uptime:</span>
            <span className="font-mono text-slate-200">
              {healthQuery.data ? `${healthQuery.data.uptime}s` : "—"}
            </span>
          </div>
        </div>

        {/* Node 3: PostgreSQL Database */}
        <div className="p-5 rounded-xl bg-secondary/40 border border-border/60 flex flex-col justify-between hover:border-primary/50 transition-colors">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400">
              <Database className="w-6 h-6" />
            </div>
            {readinessQuery.data?.database.connected ? (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Đã kết nối
              </span>
            ) : readinessQuery.isLoading ? (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20">
                <Clock className="w-3.5 h-3.5 animate-spin" />
                Đang ping...
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20">
                <AlertTriangle className="w-3.5 h-3.5" />
                Chờ Docker PG
              </span>
            )}
          </div>
          <div>
            <h3 className="font-semibold text-white">PostgreSQL 18</h3>
            <p className="text-xs text-muted-foreground mt-1">
              Kysely ORM • dbmate migrations
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-border/40 text-xs text-slate-400 flex items-center justify-between">
            <span>Độ trễ ping:</span>
            <span className="font-mono text-slate-200">
              {readinessQuery.data?.database.latencyMs !== undefined
                ? `${readinessQuery.data.database.latencyMs}ms`
                : "—"}
            </span>
          </div>
        </div>
      </div>

      {/* Raw Response Panel */}
      <div className="mt-6 p-4 rounded-xl bg-black/40 border border-border/60 text-xs font-mono">
        <div className="flex items-center justify-between text-muted-foreground mb-2">
          <span>Dữ liệu phản hồi thời gian thực từ API:</span>
          <span>
            {healthQuery.data?.timestamp ? new Date(healthQuery.data.timestamp).toLocaleTimeString() : "Đang chờ"}
          </span>
        </div>
        <div className="text-slate-300 overflow-x-auto whitespace-pre">
          {JSON.stringify(
            {
              apiHealth: healthQuery.data || (healthQuery.isError ? "Error connecting" : "Loading..."),
              readiness: readinessQuery.data || (readinessQuery.isError ? "Error connecting" : "Loading..."),
            },
            null,
            2
          )}
        </div>
      </div>
    </div>
  );
};
