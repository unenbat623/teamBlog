export default function Footer() {
  return (
    <div className="flex flex-col items-start px-16 lg:text-1xl bg-slate-100">
      <div className="flex gap-56 justify-center">
        <div className="flex flex-col p-5 items-start gap-3 ">
          <div className=" text-xl">About</div>
          Lorem ipsum dolor sit amet,
          <br /> consectetur adipiscing elit, sed do
          <br />
          eiusmod tempor incididunt ut labore <br />
          et dolore magna aliqua. Ut enim ad
          <br /> minim veniam
          <span>Email : info@jstemplate.net</span>
          <span>Phone : 880 123 456 789</span>
        </div>
        <div className="flex flex-col p-5 gap-2">
          <a href="/">Home</a>
          <a href="/blog">Blog</a>
          <a href="/contact">Contact</a>
        </div>
        <div className="flex p-5 gap-6">
          <img
            src="Facebook.svg"
            className="w-[20px] h-[20px]"
            href="https://www.facebook.com/profile.php?id=100089448708671"
          />
          <img
            src="Twitter.svg"
            className="w-[20px] h-[20px]"
            href="https://twitter.com/Unenbat050604"
          />
          <img
            src="Negative.svg"
            className="w-[20px] h-[20px]"
            href="https://www.instagram.com/unenbat_623/"
          />
          <img
            src="Linkedin.svg"
            className="w-[20px] h-[20px]"
            href="https://www.linkedin.com/in/zele-m-7a4b7823b/"
          />
        </div>
      </div>
      <div className="flex border-t-2 p-3">
        <img src="/metablog.png" className="h-[60px] w-[60px]" />
        <div className="flex flex-col p-2">
          <div>MetaBlog</div>
          <div>© All Rights Reserved.</div>
        </div>
        <div className="flex px-52">
          <a className="p-5" href="/Terms">
            Terms of Use
          </a>
          <a className="p-5" href="/Privacy">
            Privacy Policy
          </a>
          <a className="p-5" href="/Cookie">
            Cookie Policy
          </a>
        </div>
      </div>
    </div>
  );
}
