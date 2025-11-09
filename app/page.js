"use client"
import Image from "next/image";
import { useState  } from "react";

export default function Home() {

  const [compchoice, setcompchoice] = useState("")
  const [userchoise, setuserchoise] = useState("")
  const [result, setresult] = useState("")

  
  const decider = async ()=>{
    try {
      const compoptions = ["rock", "paper", "scissor"]
    
      const comp = compoptions[Math.floor(Math.random()*compoptions.length)]
    
        setcompchoice(comp)
    
        // console.log(userchoise)
        console.log(compchoice)
      if(userchoise == comp){
setresult("Match is drawn")
  }else if(userchoise == "rock" && comp == "paper"){
setresult("You Lose")
  }else if(userchoise == "rock" && comp == "scissor"){
    setresult("You Won")
  }else if(userchoise == "paper" && comp == "rock"){
setresult("You Won")
  }else if(userchoise == "paper" && comp == "scissor"){
    setresult("You Lose")
  }else if(userchoise == "scissor" && comp == "rock"){
setresult("You Lost")
  }else if(userchoise == "scissor" && comp == "paper"){
setresult("You Won")
  }
  } catch (error) {
    alert(error)
  }

  
  
}
const reset = () => { 
  setresult("")
  setcompchoice("")
  setuserchoise("")
 }




  return (
    <>
    <div className="min-h-[90vh] flex flex-col bg-green-300">
      <div className=" w-full gap-4 flex flex-col justify- items-center text-center">
       <span className="font-bold text-4xl text-center mt-20 md:text-5xl">Rock Paper Scissor Game</span>  
       <span className="w-[70%] md:my-0 m-1 text-center md:w-[50%]">Challenge the computer in a classic game of Rock-Paper-Scissors!</span>
      </div>
<div>
  <div className="flex flex-col justify-center items-center mt-10">
    <span className="font-semibold text-2xl ">Your Choice</span>
    <span className="text-xl text-center">Select one choice and fight with computer.</span>
    <div>
      <ul className="flex gap-10">
        <li>  <button disabled={userchoise != ""} onClick={()=>setuserchoise("rock")}><Image className={` ${userchoise == "" ? "" : "blur-xs cursor-not-allowed"} border-2 p-0.5 border-black  bg-[rgba(255,255,255,0.5)] active:scale-95   `} src="/rock.svg" height={70} width={70} alt="rock" /></button></li>
      <li><button disabled={userchoise != ""} onClick={()=>setuserchoise("paper")}><Image className={` ${userchoise == "" ? "cursor-pointer" : "blur-xs cursor-not-allowed"} border-2 p-0.5 border-black bg-[rgba(255,255,255,0.5)] active:scale-95   `} src="/paper.svg" height={70} width={70} alt="paper" /></button></li>
        <li>    <button disabled={userchoise != ""} onClick={()=>setuserchoise("scissor")}><Image className={` ${userchoise == "" ? "cursor-pointer" : "blur-xs cursor-not-allowed"} border-2 p-0.5 border-black bg-[rgba(255,255,255,0.5)] active:scale-95   `} src="/scissor.svg" height={70} width={70} alt="scissor" /></button></li>
      </ul>
    </div>
    <div>
      <span className="mt-4 text-xl text-center  font-semibold">
        Select your choice and let computer choose its choice.
        <div className="flex justify-center items-center">
          {compchoice == "" ?  (
            <div>
            </div>
          ):(
            <div>
                      <Image className="border-2 p-0.5 border-black active:scale-95 cursor-pointer " src={`/${compchoice}.svg`} height={70} width={70} alt="rock" />
            </div>
          )

          }

        </div>
      </span>
{result == "" ? (
  <div className="flex justify-center items-center mt-4">
    <button onClick={decider} className="bg-green-600 active:scale-95 rounded-full px-2 py-1 font-bold  text-xl  ">
      Play
    </button>
  </div>
) : (
  <div className="flex text-center flex-col justify-center items-center gap-2 mt-3">
    <div>
The result is <span className="font-bold">{result}</span>
<div className="flex flex-col font-semibold">
  <span>Computer Choice : {compchoice}</span>
  <span>Your Choice : {userchoise}</span>

</div>
    </div>
<button className="bg-green-600 active:scale-95 rounded-full px-2 py-1 font-bold  text-xl  " onClick={reset} >
  Play Again
</button>
  </div>
)}
    </div>
  </div>
</div>
    </div>
    </>
  );
}
