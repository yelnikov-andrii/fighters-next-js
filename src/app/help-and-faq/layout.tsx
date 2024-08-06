import SecondLayout from "@/components/layouts/SecondLayout";

function layout({children}: {children: React.ReactNode}) {
    return ( 
        <SecondLayout>
            {children}
        </SecondLayout>
     );
}

export default layout;