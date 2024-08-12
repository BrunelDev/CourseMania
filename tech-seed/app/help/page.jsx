import React from 'react'
import { Nav } from '../../components/Nav'
import Button from '../../components/button'
import Footer from "@/components/footer";
import "./Help.css";
export default function Help() {
  return (
    <div>
      <div className='principal'>
        <header className="mb-24">
          <Nav />
        </header>
        <div className=" ml-40 flex  justify-between w-full">
          <img
            src="spiral.svg"
            alt=""
            className="absolute left-0 w-[350px] h-[350px]"
          />
          <div className="help">
            <p>
              <h1 className='font-bold text-[80px]'>Helpers</h1>
              <span className='text-gray-500'>
                Demandez l'aide d'un professeur pour plus de compréhension
              </span>
            </p>
            <br />
            <Button
              title={"Ask for help"}
              bgColor={"bg-[#00A991] shadow-lg shadow-[#1018280c] py-4"}
              textColor={"text-[white]"}
            />
          </div>
          <div className="Ask">
            <img className='design' src="Design_image.png" alt="Design image" />

          </div>
        </div>

      </div>
      <Footer />
    </div>
  )
}
