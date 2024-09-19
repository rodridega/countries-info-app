import { ReactNode } from "react"

export const MainLayout = ({ children }: { children: ReactNode }) => {
    return (
        <main className="container mx-auto p-4">
            {children}
        </main>
    )
}
