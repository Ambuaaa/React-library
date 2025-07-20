import { useState } from 'react'
import './App.css'

function App() {


  return (
    <>
  <div className="text-3xl font-bold rounded-2xl text-blue-600 mb-5 bg-green-300" >
      Tailwind is working!
  </div>
   <div className="w-100 flex flex-col rounded-2xl bg-black min-h-[19rem] ">
        <div>
          <img
            src="https://cdn.vox-cdn.com/thumbor/ZkmdkuJUTLgJh96_FWQ5zweGGxo=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23084330/bored_ape_nft_accidental_.jpg"
            alt="test"
            className="object-cover object-center rounded-t-xl"
          />
        </div>
        <div className="flex flex-col py-5 px-5 pb-10 ">
          <div className="flex justify-between ">
            <h1 className="font-bold ">Bored ape nft accidental</h1>
            <h1>Price</h1>
          </div>
          <div className="flex  justify-between">
            <p>#345</p>
            <p>0.01</p>
          </div>
        </div>
      </div>
        

    </>
  )
}

export default App
