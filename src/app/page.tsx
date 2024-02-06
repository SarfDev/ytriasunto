"use client"
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import axios from 'axios'
import { getUrl } from "@/lib/url";

export default function Home() {

  const [input,setInput] = useState("")
  
  const {mutate, data} = useMutation({
    mutationFn: (input: string) =>{
      return axios.post(getUrl()+'/api/getyt',{input: input})
    }
  })

  const postData = () => {
    mutate(input)
    setInput("")
  }


  return (
    <main>
      <input type="text" onChange={(e) => setInput(e.target.value)} value={input} />
      <button onClick={postData}>Send</button>
      <p>
        {data?.data.status == 200 && (data.data.input)}
        {data?.data.status == 500 && (data?.data.error)}
      </p>    
    </main>
  );
}