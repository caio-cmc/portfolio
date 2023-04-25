import insta from "../Images/insta-logo.png";
import face from "../Images/face-logo.png";
import gh from "../Images/Stacks/github-logo.png";
import linked from "../Images/linkedin-logo.png";

const SocialMediaInfos = [
  {
    id: 1,
    name: "GitHub",
    userLink: "/caio-cmc",
    image: gh,
    url: "https://github.com/caio-cmc"
  },
  {
    id: 2,
    name: "LinkedIn",
    userLink: "/caiocsrmc",
    image: linked,
    url: "https://www.linkedin.com/in/caiocsrmc/"
  },
  {
    id: 3,
    name: "Instagram",
    userLink: "/caio_cmc",
    image: insta,
    url: "https://www.instagram.com/caio_cmc/"
  },
  {
    id: 4,
    name: "Facebook",
    userLink: "/caio.csr",
    image: face,
    url: "https://www.facebook.com/caio.csr/"
  }
];

export default SocialMediaInfos;
