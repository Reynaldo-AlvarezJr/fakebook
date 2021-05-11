import React from 'react';
import '../StoryReel.css';
import Story from '../components/Story'


function StoryReel() {
  return (
    <div className="storyReel">
      {/* {STORY} */}

      <Story image="https://user-images.githubusercontent.com/57510946/91670957-fbbc7b80-eae7-11ea-9949-292da2ec5eda.jpg" profileSrc="https://user-images.githubusercontent.com/57510946/91670737-d169be80-eae5-11ea-8db3-2ef617b425c6.jpg" title="Jorge Valdez" />

      <Story image="https://user-images.githubusercontent.com/57510946/91671051-cebc9880-eae8-11ea-9c7c-ca125ce0b38d.jpg" profileSrc="https://user-images.githubusercontent.com/57510946/91670574-74213d80-eae4-11ea-8b95-29111f1215d7.jpg" title="Anakany Alvarez" />

      <Story image="https://user-images.githubusercontent.com/57510946/92514431-83d10e00-f1d7-11ea-8ccc-3e392ee172df.jpg" profileSrc="https://user-images.githubusercontent.com/57510946/92511227-a6acf380-f1d2-11ea-9f3c-4e951a99b0ac.jpg" title="Rey Alvarez" />

      <Story image="https://user-images.githubusercontent.com/57510946/91671176-d4ff4480-eae9-11ea-8e45-90e2b4055dd5.jpg" profileSrc="https://user-images.githubusercontent.com/57510946/91670521-ff4e0380-eae3-11ea-9276-00e47f2d7393.jpg" title="Karina Garcia" />

      <Story image="https://user-images.githubusercontent.com/57510946/91671210-51922300-eaea-11ea-8595-ac804d6caa87.jpg" profileSrc="https://user-images.githubusercontent.com/57510946/91670546-3e7c5480-eae4-11ea-8e5e-2e82c67c9898.jpg" title="Graciela Vergara" />

      <Story image="https://user-images.githubusercontent.com/57510946/97194116-c5ae1780-1777-11eb-8568-5350037ea7a8.jpg" profileSrc="https://user-images.githubusercontent.com/57510946/97192824-4ff57c00-1776-11eb-855a-0c8726905f76.jpg" title="Erika Aranda" />

    </div>
  )
}

export default StoryReel
