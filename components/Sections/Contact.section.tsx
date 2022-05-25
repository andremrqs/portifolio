import {
  BsSpotify,
  MdEmail,
  AiOutlineGithub,
  AiOutlineTwitter,
  FaDiscord,
} from "../Misc/Icons.collection";

import { Icon } from "../Misc/Icon.component";

const Contact = () => {
  return (
    <div className="font-sen px-3" id="contact">
      <p className="text-3xl font-bold text-white">Get in touch</p>

      <div className="my-8 flex flex-row justify-center gap-x-4">
        <Icon icon={<AiOutlineGithub />} url="https://github.com/andremrqs" />

        <Icon
          icon={<AiOutlineTwitter />}
          url="https://twitter.com/_andremrqs"
        />

        <Icon icon={<MdEmail />} url="mailto:andremrqs@outlook.com" />

      </div>
    </div>
  );
};

export default Contact;
