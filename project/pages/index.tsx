import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Navbar from "components/header";
import Link from "next/link";
import LoadingScreen from "components/loadingScreen";
import { useState } from "react";

const Home: NextPage = () => {
    const [loading, setLoading] = useState(false);
    return (
        <>
            {loading ? (
                <LoadingScreen />
            ) : (
                <div className='nier-grate flex h-screen w-full flex-col'>
                    <Head>
                        <title>Nikta Istomin</title>
                        <link rel='icon' href='/favicon.ico' />
                    </Head>
                    <Navbar />
                    <div className='m-auto my-4 w-full max-w-7xl grow'>
                        <ul className='flex flex-col gap-6 text-center'>
                            <li>
                                <Link href='/test1'>
                                    <button className='w-full rounded-full border border-transparent bg-nier-400'>
                                        <span className='text-5xl'>
                                            Test Animation
                                        </span>
                                    </button>
                                </Link>
                            </li>
                            <li>
                                <Link href='/test2'>
                                    <button className=' w-full rounded-full border border-transparent bg-nier-400'>
                                        <span className='text-5xl'>
                                            Test Nier Border
                                        </span>
                                    </button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <footer className='flex h-12 w-full items-center justify-center border-t-2 border-gray-700'>
                        <h1>Powered by my remaining brain cells :D</h1>
                    </footer>
                </div>
            )}
        </>
    );
};

export default Home;
