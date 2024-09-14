import Image from "next/image";
import Link from "next/link";
import { HeaderWrapper } from "./Header.style";
import useHeader from "@/hooks/useHeader";
import { useEffect } from "react";

const Header: React.FC = () => {
	const { currentFolder, currentImage, isExiting } = useHeader();
	useEffect	(() => {
		console.log(currentImage);
		
	}, [currentImage]);
	return (
		<HeaderWrapper>
			<Link href={"/"}>
				<div className={`logo ${isExiting ? "exiting" : "entering"}`}>
					<Image
						src={`/images/logos/${currentFolder}/${currentImage}.png`}
						alt="Logo"
						width={80}
						height={80}
						className="logo-image"
					/>
				</div>
			</Link>
		</HeaderWrapper>
	);
};

export default Header;
