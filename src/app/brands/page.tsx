import Brands from "@/components/templates/brands/Brands";
import { baseUrl } from "@/data/url";

async function page() {
    const res = await fetch(`${baseUrl}/brands`)
    const data = await res.json();
    
    return (
        <Brands 
          brands={data}
        />
    );
}

export default page;