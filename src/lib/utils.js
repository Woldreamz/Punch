import Figma from "/src/assets/figma.svg";
import DataScience from "/src/assets/data-science.svg";
import Shopify from "/src/assets/shopify.svg";
import ProfileIcon from "/src/assets/profile.svg";
import Magento from "/src/assets/magento.svg";
import DotNet from "/src/assets/dotnet.svg";
import SkillIcon from "/src/assets/skill-icon.svg";
import Photoshop from "/src/assets/photoshop.svg";
import Cinema from "/src/assets/cinema4d.svg";
import SubCatIcon from "/src/assets/sub-cat.svg";
import Illus from "/src/assets/illus.svg";
import Unreal from "/src/assets/unreal.svg";
import WebFlow from "/src/assets/webflow.svg";
import Logo from "/src/assets/dark-logo.svg";

export const Markets = [
  {
    leftSpace: {
      title: "Find Dev and IT professionals to scale your business.",
      markets: [
        {
          icon: SkillIcon,
          text: "989 Skills",
        },
        {
          icon: SubCatIcon,
          text: "45 Sub-Categories",
        },
        {
          icon: ProfileIcon,
          text: "1011 Profiles",
        },
      ],
    },
    rightSpace: {
      id: 0,
      title: "IT & Development",
      markets: [
        {
          icon: Shopify,
          text: "Shopify Developer",
        },
        {
          icon: Magento,
          text: "Magento Developer",
        },
        {
          icon: DataScience,
          text: "Data Scientist",
        },
        {
          icon: WebFlow,
          text: "Webflow Developer",
        },
        {
          icon: DotNet,
          text: "Dot Net Developer",
        },
        {
          icon: Logo,
        },
      ],
    },
  },

  {
    leftSpace: {
      title: "Explore Creative individuals with a keen eye for detail.",
      markets: [
        {
          icon: SkillIcon,
          text: "989 Skills",
        },
        {
          icon: SubCatIcon,
          text: "45 Sub-Categories",
        },
        {
          icon: ProfileIcon,
          text: "1011 Profiles",
        },
      ],
    },
    rightSpace: {
      id: 1,
      title: "Design & Creative",
      markets: [
        {
          icon: Logo,
        },
        {
          icon: Figma,
          text: "UX Designer",
        },
        {
          icon: Photoshop,
          text: "Graphics Designer",
        },
        {
          icon: Illus,
          text: "Illustration Artist",
        },
        {
          icon: Unreal,
          text: "Unreal Engine",
        },
        {
          icon: Cinema,
          text: "Cinema 4D",
        },
      ],
    },
  },
];
