import React from 'react'

// function Card(props){
//   console.log(props.userName);

  // or you can do like
  function Card({userName , quote = "default value if not passed"}){
  console.log(userName) ;
  
  return (
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
            <h1 className="font-bold ">{quote}</h1>
            <h1>{userName}</h1> 
          </div>
          <div className="flex  justify-between">
            <p>#345</p>
            <p>0.01</p>
          </div>
        </div>
      </div>    
  )
}
// using props , we can pass the value from one component to the another component


export default Card 