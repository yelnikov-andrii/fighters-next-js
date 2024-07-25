import React from "react";
import { Skeleton } from "@mui/material";

function SubCategoriesLoading() {
    return (
        <>
            <div className="flex flex-col gap-2">
                <Skeleton variant="rectangular" width={100} height={24} className="w-full"/>
                <Skeleton variant="rectangular" width={100} height={24} className="w-full"/>
                <Skeleton variant="rectangular" width={100} height={24} className="w-full"/>
                <Skeleton variant="rectangular" width={100} height={24} className="w-full"/>
                <Skeleton variant="rectangular" width={100} height={24} className="w-full"/>
            </div>

            <div className="flex flex-col gap-2">
                <Skeleton variant="rectangular" width={100} height={24} />
                <Skeleton variant="rectangular" width={100} height={24} className="w-full"/>
                <Skeleton variant="rectangular" width={100} height={24} className="w-full"/>
                <Skeleton variant="rectangular" width={100} height={24} className="w-full"/>
                <Skeleton variant="rectangular" width={100} height={24} className="w-full"/>
            </div>

            <div className="flex flex-col gap-2">
                <Skeleton variant="rectangular" width={100} height={24} />
                <Skeleton variant="rectangular" width={100} height={24} className="w-full"/>
                <Skeleton variant="rectangular" width={100} height={24} className="w-full"/>
                <Skeleton variant="rectangular" width={100} height={24} className="w-full"/>
                <Skeleton variant="rectangular" width={100} height={24} className="w-full"/>
            </div>

            <div className="flex flex-col gap-2">
                <Skeleton variant="rectangular" width={100} height={24} />
                <Skeleton variant="rectangular" width={100} height={24} className="w-full"/>
                <Skeleton variant="rectangular" width={100} height={24} className="w-full"/>
                <Skeleton variant="rectangular" width={100} height={24} className="w-full"/>
                <Skeleton variant="rectangular" width={100} height={24} className="w-full"/>
            </div>

            <div className="flex flex-col gap-2">
                <Skeleton variant="rectangular" width={100} height={24} />
                <Skeleton variant="rectangular" width={100} height={24} className="w-full"/>
                <Skeleton variant="rectangular" width={100} height={24} className="w-full"/>
                <Skeleton variant="rectangular" width={100} height={24} className="w-full"/>
                <Skeleton variant="rectangular" width={100} height={24} className="w-full"/>
            </div>
            
        </>
    );
}

export default SubCategoriesLoading;