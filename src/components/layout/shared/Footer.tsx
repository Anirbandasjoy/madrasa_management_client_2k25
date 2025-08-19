// components/Footer.tsx
import { FaTwitter, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-10 text-sm">
        {/* About Section */}
        <div className="sm:col-span-3 lg:col-span-2 flex flex-col sm:items-center items-start lg:items-start">
          <h2 className="text-base font-semibold mb-4">About Rareblocks</h2>
          <p className="text-gray-400 mb-4 max-w-xl text-start sm:text-center lg:text-start">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            dictum aliquet accumsan porta lectus ridiculus in mattis.
          </p>
          <div className="flex space-x-4 text-gray-400 text-xl">
            <a href="#" className="hover:text-white">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-white">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-white">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-white">
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Company */}
        <div>
          <h2 className="text-base font-semibold mb-4">Company</h2>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Features</a></li>
            <li><a href="#" className="hover:text-white">Works</a></li>
            <li><a href="#" className="hover:text-white">Career</a></li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h2 className="text-base font-semibold mb-4">Help</h2>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">Customer Support</a></li>
            <li><a href="#" className="hover:text-white">Delivery Details</a></li>
            <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h2 className="text-base font-semibold mb-4">Resources</h2>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">Free eBooks</a></li>
            <li><a href="#" className="hover:text-white">Development Tutorial</a></li>
            <li><a href="#" className="hover:text-white">How to – Blog</a></li>
            <li><a href="#" className="hover:text-white">Youtube Playlist</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
