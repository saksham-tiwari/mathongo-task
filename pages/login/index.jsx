import { useRouter } from "next/router";
import Image from 'next/image';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth';

export default function IndexPage() {
    const router = useRouter();
    const dispatch = useDispatch();
    const loginFunc =()=>{
        Cookies.set("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0M2Y5ZjA0ZGNiYTBiMjc2YjU1Y2U2ZiJ9.-wfLXdhzvAnf7pWd0fkD3PKMQ4IT2axoMhgTo1bPgJA")
        Cookies.set("user","643f9f04dcba0b276b55ce6f")
        dispatch(login());
        router.push("/app")
    }
    return (
        <div className="min-h-screen bg-gray-200">
            <div className="flex items-center justify-center py-8 px-4">
                <div className="relative w-96 rounded shadow-lg p-6 dark:bg-gray-800 bg-white">
                    <p className="text-lg font-bold leading-none text-gray-800 dark:text-gray-100 mb-2">Login to Routine Tracker</p>
                    <Image 
                        src="/assets/login.jpg"
                        alt="My Image"
                        width={500}
                        height={500}
                        layout="responsive"
                    />
                    <button className="flex items-center px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 mx-auto" onClick={loginFunc}>
                        <Image 
                            src="/assets/google.svg"
                            alt="My Image"
                            width={36}
                            height={36}
                        />
                        <span>Login with Google</span>
                    </button>
                    <div className="cursor-pointer absolute top-0 right-0 m-3 dark:text-gray-100 text-gray-400 text-gray-600 transition duration-150 ease-in-out" onClick={()=>router.push("/")}>
                        <svg xmlns="http://www.w3.org/2000/svg" aria-label="Close" className="icon icon-tabler icon-tabler-x" width="20" height="20" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}
