import MainLayout from "@/components/layouts/Layout";

function layout({children}: {children: React.ReactNode}) {
    return ( 
        <MainLayout>
            {children}
        </MainLayout>
     );
}

export default layout;