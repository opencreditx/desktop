import React, { FC, PropsWithChildren } from "react";

export interface PageProps {
    sidebar?: boolean;
}

const Page: FC<PropsWithChildren<PageProps>> = (props: PropsWithChildren<PageProps>) => {
    return (
        <div>
            {props.children}
        </div>
    )
}

export default Page;