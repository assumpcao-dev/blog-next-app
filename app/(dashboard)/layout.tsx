import { Navbar } from "../_components/navbar"
import { Providers } from "../_components/providers"



const DashboardLayout = ({ 
    children, 
}: {children: React.ReactNode}
) => {
    return (
        <div className="bg-white text-black dark:bg-gray-900 dark:selection:bg-gray-900 dark:text-white h-full selection:bg-gray-500">
           <Providers>
            <Navbar />
            <main className="max-w-3xl mx-auto px-4 lg:px-8 sm:px-6">
            {children}
            </main>
           </Providers>

        </div>
    )
}

export default DashboardLayout
