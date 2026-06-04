import { BsGithub, BsLinkedin, BsDiscord, BsFacebook, BsInstagram, BsPencilSquare } from "react-icons/bs";
type IconElement = Record<string, JSX.Element>;
const iconElements: IconElement = {
    "4f3e41ec-4666-11ee-abfb-be74eed77460": <BsGithub className="dark:text-white xl:text-3xl lg:text-3xl text-2xl cursor-pointer" />,
    "c139e970-4666-11ee-abfb-be74eed77460": <BsLinkedin className="dark:text-white xl:text-3xl lg:text-3xl text-2xl cursor-pointer" />,
    "c13a08a4-4666-11ee-abfb-be74eed77460": <BsDiscord className="dark:text-white xl:text-3xl lg:text-3xl text-2xl cursor-pointer" />,
    "c13a0a0e-4666-11ee-abfb-be74eed77460": <BsFacebook className="dark:text-white xl:text-3xl lg:text-3xl text-2xl cursor-pointer" />,
    "c13a0ad1-4666-11ee-abfb-be74eed77460": <BsInstagram  className="dark:text-white xl:text-3xl lg:text-3xl text-2xl cursor-pointer" />,
    "3b5d9d10-6150-4f2d-8f76-3b87961e6401": <BsPencilSquare className="dark:text-white xl:text-3xl lg:text-3xl text-2xl cursor-pointer" />,
};
export { iconElements };