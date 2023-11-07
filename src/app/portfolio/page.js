'use client'

import Link from 'next/link'
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { InformationCircleIcon } from '@heroicons/react/24/outline'

export default function Portfolio() {
    const [open, setOpen] = useState(false)
    const [modalTitle, setModalTitle] = useState("")
    const [modalContent, setModalContent] = useState(null)
    const cancelButtonRef = useRef(null)

    const clockinTitle = "ClockIN"
    const clockinContent = <div>
        <strong>Role: Lead Developer</strong><br /><br />
        <div className="text-left">
            <h1>Introducing "ClockIn": Your Reliable Attendance App</h1>

            <p>In the world of efficient time management, "ClockIn" stands as a beacon of reliability. This mobile app is a robust attendance solution that simplifies tracking and managing time for individuals and businesses alike. In this concise portfolio article, we will explore the essence of "ClockIn" and the technology behind it.</p>

            <h2>1. Meet "ClockIn":</h2>
            <p>"ClockIn" is a mobile application designed to address one of the most fundamental aspects of our daily lives – attendance. Whether for businesses, educational institutions, or individuals, tracking and managing attendance is a key component of effective time management. "ClockIn" is here to make this process simple, efficient, and accessible to all.</p>

            <h2>2. An Attendance Solution for All:</h2>
            <p>At its core, "ClockIn" is an attendance app that caters to a diverse audience. Businesses can employ it to streamline their employee attendance records and ensure punctuality, while educational institutions can use it to track student attendance. Individuals can benefit from its features for managing personal schedules and time tracking.</p>

            <h2>3. The Technology Stack:</h2>
            <p>"ClockIn" utilizes a robust technology stack to provide a responsive and reliable experience. The key technologies used in the development of "ClockIn" include:</p>

            <ul>
                <li><strong>Flutter:</strong> The front-end of "ClockIn" is built using Flutter, a versatile and highly responsive UI framework. Flutter ensures a consistent and user-friendly experience across various devices, making it accessible to a wide range of users.</li>
                <li><strong>Go (Gin Framework):</strong> The backend of the application relies on Go, a programming language known for its efficiency and speed. The Gin framework, built on Go, further enhances the capabilities of "ClockIn." It allows for secure data management and efficient interactions with the database, ensuring a seamless experience for users.</li>
            </ul>

            <p>In conclusion, "ClockIn" is your answer to efficient attendance management. It is the ideal solution for businesses, educational institutions, and individuals seeking to streamline time-tracking and attendance. If you're interested in exploring how "ClockIn" can enhance your time management, please reach out for more information or a personalized demonstration. Your commitment to punctuality and efficient attendance management is our priority, and "ClockIn" is here to help you achieve it.</p>
        </div>
    </div>

    const ruangWargaTitle = "Ruang Warga"
    const ruangWargaContent = <div>
        <strong>Role: Developer</strong><br />
        <strong>Related to PT Bromindo Mekar Mitra</strong><br /><br />

        <div className="text-left">
            <h1>Empowering Civil Administration with "Ruang Warga": Your Gateway to Informed Decision-Making</h1>

            <p>In the realm of civil administration, data is the backbone of informed decision-making. "Ruang Warga" is a mobile app that has revolutionized how the local government of Semarang city manages resident data and collaborates with stakeholders. In this brief portfolio article, we will explore "Ruang Warga" and how it plays a pivotal role in supporting local governance.</p>

            <h2>1. Meet "Ruang Warga":</h2>
            <p>"Ruang Warga" is a mobile application designed to streamline civil administration processes. This app acts as a bridge, connecting local government authorities with the valuable data they need to make well-informed decisions. With "Ruang Warga," managing resident information becomes a simplified and efficient endeavor.</p>

            <h2>2. Empowering Local Governance:</h2>
            <p>At its core, "Ruang Warga" is a tool that empowers local governments to serve their residents better. It offers a comprehensive platform for the entry, management, and analysis of resident data. Local authorities can access accurate and up-to-date information, thereby making it easier to design and implement policies that address the needs of their community effectively.</p>

            <h2>3. Facilitating Decision-Making:</h2>
            <p>One of the standout features of "Ruang Warga" is its ability to facilitate decision-making for local government stakeholders. By providing timely and accurate data, this app ensures that policymakers, city planners, and administrators have the information necessary to make impactful decisions that benefit their constituents.</p>

            <h2>4. Technology Stack:</h2>
            <p>Behind "Ruang Warga" is a robust technology stack that ensures the app operates smoothly and securely. The key technologies used in the development of "Ruang Warga" include:</p>

            <ul>
                <li><strong>Flutter:</strong> "Ruang Warga" leverages Flutter for its mobile app development. Flutter is known for delivering a consistent and user-friendly experience across various devices, making it accessible to a wide range of users.</li>
                <li><strong>Laravel:</strong> The backend of the application is powered by Laravel, a PHP framework renowned for its reliability, security, and rapid development. Laravel ensures secure data management and efficient database interactions, allowing "Ruang Warga" to function with precision.</li>
            </ul>

            <p>In conclusion, "Ruang Warga" is the catalyst for efficient civil administration and data-driven decision-making. It serves as the essential tool for local governments seeking to enhance their services and engage with residents effectively. If you're interested in learning more about how "Ruang Warga" can empower your local government, please don't hesitate to reach out for additional information or a personalized demonstration. Your commitment to effective governance is our priority, and "Ruang Warga" is here to ensure you have the tools you need to succeed.</p>
        </div>
    </div>

    const finalTitle = "Final"
    const finalContent = <div>
        <strong>Role: Developer</strong><br />
        <strong>Related to PT Bromindo Mekar Mitra</strong><br /><br />

        <div className="text-left">
            <h1>Introducing "Final": Your Solution for Streamlined Inquiry Processing</h1>

            <p>In a fast-paced world where every moment counts, efficient data gathering is the key to success. "Final" is the dynamic questionnaire app that revolutionizes how companies collect the information needed to supercharge their marketing efforts. In this brief portfolio article, we'll take a closer look at "Final" and how it empowers businesses to accelerate their response to client requests.</p>

            <h2>1. Meet "Final":</h2>
            <p>"Final" is a web-based software application that is set to become your go-to solution for dynamic questionnaires. It's a tool that brings simplicity and efficiency to the task of gathering the essential information required to supercharge your marketing strategies. With "Final," you can ensure that your team has everything they need to process inquiries rapidly and effectively.</p>

            <h2>2. Empowering Your Business:</h2>
            <p>At its core, "Final" is designed to empower businesses. Whether you're a startup or an established company, this app offers a streamlined approach to gathering inquiries and responding to client requests with speed and precision. By using "Final," you can leave the days of slow, manual data collection behind and usher in a new era of efficient inquiry processing.</p>

            <h2>3. Speeding Up Responses:</h2>
            <p>In the competitive business landscape, a quick response to client inquiries can make all the difference. "Final" makes this possible by enabling you to gather information in a structured and organized manner. With this app, your marketing team can work with precision, ensuring that inquiries are processed faster than ever before.</p>

            <h2>4. Technology Stack:</h2>
            <p>"Final" relies on a powerful and reliable technology stack that ensures it operates smoothly and efficiently. The key technologies behind "Final" include:</p>

            <ul>
                <li><strong>ReactJS:</strong> The front-end of "Final" is built using ReactJS, a popular JavaScript library known for its flexibility and user interface capabilities. This ensures a seamless and responsive user experience.</li>
                <li><strong>Laravel:</strong> The back-end of the application is powered by Laravel, a PHP framework celebrated for its robust features and rapid development. It provides secure data handling and efficient database interactions, allowing "Final" to function with precision.</li>
            </ul>

            <p>In conclusion, "Final" is your answer to efficient data gathering and rapid inquiry processing. It is the ultimate tool for businesses looking to supercharge their marketing efforts by speeding up their responses to client requests. If you're ready to take your business to the next level and want to explore how "Final" can help you do just that, please reach out for more information or a personalized demonstration. Your success is our priority, and "Final" is here to make inquiry processing a swift and efficient process.</p>
        </div>
    </div>

    const firecekTitle = "Firecek"
    const firecekContent = <div>
        <strong>Role: Team Leader</strong><br />
        <strong>Related to PT Bromindo Mekar Mitra</strong><br /><br />

        <div className="text-left">
            In a world where safety is paramount, ensuring that fire extinguishers are in optimal working condition is essential. Firecek is the groundbreaking software application designed to make fire extinguisher management a breeze. In this brief portfolio article, we'll delve into the world of Firecek and how it can streamline the setup, monitoring, and inspection of fire extinguishers.<br /><br />

            1. Introduction to Firecek:<br />

            Firecek is an innovative software application tailored to meet the demands of businesses and organizations concerned with fire safety. It simplifies the management of fire extinguishers, allowing for effortless setup, real-time monitoring, and seamless inspections. Firecek provides the tools necessary to ensure that these crucial safety devices are always ready for action when needed.<br /><br />

            2. Fire Extinguisher Management Made Easy:<br />

            The primary goal of Firecek is to simplify and enhance the management of fire extinguishers. Businesses can use this application to set up fire extinguishers in their facilities, monitor their statuses, and conduct regular inspections with ease. This comprehensive solution empowers organizations to maintain a high level of fire safety compliance effortlessly.<br /><br />

            3. Streamlined Business Use:<br />

            Firecek is specifically designed to meet the needs of businesses. It offers an intuitive platform that streamlines the management of fire extinguishers. Businesses can easily track the location and status of each extinguisher, ensuring they remain in compliance with safety regulations. In the event of an inspection or an emergency, having a clear overview of all fire extinguishers can be a lifesaver.<br /><br />

            4. Technology Stack:<br />

            Firecek leverages a robust and modern technology stack to provide a responsive and reliable experience. The key technologies used in its development include:<br />

            Flutter: Firecek's front-end is built with Flutter, a versatile and highly responsive UI framework. Flutter ensures a consistent and user-friendly experience across various devices, making it accessible to a wide range of users.<br />

            Laravel: The backend of the application is powered by Laravel, a PHP framework known for its simplicity, elegance, and high performance. Laravel enables secure data management, user authentication, and seamless interactions with the database, ensuring the application operates smoothly.<br /><br />

            In conclusion, Firecek is a game-changing application that enhances fire safety by simplifying fire extinguisher management. It's the ideal solution for businesses seeking an efficient way to set up, monitor, and inspect their fire extinguishers. With its use of Flutter for the front-end and Laravel for the backend, Firecek offers a seamless and user-friendly experience. If you're interested in exploring how Firecek can bolster your fire safety measures, please reach out for more information or a personalized demonstration. Your safety is our priority, and Firecek is here to make fire extinguisher management a hassle-free process.<br />
        </div>
    </div>

    const wabaTitle = "WhatsApp Business API"
    const wabaContent = <div>
        <strong>Role: Technical Lead</strong><br />
        <strong>Related to Jatis Mobile</strong><br /><br />
        <div className="text-left">
            In the modern business landscape, effective communication and customer engagement are paramount. With the rise of digital platforms, companies need innovative tools to connect with their customers efficiently. One such tool is the WhatsApp Business API, which empowers businesses to establish direct connections with their customers, typically through Customer Relationship Management (CRM) systems. In this portfolio showcase, we will explore the capabilities of the WhatsApp Business API and the technology stack behind it.<br /><br />
            1. Introduction to WhatsApp Business API: <br/>

            WhatsApp Business API is a powerful software that facilitates seamless communication between businesses and their customers on the world's most popular messaging platform, WhatsApp. This API enables businesses to engage with their clients, provide support, and conduct marketing campaigns directly through the WhatsApp interface. It has become an invaluable tool for businesses looking to create more personal and convenient interactions with their customers.<br /><br/>

            2. CRM Integration:<br/>

            One of the primary use cases for the WhatsApp Business API is its integration with Customer Relationship Management (CRM) systems. Businesses can sync their customer data and interactions, making it easy to track and manage conversations. This integration ensures that customer support teams have the necessary context to provide personalized service and timely responses, enhancing the overall customer experience.<br/><br/>

            3. Scalable Campaigns:<br/>

            WhatsApp Business API empowers businesses to run marketing campaigns on a large scale. This feature is particularly beneficial for businesses looking to reach a broad audience. Whether it's sending out promotions, updates, or notifications, the API allows for streamlined and efficient mass communication, thus saving time and resources.<br/><br/>

            4. Technology Stack:<br/>

            The WhatsApp Business API is built using cutting-edge technologies, ensuring its reliability, performance, and scalability. The key components of its technology stack include:<br/>

            Java and Spring Boot: The core of the software is built on Java and Spring Boot, providing a robust and flexible foundation. These technologies allow for easy integration and efficient development, ensuring that the software remains responsive and adaptable.<br/>

            Event-Driven Architecture: WhatsApp Business API employs an event-driven architecture, which enables real-time interactions and efficient handling of messages and events. This architecture is well-suited for dynamic and responsive customer engagement.<br/>

            Apache Artemis Message Broker: To facilitate the seamless exchange of messages and ensure reliable delivery, the software uses Apache Artemis as its message broker. This message broker is essential for managing the flow of messages and ensuring they reach their intended recipients.<br/><br/>

            5. High Availability:<br/>

            Reliability is a core principle of the WhatsApp Business API. To ensure that businesses can always connect with their customers, the software is designed to support high availability. This means that even in the face of unexpected outages or issues, the API will maintain its service, guaranteeing that businesses can always reach their audience.<br /><br />

            In conclusion, the WhatsApp Business API is a remarkable tool for businesses looking to enhance their customer engagement. Its integration with CRM systems, support for scalable campaigns, and use of robust technologies like Java, Spring Boot, and Apache Artemis make it a powerful solution for modern businesses. Its event-driven architecture and high availability ensure that businesses can maintain uninterrupted connections with their customers. This portfolio showcases the capabilities of the WhatsApp Business API and the expertise behind its development. If you're interested in leveraging the power of WhatsApp for your business, don't hesitate to get in touch for more information or a personalized demonstration of this innovative software.<br /></div>
        </div>

    return (
        <>
            {/* start modal */}
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                    <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                        <div className="sm:flex sm:items-start">
                                            <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
                                                <InformationCircleIcon className="h-6 w-6 text-blue-600" aria-hidden="true" />
                                            </div>
                                            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                                <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                                    {modalTitle}
                                                </Dialog.Title>
                                                <div className="mt-2">
                                                    <p className="text-sm text-gray-500">
                                                        {modalContent}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                        <button
                                            type="button"
                                            className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                            onClick={() => setOpen(false)}
                                            ref={cancelButtonRef}
                                        >
                                            Close
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
            {/* end modal */}

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
                <div className="mb-5 mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                    <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                        <div className="lg:pr-4">
                            <div className="lg:max-w-lg">
                                <p className="text-base font-semibold leading-7 text-indigo-600">Portfolio</p>
                                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Wisnu Wijokangko</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mx-auto container text-white">
                    <div className="grid lg:grid-cols-3 lg:gap-4 lg:px-8">
                        <div className="card w-96 bg-secondary mb-5">
                            <div className="card-body">
                                <h2 className="card-title">WhatsApp Business API</h2>
                                <p>Send and receive WhatsApp messages at scale</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary bg-white text-black" onClick={() => {
                                        setModalTitle(wabaTitle)
                                        setModalContent(wabaContent)
                                        setOpen(true)
                                    }}>See</button>
                                </div>
                            </div>
                        </div>
                        <div className="card w-96 bg-secondary mb-5">
                            <div className="card-body">
                                <h2 className="card-title">Firecek</h2>
                                <p>Fire extinguisher checking application that makes it easy to set up, monitor, and inspect fire extinguishers</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary bg-white text-black" onClick={() => {
                                        setModalTitle(firecekTitle)
                                        setModalContent(firecekContent)
                                        setOpen(true)
                                    }}>See</button>
                                </div>
                            </div>
                        </div>
                        <div className="card w-96 bg-secondary mb-5">
                            <div className="card-body">
                                <h2 className="card-title">Final</h2>
                                <p>Final is a dynamic questionnaire app that enables the company to gather all information needed to help the marketing team process inquiry faster.</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary bg-white text-black" onClick={() => {
                                        setModalTitle(finalTitle)
                                        setModalContent(finalContent)
                                        setOpen(true)
                                    }}>See</button>
                                </div>
                            </div>
                        </div>
                        <div className="card w-96 bg-secondary mb-5">
                            <div className="card-body">
                                <h2 className="card-title">Ruang Warga</h2>
                                <p>Civil registration app</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary bg-white text-black" onClick={() => {
                                        setModalTitle(ruangWargaTitle)
                                        setModalContent(ruangWargaContent)
                                        setOpen(true)
                                    }}>See</button>
                                </div>
                            </div>
                        </div>
                        <div className="card w-96 bg-secondary mb-5">
                            <div className="card-body">
                                <h2 className="card-title">ClockIn</h2>
                                <p>Attendance app</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary bg-white text-black" onClick={() => {
                                        setModalTitle(clockinTitle)
                                        setModalContent(clockinContent)
                                        setOpen(true)
                                    }}>See</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                    <div className="lg:col-span-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                        <div className="lg:pr-4">
                            <div className="lg:max-w-lg">
                                <p className="text-base leading-7 text-gray-600">Navigations</p>
                                <div className="mt-5">
                                    <Link href="/skills" className="mt-5 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-0">
                                        Skill
                                    </Link>
                                    <Link href="/educations" className="mt-5 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-0">
                                        Educations
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
        </>
    )
}