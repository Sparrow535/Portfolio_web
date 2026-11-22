import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import {
  SiPython, SiPandas, SiNumpy, SiLangchain, SiJavascript, SiTypescript, SiReact,
  SiNodedotjs, SiMongodb, SiPostgresql, SiMysql, SiGit, SiGithub, SiDocker,
} from "react-icons/si";
import type { IconType } from "react-icons";

export const social = { github: FaGithub, linkedin: FaLinkedin, x: FaXTwitter };

export const techIcons: Record<string, IconType> = {
  python: SiPython, pandas: SiPandas, numpy: SiNumpy, langchain: SiLangchain,
  javascript: SiJavascript, typescript: SiTypescript, react: SiReact, nodedotjs: SiNodedotjs,
  mongodb: SiMongodb, postgresql: SiPostgresql, mysql: SiMysql, git: SiGit,
  github: SiGithub, docker: SiDocker,
};
