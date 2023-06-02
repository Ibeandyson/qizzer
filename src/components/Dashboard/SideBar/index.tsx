import DesktopSideBar from "./DesktopSideBar";
import MobileSideBar from "./MobileSideBar";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function SideBar({ isOpen, onClose }: Props) {
  return (
    <>
      <DesktopSideBar />
      <MobileSideBar open={isOpen} onClose={onClose} />
    </>
  );
}
