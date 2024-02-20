import { CardDataStatProp } from "@/interface/typings";
import React from "react";
import {
    Card,
    CardBody,
    CardHeader,
    Chip,
    Typography,
} from "@material-tailwind/react";

export default function CardDataStats({
    title,
    subtitle1,
    subtitle2,
    subtitle3,
    description,
    children,
    index
}: CardDataStatProp) {

    // if else color based on index value
    const subtitle1Color =
        index === 0 ? "" :
            index === 1 ? "" :
                index === 2 ? "rgba(96, 165, 42, 0.2)" :
                    index === 3 ? "rgba(96, 100, 42, 0.2)" : "";

    const subtitle2Color =
        index === 0 ? "" :
            index === 1 ? "rgba(96, 165, 42, 0.2)" :
                index === 2 ? "rgba(239, 68, 68, 0.2)" : "";

    const subtitle3Color =
        index === 0 ? "" :
            index === 1 ? "rgba(239, 68, 68, 0.2)" : "";

    const descriptionColor =
        index === 0 ? "" :
            index === 1 ? "" : "";

    return (
        <>
            <Card className="hover:shadow-orange-500 ease-in-out duration-300 border border-stroke">

                <CardHeader
                    floated={false}
                    shadow={false}
                    color="transparent"
                    className="rounded-none border-b border-blue-gray-400 py-2 sm:content-start sm:text-left text-center justify-center content-center"
                >
                    <div className="flex pb-2 lg:pl-4 md:pl-4 lg:justify-start justify-center">
                        <hr className="my-3" />
                        <div className="rounded-full bg-meta-9 flex h-11 w-11 items-center justify-center flex-shrink-0 ">
                            {children}
                        </div>
                        <Typography className="pl-4 text-title-md font-bold flex items-center justify-center uppercase my-1">
                            {title}
                        </Typography>
                    </div>
                </CardHeader>

                <CardBody>
                    <div className="pl-0 lg:pl-13 items-end block text-center sm:text-left">
                        <Chip
                            variant="ghost"
                            size="lg"
                            value={subtitle1}
                            style={{ backgroundColor: subtitle1Color }}
                            className="my-2 font-[600] text-[15px] whitespace-break-spaces flex-shrink-0"
                        />
                        <Chip
                            variant="ghost"
                            style={{ backgroundColor: subtitle2Color }}
                            size="lg"
                            value={subtitle2}
                            className="my-2 font-[600] text-[15px] whitespace-break-spaces flex-shrink-0"
                        />
                        <Chip
                            variant="ghost"
                            style={{ backgroundColor: subtitle3Color }}
                            size="lg"
                            value={subtitle3}
                            className="my-2 font-[600] text-[15px] whitespace-break-spaces flex-shrink-0"
                        />
                        <Chip
                            variant="ghost"
                            style={{ backgroundColor: descriptionColor }}
                            size="lg"
                            value={description}
                            className="my-2 font-[600] text-[15px] whitespace-break-spaces flex-shrink-0 italic text-blue-gray-500"
                        />
                    </div>
                </CardBody>

            </Card>
        </>
    )
}
