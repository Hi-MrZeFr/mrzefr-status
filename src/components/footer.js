import React from 'react';
import Link from './link';

const Footer = () => {
  return (
    <div id="footer">
      <div className="container">
        <p>基于 <Link to="https://uptimerobot.com/" text="UptimeRobot" /> 接口制作，检测频率 5 分钟</p>
        <p>&copy; 2021-2022 <Link to="https://www.mrzefr.cn" text="MrZeFr" /></p>
      </div>
    </div>
  );
}

export default Footer;
