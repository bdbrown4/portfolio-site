import { Icon as IconType } from "@prisma/client";
import { FC } from "react";
import { iconElements } from "~/static-content/constants";

interface IconProps {
    icons: IconType[] | undefined;
}

export const Icon: FC<IconProps> = ({icons}) => {
    return (
        <>
        {!!icons ?
                icons.map((icon, key) => <a key={key} href={icon.link} target="_blank" rel="noreferrer">
                  {iconElements[icon.id]}</a>)
                  : ""}
        </>
    );
}