import { Spinner } from "@material-tailwind/react";

const Loader = () => {
    return (
        <div className="flex h-screen items-center justify-center bg-black">
            <Spinner color="red" className="h-16 w-16 text-gray-900/50" />
        </div>
    );
};

export default Loader;

