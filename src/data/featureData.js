// src/data/featureData.js

import rocket from "../assets/rocket.json";
import setting from "../assets/setting.json";
import global from "../assets/global.json";
import link from "../assets/link.json";
import graph from "../assets/graph.json";
import team from "../assets/team.json";

export const features = [
  {
    icon: rocket,
    title: "Fast Deployment",
    description: "Deploy your projects instantly with zero config setup.",
  },
  {
    icon: setting,
    title: "Built-in CI/CD",
    description: "Push your code and watch it go live automatically.",
  },
  {
    icon: global,
    title: "Global CDN",
    description: "Serve your apps worldwide with low latency.",
  },
  {
    icon: link,
    title: "Custom Domains",
    description: "Easily connect custom domains with SSL.",
  },
  {
    icon: graph,
    title: "Analytics",
    description: "Track performance and engagement out of the box.",
  },
  {
    icon: team,
    title: "Team Collaboration",
    description: "Work together with roles and permissions.",
  },
];
