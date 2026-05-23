export default function Footer() {
  return (
    <footer className="bg-[#fcfcfc] flex flex-col gap-3 px-12 py-20">
      <p className="text-[24px] font-bold text-black leading-normal">
        Thank You.
      </p>
      <p className="text-[18px] font-normal text-black leading-[28px] max-w-[900px]">
        {`If you'd like to discuss a project or just grab a coffee and chat, feel free to reach out—always happy to connect! 😊`}
      </p>
      <a
        href="mailto:hjw.chelsea@gmail.com"
        className="text-[18px] font-semibold text-black underline leading-[28px] hover:opacity-70 transition-opacity"
      >
        hjw.chelsea@gmail.com
      </a>
      <a
        href="https://linkedin.com/in/chelseahwang"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[18px] font-semibold text-black underline leading-[28px] hover:opacity-70 transition-opacity"
      >
        Linkedin
      </a>
    </footer>
  );
}
