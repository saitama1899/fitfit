import Image from "next/image";
import Link from "next/link";
import { HeaderWrapper } from "./Header.style";

const Header: React.FC = () => {
	return (
		<HeaderWrapper>
			<Link href={"/"}>
				<Image
					src="/images/logo.png"
					alt="Movie Logo"
					className="logo"
					width={50}
					height={50}
				/>
			</Link>
		</HeaderWrapper>
	);
};

export default Header;
