"use client";

import { GoArrowRight } from "react-icons/go";

function MailAnchor() {
  return (
    <a
      className="tracking-widest bg-(--color-cyan) text-(--primary-dark) px-4 py-2 rounded-full flex items-center gap-1"
      href="mailto:info@biafo.ai"
      onClick={(e) => {
        e.preventDefault();
        window.open(
          "https://mail.google.com/mail/?view=cm&to=info@biafo.ai",
          "_blank"
        );
      }}
    >
      Schedule a Conversation <GoArrowRight />
    </a>
  );
}

export default MailAnchor;
