import screenrecord from "../../assets/screen-record.svg";
import record from "../../assets/recordings.svg";
import share from "../../assets/share.svg";

import one from "../../assets/one.svg";
import two from "../../assets/two.svg";
import three from "../../assets/three.svg";

import rect from "../../assets/feat-rect.png";

export const features = [
  {
    id: 1,
    icon: screenrecord,
    text: "Simple Screen Recording",
    desc: "Effortless screen recording for everyone. Record with ease, no tech expertise required.",
  },

  {
    id: 2,
    icon: share,
    text: "Easy-to-Share URL",
    desc: "Share your recordings instantly with a single link. No attachments, no downloads.",
  },

  {
    id: 3,
    icon: record,
    text: "Revisit Recordings",
    desc: "Access and review your past content effortlessly. Your recordings, always at your fingertips.",
  },
];

export const how = [
  {
    id: 1,
    step: one,
    title: "Record Screen",
    desc: 'Click the "Start Recording" button in our extension.  choose which part of your screen to capture and who you want to send it to.',
    img: rect,
  },

  {
    id: 2,
    step: two,
    title: "Share Your Recording",
    desc: "We generate a shareable link for your video. Simply send it to your audience via email or copy the link to send via any platform.",
    img: rect,
  },

  {
    id: 3,
    step: three,
    title: "Learn Effortlessly",
    desc: "Recipients can access your video effortlessly through the provided link, with our user-friendly interface suitable for everyone.",
    img: rect,
  },
];
