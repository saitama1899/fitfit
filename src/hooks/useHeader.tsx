import { useEffect, useState } from "react";
import logosFolerSize from "@/data/logos";

const useHeader = () => {
	const [currentImage, setCurrentImage] = useState<number>(1);
	const [currentFolder, setCurrentFolder] = useState<number>(1);
	const [isExiting, setIsExiting] = useState<boolean>(false);
	const [clickCount, setClickCount] = useState<number>(0);

	useEffect(() => {
		const handleDocumentClick = () => {
			setClickCount((prevCount) => prevCount + 1);
		};

		document.addEventListener("click", handleDocumentClick);

		return () => {
			document.removeEventListener("click", handleDocumentClick);
		};
	}, []);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		if (clickCount > 0) {
			setClickCount(0);
			getRandomFolder(currentFolder);
		}
	}, [clickCount]);

	useEffect(() => {
		const images = getRandomImages(currentFolder);
		setIsExiting(false);
		setCurrentImage(images[0]);
		setTimeout(() => {
			setCurrentImage(images[1]);
			setIsExiting(true);
		}, 400);
	}, [currentFolder]);

	const getRandomFolder = (currentFolder?: number) => {
		let folderNumber = Math.floor(Math.random() * 12) + 1;
		while (folderNumber === currentFolder) {
			folderNumber = Math.floor(Math.random() * 12) + 1;
		}
		setCurrentFolder(folderNumber);
	};

	const getRandomImages = (currentFolder: number) => {
		const folderSize = logosFolerSize[currentFolder];
		const image1 = Math.floor(Math.random() * folderSize) + 1;
		let image2 = Math.floor(Math.random() * folderSize) + 1;
		while (image2 === image1) {
			image2 = Math.floor(Math.random() * folderSize) + 1;
		}
		return [image1, image2];
	};

	return { currentFolder, currentImage, isExiting, getRandomFolder };
};

export default useHeader;
