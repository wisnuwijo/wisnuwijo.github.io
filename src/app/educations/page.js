import Link from 'next/link'

function EducationDetail(props) {
    return (
        <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-indigo-400 rounded-full -left-1.5 border border-indigo-400"></div>
            <time className="mb-1 text-sm font-semibold leading-none text-gray-400 dark:text-gray-500">{props.title}</time> <br/>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{props.subtitle}</time>
            <p className="mb-4 text-sm font-normal text-gray-500 dark:text-gray-400">{props.desc}</p>
        </li>
    )
}

export const metadata = {
    title: 'Wisnu - Education',
}

export default function Educations() {
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
                            <p className="text-base font-semibold leading-7 text-indigo-600">Educations & Certification</p>
                            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Wisnu Wijokangko</h1>
                            {/* <p className="mt-6 text-xl leading-8 text-gray-700"></p> */}
                        </div>
                    </div>
                </div>
                {/* <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                    <div className="rounded-full overflow-hidden">
                        right side
                    </div>
                </div> */}
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                            {/* content */}
                            <div className="flex gap-x-3">
                                <span className="mb-5">
                                    Formal Education
                                </span>
                            </div>

                            <div className="relative isolate overflow-hidden bg-white px-6 lg:overflow-visible lg:px-0">
                                <div className='container pl-2'>
                                    <ol className="relative border-l border-indigo-200">
                                        <EducationDetail title="Binus University - Computer Science" subtitle="Mar 2019 - Nov 2023" />
                                        <EducationDetail title="SMKN 7 Semarang - Computer and Networking" subtitle="Jun 2014 - May 2018" />
                                    </ol>

                                </div>
                            </div>
                        </div>
                        <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                            {/* content */}
                            <div className="flex gap-x-3">
                                <span className="mb-5">
                                    Certifications
                                </span>
                            </div>

                            <div className="relative isolate overflow-hidden bg-white px-6 lg:overflow-visible lg:px-0">
                                <div className='container pl-2'>
                                    <ol className="relative border-l border-indigo-200">
                                        <EducationDetail title="Foundation of Project Management" subtitle="Coursera" desc="Issued 2021" />
                                        <EducationDetail title="Information System Security Protection Knowledge" subtitle="Inixindo Jogja" desc="Issued 2021" />
                                        <EducationDetail title="Mobile Developer (Flutter)" subtitle="Inixindo Jogja" desc="Issued 2019" />
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
                                <Link href="/experiences" className="mt-5 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-0">
                                    Experiences
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
