// components/Footer.tsx
import Image from "next/image";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#061C3D] text-white px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 text-sm">


        {/* logo section */}
        <Image src={'/logo.svg'} alt="" className="max-h-36 mx-auto" width={220} height={220} />

        {/* About Section */}
        <div className="sm:col-span-1 lg:col-span-2 flex flex-col sm:items-center items-start lg:items-start justify-center bg-[#1A2E4D] w-full sm:max-w-80 p-3 h-44">
          <h2 className="text-lg font-normal ">Address</h2>
          <p className="h-1 w-15 rounded-full bg-success my-3"></p>
          <p className="text-gray-400 mb-4 max-w-xl text-start sm:text-center lg:text-start">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            dictum aliquet accumsan porta lectus ridiculus in mattis.
          </p>
        </div>

        {/* Company */}
        {/* <div>
          <h2 className="text-base font-semibold mb-4">Company</h2>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Features</a></li>
            <li><a href="#" className="hover:text-white">Works</a></li>
            <li><a href="#" className="hover:text-white">Career</a></li>
          </ul>
        </div> */}

        {/* Help */}
        <div>
          <h2 className="text-base font-medium mb-4">Quick link</h2>
          <ul className="space-y-2 text-white">
            <li><a href="#" className="flex items-center gap-3 px-4 py-2 rounded bg-white/10 hover:bg-white/20 transition">Profile</a></li>
            <li><a href="#" className="flex items-center gap-3 px-4 py-2 rounded bg-white/10 hover:bg-white/20 transition">Result</a></li>
            <li><a href="#" className="flex items-center gap-3 px-4 py-2 rounded bg-white/10 hover:bg-white/20 transition">Attendance</a></li>
            <li><a href="#" className="flex items-center gap-3 px-4 py-2 rounded bg-white/10 hover:bg-white/20 transition">Admission</a></li>
            <li><a href="#" className="flex items-center gap-3 px-4 py-2 rounded bg-white/10 hover:bg-white/20 transition">Contact</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h2 className="text-base font-medium mb-4">Quick link</h2>
          <ul className="space-y-3 text-white">
            <li>
              <a
                href="#"
                className="flex items-center gap-3 px-4 py-2 rounded bg-white/10 hover:bg-white/20 transition"
              >
                <FaFacebookF className="text-white text-xl" />
                <span className="border-l border-white/40 pl-3">Facebook</span>
              </a>
            </li>

            <li>
              <a
                href="#"
                className="flex items-center gap-3 px-4 py-2 rounded bg-white/10 hover:bg-white/20 transition"
              >
                <FaInstagram className="text-pink-500 text-xl" />
                <span className="border-l border-white/40 pl-3">Instagram</span>
              </a>
            </li>

            <li>
              <a
                href="#"
                className="flex items-center gap-3 px-4 py-2 rounded bg-white/10 hover:bg-white/20 transition"
              >
                <FaYoutube className="text-red-500 text-xl" />
                <span className="border-l border-white/40 pl-3">Youtube</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
