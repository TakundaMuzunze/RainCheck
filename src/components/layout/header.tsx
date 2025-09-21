import { PinIcon } from "../icons/pin-icon";

export function Header() {
    return (
        <header className="flex flex-row items-center justify-between w-full py-5 px-2">
            <div className="flex flex-row items-center gap-2">
                <PinIcon />
                <h1 className=" text-lg font-medium">London</h1>
            </div>
        </header>
    )
}