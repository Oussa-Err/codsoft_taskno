import { motion } from "framer-motion";

const fadeInAnimation = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: () => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3,
    },
  }),
};

const Home = () => {
  return (
    <div className="flex flex-col items-center min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full h-[80dvh] flex items-center py-12 md:py-24 lg:py-32 border-b">
          <div className="container px-4 md:px-6 space-y-6 md:space-y-10">
            <div className="max-w-[800px] w-fit items-start flex gap-4 flex-col mx-auto px-4 sm:px-6 md:px-10 md:grid-col-1 md:gap-16">
              <div className="flex flex-col gap-4">
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Find Your Dream Job
                </h1>
                <p className="mx-auto  md:text-xl text-gray-400">
                  Discover the best job opportunities in your field. Browse
                  hundreds of openings and apply with ease.
                </p>
                <a
                  className="inline-flex h-9 items-center justify-center rounded-md bg-[--] px-4 py-2 text-sm font-medium text-[--primary-text-color] hover:text-[--secondary-text-color] hover:bg-[--foreground-color] shadow transition-colors  focus-visible:outline-none w-fit focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50   "
                  href="/jobs"
                >
                  Browse Jobs
                </a>
              </div>
            </div>
          </div>
        </section>
        <motion.li
          className=""
          variants={fadeInAnimation}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
        >
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="space-y-6 md:space-y-10">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Explore Top Job Categories
                  </h2>
                  <p className="max-w-[900px]  md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-gray-400">
                    Browse through our featured job categories and find the
                    perfect fit for your skills and experience.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
                <a
                  className="group grid h-auto w-full items-center text-white justify-start gap-1 rounded-md p-4 text-sm font-medium transition-colors bg-gray-950 hover:bg-gray-800 "
                  href="#"
                >
                  <div className="text-sm font-medium leading-none group-hover:underline">
                    Software Engineering
                  </div>
                  <div className="line-clamp-2 text-sm leading-snug  text-gray-400">
                    Explore the latest software engineering roles.
                  </div>
                </a>
                <a
                  className="group grid h-auto w-full items-center text-white justify-start gap-1 rounded-md p-4 text-sm font-medium transition-colors bg-gray-950 hover:bg-gray-800 "
                  href="#"
                >
                  <div className="text-sm font-medium leading-none group-hover:underline">
                    Design
                  </div>
                  <div className="line-clamp-2 text-sm leading-snug  text-gray-400">
                    Explore the latest design job opportunities.
                  </div>
                </a>
                <a
                  className="group grid h-auto w-full items-center text-white justify-start gap-1 rounded-md p-4 text-sm font-medium transition-colors bg-gray-950 hover:bg-gray-800 "
                  href="#"
                >
                  <div className="text-sm font-medium leading-none group-hover:underline">
                    Data Science
                  </div>
                  <div className="line-clamp-2 text-sm leading-snug  text-gray-400">
                    Find the latest data science job openings.
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        </motion.li>

        <motion.li
          className=""
          variants={fadeInAnimation}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
        >
        <section className="w-[100dvw] py-12 md:py-24 lg:py-32 bg-[--foreground-color]">
          <div className="container px-4 md:px-6">
            <div className="space-y-6 md:space-y-10">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl text-gray-800 font-bold tracking-tighter sm:text-5xl">
                    Discover Top Companies Hiring
                  </h2>
                  <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-gray-600">
                    Browse through the top companies hiring in morocco explore
                    their open job listings.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
                <a
                  className="group grid h-auto w-full items-center text-white justify-start gap-1 rounded-md p-4 text-sm font-medium transition-colors bg-gray-950 hover:bg-gray-800 "
                  href="#"
                >
                  <img
                    alt="Logo"
                    className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                    height="70"
                    src="/placeholder.svg"
                    width="140"
                  />
                  <div className="text-sm font-medium leading-none group-hover:underline">
                    Acme Inc
                  </div>
                  <div className="line-clamp-2 text-sm leading-snug  text-gray-400">
                    Software Engineering, Product Design
                  </div>
                </a>
                <a
                  className="group grid h-auto w-full items-center text-white justify-start gap-1 rounded-md p-4 text-sm font-medium transition-colors bg-gray-950 hover:bg-gray-800 "
                  href="#"
                >
                  <img
                    alt="Logo"
                    className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                    height="70"
                    src="/placeholder.svg"
                    width="140"
                  />
                  <div className="text-sm font-medium leading-none group-hover:underline">
                    Globex Corp
                  </div>
                  <div className="line-clamp-2 text-sm leading-snug  text-gray-400">
                    Data Science, IT
                  </div>
                </a>
                <a
                  className="group grid h-auto w-full items-center text-white justify-start gap-1 rounded-md p-4 text-sm font-medium transition-colors bg-gray-950 hover:bg-gray-800 "
                  href="#"
                >
                  <img
                    alt="Logo"
                    className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                    height="70"
                    src="/placeholder.svg"
                    width="140"
                  />
                  <div className="text-sm font-medium leading-none group-hover:underline">
                    Stark Industries
                  </div>
                  <div className="line-clamp-2 text-sm leading-snug  text-gray-400">
                    Engineering, R&D, Manufacturing
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        </motion.li>

        <motion.li
          className=""
          variants={fadeInAnimation}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
        >
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="space-y-6 md:space-y-10">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                      Explore the Latest Job Openings
                    </h2>
                    <p className="max-w-[900px]  md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-gray-400">
                      Browse through the latest job postings and apply for the
                      opportunities that match your skills and experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </motion.li>
      </main>
    </div>
  );
};

function Box() {}

export default Home;
