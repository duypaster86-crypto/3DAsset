import React from "react";
import { Layers, Sparkles, Box, Check, ArrowRight } from "lucide-react";
import { SystemStatusCard } from "../components/SystemStatusCard.js";

export const SystemStatusPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
      {/* Top Navbar */}
      <header className="border-b border-border/40 backdrop-blur-md bg-slate-950/80 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-500 flex items-center justify-center shadow-lg shadow-purple-500/25">
              <Box className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="font-bold tracking-tight text-white text-lg">
                3D Asset Store
              </span>
              <span className="text-[10px] uppercase font-semibold text-purple-400 ml-2 px-1.5 py-0.5 rounded bg-purple-500/10 border border-purple-500/20">
                Monorepo
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-xs text-muted-foreground hidden sm:inline-block">
              Profile B • Tailwind & shadcn
            </span>
            <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-12 flex flex-col gap-10">
        {/* Hero Section */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-purple-500/10 text-purple-300 border border-purple-500/20 mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            Lát cắt dọc số 0 (Slice-0: Walking Skeleton)
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Nền tảng thương mại điện tử{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400">
              3D Asset & Character
            </span>
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            Hệ thống Monorepo kết nối thông suốt từ giao diện người dùng, backend Fastify tới hệ quản trị cơ sở dữ liệu PostgreSQL.
          </p>
        </div>

        {/* Live System Status Card */}
        <SystemStatusCard />

        {/* Verification Checklist */}
        <div className="max-w-4xl mx-auto w-full glass-panel rounded-2xl p-6 sm:p-8 mt-2">
          <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-4">
            <Layers className="w-5 h-5 text-indigo-400" />
            Tiêu chí nghiệm thu Slice 0 (Definition of Done)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-secondary/30 border border-border/40">
              <div className="p-1 rounded-md bg-emerald-500/10 text-emerald-400 mt-0.5">
                <Check className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">Monorepo Workspace</h4>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Quản lý tập trung `apps/web`, `apps/api`, `packages/shared`, `packages/api-client` qua pnpm & Turborepo.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-secondary/30 border border-border/40">
              <div className="p-1 rounded-md bg-emerald-500/10 text-emerald-400 mt-0.5">
                <Check className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">OpenAPI Contract & Shared Types</h4>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Đặc tả `openapi.yaml` và Zod schemas được chia sẻ giữa frontend và backend API.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-secondary/30 border border-border/40">
              <div className="p-1 rounded-md bg-emerald-500/10 text-emerald-400 mt-0.5">
                <Check className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">Backend Fastify & Health Probe</h4>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Endpoints `/healthz` (liveness) và `/readyz` (readiness) kiểm tra trực tiếp trạng thái tiến trình và database.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-secondary/30 border border-border/40">
              <div className="p-1 rounded-md bg-emerald-500/10 text-emerald-400 mt-0.5">
                <Check className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">PostgreSQL & Migration chuẩn bị sẵn</h4>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Cấu hình `compose.dev.yml` và migration SQL đầu tiên cho hệ thống.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-border/40 flex items-center justify-between text-xs text-muted-foreground">
            <span>Sẵn sàng cho Slice 1: Đăng nhập & phân quyền chủ shop / khách hàng</span>
            <div className="inline-flex items-center gap-1 text-purple-400 font-medium">
              <span>Tiếp theo: slice-1</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 py-6 text-center text-xs text-muted-foreground">
        3D Asset Store • Single-seller Storefront • Lát cắt dọc kiến trúc
      </footer>
    </div>
  );
};
