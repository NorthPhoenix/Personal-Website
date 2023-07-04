import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { useState } from "react";

// components
import Navbar from "components/Navbar";
import LoadingScreen from "components/LoadingScreen";
import Footer from "components/Footer";
import Hero from "components/Hero";

const Home: NextPage = () => {
    const [loading, setLoading] = useState(false);
    return (
        <>
            {loading ? (
                <LoadingScreen />
            ) : (
                <>
                    <Head>
                        <title>Nikta Istomin</title>
                        <link rel='icon' href='/favicon.ico' />
                    </Head>
                    <div className='flex h-screen flex-col'>
                        <Navbar />
                        <Hero className='grow' />
                    </div>
                    <ul className=' my-4 mx-auto flex max-w-7xl flex-col gap-6 text-center'>
                        <li>
                            <Link href='/wave-animation'>
                                <button className='rounded-full border-2 border-transparent bg-nier-400 px-5 py-1 hover:bg-nier-700 hover:text-nier-300 hover:transition hover:duration-150'>
                                    <span className='text-5xl'>
                                        Test Animation
                                    </span>
                                </button>
                            </Link>
                        </li>
                        <li>
                            <Link href='/nier-border'>
                                <button className='rounded-full border-2 border-transparent bg-nier-400 px-5 py-1 hover:bg-nier-700 hover:text-nier-300 hover:transition hover:duration-150'>
                                    <span className='text-5xl'>
                                        Test Nier Border
                                    </span>
                                </button>
                            </Link>
                        </li>
                        <li>
                            <Link href='/loading-screen'>
                                <button className='rounded-full border-2 border-transparent bg-nier-400 px-5 py-1 hover:bg-nier-700 hover:text-nier-300 hover:transition hover:duration-150'>
                                    <span className='text-5xl'>
                                        Test Loading Screen
                                    </span>
                                </button>
                            </Link>
                        </li>
                    </ul>
                    <Footer />
                </>
            )}
        </>
    );
};

export default Home;
