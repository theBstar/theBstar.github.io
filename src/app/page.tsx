import { Github, Linkedin, Mail, MapPin, Twitter } from 'lucide-react'
import Image from 'next/image'

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 to-gray-300 p-8 flex items-center">
      <div className="max-w-[1080px] mx-auto bg-white/1 backdrop-blur-md rounded-lg shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row min-h-[600px]">
          {/* Left column */}
          <div className="md:w-1/3 p-8 text-white">
            <div className="mb-6">
              <Image
                src="/bikram_pp.png"
                alt="Profile"
                width={200}
                height={200}
                style={{ width: 200, height: 200 }}
                className="rounded-full mx-auto object-cover filter grayscale"
              />
            </div>
            <h1 className="text-4xl font-bold mb-2">Bikram Sutar</h1>
            <p className="text-gray-400 text-xs mb-4 flex items-center gap-1"><MapPin size={".75rem"} /> Tezpur, Assam</p>

            <h2 className="text-lg text-gray-300 mb-1">Founding Engineer @ Houseware</h2>
            <p className="text-gray-400 mb-6">Prev @ OrangeHealth</p>

            <div className="flex justify-left space-x-8 mb-6">
              <SocialLink href="https://x.com/thebstar13" icon={<Twitter className="w-5 h-5" />} label="Twitter" />
              <SocialLink href="https://github.com/thebstar" icon={<Github className="w-5 h-5" />} label="GitHub" />
              <SocialLink href="https://www.linkedin.com/in/thebstar/" icon={<Linkedin className="w-5 h-5" />} label="LinkedIn" />
              <SocialLink href="mailto:6bikramsutar@gmail.com" icon={<Mail className="w-5 h-5" />} label="Email" />
            </div>

            <div className="flex flex-col gap-2 ">
              <a
                href={"https://medium.com/@theBstaR"}
                className="text-gray-400 hover:text-white transition-colors duration-200 underline"
                aria-label={"Read Technical blogs"}
              >
                Read technical blogs
              </a>
              <a
                href={"https://www.thebstar.com/blogs/"}
                className="text-gray-400 hover:text-white transition-colors duration-200 underline"
                aria-label={"Read blogs"}
              >
                Read life blogs
              </a>
            </div>

          </div>

          {/* Right column */}
          <div className="md:w-2/3 p-8 bg-white/30 flex flex-col justify-center rounded-lg">
            <h2 className="text-4xl font-bold mb-10 text-gray-700">Hi 👋</h2>
            <p className="text-lg text-gray-800">
              I am glad you are here. I am a hustler and a builder who loves to make an impact in people&#39;s lives. I have been building software since 2018. Building software to serve thousands of users for their diagnostic needs during the COVID-19 pandemic was the most satisfying work I have done.
              Now @Houseware, being the first hire, I have seen company building from scratch. I have been instrumental in building the core product and the culture.
            </p>

            <p className="text-lg text-gray-700 mt-2">
              When not building, I play a bit of Cricket. I founded a community Cricket club, 50 plus members now. I also do a bit of running. 1:52 is my latest half marathon PB (April 2023).
            </p>
            <p className="text-lg text-gray-700 mt-2">
              Since July 2024, I have been running community events for kids in my area with a friend. Collectively more than 100 kids have participated.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

type SocialLinkProps = {
  href: string
  icon: JSX.Element
  label: string
}

function SocialLink({ href, icon, label }: SocialLinkProps) {
  return (
    <a
      href={href}
      className="text-gray-300 hover:text-white transition-colors duration-200"
      aria-label={label}
      target='_blank'
    >
      {icon}
    </a>
  )
}