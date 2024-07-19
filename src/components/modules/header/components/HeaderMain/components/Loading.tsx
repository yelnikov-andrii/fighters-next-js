import { FunctionComponent } from "react";
import { Skeleton } from "@mui/material";

interface LoadingProps {

}

const Loading: FunctionComponent<LoadingProps> = () => {
    return (
        <>
            <Skeleton variant="rectangular" width={100} height={24} />
            <Skeleton variant="rectangular" width={100} height={24} />
            <Skeleton variant="rectangular" width={100} height={24} />
            <Skeleton variant="rectangular" width={100} height={24} />
            <Skeleton variant="rectangular" width={100} height={24} />
            <Skeleton variant="rectangular" width={100} height={24} />
            <Skeleton variant="rectangular" width={100} height={24} />
            <Skeleton variant="rectangular" width={100} height={24} />
            <Skeleton variant="rectangular" width={100} height={24} />
        </>
    );
}

export default Loading;