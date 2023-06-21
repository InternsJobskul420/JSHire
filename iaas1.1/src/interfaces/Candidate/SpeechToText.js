import React from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { createSpeechlySpeechRecognition } from '@speechly/speech-recognition-polyfill';




const SpeechToText = () => {

    const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();
    const startListening = ()=> SpeechRecognition.startListening({ continuous: true, language: "en-IN" });
    const stopListening =()=> SpeechRecognition.stopListening();

    if (!browserSupportsSpeechRecognition) {
        return null
      }


  return (
    <>
    <div>SpeechToText</div>
    <button onClick={startListening}> start</button>
    <button onClick={stopListening}>stop</button>
    <div>hello{transcript}</div>
    </>
    
  )
}

export default SpeechToText