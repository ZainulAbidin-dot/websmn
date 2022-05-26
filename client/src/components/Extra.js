import React, { useState, useLayoutEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";

const Extra = () => {
  const [popularPeople, setPopularPeople] = useState([]);
  const [post, setPost] = useState([]);

  useLayoutEffect(() => {
    function updateScreen(time) {
      // Make visual updates here.
      alanBtn({
        key: "fa0c4eb284e08b9fd429ea3207df54562e956eca572e1d8b807a3e2338fdd0dc/stage",
        onCommand: (commandData) => {
          if (commandData.command === "getPeople") {
            console.log(commandData.data);
            setPopularPeople(commandData.data);
          }
          if (commandData.command === "getPosts") {
            console.log(commandData.data);
            setPost(commandData.data);
          }
          if (commandData.command === "getReload") {
            window.location.reload();
          }
        },
      });
    }

    requestAnimationFrame(updateScreen);
  }, [setPopularPeople]);

  return (
    <div className="container">
      <h1 className="my-1 large">Search It !</h1>
      {popularPeople.map((person) => (
        <div className="profile-about bg-light my-1 p-2" key={person.name}>
          <div className="profile-top my-1 large text-primary">
            {person.name}
          </div>
          <div className="line" />
          <div className="profile-exp p-2">Designation: {person.category}</div>
          <div className="profile-exp ">Followers: {person.followers}</div>
        </div>
      ))}
      {post.map((postItem) => (
        <div className="profile-about bg-light my-1 p-2" key={postItem.id}>
          <div className="profile-top my-1 large text-primary">
            Post - {postItem.id}
          </div>
          <div className="line" />
          <div className="profile-exp p-2">{postItem.body}</div>
        </div>
      ))}
    </div>
  );
};

export default Extra;
