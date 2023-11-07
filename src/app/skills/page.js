import Link from 'next/link'

export const metadata = {
    title: 'Wisnu - Skills',
}

export default function Skills() {
    return (
        <>
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
                                <p className="text-base font-semibold leading-7 text-indigo-600">Skills</p>
                                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Wisnu Wijokangko</h1>
                                {/* <p className="mt-6 text-xl leading-8 text-gray-700"></p> */}
                            </div>
                        </div>
                    </div>
                    <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                        {/* right side */}
                    </div>
                    <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                        <div className="lg:pr-4">
                            <div className="alert bg-secondary border-0">
                                <img className='brightness-200 w-10' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" />
                                <span className="text-white">
                                    <strong>Spring Boot - Advance</strong>
                                    <p>
                                        High availability, event-driven architecture, asynchronous programming, multi-threading, RESTful API
                                    </p>
                                </span>
                            </div>
                            <div className="alert bg-secondary border-0 mt-2">
                                <img className='brightness-200 w-10' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg" />
                                <span className="text-white">
                                    <strong>Go - Intermediate</strong>
                                    <p>
                                        Go routine, Gin, multi-threading, RESTful API
                                    </p>
                                </span>
                            </div>
                            <div className="alert bg-secondary border-0 mt-2">
                                <img className='brightness-200 w-10' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" />
                                <span className="text-white">
                                    <strong>Flutter - Advanced</strong>
                                    <p>
                                        State management (BLoC), offline mode, mobile notification, published app in iOS and Android
                                    </p>
                                </span>
                            </div>
                            <div className="alert bg-secondary border-0 mt-2">
                                <img className='brightness-200 w-10' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg" />
                                <span className="text-white">
                                    <strong>Laravel - Advanced</strong>
                                    <p>
                                        Data management, authentication, and restful API service.
                                    </p>
                                </span>
                            </div>
                            <div className="alert bg-secondary border-0 mt-2">
                                <img className='brightness-200 w-10' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                                <span className="text-white">
                                    <strong>React/NextJS - Advanced</strong>
                                    <p>
                                        State management, realtime chat, reactflow
                                    </p>
                                </span>
                            </div>

                            <p className="text-base leading-7 text-gray-600 mt-5">Others</p>
                            <ul className="menu bg-base-200 w-100 rounded-box">
                                <li>
                                    <a>
                                        <img className='brightness-200 w-10' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain.svg" />
                                        MySQL - Advanced
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <img className='brightness-200 w-10' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
                                        Git - Advanced
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <img className='brightness-200 w-10' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" />
                                        PHP - Advanced
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <img className='brightness-200 w-10' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />
                                        MongoDB - Intermediate
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <img className='brightness-200 w-10' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain-wordmark.svg" />
                                        Docker - Intermediate
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <img className='brightness-200 w-10' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" />
                                        AWS - Beginner
                                    </a>
                                </li>
                            </ul>
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
                                    <Link href="/educations" className="mt-5 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-0">
                                        Educations
                                    </Link>
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
        </>
    )
}