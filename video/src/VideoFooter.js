import React from "react";
import "./VideoFooter.scss";

// 左下侧信息栏:作者 描述 背景音乐
function VideoFooter({ author, description, tagList, bgm }) {
  return (
    <div className="videoFooter">
      <div className="videoFooter-text">
        <p className="channel"> @{author} </p>
        <p className="description">{description}<strong>{tagList}</strong></p>
        <div className="ticker">
          <img src="/note.png" className="ticker-note"></img>
          <marquee scrollamount="3">{bgm}</marquee>
        </div>
      </div>
    </div>
  );
}

export default VideoFooter;
