"use client"

import { ThemeProvider } from 'next-themes'
import { ReactNode } from "react";


export const Providers = ({
    children,
}: {children: React.ReactNode} ) => {
    return <ThemeProvider attribute='class'>{children}</ThemeProvider>
}