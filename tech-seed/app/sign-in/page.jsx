import React from 'react'

export default function Connexion() {
    return (
        <div className='  bg-[#1B1B1B] w-[100%] h-[800px]'>
            
            <div className="container w-[800px] h-[550px] ml-[320px] bg-[white] mt-[px]  ">
                <div className="w-[400px] h-[550px] mt[175px] ml-[-34px] bg-[aliceblue] ">
                    <img src="next.svg" alt="images" />
                </div>
                <div className="w-[400px] h-[550px] mt[175px] ml-[400px]">
                    <img src="logo.png" alt="Logo" className='w-[29px] h-[41px] mb-[3.72px] ml-[-25px] mt-[-530px]' />
                    <span className='w-[800px] h-[550px] mb-[175px] ml-[18px] mt[400px]'> MyCourse.io</span>
                    <p className=''> Join us and get more benefits. We promise to <br />
                        keep your data safely
                    </p>
                    <input type="text" name="" id="" className='-mt-10 rounded-3xl w-72 h-8' /> <br />
                    <input type="text" name="" id="" className='mt-10 rounded-3xl w-72 h-8' /> <br />
                    <input type="submit" name="Login" id="" /> <br />
                    {/* <span>Or you can</span>
                    <input type="submit" name="Continue with Facebook" id="Continue with Facebook" /><br />
                    <input type="submit" name="Continue with Apple" id="Continue with Apple" /> <br />
                    <input type="submit" name="Continue with Google" id="Continue with Google" /> <br />
                    <span>Need an Account?<a href="#" className='text-#3DCBB1'>Sign Up</a></span> */}

                </div>
            </div>
        </div>

    )
}