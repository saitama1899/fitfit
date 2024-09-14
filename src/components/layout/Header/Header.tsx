import Image from "next/image";
import Link from "next/link";
import { HeaderWrapper } from "./Header.style";
import useHeader from "@/hooks/useHeader";

const Header: React.FC = () => {
	const { currentFolder, currentImage, isExiting } = useHeader();

	return (
		<HeaderWrapper>
			<Link href={"/"}>
				<div className={`logo ${isExiting ? "exiting" : "entering"}`}>
					<Image
						src={`/images/logos/${currentFolder}/${currentImage}.png`}
						alt="Logo"
						width={78}
						height={78}
						className="logo-image"
					/>
				</div>
				<div className="floor" />
			</Link>
		</HeaderWrapper>
	);
};

export default Header;
