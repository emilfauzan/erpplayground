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

    // if else color based on index
    const subtitle1Color = index % 2 === 0 ? '' : '';
    const subtitle2Color = index % 2 === 0 ? 'green' : '';
    const subtitle3Color = index % 2 === 0 ? 'red' : '';
    const descriptionColor = index % 2 === 0 ? '' : '';

    return (
        <>
            <Card className=" hover:shadow-orange-500 ease-in-out duration-300 border border-stroke">

                <CardHeader
                    floated={false}
                    shadow={false}
                    color="transparent"
                    className="rounded-none border-b border-blue-gray-400 py-2 text-center"
                >
                    <div className="flex pb-2">
                        <hr className="my-3" />
                        <div className="rounded-full bg-meta-9 flex h-11 w-11 items-center justify-center">
                            {children}
                        </div>
                        <Typography className="sm:pl-4 pl-4 text-title-md font-bold flex items-center justify-center uppercase">
                            {title}
                        </Typography>
                    </div>
                </CardHeader>

                <CardBody>
                    <div className="sm:pl-15 items-end block text-center sm:text-left">
                            <Chip
                                variant="ghost"
                                color={subtitle1Color}
                                size="lg"
                                value={subtitle1}
                                className="my-2 font-[600] text-[15px] whitespace-break-spaces flex-shrink-0"
                            />
                            <Chip
                                variant="ghost"
                                color={subtitle2Color}
                                size="lg"
                                value={subtitle2}
                                className="my-2 font-[600] text-[15px] whitespace-break-spaces flex-shrink-0"
                            />
                            <Chip
                                variant="ghost"
                                color={subtitle3Color}
                                size="lg"
                                value={subtitle3}
                                className="my-2 font-[600] text-[15px] whitespace-break-spaces flex-shrink-0"
                            />
                            <Chip
                                variant="ghost"
                                color={descriptionColor}
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
