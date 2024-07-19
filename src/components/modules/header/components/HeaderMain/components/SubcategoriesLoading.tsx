import React from "react";
import { Skeleton } from "@mui/material";

function SubCategoriesLoading() {
    return (
        <>
            <div className="flex flex-col gap-2">
                <Skeleton variant="rectangular" width={100} height={24} />
                <Skeleton variant="rectangular" width={100} height={20} />
                <Skeleton variant="rectangular" width={100} height={20} />
                <Skeleton variant="rectangular" width={100} height={20} />
                <Skeleton variant="rectangular" width={100} height={20} />
            </div>

            <div className="flex flex-col gap-2">
                <Skeleton variant="rectangular" width={100} height={24} />
                <Skeleton variant="rectangular" width={100} height={20} />
                <Skeleton variant="rectangular" width={100} height={20} />
                <Skeleton variant="rectangular" width={100} height={20} />
                <Skeleton variant="rectangular" width={100} height={20} />
            </div>

            <div className="flex flex-col gap-2">
                <Skeleton variant="rectangular" width={100} height={24} />
                <Skeleton variant="rectangular" width={100} height={20} />
                <Skeleton variant="rectangular" width={100} height={20} />
                <Skeleton variant="rectangular" width={100} height={20} />
                <Skeleton variant="rectangular" width={100} height={20} />
            </div>

            <div className="flex flex-col gap-2">
                <Skeleton variant="rectangular" width={100} height={24} />
                <Skeleton variant="rectangular" width={100} height={20} />
                <Skeleton variant="rectangular" width={100} height={20} />
                <Skeleton variant="rectangular" width={100} height={20} />
                <Skeleton variant="rectangular" width={100} height={20} />
            </div>

            <div className="flex flex-col gap-2">
                <Skeleton variant="rectangular" width={100} height={24} />
                <Skeleton variant="rectangular" width={100} height={20} />
                <Skeleton variant="rectangular" width={100} height={20} />
                <Skeleton variant="rectangular" width={100} height={20} />
                <Skeleton variant="rectangular" width={100} height={20} />
            </div>
            
        </>
    );
}

export default SubCategoriesLoading;