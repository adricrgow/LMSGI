
import { AppSidebar } from "@/components/admin/ui/app-sidebar"
import { ChartAreaInteractive } from "@/components/admin/ui/chart-area-interactive"
import { DataTable } from "@/components/admin/ui/data-table"
import { SectionCards } from "@/components/admin/ui/section-cards"
import { SiteHeader } from "@/components/admin/ui/site-header"

import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"

import data from "@/model/data/data.json"
import { Outlet } from "react-router-dom"

export default function BackendLayout() {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <Outlet />
      </SidebarInset>
    </SidebarProvider>
  )
}
