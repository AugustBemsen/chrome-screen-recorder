import { useState } from "react";
import Ready from "../components/fileready/ready";
import Footer from "../components/footer";
import Header from "../components/landing/header";
import Sentpopup from "../ui/sentpopup";

const VideoFile = () => {
  const [sent, setSent] = useState(false);
  return (
    <>
      {sent && <Sentpopup onClose={() => setSent(false)} />}
      <Header />
      <Ready setSent={() => setSent(true)} />
      <Footer />
    </>
  );
};

export default VideoFile;
