"use client";
// Importing icons from react-icons
import { StatsCard } from "../shared/about/StatsCard";
import { NoticeCard } from "../shared/about/NoticeCard";
import ClassIcon from "@/../public/about/class.svg";
import teacher from "@/../public/about/teacher.svg";
import staffs from "@/../public/about/student.svg";
import Link from "next/link";
import { useGetAllNoticesQuery } from "@/Redux/features/notices/noticesApi";

const AboutSection = () => {
  const stats = [
    { icon: ClassIcon, count: 12, label: "Classes" },
    { icon: staffs, count: 1022, label: "Students" },
    { icon: teacher, count: 32, label: "Teachers" },
    { icon: staffs, count: 6, label: "Staffs" },
  ];

  const { data, isLoading } = useGetAllNoticesQuery({});
  const notices = data?.data.data || [];

  console.log(data, "notice data");

  if (isLoading) {
    return (
      <div className="gap-4 bg-white p-4 rounded-lg shadow-custom cursor-pointer">
        <div className="h-6 w-3/4 bg-gray-300 rounded mb-2 animate-pulse"></div>
        <div className="h-4 w-1/2 bg-gray-300 rounded mb-2 animate-pulse"></div>
        <div className="h-4 w-1/4 bg-gray-300 rounded mb-2 animate-pulse"></div>
      </div>
    );
  }
  return (
    <div className="bg-gray-50 px-[5%]">
      <div className="max-w-screen-xl mx-auto section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-12">
          {/* Left Column: Main Content */}
          <main className="lg:col-span-2">
            <section>
              <h2 className="text-3xl sm:text-[40px] font-medium font-akshar text-gray-800 mb-6">
                About <span className="text-success">Lorem ipsum</span>
              </h2>
              <div className="font-normal space-y-4 text-font-2 leading-relaxed">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor.
                </p>
              </div>
            </section>

            <section className="mt-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map((stat) => (
                  <StatsCard key={stat.label} {...stat} />
                ))}
              </div>
            </section>
          </main>

          {/* Right Column: Sidebar */}
          <aside className="lg:col-span-1 mt-12 lg:mt-0">
            <div className=" text-white bg-success px-1 pb-1 rounded ">
              <h3 className="text-2xl font-medium font-akshar py-3 bg-success pl-6">
                Notice Board
              </h3>
              <div className="p-5 bg-mint">
                <div className="space-y-4">
                  {notices.map((notice, index) => (
                    <NoticeCard key={index} {...notice} />
                  ))}
                </div>
                <Link href={"/notice"}>
                  <button className="w-full py-2 text-lg font-normal rounded-md mt-6 bg-success hover:bg-success/90 cursor-pointer text-white">
                    More
                  </button>
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
