import Link from 'next/link'

function ExpDetail(props) {
    return (
        <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-indigo-400 rounded-full -left-1.5 border border-indigo-400"></div>
            <time className="mb-1 text-sm font-semibold leading-none text-gray-400 dark:text-gray-500">{props.title}</time> <br />
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{props.subtitle}</time>
            <p className="mb-4 mt-2 text-sm font-normal text-gray-500 dark:text-gray-400">{props.desc}</p>
        </li>
    )
}

export const metadata = {
    title: 'Wisnu - Experiences',
}

export default function Experiences() {
    return (
        <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <svg
                    className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
                    aria-hidden="true"
                >
                    <defs>
                        <pattern
                            id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                            width={200}
                            height={200}
                            x="50%"
                            y={-1}
                            patternUnits="userSpaceOnUse"
                        >
                            <path d="M100 200V.5M.5 .5H200" fill="none" />
                        </pattern>
                    </defs>
                    <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
                        <path
                            d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                            strokeWidth={0}
                        />
                    </svg>
                    <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
                </svg>
            </div>
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="lg:max-w-lg">
                            <p className="text-base font-semibold leading-7 text-indigo-600">Experiences</p>
                            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Wisnu Wijokangko</h1>
                            {/* <p className="mt-6 text-xl leading-8 text-gray-700"></p> */}
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                            <div className="relative isolate overflow-hidden bg-white px-6 lg:overflow-visible lg:px-0">
                                <div className='container pl-2'>
                                    <ol className="relative border-l border-indigo-200">
                                        <ExpDetail title="Technical Lead - Jatis Mobile" subtitle="Jan 2022 - Present" desc={<>
                                            <ul>
                                                <li>● Lead team of talented engineers</li>
                                                <li>● Convert given high-level software design to low-level software design</li>
                                                <li>● Implement unit tests and functional tests</li>
                                                <li>● Designed APIs, Middleware, and Business logic implementation for large-scale transaction</li>
                                                <li>● Wrote architecture documentation, and flow diagram</li>
                                                <li>● Optimized application and API performance</li>
                                                <li>● Troubleshoot and fixed issues across different services</li>
                                                <li>● Managed tasks and assist team members in day-to-day problems such as debugging issues and others</li>
                                                <li>● Helped define coding standards and development processes</li>
                                            </ul>
                                        </>} />
                                        <ExpDetail title="IT Team Lead - PT Bromindo Mekar Mitra" subtitle="Oct 2019 - Jan 2022" desc={<>
                                            <ul>
                                                <li>● Monitored and taking care of my teamwork progress.</li>
                                                <li>● Transformed business requirements into a detailed technical plan.</li>
                                                <li>● Lead and coordinate the project.</li>
                                                <li>● Grow engineers to their utmost potential.</li>
                                            </ul>
                                        </>} />
                                        <ExpDetail title="Mobile Developer (Flutter) - PT Bromindo Mekar Mitra" subtitle="Feb 2019 - Oct 2019" desc={<>
                                            <ul>
                                                <li>● Using Flutter to optimize app features to be compatible with a wider variety of mobile devices.</li>
                                                <li>● Built a robust application that can work without connection to provide a better experience to the users
                                                    resulting in 45% users increase.</li>
                                                <li>● Improved the app performance by reducing latency from minutes into a matter of seconds.</li>
                                            </ul>
                                        </>} />
                                        <ExpDetail title="Web Developer - PT Bromindo Mekar Mitra" subtitle="May 2018 – Feb 2019" desc={<>
                                            <ul>
                                                <li>● Speed up internal team job time processing from a half-hour to seconds by digitizing all manual documents and automating tasks to reduce human error by creating web applications that handle all the flow and process.</li>
                                            </ul>
                                        </>} />
                                    </ol>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="lg:max-w-lg">
                            <p className="text-base leading-7 text-gray-600">Navigations</p>
                            <div className="mt-5">
                                <Link href="/portfolio" className="mt-5 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-0">
                                    Portfolio
                                </Link>
                                <Link href="/skills" className="mt-5 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-0">
                                    Skill
                                </Link><br /><br />
                                <Link href="/educations" className="mt-5 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-0">
                                    Education
                                </Link>
                                <Link href="/about" className="mt-5 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-0">
                                    About
                                </Link>
                                <Link href="/" className="mt-5 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-0">
                                    Home
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}