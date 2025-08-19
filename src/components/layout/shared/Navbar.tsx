"use client";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { RxSlash } from "react-icons/rx";

export default function Navbar({ pageName }: any) {
  const [show, setShow] = useState(false);
  const pathname = usePathname();
  const navClass = (path: string) =>
    `text-lg text-normal transform duration-500 hover:underline hover:text-customDark ${path === pathname ? "text-success" : "text-neutral"
    }`;
  const navList = (
    <>
      <Link href="/profiles" className={navClass("/profiles")}>
        Profile
      </Link>
      <Link href="/result" className={navClass("/result")}>
        Result
      </Link>
      <Link href="/attendance" className={navClass("/attendance")}>
        Attendance
      </Link>
      <Link href="/admission" className={navClass("/admission")}>
        Admission
      </Link>
      <Link href="/Contact" className={navClass("/Contact")}>
        Contact
      </Link>
    </>
  );
  useEffect(() => {
    if (show) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [show]);
  return (
    <>

      <div className="px-[5%] relative z-50 bg-color-7">
        <div className="max-w-screen-xl mx-auto relative ">
          <nav className="flex items-center justify-between relative z-50  py-3">
            <div className="relative z-50">
              <Link href={'/'}>
                <Image width={57} height={57} src="/logo.svg" alt="Logo" className="ml-3 lg:mr-8" />
              </Link>
            </div>

            {/* desktop  */}
            <div className="flex justify-center items-center gap-5  rounded-full p-2  relative z-50 mr-6">
              <div className="hidden lg:flex items-center gap-14 text-customGray">
                {navList}
              </div>
              <div
                className="cursor-pointer relative z-50 lg:hidden "
                onClick={() => setShow(!show)}
              >
                {show ? <X size={28} /> : <Menu size={28} />}
              </div>
            </div>

            {/* apply button */}
            <button className="py-3 px-4 bg-success rounded-sm text-lg text-white cursor-pointer hover:bg-success/90 transform hover:scale-105 transition duration-300 ease-in-out hidden lg:block">
              Apply Online
            </button>
          </nav>
          {/* mobile  */}
          <div
            className={`fixed top-0 left-0 w-full flex flex-col gap-4   bg-white/30 backdrop-blur-sm pt-32 pb-5 z-40 px-[5%] transform duration-700 lg:hidden shadow ${show ? "translate-y-0" : "-translate-y-full"
              }`}
          >
            {navList}
            {/* apply button */}
            <button className="py-3 px-4 bg-success rounded-sm text-lg text-white cursor-pointer hover:bg-success/90 transform hover:scale-105 transition duration-300 ease-in-out block lg:hidden">
              Apply Online
            </button>
          </div>
        </div>
      </div>


      <div className="p-6 relative z-50  bg-success" style={{
        backgroundImage: "url('breadcrum.svg')",
        backgroundSize: 500,
      }}>
        <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center " >

          <h1 className=" text-2xl sm:text-[32px] font-medium font-akshar text-white capitalize">{pageName}</h1>

          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink className="text-white text-base sm:text-lg font-semibold " href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator >
                <RxSlash className="text-white text-3xl" />
              </BreadcrumbSeparator>
              <BreadcrumbItem className="text-white text-base sm:text-lg font-light capitalize">
                <BreadcrumbLink href="/components" >{pageName}</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </>

  );
}

